'use strict';

angular.module('category').controller('CategoryController', ['CategoryService', '$state',
    function (CategoryService, $state) {

        let vm = this;
        vm.categories = [];

        // Read Categories For the user
        CategoryService.getCategories($state.params.storageId)
                .success((response) => {
                    vm.categories = response;
                });

        // Add Category
        vm.add = function (categoryName) {
            if (categoryName.length > 0) {
                CategoryService.addCategory(categoryName, $state.params.storageId)
                .success((response) => {
                    vm.categories.push(response);
                });
            }
        };

        // Remove Category
        vm.remove = function (category) {
            CategoryService.removeCategory(category, $state.params.storageId)
                .success((response) => {
                    var index = vm.categories.indexOf(category);
                    vm.categories.splice(index, 1);
                });
        };
    }
]);
