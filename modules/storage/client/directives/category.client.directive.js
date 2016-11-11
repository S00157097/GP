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
            remove: '&remove',
            index: '=index'
        };

        object.controller = ['$mdDialog','$scope', 'StorageService',
            function ($mdDialog, $scope, StorageService) {
                var newName = $scope.category.name;

                this.editing = false;
                this.openMenu = function ($mdOpenMenu, ev) {
                    $mdOpenMenu(ev);
                };

                this.edit = function () {
                    this.editing = this.editing ? false : true;

                    if (!this.editing && newName != $scope.category.name) {
                        newName = $scope.category.name;

                        StorageService.updateCategoryName($scope.category, $scope.index)
                            .success(function (response) {
                                console.log(response);
                            });
                    }
                };
            }
        ];

        return object;
    }
]);