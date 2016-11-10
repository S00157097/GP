'use strict';

// Create the 'chat' controller
angular.module('storage').controller('CategoryController', ['StorageService', '$state',
    function (StorageService, $state) {

        var vm = this;
        vm.categories = [];

        readCategories();

        vm.add = function (categoryName) {
            if (categoryName.length > 0) {
                StorageService.addCategory(categoryName, $state.params.storageId).success(function (response) {
                    vm.categories.push(response);
                });
            }
        };

        vm.remove = function (category) {
            StorageService.removeCategory(category, $state.params.storageId)
                .success(function (response) {
                    var index = vm.categories.indexOf(category);
                    vm.categories.splice(index, 1);
                });
        };

        function readCategories() {
            StorageService.getCategories($state.params.storageId)
                .success(function (response) {
                    vm.categories = response;
                });
        }
    }
]);
