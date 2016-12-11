'use strict';

// Create the 'chat' controller
angular.module('storage').controller('InsertRecordController', ['FormService', 'StorageService','$state','$rootScope',
    function (FormService, StorageService, $state, $rootScope) {

        var vm = this;

        vm.formControls = [];
        FormService.readFormControls()
            .success(function (response) {
                vm.formControls = response.controls;
            });

        vm.insert = function () {
            var record = {};

            for (var i = 0; i < vm.formControls.length; i++)
                record[vm.formControls[i].settings.label] = vm.formControls[i].settings.value;

            StorageService.addRecord(record, $state.params.categoryId)
                .success(function (response) {
                    console.log(response);
                });

                $rootScope.$broadcast('recordInserted');
        };
    }
]);
