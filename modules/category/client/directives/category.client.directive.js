'use strict';

angular.module('category').directive('category', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            controllerAs: '__',
            templateUrl: 'modules/category/client/templates/category.client.template.html',
            scope: {
                category: '=category',
                remove: '&remove',
                index: '=index'
            },
            controller: ['$mdDialog', '$scope', 'CategoryService',
                ($mdDialog, $scope, CategoryService) => {
                    this.openMenu = ($mdOpenMenu, ev) => {
                        $mdOpenMenu(ev);
                    };

                    // This will be toggled between edit and save
                    // Button name and classes change
                    let newName = $scope.category.name;
                    let btnText = ['edit', 'save'];
                    this.editText = btnText[0];
                    this.editing = false;

                    // Button's name changes
                    this.edit = () => {
                        this.editing = !this.editing;
                        this.editText = this.editing ? btnText[1] : btnText[0];

                        // Categories name get's sent to the DB
                        if ($scope.category.name !== '') {
                            if (!this.editing && newName !== $scope.category.name) {
                                newName = $scope.category.name;

                                CategoryService.updateName($scope.category, $scope.index)
                                    .success((response) => {
                                        console.log(response);
                                    });
                            }
                        } else {
                            $scope.category.name = newName;
                        }
                    };
                }
            ]
        };
    }
]);