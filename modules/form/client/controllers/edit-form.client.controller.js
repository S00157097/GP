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
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title(response)
                            .textContent('Successfuly saved your form')
                            .ariaLabel('Save status')
                            .ok('Got it!')
                            .targetEvent(event));
                });
        };
    }
]);
