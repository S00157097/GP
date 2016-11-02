'use strict';

// Create the 'chat' controller
angular.module('storage').controller('CategoryController', ['$state', 'Authentication', '$stateParams', '$mdDialog',
    function ($state, Authentication, $stateParams, $mdDialog) {
        function populate(count) {
            var array = [];
            var object = { name: 'Category' };

            for (var i = 0; i < count; i++) {
                object.id = i + 1;
                array.push(object);
            }

            return array;
        }

        var vm = this;
        vm.$state = $state;
        vm.authentication = Authentication;
        vm.categories = populate($stateParams.storageId);

        vm.openMenu = function ($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };
    }
]);
