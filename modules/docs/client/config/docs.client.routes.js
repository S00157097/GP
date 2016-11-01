'use strict';

// Configure the 'chat' module routes
angular.module('docs').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('docs', {
        url: '/documentation',
        templateUrl: 'modules/docs/client/views/docs.client.view.html',
        controller: 'DocsController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
