'use strict';

angular.module('category').controller('CategoryController', ['CategoryService', '$state',
    function (CategoryService, $state) {

        let vm = this;
        vm.categories = [];

        // Read Categories For the user
        CategoryService.list($state.params.storageId)
            .success((response) => {
                vm.categories = response;
                console.log('Category List:', JSON.stringify(vm.categories, null, 2));
            });


        // Add Category
        vm.add = function (categoryName) {
            if (categoryName.length > 0) {
                CategoryService.add(categoryName, $state.params.storageId)
                    .success((response) => {
                        vm.categories.push(response);
                        console.log('Category Added:', JSON.stringify(response, null, 2));
                    });
            }
        };


        // Remove Category
        vm.remove = function (category) {
            CategoryService.delete(category, $state.params.storageId)
                .success((response) => {
                    let index = vm.categories.indexOf(category);
                    vm.categories.splice(index, 1);
                    console.log('Category Removed:', JSON.stringify(vm.categories, null, 2));
                });
        };

        
    }
]);
