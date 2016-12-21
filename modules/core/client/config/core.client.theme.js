'use strict';

// Setting up themes
angular.module('core').config(['$mdThemingProvider',
    function ($mdThemingProvider) {

        //-- Setting The Websites Theme - Got to Angular Material Website For Customization --//
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('red');
    }
]);
