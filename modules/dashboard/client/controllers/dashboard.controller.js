'use strict';

// Create the 'chat' controller
angular.module('dashboard').controller('DashboardController', ['StorageService', 'CategoryService',
  function (StorageService, CategoryService) {
    var vm = this;

    StorageService.latest(2)
      .then(function (response) {
        console.log(response);
        vm.latest = response.data;

        CategoryService.latest(2)
          .then(function (response) {
            console.log(response);
            vm.categories = response.data;
            
            vm.categories
              .map((item, index) => {
                vm.latest.map((item2, index2) => {
                  if (item2._id == item.storageId) {
                    item.storageName = item2.name;
                  }
                });
                return item;
              });
          });
      });


  }
]);
