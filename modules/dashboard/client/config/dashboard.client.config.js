'use strict';

// Configuring the Chat module
angular.module('dashboard').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Dashboard',
      state: 'dashboard',
      type: 'item',
      isPublic: false,      
      roles: ['user', 'admin'],
      position: 1
    });
  }
]);
