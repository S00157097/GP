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
                vm.controls = [];

                vm.selected = null;
                vm.allowed = [];

                FormService.controls()
                    .success(function (response) {
                        vm.controls = response;
                    });
            }
        ];

        return object;
    }
]);