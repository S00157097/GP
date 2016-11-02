'use strict';

// Configure the 'chat' module routes
angular.module('storage').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('storage', {
        url: '/storages',
        templateUrl: 'modules/storage/client/views/storage.client.view.html',
        controller: 'StorageController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('category', {
        url: '/categories',
        templateUrl: 'modules/storage/client/views/category.client.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        },
        params: {
          storageId: null
        }
      });
  }
]);