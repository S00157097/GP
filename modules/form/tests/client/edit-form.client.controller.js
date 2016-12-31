'use strict';

(function () {
  describe('EditFormController', function () {
    var ctrl;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function (_$controller_, _Authentication_) {
      _Authentication_.user = { _id: '585193f4784520741e41295d' };
      ctrl = _$controller_('EditFormController', {
        $scope: {}
      })
    }));

    describe('vm.formControls', function () {
      it('should be defined', function () {
        expect(ctrl.formControls).toBeDefined();
      });

      it('should be an empty array', function () {
        expect(ctrl.formControls).toEqual(jasmine.any(Array));
        expect(ctrl.formControls.length).toEqual(0);
      });
    });
  });
} ());