'use strict';

(function () {
  describe('StorageController', function () {
    var scope;
    var __StorageController;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function ($controller, $rootScope, Authentication) {
      scope = $rootScope.$new();
      Authentication.user = { _id: '585193f4784520741e41295d' };

      __StorageController = $controller('StorageController', {
        $scope: scope
      });
    }));

    describe('vm.storages', function () {
      it('should be defined', function () {
        expect(__StorageController.storages).toBeDefined();
      });

      it('should be an empty Array', function () {
        expect(__StorageController.storages).toEqual(jasmine.any(Array));
        expect(__StorageController.storages.length).toEqual(0);
      });
    });
  })
} ());