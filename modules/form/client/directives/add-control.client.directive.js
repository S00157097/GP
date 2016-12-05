'use strict';

angular.module('form').directive('addControl', [
    function () {
        var object = {};
        object.restrict = 'E';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/form/client/templates/add-control.client.template.html';


        object.controller = ['FormService', '$mdDialog',
            function (FormService, $mdDialog) {
                this.controls = FormService.controls;
                
                this.openMenu = function ($mdOpenMenu, ev) {
                    $mdOpenMenu(ev);
                };

                this.addControl = function (controlValue) {
                    FormService.formControls.push(controlValue);
                };
            }
        ];

        return object;
    }
]);