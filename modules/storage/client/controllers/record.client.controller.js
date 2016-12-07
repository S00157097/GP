'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordController',['$http',
    function ($http) {
        var vm = this;

        vm.data = undefined;
        

        vm.getData = function () {
            vm.promise = $http.get('https://jsonplaceholder.typicode.com/posts')
                .success(function (response) {
                    vm.data = response;
                });
        };

        vm.getData();

        vm.query = {
            page: 1,
            limit: 5,
            limitOptions: [5, 10, 15]
        };
    }
]);
