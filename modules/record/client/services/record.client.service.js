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
    }
]);