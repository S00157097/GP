'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['StorageService', '$scope',
    function (StorageService, $scope) {
        var vm = this;

        vm.storages = [];
        $scope.$watch(vm.storages);

        StorageService.getStorages()
            .success((response) => {
                vm.storages = response;
                console.log('Storage List:', JSON.stringify(vm.storages, null, 2));
            });


        // Remove Storage
        vm.remove = function (storage) {
            StorageService.removeStorage(storage)
                .success((response) => {
                    var index = vm.storages.indexOf(storage);
                    vm.storages.splice(index, 1);
                });
        };


        // Add Storage
        vm.add = function (storageName) {
            if (storageName.length > 0) {
                StorageService.addStorage(storageName)
                    .success((response) => {
                        vm.storages.push(response);
                    });
            }
        };


    }
]);
