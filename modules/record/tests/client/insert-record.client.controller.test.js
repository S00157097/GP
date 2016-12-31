'use strict';

(function () {
  describe('InsertRecordController', function () {
    var ctrl;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function (_$controller_, _Authentication_) {
      _Authentication_.user = { _id: '585193f4784520741e41295d' };
      ctrl = _$controller_('InsertRecordController', {
        $scope: {}
      });
    }));

    describe('vm.formControls', function () {
      it('should be defined', function () {
        expect(ctrl.formControls).toBeDefined();
      });

      it('should be an emoty array', function () {
        expect(ctrl.formControls).toEqual(jasmine.any(Array));
        expect(ctrl.formControls.length).toEqual(0);
      });
    });

    describe('vm.insert', function () {
      var RecordService;
      var $httpBackend;

      beforeEach(inject(function (_RecordService_, _$httpBackend_) {
        RecordService = _RecordService_;
        $httpBackend = _$httpBackend_;
      }));

      it('should be function', function () {
        expect(ctrl.insert).toEqual(jasmine.any(Function));
      });

      it('should call a service', function () {
        spyOn(ctrl, 'insert').and.callThrough();
        spyOn(RecordService, 'add').and.callThrough();
        ctrl.insert();
        expect(RecordService.add).toHaveBeenCalled();
      });
    });

  });
} ());