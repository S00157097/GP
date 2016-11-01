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
      title: 'Documentation',
      state: 'home',
      type: 'item',
      roles: ['*'],
      position: 3
    });
  }
]);
