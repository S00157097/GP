'use strict';

angular.module('category').service('CategoryService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

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