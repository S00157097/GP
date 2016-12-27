'use strict';

angular.module('storage').directive('addStorage', [
    function () {
        return {
            restrict: 'A',
            replace: true,
            controllerAs: '__',
            templateUrl: 'modules/storage/client/templates/add-storage.client.template.html',
            scope: {
                buttonName: '@',
                collection: '=collection',
                item: '@item',
                message: '@message',
                add: '&add'
            },

            link: (scope, element, attribute, controller) => {
                // When storage needs to be added - triggers onClick            
                element.find('#showPrompt_Click').on('click', function (e) {
                    controller.showPrompt(e);
                });
            },
            
            controller: ['$scope', '$mdDialog', 'StorageService',
                function ($scope, $mdDialog, StorageService) {
                    let vm = this;
                    // When storage needs to be added - opens modal
                    vm.showPrompt = function (ev) {
                        let confirm = $mdDialog.prompt()
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
            ]
        };
    }
]);