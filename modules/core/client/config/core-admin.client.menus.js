'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {

    //-- Home Menu Item Is Being Added To The SideNav --//
    Menus.addMenuItem('topbar', {
      title: 'Home',
      state: 'home',
      type: 'item',
      roles: ['*'],
      position: 0
    });
  }
]);
