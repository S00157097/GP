'use strict';

// Create the 'chat' controller
angular.module('record').controller('UpdateRecordController', ['$scope','FormService', 'RecordService', '$state', '$rootScope','$mdDialog',
    function($scope, FormService, RecordService, $state, $rootScope, $mdDialog) {

        var vm = this;

        // Reads user defined controls
        vm.formControls = [];

        FormService.readFormControls()
            .success((response) => {
                vm.formControls = response.controls;
                for (var i = 0; i < vm.formControls.length; i++) {
                    vm.formControls[i].settings.value =
                        isDate(this.record.values[vm.formControls[i]._id]);
                }
                console.log('Form Controls', vm.formControls);
            });

        vm.closeDialog = function () {
            $mdDialog.hide();
        };

        vm.isDate = function (val) {
            if ((/^[0-9]{2,4}-/g).test(val)) {
                let date = new Date(val);
                return date.toLocaleDateString("en-US")
            } else {
                return val;
            }
        };

        // Inserts the record
        vm.save = function() {
            var record = {};

            
            // Creating a JSON object from the forms to be inserted into the DB
            for (var i = 0; i < vm.formControls.length; i++)
                 record[vm.formControls[i]._id] = vm.formControls[i].settings.value;
            
            this.record.values = record;
            // Insert the record
            RecordService.update(this.record, $state.params.categoryId)
                .success((response) => {
                    console.log(response);
                    for (var i = 0; i < vm.formControls.length; i++)
                        vm.formControls[i].settings.value = '';
                        
                    $rootScope.$broadcast('recordInserted');
                    $mdDialog.hide();
                });

        };
    }
]);
