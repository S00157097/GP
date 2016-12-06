'use strict';

angular.module('form').service('FormService', [
    function () {
        this.controls = [
            {
                text: 'Text Control',
                type: 'text'
            },
            {
                text: 'Number Control',
                type: 'number'
            },
            {
                text: 'Datepicker',
                type: 'date'
            },
            {
                text: 'Dropdown List',
                type: 'dropdown'
            }
        ];

        this.formControls = [];
    }
]);