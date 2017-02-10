'use strict';

angular.module('storage').directive('storage', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            controllerAs: '__',
            templateUrl: 'modules/storage/client/templates/storage.client.template.html',
            scope: {
                storage: '=storage',
                remove: '&remove'
            },
            controller: ['$mdDialog', '$scope', 'StorageService',
                function ($mdDialog, $scope, StorageService) {
                    let vm = this;
                    let btnNames = ['rename', 'save'];
                    let newName = $scope.storage.name;
                    vm.editText = '';
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
                        if ($scope.storage.name !== '') {
                            if (!vm.editing && newName !== $scope.storage.name) {
                                newName = $scope.storage.name;

                                StorageService.updateName($scope.storage)
                                    .success((response) => {
                                        console.log('Storage\'s Name Updated');
                                    });
                            }
                        } else {
                            $scope.storage.name = newName;
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