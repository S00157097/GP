'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['StorageService', '$scope',
    function(StorageService, $scope) {
        var vm = this;

        vm.storages = [];
        $scope.$watch(vm.storages);

        readStorages();

        // Remove Storage
        vm.remove = function(storage) {
            StorageService.removeStorage(storage)
                .success(function(response) {
                    var index = vm.storages.indexOf(storage);
                    vm.storages.splice(index, 1);
                });
        };

        // Add Storage
        vm.add = function(storageName) {
            if (storageName.length > 0) {
                StorageService.addStorage(storageName)
                    .success(function(response) {
                        vm.storages.push(response);
                    });
            }
        };

        function readStorages() {
            StorageService.getStorages()
                .success(function(response) {
                    vm.storages = response;
                });
        }
    }
]);
