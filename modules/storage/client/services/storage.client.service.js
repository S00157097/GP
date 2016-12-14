'use strict';

angular.module('storage').service('StorageService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {
        this.getStorages = function () {
            return $http.post('http://localhost:3000/api/read_storages', {
                userId: Authentication.user._id
            });
        };

        this.updateStorageName = function (storage) {
            return $http.post('http://localhost:3000/api/update_storage_name', {
                userId: Authentication.user._id,
                storage: storage
            });
        };

        this.updateCategoryName = function (category, index) {
            return $http.post('http://localhost:3000/api/update_category_name', {
                userId: Authentication.user._id,
                category: category,
                storageId: $state.params.storageId,
                index: index
            });
        };

        this.addStorage = function (storageName) {
            return $http.post('http://localhost:3000/api/insert_storage', {
                userId: Authentication.user._id,
                storageName: storageName
            });
        };

        this.removeStorage = function (storage) {
            return $http.post('http://localhost:3000/api/remove_storage', {
                userId: Authentication.user._id,
                storage: storage
            });
        };

        this.getCategories = function (storageId) {
            return $http.post('http://localhost:3000/api/read_categories', {
                userId: Authentication.user._id,
                storageId: storageId
            });
        };

        this.addCategory = function (categoryName, storageId) {
            return $http.post('http://localhost:3000/api/insert_category', {
                userId: Authentication.user._id,
                categoryName: categoryName,
                storageId: storageId
            });
        };

        this.removeCategory = function (category, storageId) {
            return $http.post('http://localhost:3000/api/remove_category', {
                userId: Authentication.user._id,
                category: category,
                storageId: storageId
            });
        };

        this.addRecord = function (record, categoryId) {
            return $http.post('http://localhost:3000/api/insert_record', {
                userId: Authentication.user._id,
                categoryId: categoryId,
                record: record
            });
        };

        this.getRecords = function (categoryId) {
            return $http.post('http://localhost:3000/api/get_records', {
                userId: Authentication.user._id,
                categoryId: categoryId
            });
        };
    }
]);