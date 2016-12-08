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
        templateUrl: 'modules/form/client/templates/render-edit.client.template.html',//'<div></div>',
        scope: {
            directive: '@directive',
            control: '=control',
            collection: '=collection'
        },
        link: function (scope, element) {
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
                vm.edit = function () {
                    vm.editing = vm.editing ? false : true;
                };

                vm.remove = function () {
                    var index = $scope.collection.indexOf($scope.control);
                    $scope.collection.splice(index, 1);
                };
            }
        ]
    };
});