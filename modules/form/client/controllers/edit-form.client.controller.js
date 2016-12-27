'use strict';

// Create the 'chat' controller
angular.module('form').controller('EditFormController', ['$mdDialog', 'FormService',
    function ($mdDialog, FormService) {
        var vm = this;

        // Will hold controls which will be customizable
        vm.formControls = [];

        // Read user defined controls from DB
        FormService.readFormControls()
            .success((response) => {
                vm.formControls = response.controls || [];
            });

        // When the form is saved
            // 1. Update Form by rewriting it - form is being passed to Server Side
            // 2. Display success message in a modal - Most / All of the code is for this part
        vm.save = () => {
            FormService.updateForm(vm.formControls)
                .success((response) => {
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
