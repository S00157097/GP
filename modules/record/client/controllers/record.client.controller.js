'use strict';

// Create the 'chat' controller
angular.module('record').controller('RecordController', ['FormService', '$mdDialog', 'RecordService', '$state', '$rootScope',
    function (FormService, $mdDialog, RecordService, $state, $rootScope) {
        var vm = this;

        vm.data = undefined;
        vm.status = '';
        vm.headings = [];

        // Record insertion modal opens up
        vm.insertRecord = function (ev) {
            $mdDialog.show({
                controller: 'InsertRecordController',
                controllerAs: 'vm',
                templateUrl: 'modules/storage/client/templates/insert-record.client.template.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false
            })
                .then(function (answer) {
                    vm.status = 'You said the information was "' + answer + '".';

                }, function () {
                    vm.status = 'You cancelled the dialog.';
                });

            vm.getData();
        };

        // I am reading table headings
        FormService.readFormControls()
            .success(function (response) {
                for (var i = 0; i < response.controls.length; i++) {
                    vm.headings.push(response.controls[i].settings.label);
                }
            });

        // Getting category records
        vm.getData = function () {
            vm.promise = RecordService.getRecords($state.params.categoryId)
                .success(function (response) {
                    vm.data = response;
                });
        };

        // Getting records
        vm.getData();

        // Pagination settings
        vm.query = {
            page: 1,
            limit: 5,
            limitOptions: [5, 10, 15]
        };

        // If event triggered, refresh records
        $rootScope.$on('recordInserted', function () {
            vm.getData();
        });
    }
]);
