'use strict';

// Create the 'chat' controller
angular.module('storage').controller('RecordTabsController', ['$state',
    function($state) {

        var vm = this;
        vm.currentNavItem = $state.current.url.substring(1);
    }
]);
