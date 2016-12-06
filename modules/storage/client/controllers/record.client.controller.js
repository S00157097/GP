'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordController', ['$stateParams', 'StorageService', '$mdDialog', '$scope',
    function($stateParams, StorageService, $mdDialog, $scope) {

        var vm = this;
        vm.status = '';

        vm.items = [1, 2, 4, 5, 7, 8, 9];
        vm.models = {
            selected: null
        };
    }
]);
