'use strict';

angular.module('category').service('CategoryService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Updates Category Name
        this.updateName = function (category, index) {
            return $http.post('http://localhost:3000/api/category/update_name', {
                userId: Authentication.user._id,
                category: category,
                storageId: $state.params.storageId,
                index: index
            });
        };

        // Get Categories for the user
        this.list = function (storageId) {
            return $http.post('http://localhost:3000/api/category/list', {
                userId: Authentication.user._id,
                storageId: storageId
            });
        };

        // Add Category
        this.add = function (categoryName, storageId) {
            return $http.post('http://localhost:3000/api/category/add', {
                userId: Authentication.user._id,
                categoryName: categoryName,
                storageId: storageId
            });
        };

        // Remove Category
        this.delete = function (category, storageId) {
            return $http.post('http://localhost:3000/api/category/delete', {
                userId: Authentication.user._id,
                category: category,
                storageId: storageId
            });
        };
    }
]);