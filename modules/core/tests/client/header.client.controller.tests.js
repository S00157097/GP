'use strict';

(function () {
  describe('HeaderController', function () {
    //Initialize global variables
    var scope,
      HeaderController,
      $state,
      Authentication,
      Menus;

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function ($controller, $rootScope, _$state_, _Authentication_, _Menus_) {
      scope = $rootScope.$new();
      $state = _$state_;
      Authentication = _Authentication_;
      Menus = _Menus_;

      HeaderController = $controller('HeaderController', {
        $scope: scope
      });
    }));

    it('should expose the authentication service', function () {
      expect(HeaderController.authentication).toBe(Authentication);
    });

    it('should expose the $state service', function () {
      expect(HeaderController.$state).toBe($state);
    });

    it('should expose the Menu service', function () {
      expect(HeaderController.menu).toBe(Menus.getMenu('topbar'));
    });
  });
})();
