'use strict';

angular.module('storage').filter('startFrom', ['PaginationService',
    function (PaginationService) {
      return function (data, start) {
        var sliced = data.slice(start);
        PaginationService.paginationItems = sliced.length;
        return sliced;
      };
    }
]);