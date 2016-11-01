'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Home',
      state: 'home',
      type: 'item',
      roles: ['*'],
      position: 0
    });

    Menus.addMenuItem('topbar', {
      title: 'Dashboard',
      state: 'dashboard',
      type: 'item',
      isPublic: false,      
      roles: ['user', 'admin'],
      position: 1
    });


    Menus.addMenuItem('topbar', {
      title: 'Documentation',
      state: 'home',
      type: 'item',
      roles: ['*'],
      position: 4
    });
  }
]);
