'use strict';

angular.module('category').directive('category', [
    function () {
        var object = {};
        object.restrict = 'E';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/category/client/templates/category.client.template.html';
        object.scope = {
            category: '=category',
            remove: '&remove',
            index: '=index'
        };

        object.controller = ['$mdDialog','$scope', 'CategoryService',
            function ($mdDialog, $scope, CategoryService) {
                var newName = $scope.category.name;

                // This will be toggled between edit and save
                // Button name and classes change
                this.editText = 'edit';
                this.editing = false;
                this.openMenu = function ($mdOpenMenu, ev) {
                    $mdOpenMenu(ev);
                };

                // Button's name changes
                this.edit = function () {
                    this.editing = this.editing ? false : true;
                    this.editText = this.editing ? 'save' : 'edit';

                    // Categories name get's sent to the DB
                    if ($scope.category.name !== '') {
                        if (!this.editing && newName !== $scope.category.name) {
                            newName = $scope.category.name;

                            CategoryService.updateCategoryName($scope.category, $scope.index)
                                .success(function (response) {
                                    console.log(response);
                                });
                        }
                    } else {
                        $scope.category.name = newName;
                    }
                };
            }
        ];

        return object;
    }
]);