'use strict';

angular.module('storage').directive('category', [
    function () {
        var object = {};
        object.restrict = 'E';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/storage/client/templates/category.client.template.html'
        object.scope = {
            category: '=category',
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