'use strict';

// Defines Template
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

// Second template for the Settings part of the control
angular.module('form').directive('controlEditNumber', function () {
    return {
        restrict: 'E',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/number-edit.client.template.html',
        replace: true,
        transclude: true,
        scope: {
            passed: '=passed',
            editing: '=editing'
        },
        controller: ['$scope',
            function ($scope) {
                // Define default settings
                if ($scope.passed.settings === undefined || $scope.passed.settings === {}) {
                    $scope.passed.settings = {
                        label: 'Default',
                        min: undefined,
                        max: undefined,
                        step: 1,
                        required: false,
                        value: ''
                    };

                    $scope.passed._id = +new Date();
                }
            }
        ]
    };
});