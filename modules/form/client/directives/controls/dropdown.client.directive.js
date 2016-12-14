'use strict';

angular.module('form').directive('controlDropdown', function() {
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


angular.module('form').directive('controlEditDropdown', function() {
    return {
        restrict: 'E',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/controls/dropdown-edit.client.template.html',
        replace: true,
        transclude: true,
        scope: {
            passed: '=passed',
            editing: '=editing'
        },
        controller: ['$scope',
            function($scope) {
                if ($scope.passed.settings === undefined || $scope.passed.settings === {}) {
                    $scope.passed.settings = {
                        label: 'Default',
                        required: false,
                        multipleEntries: false,
                        values: [],
                        value: ''
                    };
                }
                
                $scope.passed._id = new Date().valueOf();
            }
        ]
    };
});