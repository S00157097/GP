'use strict';

// Create the 'chat' controller
angular.module('form').controller('EditFormController', ['$mdDialog', 'FormService',
    function ($mdDialog , FormService) {
        var vm = this;

        vm.formControls = FormService.formControls;

        vm.save = function () {
            console.log(FormService.formControls);
        };
    }
]);
