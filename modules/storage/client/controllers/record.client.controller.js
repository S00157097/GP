'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordController', ['FormService', '$mdDialog',
    function (FormService, $mdDialog) {
        var vm = this;

        vm.data = undefined;
        vm.status = '';

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
        };

        // I Should be reading the records
        FormService.readFormControls()
            .success(function (response) {
                vm.headings = response.controls || [];
            });

        /*vm.getData = function () {
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
        };*/
    }
]);
