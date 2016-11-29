'use strict';

// Create the 'chat' controller
angular.module('storage').controller('DialogController', ['$mdDialog',
    function ($mdDialog) {

        var vm = this;

        vm.hide = function () {
            $mdDialog.hide();
        };

        vm.cancel = function () {
            $mdDialog.cancel();
        };

        vm.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
]);
