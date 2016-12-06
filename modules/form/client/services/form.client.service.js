'use strict';

angular.module('form').service('FormService', [
    function () {
        this.controls = [
            {
                text: 'Text field',
                type: 'text',
                icon: 'close'
            },
            {
                text: 'Number field',
                type: 'numerical',
                icon: 'edit'
            }
        ];

        this.formControls = [];
    }
]);