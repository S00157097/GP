'use strict';

angular.module('category').service('CategoryService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Updates Category Name
        this.updateName = (category) => {
            return $http.post('/backend/category/update_name', {
                userId: Authentication.user._id,
                category: category,
                storageId: $state.params.storageId
            });
        };

        this.latest = (count) => {
            return $http.post('/backend/category/latest', {
                userId: Authentication.user._id,
                count: count
            });
        };

        // Get Categories for the user
        this.list = function () {
            return $http.post('/backend/category/list', {
                userId: Authentication.user._id,
                storageId: $state.params.storageId
            });
        };

        // Add Category
        this.add = function (categoryName) {
            return $http.post('/backend/category/add', {
                userId: Authentication.user._id,
                categoryName: categoryName,
                storageId: $state.params.storageId
            });
        };

        // Remove Category
        this.delete = function (category) {
            return $http.post('/backend/category/delete', {
                userId: Authentication.user._id,
                categoryId: category._id,
                storageId: $state.params.storageId
            });
        };
    }
]);