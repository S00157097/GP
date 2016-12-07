'use strict';

// Create the 'chat' controller
angular.module('form').controller('EditFormController', ['$mdDialog', 'FormService',
    function ($mdDialog, FormService) {
        var vm = this;

        vm.formControls = [];

        FormService.readFormControls()
            .success(function (response) {
                vm.formControls = response.controls;
            });

        vm.save = function () {
            FormService.updateForm(vm.formControls)
                .success(function (response) {
                    console.log(response);
                });
        };
    }
]);
