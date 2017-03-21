'use strict';

// Create the 'chat' controller
angular.module('dashboard').controller('DashboardController', ['StorageService', 'CategoryService', 'RecordService',
  function (StorageService, CategoryService, RecordService) {
    var vm = this;
    vm.records = [];

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
                RecordService.list(item._id)
                  .then(function (response) {
                    console.log('RECORDS',response.data);
                    vm.records[index] = response.data;
                  });

                return item;
              });

            vm.categories

          });
      });


      vm.convert = (obj) => {
        return obj[Object.keys(obj)[0]]
      };

  }
]);
