'use strict';

angular.module('storage').filter('startFrom', [
    function () {
      return function (data, start) {
        return data.slice(start);
      };
    }
]);