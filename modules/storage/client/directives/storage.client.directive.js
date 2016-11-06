'use strict';

angular.module('storage').directive('storage', [
    function () {
        var object = {};
        object.restrict = 'E';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/storage/client/templates/storage.client.template.html'
        object.scope = {
            storage: '=storage',
            remove: '&remove'
        };

        object.controller = ['$mdDialog',
            function ($mdDialog) {
                this.openMenu = function ($mdOpenMenu, ev) {
                    $mdOpenMenu(ev);
                };
            }
        ];

        return object;
    }
]);