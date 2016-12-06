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
                this.controls = FormService.controls;
                this.selected = null;
                this.allowed = [];
            }
        ];

        return object;
    }
]);