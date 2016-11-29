'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordController', ['$stateParams', 'StorageService', '$mdDialog',
    function ($stateParams, StorageService, $mdDialog) {

        var vm = this;
        vm.status = '';

        vm.showAdvanced = function (ev) {
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
                .then(function (answer) {
                    vm.status = 'You said the information was "' + answer + '".';
                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });
        };
    }
]);
