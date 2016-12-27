'use strict';

angular.module('storage').service('StorageService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        /**
         * I need to clean this up separating [ Storages , Categories , Records ]
         */

        // Gets Storages for the user
        this.getStorages = function () {
            return $http.post('http://localhost:3000/api/read_storages', {
                userId: Authentication.user._id
            });
        };

        // Updates Storages name
        this.updateStorageName = function (storage) {
            return $http.post('http://localhost:3000/api/update_storage_name', {
                userId: Authentication.user._id,
                storage: storage
            });
        };

        // Add Storage
        this.addStorage = function (storageName) {
            return $http.post('http://localhost:3000/api/insert_storage', {
                userId: Authentication.user._id,
                storageName: storageName
            });
        };

        // Remove Storage
        this.removeStorage = function (storage) {
            return $http.post('http://localhost:3000/api/remove_storage', {
                userId: Authentication.user._id,
                storage: storage
            });
        };

        // Add Record
        this.addRecord = function (record, categoryId) {
            return $http.post('http://localhost:3000/api/insert_record', {
                userId: Authentication.user._id,
                categoryId: categoryId,
                record: record
            });
        };

        // Get Records
        this.getRecords = function (categoryId) {
            return $http.post('http://localhost:3000/api/get_records', {
                userId: Authentication.user._id,
                categoryId: categoryId
            });
        };
    }
]);