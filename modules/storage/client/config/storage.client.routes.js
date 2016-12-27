'use strict';

// Configure the 'chat' module routes
angular.module('storage').config(['$stateProvider',
  function ($stateProvider) {

    // Routes to route around storages
    $stateProvider
      .state('storage', {
        url: '/storages',
        templateUrl: 'modules/storage/client/views/storage.client.view.html',
        controller: 'StorageController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);