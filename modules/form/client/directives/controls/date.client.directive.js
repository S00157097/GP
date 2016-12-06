'use strict';

angular.module('form').directive('controlDate', function () {
    return {
        restrict: 'A',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/date.client.template.html',
        replace: true,
        scope: {
            passed: '=passed'
        }
    };
});


angular.module('form').directive('controlEditDate', function () {
    return {
        restrict: 'E',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/date-edit.client.template.html',
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
            $scope.passed.settings = {
                value: '',
                label: 'Change Label',
                required: false
            };
        }
    };
});