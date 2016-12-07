'use strict';

angular.module('form').directive('controlNumber', function () {
  return {
    restrict: 'A',
    controllerAs: '__',
    templateUrl: 'modules/form/client/templates/controls/number.client.template.html',
    replace: true,
    scope: {
      passed: '=passed'
    }
  };
});

angular.module('form').directive('controlEditNumber', function () {
  return {
    restrict: 'E',
    controllerAs: '__',
    templateUrl: 'modules/form/client/templates/controls/number-edit.client.template.html',
    replace: true,
    transclude: true,
    scope: {
      passed: '=passed'
    },
    controller: function ($scope) {
      this.editing = false;
      this.edit = function () {
        this.editing = this.editing ? false : true;
      };

      $scope.passed.id = new Date().valueOf();
      $scope.passed.settings = {
        value: 0,
        label: 'Change Label',
        required: false,
        min: null,
        max: null,
        step: 1
      };
    }
  };
});