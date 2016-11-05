'use strict';

// Create the 'chat' controller
angular.module('storage').controller('CategoryController', ['$state', 'Authentication', '$stateParams', '$mdDialog', 'StorageService',
    function ($state, Authentication, $stateParams, $mdDialog, StorageService) {

        var vm = this;
        vm.$state = $state;
        vm.authentication = Authentication;
        vm.categories = [];

        StorageService.getCategories({ url_data: $stateParams.storageId || null })
            .success(function (response) {
                vm.categories = response;
            });

        vm.openMenu = function ($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };

        vm.addCategory = function (data) {
            if (data.length > 0) {
                StorageService.addCategory({ data: data, url_data: $stateParams.storageId});
                /*StorageService.getStorages().success(function (response) {
                    vm.categories = response;
                });*/
            }
        };
    }
]);
