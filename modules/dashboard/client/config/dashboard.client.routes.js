'use strict';

// Configure the 'chat' module routes
angular.module('dashboard').config(['$stateProvider',
  function ($stateProvider) {

    // Dashboard routes
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'modules/dashboard/client/views/dashboard.client.view.html',
        controller: 'DashboardController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
