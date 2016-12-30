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
                function ($mdDialog, $scope, CategoryService) {
                    let vm = this;
                    let btnNames = ['edit', 'save'];
                    let newName = $scope.category.name;
                    vm.editText = btnNames[0];
                    vm.editing = false;

                    // This will be toggled between edit and save
                    // Button name and classes change
                    vm.openMenu = ($mdOpenMenu, ev) => {
                        $mdOpenMenu(ev);
                    };

                    // Button's name changes
                    vm.edit = () => {
                        changeEditingState();

                        // Categories name get's sent to the DB
                        if ($scope.category.name !== '') {
                            if (!vm.editing && newName !== $scope.category.name) {
                                newName = $scope.category.name;

                                CategoryService.updateName($scope.category)
                                    .success((response) => {
                                        console.log(response);
                                    });
                            }
                        } else {
                            $scope.category.name = newName;
                        }
                    };

                    let changeEditingState = () => {
                        vm.editing = !vm.editing;
                        vm.editText = vm.editing ? btnNames[1] : btnNames[0];
                    }
                }
            ]
        };
    }
]);