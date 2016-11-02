'use strict';

// Create the 'chat' controller
angular.module('storage').controller('CategoryController', ['$state', 'Authentication', '$stateParams', '$mdDialog', '$http',
    function ($state, Authentication, $stateParams, $mdDialog, $http) {

        $http.post('http://localhost:3000/api/read_storage_categories', {url_data:$stateParams.storageId})
            .success(function (response) {
                vm.categories = response;
            });

        var vm = this;
        vm.$state = $state;
        vm.authentication = Authentication;
        vm.categories = [];

        vm.openMenu = function ($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
    }
]);
