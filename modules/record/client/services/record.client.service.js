'use strict';

angular.module('category').service('RecordService', ['$http', 'Authentication','$state',
    function ($http, Authentication, $state) {

        // Add Record
        this.add = (record, categoryId) => {
            return $http.post('http://localhost:3000/api/record/add', {
                userId: Authentication.user._id,
                categoryId: categoryId,
                record: record
            });
        };

        // Get Records
        this.list = (categoryId) => {
            return $http.post('http://localhost:3000/api/record/list', {
                userId: Authentication.user._id,
                categoryId: categoryId
            });
        };
    }
]);