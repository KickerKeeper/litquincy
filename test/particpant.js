var chai = require("chai");
var assert = chai.assert;
var request = require("supertest");
var nock = require("nock");
var _ = require("underscore");


var participant = {
  email:"a@b.com",
  firstName:"Joe",
  lastName:"Joebert",
  type: "tutor",
  password: "12345",
  nickname: "Jack",
  birthdate: "12/25/1950"
};

describe("Test Framework", function() {

  it("Is Alive!", function () {
    assert(true);
  });

});

describe("Participant", function() {

  var server;
  before(function () {
    server = require('../bin/www');
  });
  after(function () {
    server.close();
  });

  describe("Creation", function () {

    it("API endpoint healthcheck works", function (done) {
      request(server)
        .post("/participant")
        .set("x-litquincy-healthcheck", '')
        .expect(200, done);
    });

    it("Echos passed in participant", function (done) {
      request(server)
        .post("/participant")
        .send(participant)
        .expect(200, participant, done);
    });

    it("Requires an email address", function (done) {
      request(server)
        .post("/participant")
        .send(_.omit(participant, ["email"]))
        .expect(400, done);
    });

    it("Requires a first name", function (done) {
      request(server)
        .post("/participant")
        .send(_.omit(participant, ["firstName"]))
        .expect(400, done);
    });

    it("Requires a last name", function(done){
      request(server)
        .post("/participant")
        .send(_.omit(participant, ["lastName"]))
        .expect(400, done);
    });

    it("Requires a password", function(done){
      request(server)
        .post("/participant")
        .send(_.omit(participant, ["password"]))
        .expect(400, done);
    });

    it("Requires a participant type", function(done){
      request(server)
        .post("/participant")
        .send(_.omit(participant, ["type"]))
        .expect(400, done);
    });

    it("Optionally accepts nickname", function(done){
      var payload = _.omit(participant, ["nickname"]);
      request(server)
        .post("/participant")
        .send(payload)
        .expect(payload, done);
    });

    it("Optionally accepts birthdate", function(done){
      var payload = _.omit(participant, ["birthdate"]);
      request(server)
        .post("/participant")
        .send(payload)
        .expect(payload, done);
    });


    it("Type can be 'tutor'", function(done){
      var tutor = _.clone(participant);
      tutor.type = 'tutor';
      request(server)
        .post("/participant")
        .send(tutor)
        .expect(tutor, done);
    });


    it("Type can be 'student'", function(done){
      var student = _.clone(participant);
      student.type = 'student';
      request(server)
        .post("/participant")
        .send(student)
        .expect(student, done);
    });

    it("Type can be 'admin'", function(done){
      var admin = _.clone(participant);
      admin.type = 'admin';
      request(server)
        .post("/participant")
        .send(admin)
        .expect(admin, done);
    });

    it("Type cannot be something else", function(done){
      var foo = _.clone(participant);
      foo.type = 'foo';
      request(server)
        .post("/participant")
        .send(foo)
        .expect(400, done);
    });


  });

});
