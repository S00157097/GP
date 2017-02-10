'use strict';

angular.module('storage').service('StorageService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Gets Storages for the user
        this.list = function () {
            return $http.post('/backend/storage/list', {
                userId: Authentication.user._id
            });
        };

        // Updates Storages name
        this.updateName = function (storage) {
            return $http.post('/backend/storage/update_name', {
                userId: Authentication.user._id,
                storage: storage
            });
        };

        // Add Storage
        this.add = function (storageName) {
            return $http.post('/backend/storage/add', {
                userId: Authentication.user._id,
                storageName: storageName
            });
        };

        // Remove Storage
        this.delete = function (storage) {
            return $http.post('/backend/storage/delete', {
                userId: Authentication.user._id,
                storage: storage
            });
        };
    }
]);