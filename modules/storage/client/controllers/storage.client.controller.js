'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['$mdDialog', '$http',
  function ($mdDialog, $http) {
    var vm = this;
    
    $http.get('http://localhost:3000/random')
      .success(function (response) {
        console.log(response);
      });

    vm.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
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
