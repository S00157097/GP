'use strict';

angular.module('storage').directive('addStorage', [
    function () {
        var object = {};
        object.restrict = 'A';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/storage/client/templates/add-storage.client.template.html';

        object.scope = {
            buttonName: '@',
            collection: '=collection',
            item: '@item',
            message: '@message',
            add: '&add'
        };

        object.link = function (scope, element, attribute, controller) {
            // When storage needs to be added - triggers onClick            
            element.find('#showPrompt_Click').on('click', function (e) {
                controller.showPrompt(e);
            });
        };

        object.controller = ['$scope', '$mdDialog', 'StorageService',
            // When storage needs to be added - opens modal
            function ($scope, $mdDialog, StorageService) {
                this.showPrompt = function (ev) {
                    var confirm = $mdDialog.prompt()
                        .title($scope.message)
                        .textContent('You can change it later.')
                        .placeholder($scope.item)
                        .ariaLabel($scope.item)
                        .initialValue('')
                        .targetEvent(ev)
                        .ok('Done')
                        .cancel('Cancel');

                    $mdDialog.show(confirm).then(function (result) {
                        $scope.add({ data: result });
                    });
                };
            }
        ];

        return object;
    }
]);