'use strict';

// Configuring the Chat module
angular.module('storage').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Storages',
      state: 'storage',
      type: 'item',
      isPublic: false,
      roles: ['user', 'admin'],
      position: 2
    });
  }
]);
