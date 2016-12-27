'use strict';

angular.module('storage').service('StorageService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Gets Storages for the user
        this.list = function () {
            return $http.post('http://localhost:3000/api/storage/list', {
                userId: Authentication.user._id
            });
        };

        // Updates Storages name
        this.updateName = function (storage) {
            return $http.post('http://localhost:3000/api/storage/update_name', {
                userId: Authentication.user._id,
                storage: storage
            });
        };

        // Add Storage
        this.add = function (storageName) {
            return $http.post('http://localhost:3000/api/storage/add', {
                userId: Authentication.user._id,
                storageName: storageName
            });
        };

        // Remove Storage
        this.delete = function (storage) {
            return $http.post('http://localhost:3000/api/storage/delete', {
                userId: Authentication.user._id,
                storage: storage
            });
        };
    }
]);