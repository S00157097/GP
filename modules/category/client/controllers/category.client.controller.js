'use strict';

// Create the 'chat' controller
angular.module('category').controller('CategoryController', ['CategoryService', '$state',
    function (CategoryService, $state) {

        var vm = this;
        vm.categories = [];

        // Read Categories For the user - Function Defined at the bottom
        readCategories();

        // Add Category
        vm.add = function (categoryName) {
            if (categoryName.length > 0) {
                CategoryService.addCategory(categoryName, $state.params.storageId).success(function (response) {
                    vm.categories.push(response);
                });
            }
        };

        // Remove Category
        vm.remove = function (category) {
            CategoryService.removeCategory(category, $state.params.storageId)
                .success(function (response) {
                    var index = vm.categories.indexOf(category);
                    vm.categories.splice(index, 1);
                });
        };

        // Read Categories For the user
        function readCategories() {
            CategoryService.getCategories($state.params.storageId)
                .success(function (response) {
                    vm.categories = response;
                });
        }
    }
]);
