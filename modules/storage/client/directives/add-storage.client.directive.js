'use strict';

angular.module('storage').directive('addStorage', [
    function () {
        var object = {};
        object.restrict = 'A';
        object.replace = true;
        object.controllerAs = '__';
        object.templateUrl = 'modules/storage/client/templates/add-storage.client.template.html';

        object.scope = {
            collection: '=collection',
            item: '@item',
            message: '@message',
            procedure: '&procedure'
        };

        object.link = function (scope, element, attribute, controller) {
            element.find('#showPrompt_Click').on('click', function (e) {
                controller.showPrompt(e);
            });
        };

        object.controller = ['$scope', '$mdDialog', 'StorageService',
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
                        if (result.length > 0) {
                            StorageService.addStorage({ data: result });
                            StorageService.getStorages().success(function (response) {
                                $scope.collection = response;
                            });
                        }
                    });
                };
            }
        ];

        return object;
    }
]);