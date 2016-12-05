'use strict';

angular.module('form').service('FormService', [
    function () {
        this.controls = [
            {
                text: 'Text field',
                icon: 'close'
            },
            {
                text: 'Number field',
                icon: 'edit'
            }
        ];
    }
]);