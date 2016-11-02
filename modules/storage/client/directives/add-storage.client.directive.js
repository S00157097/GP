'use strict';

angular.module('storage').directive('addStorage', [
    function () {
        var object = {};
        object.restrict = 'A';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/storage/client/templates/add-storage.client.template.html';

        object.scope = {
            collection: '=collection'
        };

        object.controller = ['$scope', '$mdDialog', '$http',
            function ($scope, $mdDialog, $http) {
                this.showPrompt = function (ev) {
                    // Appending dialog to document.body to cover sidenav in docs app
                    var confirm = $mdDialog.prompt()
                        .title('What would you name your storage?')
                        .textContent('You can change it later.')
                        .placeholder('Storage')
                        .ariaLabel('Storage')
                        .initialValue('')
                        .targetEvent(ev)
                        .ok('Done')
                        .cancel('Cancel');

                    $mdDialog.show(confirm).then(function (result) {
                        if (result.length > 0) {
                            $http.post('http://localhost:3000/api/insert_storage', {data:result})
                                .success(function () {
                                    
                                });
                        }
                    });
                };
            }
        ];

        return object;
    }
]);