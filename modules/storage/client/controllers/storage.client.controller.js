'use strict';

// Create the 'chat' controller
angular.module('storage').controller('StorageController', ['$mdDialog', 'StorageService', '$scope',
  function ($mdDialog, StorageService, $scope) {
    var vm = this;

    vm.storages = [];
    $scope.$watch(vm.storages);

    StorageService.getStorages().success(function (response) {
      vm.storages = response;
    });

    vm.openMenu = function ($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };

    vm.addStorage = function (result) {
      StorageService.addStorage({ data: result });
      StorageService.getStorages().success(function (response) {
        $scope.collection = response;
      });
      console.log(result);
    };
  }
]);
