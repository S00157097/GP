'use strict';

(function () {
  describe('RecordService', function () {
    var RecordService;
    var $httpBackend;
    var test_record;
    var test_categoryId;

    beforeEach(module(ApplicationConfiguration.applicationModuleName));
    beforeEach(inject(function (_RecordService_, _$httpBackend_, _Authentication_) {
      _Authentication_.user = { _id: '585193f4784520741e41295d' };
      RecordService = _RecordService_;
      $httpBackend = _$httpBackend_;
      test_categoryId = '586291f280e1ca1816a91063';
      test_record = {
        "_id": "5862a6a7619a6aac2d034f61",
        "userId": "58626e3ee2e27920036cdc79",
        "categoryId": "586291f280e1ca1816a91063",
        "updated": "2016-12-27T17:36:39.453Z",
        "created": "2016-12-27T17:36:39.453Z",
        "values": {
          "Name": "John",
          "Date": "2016-12-06T00:00:00.000Z"
        }
      };
    }));

    describe('obj.add(record, categoryId)', function () {
      beforeEach(function () {

        $httpBackend
          .when('POST', 'http://localhost:3000/api/record/add', function (post) {
            var json = JSON.parse(post);
            expect(json).toEqual(jasmine.any(Object));
            expect(Object.keys(json).length).toEqual(3);
            expect(json.userId).toBeDefined();
            expect(json.userId).toEqual(jasmine.any(String));
            expect(json.categoryId).toBeDefined();
            expect(json.categoryId).toEqual(jasmine.any(String));
            expect(json.record).toBeDefined();
            expect(json.record).toEqual(jasmine.any(Object));
            return true;
          })
          .respond(200, { status: true });
      });

      it('should return true', function () {
        RecordService.add(test_record, test_categoryId)
          .success(function (response) {
            expect(response.status).toBeTruthy();
          });

        $httpBackend.flush();
      });
    });

    describe('obj.list(categoryId)', function () {
      beforeEach(function () {

        $httpBackend
          .when('POST', 'http://localhost:3000/api/record/list', function (post) {
            var json = JSON.parse(post);
            expect(json).toEqual(jasmine.any(Object));
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
        RecordService.list(test_categoryId)
          .success(function (response) {
            expect(response.status).toBeTruthy();
          });

        $httpBackend.flush();
      });
    });

  });
} ());