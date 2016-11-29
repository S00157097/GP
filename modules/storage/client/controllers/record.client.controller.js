'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordController', ['$stateParams', 'StorageService', '$mdDialog', '$scope',
    function($stateParams, StorageService, $mdDialog, $scope) {

        var vm = this;
        vm.status = '';

        vm.showAdvanced = function(ev) {
            $mdDialog
                .show({
                    controller: 'DialogController',
                    controllerAs: 'vm',
                    templateUrl: 'modules/storage/client/templates/dialog.client.template.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: false // Only for -xs, -sm breakpoints.
                })
                .then(function(answer) {
                    vm.status = 'You said the information was "' + answer + '".';
                }, function() {
                    vm.status = 'You cancelled the dialog.';
                });
        };

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        vm.deserts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        vm.getDesserts = function () {
            
        };
    }
]);
