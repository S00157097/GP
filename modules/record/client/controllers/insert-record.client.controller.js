'use strict';

// Create the 'chat' controller
angular.module('record').controller('InsertRecordController', ['FormService', 'RecordService', '$state', '$rootScope','$mdDialog',
    function(FormService, RecordService, $state, $rootScope, $mdDialog) {

        var vm = this;

        // Reads user defined controls
        vm.formControls = [];

        FormService.readFormControls()
            .success((response) => {
                vm.formControls = response.controls;
                console.log('Form Controls', vm.formControls);
            });

        vm.closeDialog = function () {
            $mdDialog.hide();
        };  

        // Inserts the record
        vm.insert = function() {
            var record = {};

            // Creating a JSON object from the forms to be inserted into the DB
            for (var i = 0; i < vm.formControls.length; i++)
                 record[vm.formControls[i].settings.label] = vm.formControls[i].settings.value;

            // Insert the record
            RecordService.add(record, $state.params.categoryId)
                .success((response) => {
                    console.log(response);
                    for (var i = 0; i < vm.formControls.length; i++)
                        vm.formControls[i].settings.value = '';
                });

            // Fire an event that the record has been inserted
            // Used for refreshing the table
            $rootScope.$broadcast('recordInserted');
        };
    }
]);
