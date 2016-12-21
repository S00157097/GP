'use strict';

// Configure the 'chat' module routes
angular.module('storage').config(['$stateProvider',
  function ($stateProvider) {

    // Routes to route around storages
    $stateProvider
      // Storages
      .state('storage', {
        url: '/storages',
        templateUrl: 'modules/storage/client/views/storage.client.view.html',
        controller: 'StorageController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      // Categories
      .state('category', {
        url: '/categories/:storageId',
        templateUrl: 'modules/storage/client/views/category.client.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      // Records
      .state('record', {
        url: '/records/:categoryId',
        templateUrl: 'modules/storage/client/views/record-tabs.client.view.html',
        controller: 'RecordTabsController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      // Records Table View
      .state('record.view', {
        url: '/view',
        templateUrl: 'modules/storage/client/views/record.client.view.html',
        controller: 'RecordController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      // Records Form Edit View
      .state('record.edit-form', {
        url: '/edit-form',
        templateUrl: 'modules/form/client/views/edit-form.client.view.html',
        controller: 'EditFormController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);