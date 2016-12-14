'use strict';

// Create the 'chat' controller
angular.module('dashboard').controller('DashboardController', [
  function () {
    var vm = this;

    vm.latest = [
      { name: 'Storage', updated: '01/11/2016', count: 4 },
      { name: 'Category', updated: '01/11/2016', count: 14 }
    ];

    vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
    vm.series = ['Series A', 'Series B'];
    vm.data = [
      [65, 59, 80, 81, 56, 42, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    vm.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  }
]);
