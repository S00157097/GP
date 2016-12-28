'use strict';

(function () {
  describe('StorageController', function () {
    var scope;
    var __StorageController;
    var __StorageService;
    var httpBackend;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function ($controller, $rootScope, Authentication, _StorageService_, $httpBackend) {
      scope = $rootScope.$new();
      Authentication.user = { _id: '585193f4784520741e41295d' };
      __StorageService = _StorageService_;
      httpBackend = $httpBackend;

      __StorageController = $controller('StorageController', {
        $scope: scope
      });
    }));

    it('should have vm.storages to be defined and empty', function () {
      expect(__StorageController.storages).toBeDefined();
      expect(__StorageController.storages).toEqual([]);
    });
  });
} ());