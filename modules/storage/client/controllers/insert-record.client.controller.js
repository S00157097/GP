'use strict';

// Create the 'chat' controller
angular.module('storage').controller('InsertRecordController', ['FormService',
    function (FormService) {

        var vm = this;

        vm.formControls = [];

        FormService.readFormControls()
            .success(function (response) {
                vm.formControls = response.controls;
            });

        vm.insert = function () {
            console.log(vm.formControls);
        };
    }
]);
