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

        vm.items = [1, 2, 4, 5, 7, 8, 9];
    }
]);
