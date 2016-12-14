'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordController', ['FormService', '$mdDialog', 'StorageService', '$state', '$rootScope',
    function (FormService, $mdDialog, StorageService, $state, $rootScope) {
        var vm = this;

        vm.data = undefined;
        vm.status = '';
        vm.headings = [];

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

        // I Should be reading the records
        FormService.readFormControls()
            .success(function (response) {
                for (var i = 0; i < response.controls.length; i++) {
                    vm.headings.push(response.controls[i].settings.label);
                }
            });

        vm.getData = function () {
            vm.promise = StorageService.getRecords($state.params.categoryId)
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

        $rootScope.$on('recordInserted', function () {
            vm.getData();
        });
    }
]);
