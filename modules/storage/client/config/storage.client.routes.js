'use strict';

// Configure the 'chat' module routes
angular.module('storage').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('storage', {
        url: '/storage',
        templateUrl: 'modules/storage/client/views/storage.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
