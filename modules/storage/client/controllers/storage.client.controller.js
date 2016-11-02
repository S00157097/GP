'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['$mdDialog', '$http',
  function ($mdDialog, $http) {
    var vm = this;
    vm.storages = [];
    $http.get('http://localhost:3000/api/read_storages')
      .success(function (response) {
        vm.storages = response;
      });

    vm.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    vm.redirect = function (id) {
      console.log(id);
    };


  }
]);
