'use strict';

angular.module('form').service('FormService', ['$http', 'Authentication', '$state',
    function ($http, Authentication, $state) {
        var vm = this;
        // Controls available
        /*this.controls = [
            {text: 'Text Control',      type: 'text'},
            {text: 'Number Control',    type: 'number'},
            {text: 'Datepicker',        type: 'date'},
            {text: 'Dropdown List',     type: 'dropdown'}
        ];*/

        // Reads Available Controls: Number, Text, Date etc.
        vm.controls = function () {
            return $http.get('http://localhost:3000/api/form_controls');
        };

        // Read User's Form for a specific category
        vm.readFormControls = function () {
            return $http.post('http://localhost:3000/api/get_form_controls', {
                userId: Authentication.user._id,
                categoryId: $state.params.categoryId
            });
        };

        // Update User's Form
        vm.updateForm = function (controls) {
            return $http.post('http://localhost:3000/api/update_form', {
                userId: Authentication.user._id,
                categoryId: $state.params.categoryId,
                controls: controls
            });
        };
    }
]);