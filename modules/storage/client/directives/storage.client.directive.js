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

                this.edit = function () {
                    this.editing = this.editing ? false : true;

                    if (this.editing) {
                        // Update Database
                        // Also change the logic, instead of checking for exiting edit mode, check was the name changed
                    }
                };

                this.editing = false;
            }
        ];

        return object;
    }
]);