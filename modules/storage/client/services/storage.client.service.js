'use strict';

angular.module('storage').service('StorageService', ['$http',
    function ($http) {
        this.getStorages = function () {
            return $http.get('http://localhost:3000/api/read_storages');
        };

        this.addStorage = function (storageName) {
            return $http.post('http://localhost:3000/api/insert_storage', { storageName: storageName });
        };

        this.removeStorage = function (storage) {
            return $http.post('http://localhost:3000/api/remove_storage', { storage: storage });
        };




        this.getCategories = function (storageId) {
            return $http.post('http://localhost:3000/api/read_categories', { storageId: storageId });
        };

        this.addCategory = function (categoryName, storageId) {
            return $http.post('http://localhost:3000/api/insert_category', { categoryName: categoryName, storageId: storageId });
        };

        this.removeCategory = function (category, storageId) {
            return $http.post('http://localhost:3000/api/remove_category', { category: category, storageId: storageId });
        };
    }
]);