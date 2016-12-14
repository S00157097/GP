'use strict';

angular.module('storage').directive('storage', [
    function () {
        var object = {};
        object.restrict = 'E';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/storage/client/templates/storage.client.template.html';
        object.scope = {
            storage: '=storage',
            remove: '&remove'
        };

        object.controller = ['$mdDialog', '$scope', 'StorageService',
            function ($mdDialog, $scope, StorageService) {
                var newName = $scope.storage.name;

                this.openMenu = function ($mdOpenMenu, ev) {
                    $mdOpenMenu(ev);
                };

                this.editText = 'edit';
                this.editing = false;

                this.edit = function () {
                    this.editing = this.editing ? false : true;
                    this.editText = this.editing ? 'save' : 'edit';

                    if ($scope.storage.name !== '') {
                        if (!this.editing && newName !== $scope.storage.name) {
                            newName = $scope.storage.name;

                            StorageService.updateStorageName($scope.storage)
                                .success(function (response) {
                                    console.log(response);
                                });
                        }
                    } else {
                        $scope.storage.name = newName;
                    }
                };
            }
        ];

        return object;
    }
]);