'use strict';

// Create the 'chat' controller
angular.module('storage').controller('InsertRecordController', ['FormService', 'StorageService','$state','$rootScope',
    function (FormService, StorageService, $state, $rootScope) {

        var vm = this;

        // Reads user defined controls
        vm.formControls = [];
        FormService.readFormControls()
            .success(function (response) {
                vm.formControls = response.controls;
            });

        // Inserts the record
        vm.insert = function () {
            var record = {};

            // Creating a JSON object from the forms to be inserted into the DB
            for (var i = 0; i < vm.formControls.length; i++)
                record[vm.formControls[i].settings.label] = vm.formControls[i].settings.value;

            // Insert the record
            StorageService.addRecord(record, $state.params.categoryId)
                .success(function (response) {
                    console.log(response);
                });

                // Fire an event that the record has been inserted
                // Used for refreshing the table
                $rootScope.$broadcast('recordInserted');
        };
    }
]);
