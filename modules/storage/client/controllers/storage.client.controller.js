'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', [
  function () {
    var vm = this;

    vm.storages = [
      {
        id: 1,
        title: 'Some Title',
        size: 'Small Size'
      },
      {
        id: 2,
        title: 'Some Title',
        size: 'Small Size'
      },
      {
        id: 3,
        title: 'Some Title',
        size: 'Small Size'
      },
      {
        id: 4,
        title: 'Some Title',
        size: 'Small Size'
      },
    ];

    vm.redirect = function (id) {
      console.log(id);
    };


  }
]);
