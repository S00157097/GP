'use strict';

// Renders Controls WITHOUT Settings
angular.module('form').directive('renderControl', function ($compile) {
    return {
        restrict: 'E',
        controllerAs: '__',
        template: '<div></div>',
        scope: {
            directive: '@directive',    // Pass the control type
            control: '=control'         // Pass the control JSON object
        },
        link: function (scope, element) {
            // I am passing a control to be rendered aka Text, Number, Date etc.
            // This needs to be done because derectives need to be re-rendered when bein added dynamically
            var x = scope.directive;
            var el = $compile('<div control:' + x + ' passed="control"></div>')(scope);
            element.parent().append(el);
        }
    };
});

// Renders Controls WITH Settings
angular.module('form').directive('renderEdit', function ($compile) {
    return {
        restrict: 'E',
        controllerAs: '__',
        templateUrl: 'modules/form/client/templates/render-edit.client.template.html',//'<div></div>',
        scope: {
            directive: '@directive',    // Pass the control type
            control: '=control',        // Pass the control JSON object
            collection: '=collection'   // Pass the formControls for list manipulatin aka | Edit / Remove
        },
        link: function (scope, element) {
            // I am passing a control to be rendered aka Text, Number, Date etc.
            // This needs to be done because derectives need to be re-rendered when bein added dynamically
            var x = scope.directive;
            var el = $compile(
                '<control:edit:' + x + ' passed="control" editing="__.editing">' +
                '<div control:' + x + ' passed="control"></div>' +
                '</control:edit:' + x + '>'
            )(scope);
            element.parent().append(el);
        },
        controller: ['$scope',
            function ($scope) {
                var vm = this;
                vm.editing = false;

                // Drops the settings menu
                vm.edit = function () {
                    vm.editing = vm.editing ? false : true;
                };

                // Removes control from the list
                vm.remove = function () {
                    var index = $scope.collection.indexOf($scope.control);
                    $scope.collection.splice(index, 1);
                };
            }
        ]
    };
});