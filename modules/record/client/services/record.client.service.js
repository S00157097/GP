'use strict';

angular.module('record').service('RecordService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Add Record
        this.add = (record, categoryId) => {
            return $http.post('/backend/record/add', {
                userId: Authentication.user._id,
                categoryId: categoryId,
                record: record
            });
        };

        // Get Records
        this.list = (categoryId) => {
            return $http.post('/backend/record/list', {
                userId: Authentication.user._id,
                categoryId: categoryId
            });
        };

        this.update = (record, categoryId) => {
            return $http.post('/backend/record/update', {
                userId: Authentication.user._id,
                categoryId: categoryId,
                record: record
            });
        };

        this.remove = (record, categoryId) => {
            return $http.post('/backend/record/remove', {
                userId: Authentication.user._id,
                categoryId: categoryId,
                recordId: record._id
            });
        };
    }
]);