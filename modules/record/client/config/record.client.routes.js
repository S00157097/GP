'use strict';

// Configure the 'chat' module routes
angular.module('record').config(['$stateProvider',
  function ($stateProvider) {

    // Routes to route around storages
    $stateProvider
      // Records
      .state('record', {
        url: '/records/:categoryId',
        templateUrl: 'modules/record/client/views/record-tabs.client.view.html',
        controller: 'RecordTabsController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      // Records Table View
      .state('record.view', {
        url: '/view',
        templateUrl: 'modules/record/client/views/record.client.view.html',
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