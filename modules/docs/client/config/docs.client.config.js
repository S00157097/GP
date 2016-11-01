'use strict';

// Configuring the Chat module
angular.module('docs').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Documentation',
      state: 'docs',
      type: 'item',
      position: 3
    });
  }
]);
