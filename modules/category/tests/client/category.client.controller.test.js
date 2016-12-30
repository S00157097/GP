'use strict';

(function () {
  describe('CategoryController', function () {
    var ctrl;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function (_$controller_, _Authentication_) {
      _Authentication_.user = { _id: '585193f4784520741e41295d' };
      ctrl = _$controller_('CategoryController', {
        $scope: {}
      })
    }));

    describe('vm.categories', function () {
      it('should be defined', function () {
        expect(ctrl.categories).toBeDefined();
      });

      it('should be an Array', function () {
        expect(ctrl.categories).toEqual(jasmine.any(Array));
        expect(ctrl.categories.length).toEqual(0);
      });
    });

    describe('Functions', function () {
      var CategoryService;

      beforeEach(inject(function (_CategoryService_) {
        CategoryService = _CategoryService_;
      }));

      describe('vm.add', function () {
        it('should call a service', function () {
          spyOn(ctrl, 'add').and.callThrough();
          spyOn(CategoryService, 'add').and.callThrough();

          ctrl.add('CategoryName', '58627d38cea8b738132dabc2');
          expect(CategoryService.add).toHaveBeenCalled();
        });
      });

      describe('vm.remove', function () {
        it('should call a service', function () {
          spyOn(ctrl, 'remove').and.callThrough();
          spyOn(CategoryService, 'delete').and.callThrough();

          ctrl.remove({
            "_id": "586291f280e1ca1816a91063",
            "userId": "58626e3ee2e27920036cdc79",
            "storageId": "58627d38cea8b738132dabc2",
            "name": "Pizza Category",
            "__v": 0,
            "updated": "2016-12-27T16:15:33.751Z"
          });
          expect(CategoryService.delete).toHaveBeenCalled();
        });
      });
    });
  });
} ());