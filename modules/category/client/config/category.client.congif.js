'use strict';

// Configure the 'chat' module routes
angular.module('category').config(['$stateProvider',
  function ($stateProvider) {

    // Routes to route around storages
    $stateProvider
      // Categories
      .state('category', {
        url: '/categories/:storageId',
        templateUrl: 'modules/category/client/views/category.client.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);