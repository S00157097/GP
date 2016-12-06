'use strict';

angular.module('form').directive('renderControl', function ($compile) {
    return {
        restrict: 'E',
        controllerAs: '__',
        template: '<div></div>',
        scope: {
            directive: '@directive',
            control: '=control'
        },
        link: function (scope, element) {
            var x = scope.directive;
            var el = $compile('<div control:' + x + ' passed="control"></div>')(scope);
            element.parent().append(el);
        }
    };
});

angular.module('form').directive('renderEdit', function ($compile) {
    return {
        restrict: 'E',
        controllerAs: '__',
        template: '<div></div>',
        scope: {
            directive: '@directive',
            control: '=control'
        },
        link: function (scope, element) {
            var x = scope.directive;
            var el = $compile(
                '<control:edit:' + x + ' passed="control">' +
                '<div control:' + x + ' passed="control"></div>' +
                '</control:edit:' + x + '>'
            )(scope);
            element.parent().append(el);
        }
    };
});