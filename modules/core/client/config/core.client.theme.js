'use strict';

// Setting up themes
angular.module('core').config(['$mdThemingProvider',
    function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    }
]);
