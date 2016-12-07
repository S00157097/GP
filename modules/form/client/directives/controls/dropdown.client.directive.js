'use strict';

angular.module('form').directive('controlDropdown', function () {
    return {
        restrict: 'A',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/dropdown.client.template.html',
        replace: true,
        scope: {
            passed: '=passed'
        }
    };
});


angular.module('form').directive('controlEditDropdown', function () {
    return {
        restrict: 'E',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/dropdown-edit.client.template.html',
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
                values: []
            };
        }
    };
});