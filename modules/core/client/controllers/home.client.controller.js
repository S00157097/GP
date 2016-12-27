'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    var vm = this;
    this.authentication = Authentication;

    // Display 3 icons
    this.services = [
      { heading: 'Statistics', icon: 'multiline_chart', text: 'Some random rambling content' },
      { heading: 'Open Source API', icon: 'cloud_download', text: 'Some random rambling content' },
      { heading: 'Flexible Storage', icon: 'storage', text: 'Some random rambling content' }
    ];
  }]);
