'use strict';

angular.module('form').service('FormService', ['$http', 'Authentication', '$state',
    function ($http, Authentication, $state) {
        let vm = this;
        // Controls available
        /*this.controls = [
            {text: 'Text Control',      type: 'text'},
            {text: 'Number Control',    type: 'number'},
            {text: 'Datepicker',        type: 'date'},
            {text: 'Dropdown List',     type: 'dropdown'}
        ];*/

        // Reads Available Controls: Number, Text, Date etc.
        vm.controls = function () {
            return $http.get('/backend/form/get_controls');
        };

        // Read User's Form for a specific category
        vm.readFormControls = function () {
            return $http.post('/backend/form/get_form', {
                userId: Authentication.user._id,
                categoryId: $state.params.categoryId
            });
        };

        // Update User's Form
        vm.updateForm = function (controls) {
            return $http.post('/backend/form/update_form', {
                userId: Authentication.user._id,
                categoryId: $state.params.categoryId,
                controls: controls
            });
        };
    }
]);