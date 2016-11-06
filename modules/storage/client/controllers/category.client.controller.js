'use strict';

// Create the 'chat' controller
angular.module('storage').controller('CategoryController', ['$stateParams', 'StorageService',
    function ($stateParams, StorageService) {

        var vm = this;
        vm.categories = [];

        readCategories();

        vm.add = function (categoryName) {
            if (categoryName.length > 0) {
                StorageService.addCategory({ categoryName: categoryName, storageId: $stateParams.storageId });
                readCategories();
            }
        };

        vm.remove = function (category) {
            StorageService.removeCategory({ category: category, storageId: $stateParams.storageId })
                .success(function (response) {
                    readCategories();
                });
        };

        function readCategories() {
            StorageService.getCategories($stateParams.storageId)
                .success(function (response) {
                    vm.categories = response;
                });
        }
    }
]);
