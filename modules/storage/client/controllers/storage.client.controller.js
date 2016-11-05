'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['$mdDialog', 'StorageService', '$scope',
    function($mdDialog, StorageService, $scope) {
        var vm = this;

        vm.storages = [];
        $scope.$watch(vm.storages);

        StorageService.getStorages()
            .success(function(response) {
                vm.storages = response;
            });

        vm.remove = function(storage) {
            StorageService.removeStorage(storage)
                .success(function(response) {
                    StorageService.getStorages().success(function(res) {
                        vm.storages = res;
                    });
                });
        };

        vm.addStorage = function(data) {
            if (data.length > 0) {
                StorageService.addStorage({ data: data });
                StorageService.getStorages().success(function(response) {
                    vm.storages = response;
                });
            }
        };

        vm.openMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
    }
]);
