'use strict';

(function () {
  describe('StorageService', function () {
    var scope;
    var StorageService;
    var $httpBackend;
    var test_storage;


    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function (Authentication, _StorageService_, _$httpBackend_) {
      Authentication.user = { _id: '585193f4784520741e41295d' };
      StorageService = _StorageService_;
      $httpBackend = _$httpBackend_;

      test_storage = {
        "_id": "58627d38cea8b738132dabc2",
        "userId": "58626e3ee2e27920036cdc79",
        "name": "Restaurant",
        "updated": "2016-12-27T14:45:09.686Z"
      };
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('obj.list(userId)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/storage/list', function (post) {
            var json = JSON.parse(post);
            expect(json).toEqual(jasmine.any(Object));
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            return true;
          })
          .respond(200, true);
      });

      it('should return true', function () {
        StorageService.list()
          .success(function (response) {
            expect(response).toBeTruthy();
          });

        $httpBackend.flush();
      });
    });

    describe('obj.updateName(userId, storage)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/storage/update_name', function (post) {
            var json = JSON.parse(post);
            expect(json).toEqual(jasmine.any(Object));
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.storage).toBeDefined();
            expect(json.storage).toEqual(jasmine.any(Object));
            return true;
          })
          .respond(200, true);
      });

      it('should return true', function () {
        StorageService.updateName(test_storage)
          .success(function (response) {
            expect(response).toBeTruthy();
          });

        $httpBackend.flush();
      });
    });

    describe('obj.add(userId, storageName)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/storage/add', function (post) {
            var json = JSON.parse(post);
            expect(json).toEqual(jasmine.any(Object));
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.storageName).toBeDefined();
            expect(json.storageName).toEqual(jasmine.any(String));
            expect(json.storageName.length).toBeGreaterThan(0);
            return true;
          })
          .respond(200, true);
      });

      it('should return true', function () {
        StorageService.add('new storage')
          .success(function (response) {
            expect(response).toBeTruthy();
          });

        $httpBackend.flush();
      });
    });

    describe('obj.delete(userId, storage)', function () {
      beforeEach(function () {
        $httpBackend
          .when('POST', 'http://localhost:3000/api/storage/delete', function (post) {
            var json = JSON.parse(post);
            expect(json).toEqual(jasmine.any(Object));
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.storage).toBeDefined();
            expect(json.storage).toEqual(jasmine.any(Object));
            return true;
          })
          .respond(200, true);
      });

      it('should return true', function () {
        StorageService.delete(test_storage)
          .success(function (response) {
            expect(response).toBeTruthy();
          });

        $httpBackend.flush();
      });
    });

  });
} ());