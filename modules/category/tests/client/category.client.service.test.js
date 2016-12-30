'use strict';

(function () {
  describe('CategoryService', function () {
    var CategoryService;
    var $httpBackend;
    var test_category;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));
    beforeEach(inject(function (_Authentication_, _$state_, _CategoryService_, _$httpBackend_) {
      _Authentication_.user = { _id: '585193f4784520741e41295d' };
      _$state_.params.storageId = '58627d38cea8b738132dabc2';
      CategoryService = _CategoryService_;
      $httpBackend = _$httpBackend_;

      test_category = {
        "_id": "586291f280e1ca1816a91063",
        "userId": "58626e3ee2e27920036cdc79",
        "storageId": "58627d38cea8b738132dabc2",
        "name": "Pizza Category",
        "__v": 0,
        "updated": "2016-12-27T16:15:33.751Z"
      };
    }));

    describe('obj.list()', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/category/list', function (post) {
            var json = JSON.parse(post);
            expect(Object.keys(json).length).toEqual(2);
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.storageId).toBeDefined();
            expect(json.storageId).toEqual(jasmine.any(String));
            return true;
          })
          .respond(200, { status: true });
      });

      it('should return true', function () {
        CategoryService.list()
          .success(function (response) {
            expect(response.status).toBeTruthy();
          });
        $httpBackend.flush();
      });
    });

    describe('obj.updateName(category)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/category/update_name', function (post) {
            var json = JSON.parse(post);
            expect(Object.keys(json).length).toEqual(3);
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.storageId).toBeDefined();
            expect(json.storageId).toEqual(jasmine.any(String));
            expect(json.category).toBeDefined();
            expect(json.category).toEqual(jasmine.any(Object));
            return true;
          })
          .respond(200, { status: true });
      });

      it('should return true', function () {
        CategoryService.updateName(test_category)
          .success(function (response) {
            expect(response.status).toBeTruthy();
          });
        $httpBackend.flush();
      });
    });

    describe('obj.add(categoryName)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/category/add', function (post) {
            var json = JSON.parse(post);
            expect(Object.keys(json).length).toEqual(3);
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.storageId).toBeDefined();
            expect(json.storageId).toEqual(jasmine.any(String));
            expect(json.categoryName).toBeDefined();
            expect(json.categoryName).toEqual(jasmine.any(String));
            return true;
          })
          .respond(200, { status: true });
      });

      it('should return true', function () {
        CategoryService.add('New Category')
          .success(function (response) {
            expect(response.status).toBeTruthy();
          });
        $httpBackend.flush();
      });
    });

    describe('obj.delete(category)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/category/delete', function (post) {
            var json = JSON.parse(post);
            expect(Object.keys(json).length).toEqual(2);
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.categoryId).toBeDefined();
            expect(json.categoryId).toEqual(jasmine.any(String));
            return true;
          })
          .respond(200, { status: true });
      });

      it('should return true', function () {
        CategoryService.delete(test_category)
          .success(function (response) {
            expect(response.status).toBeTruthy();
          });
        $httpBackend.flush();
      });
    });
  });
} ());