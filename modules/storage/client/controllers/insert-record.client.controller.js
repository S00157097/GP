'use strict';

// Create the 'chat' controller
angular.module('storage').controller('InsertRecordController', ['FormService', 'StorageService','$state',
    function (FormService, StorageService, $state) {

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
        };

        vm.addTo = function (control) {
            if (!control.settings.multipleValues) {
                control.settings.multipleValues = [];
            }
            console.log(control.settings.multipleValues);
            control.settings.multipleValues.push('');
        };
    }
]);
