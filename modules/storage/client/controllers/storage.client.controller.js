'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['StorageService', '$scope','filterFilter',
    function (StorageService, $scope, filterFilter) {
        let vm = this;
        vm.storages = [];
        vm.maxSize = 9;
        vm.currentPage = 1;
        vm.filtered = [];

        $scope.$watch(vm.storages);

        $scope.$watch('search', (newVal, oldVal) => {
            vm.filtered = filterFilter(vm.storages, newVal);
            vm.totalItems = vm.filtered.length;
            vm.noOfPages = Math.ceil(vm.totalItems / vm.maxSize);
            vm.currentPage = 1;
        }, true);


        StorageService.list()
            .success((response) => {
                vm.storages = response;
                vm.totalItems = vm.storages.length;
                vm.noOfPages = Math.ceil(vm.totalItems / vm.maxSize);
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
