'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['$mdDialog', 'StorageService', '$scope',
    function ($mdDialog, StorageService, $scope) {
        var vm = this;

        vm.storages = [];
        $scope.$watch(vm.storages);

        readStorages();

        vm.remove = function (storage) {
            StorageService.removeStorage(storage)
                .success(function (response) {
                    console.log(response);
                    readStorages();
                });
        };

        vm.add = function (data) {
            if (data.length > 0) {
                StorageService.addStorage({ data: data });
                readStorages()
            }
        };

        vm.openMenu = function ($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };

        function readStorages() {
            StorageService.getStorages()
                .success(function (response) {
                    vm.storages = response;
                });
        }
    }
]);
