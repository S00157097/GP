'use strict';

// Defines Template
angular.module('form').directive('controlText', function() {
    return {
        restrict: 'A',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/text.client.template.html',
        replace: true,
        scope: {
            passed: '=passed'
        }
    };
});

// Second template for the Settings part of the control
angular.module('form').directive('controlEditText', function() {
    return {
        restrict: 'E',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/text-edit.client.template.html',
        replace: true,
        transclude: true,
        scope: {
            passed: '=passed',
            editing: '=editing'
        },
        controller: ['$scope',
            function($scope) {
                // Define default settings
                if ($scope.passed.settings === undefined || $scope.passed.settings === {}) {
                    $scope.passed.settings = {
                        label: 'Default',
                        required: false,
                        value: ''
                    };

                    $scope.passed._id = +new Date();
                }
            }
        ]
    };
});
