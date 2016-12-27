'use strict';

angular.module('category').service('CategoryService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Updates Category Name
        this.updateCategoryName = function (category, index) {
            return $http.post('http://localhost:3000/api/update_category_name', {
                userId: Authentication.user._id,
                category: category,
                storageId: $state.params.storageId,
                index: index
            });
        };

        // Get Categories for the user
        this.getCategories = function (storageId) {
            return $http.post('http://localhost:3000/api/read_categories', {
                userId: Authentication.user._id,
                storageId: storageId
            });
        };

        // Add Category
        this.addCategory = function (categoryName, storageId) {
            return $http.post('http://localhost:3000/api/insert_category', {
                userId: Authentication.user._id,
                categoryName: categoryName,
                storageId: storageId
            });
        };

        // Remove Category
        this.removeCategory = function (category, storageId) {
            return $http.post('http://localhost:3000/api/remove_category', {
                userId: Authentication.user._id,
                category: category,
                storageId: storageId
            });
        };
    }
]);