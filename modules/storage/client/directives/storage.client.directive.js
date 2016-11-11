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

        object.controller = ['$mdDialog','$scope', 'StorageService',
            function ($mdDialog, $scope, StorageService) {
                var newName = $scope.storage.name;

                this.openMenu = function ($mdOpenMenu, ev) {
                    $mdOpenMenu(ev);
                };

                this.edit = function () {
                    this.editing = this.editing ? false : true;

                    if (!this.editing && newName != $scope.storage.name) {
                        newName = $scope.storage.name;

                        StorageService.updateStorageName($scope.storage)
                            .success(function (response) {
                                console.log(response);
                            });
                    }
                };

                this.editing = false;
            }
        ];

        return object;
    }
]);