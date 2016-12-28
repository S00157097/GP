'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['StorageService', '$scope',
    function (StorageService, $scope) {
        let vm = this;
        vm.storages = [];

        $scope.$watch(vm.storages);

        StorageService.list()
            .success((response) => {
                vm.storages = response;
                console.log('Storage List:', JSON.stringify(vm.storages, null, 2));
            });

        // Remove Storage
        vm.remove = (storage) => {
            StorageService.delete(storage)
                .success((response) => {
                    let index = vm.storages.indexOf(storage);
                    vm.storages.splice(index, 1);
                    console.log('Storage Removed:', JSON.stringify(vm.storages, null, 2));
                });
        };


        // Add Storage
        vm.add = (storageName) => {
            if (storageName.length > 0) {
                StorageService.add(storageName)
                    .success((response) => {
                        vm.storages.push(response);
                        console.log('Storage Added:', JSON.stringify(vm.storages, null, 2));
                    });
            }
        };


    }
]);
