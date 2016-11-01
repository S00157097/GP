'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', '$mdSidenav',
  function ($scope, $state, Authentication, Menus, $mdSidenav) {
    // Expose view variables
    var vm = this;

    vm.$state = $state;
    vm.authentication = Authentication;
    //vm.accountMenu = Menus.getMenu('account');
    vm.menu = Menus.getMenu('topbar');
    vm.toggleLeft = buildToggler('left');


    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      vm.toggleLeft = buildToggler('left');
    });

    function buildToggler(componentId) {
      return function () {
        $mdSidenav(componentId).toggle();
      };
    }
  }
]);
