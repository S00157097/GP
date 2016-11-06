'use strict';

// Create the 'chat' controller
angular.module('storage').controller('CategoryController', ['$stateParams', 'StorageService',
    function ($stateParams, StorageService) {

        var vm = this;
        vm.categories = [];

        readCategories();

        vm.add = function (categoryName) {
            if (categoryName.length > 0) {
                StorageService.addCategory(categoryName, $stateParams.storageId).success(function (response) {
                    vm.categories.push(response);
                });
            }
        };

        vm.remove = function (category) {
            StorageService.removeCategory(category, $stateParams.storageId)
                .success(function (response) {
                    var index = vm.categories.indexOf(category);
                    vm.categories.splice(index, 1);
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
