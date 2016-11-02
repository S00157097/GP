'use strict';

angular.module('storage').service('StorageService', ['$http',
    function ($http) {
        this.getStorages = function () {
            return $http.get('http://localhost:3000/api/read_storages');
        };

        this.addStorage = function (data) {
            return $http.post('http://localhost:3000/api/insert_storage', data);
        };
    }
]);