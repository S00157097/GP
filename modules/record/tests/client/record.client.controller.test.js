'use strict';

(function () {
  describe('RecordController', function () {
    var ctrl;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function (_$controller_, _Authentication_) {
      _Authentication_.user = { _id: '585193f4784520741e41295d' };
      ctrl = _$controller_('RecordController', {
        $scope: {}
      });
    }));

    describe('vm.status', function () {
      it('should be defined and empty', function () {
        expect(ctrl.status).toBeDefined();
        expect(ctrl.status).toEqual(jasmine.any(String));
        expect(ctrl.status).toEqual('');
      });
    });

    describe('vm.data', function () {
      it('should be undefined', function () {
        expect(ctrl.data).not.toBeDefined();
      });
    });

    describe('vm.headings', function () {
      it('should be defined', function () {
        expect(ctrl.headings).toBeDefined();
      });

      it('should be defined', function () {
        expect(ctrl.headings).toEqual(jasmine.any(Array));
        expect(ctrl.headings.length).toEqual(0)
      });
    });

    describe('vm.query', function () {
      it('should be an object with 3 properties', function () {
        expect(ctrl.query).toEqual(jasmine.any(Object));
        expect(Object.keys(ctrl.query).length).toEqual(3);
      });

      it('should contain these keys', function () {
        expect(ctrl.query.page).toBeDefined();
        expect(ctrl.query.page).toEqual(jasmine.any(Number));
        expect(ctrl.query.limit).toBeDefined();
        expect(ctrl.query.limit).toEqual(jasmine.any(Number));
        expect(ctrl.query.limitOptions).toBeDefined();
        expect(ctrl.query.limitOptions).toEqual(jasmine.any(Array));
      });
    });

    describe('Functions', function () {
      var RecordService;
      var FormService;

      beforeEach(inject(function (_RecordService_, _FormService_) {
        RecordService = _RecordService_;
        FormService = _FormService_;
      }));

      describe('vm.insertRecord', function () {
        it('should call vm.getData', function () {
          spyOn(ctrl, 'insertRecord').and.callThrough();
          spyOn(ctrl, 'getData').and.callThrough();

          ctrl.insertRecord(event);
          expect(ctrl.getData).toHaveBeenCalled();
        });
      });
    });
  });
} ());