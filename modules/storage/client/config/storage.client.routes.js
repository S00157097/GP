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
        url: '/categories/:storageId',
        templateUrl: 'modules/storage/client/views/category.client.view.html',
        controller: 'CategoryController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('record', {
        url: '/records/:categoryId',
        templateUrl: 'modules/storage/client/views/record-tabs.client.view.html',
        controller: 'RecordTabsController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('record.view', {
        url: '/view',
        templateUrl: 'modules/storage/client/views/record.client.view.html',
        controller: 'RecordController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
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