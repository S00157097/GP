'use strict';

angular.module('category').controller('CategoryController', ['CategoryService', '$state', 'filterFilter','$scope',
    function (CategoryService, $state, filterFilter, $scope) {

        let vm = this;
        vm.categories = [];
        vm.maxSize = 9;
        vm.currentPage = 1;
        vm.filtered = [];

        $scope.$watch('search', (newVal, oldVal) => {
            vm.filtered = filterFilter(vm.categories, newVal);
            vm.totalItems = vm.filtered.length;
            vm.noOfPages = Math.ceil(vm.totalItems / vm.maxSize);
            vm.currentPage = 1;
        }, true);

        // Read Categories For the user
        CategoryService.list()
            .success((response) => {
                vm.categories = response;
                vm.totalItems = vm.categories.length;
                vm.noOfPages = Math.ceil(vm.totalItems / vm.maxSize);
                console.log('Category List:', JSON.stringify(vm.categories, null, 2));
            });


        // Add Category
        vm.add = (categoryName) => {
            if (categoryName.length > 0) {
                CategoryService.add(categoryName)
                    .success((response) => {
                        vm.categories.push(response);
                        console.log('Category Added:', JSON.stringify(vm.categories, null, 2));
                    });
            }
        };


        // Remove Category
        vm.remove = (category) => {
            CategoryService.delete(category)
                .success((response) => {
                    let index = vm.categories.indexOf(category);
                    vm.categories.splice(index, 1);
                    console.log('Category Removed:', JSON.stringify(vm.categories, null, 2));
                });
        };

        
    }
]);
