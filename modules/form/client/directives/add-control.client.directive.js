'use strict';

angular.module('form').directive('addControl', [
    function () {
        var object = {};
        object.restrict = 'E';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/form/client/templates/add-control.client.template.html';

        object.controller = ['FormService',
            function (FormService) {
                var vm = this;

                // Available draggable controls
                vm.controls = [];

                // How many controls are selected - optional for Drag n Drop
                vm.selected = null;

                // How many controls are allowed - optional for Drag n Drop
                vm.allowed = [];

                // Read available controls from DB
                FormService.controls()
                    .success(function (response) {
                        vm.controls = response;
                    });
            }
        ];

        return object;
    }
]);