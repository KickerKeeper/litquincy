/**
 * Created by JEREMY CLARK on 7/2/2016.
 */
describe('ParticipantsController', function() {

  var $controller;
  var $scope;

  beforeEach(
    module('starter')
  );

  beforeEach(inject(function(_$controller_, $state, Participants){

    participantService = Participants;
    stateService = $state;

    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = {
      newParticipant: {
        email:_.uniqueId() + "@test.com",
        fullName:"Joe Joebert",
        type: "tutor",
        location: "quincy",
        password: "12345",
        nickname: "Jack",
        birthdate: "12/25/1950",
        startDate: "12/25/1980",
        advocate: {
          email: "molly@admin.com",
          fullName: "Molly Mak",
          type: "admin",
          password: "12345",
          nickname: "Molly",
          birthdate: "12/25/1975",
          location: "Quincy",
          advocate: "",
          mediaConsent: true
        },
        mediaConsent: true
      }
    };
    var controller = $controller('ParticipantsCtrl', { $scope: $scope});
  }));


  describe('New Participant', function() {

    it('Displays the create participant screen', function () {
      spyOn(stateService, "go");
      $scope.addParticipant();
      expect(stateService.go).toHaveBeenCalledWith('tab.participant-new');
    });

  });


  //describe('View Participant', function() {
  //
  //  it('Displays the participant detail screen', function () {
  //    spyOn(stateService, "go");
  //    $scope.addParticipant();
  //    expect(stateService.go).toHaveBeenCalledWith('tab.participant-new');
  //  });
  //
  //});

  describe('Save Participant', function() {

    it('Calls add from the Participant factory', function() {
      spyOn(participantService, 'add');
      $scope.saveParticipant($scope.newParticipant);
      expect(participantService.add).toHaveBeenCalledWith($scope.newParticipant);
    });

    it('Adds a new participant', function() {
      $scope.saveParticipant($scope.newParticipant);
      expect($scope.getParticipant($scope.newParticipant.email)).toEqual($scope.newParticipant);
    });

    it('Redirects to the participants list', function() {
      spyOn(stateService, 'go');
      $scope.saveParticipant($scope.newParticipant);
      expect(stateService.go).toHaveBeenCalledWith('tab.participants');
    });

    it('Requires an email address', function() {
      var noEmail = _.omit($scope.newParticipant, "email");
      expect(function() { $scope.saveParticipant(noEmail); }).toThrow(new Error("Participant email is required"));
    });

    it('Email address must be unique', function() {
      $scope.saveParticipant($scope.newParticipant);
      expect(function() {$scope.saveParticipant($scope.newParticipant); }).toThrow(new Error("Email address must be unique"));
    });

    it('Requires a password', function() {
      var noPassword = _.omit($scope.newParticipant, "password");
      expect(function() { $scope.saveParticipant(noPassword); }).toThrow(new Error("Participant password is required"));
    });

    it('Requires a full name', function() {
      var noFullName = _.omit($scope.newParticipant, "fullName");
      expect(function() { $scope.saveParticipant(noFullName); }).toThrow(new Error("Participant fullName is required"));
    });

    it('Requires a type', function() {
      var noType = _.omit($scope.newParticipant, "type");
      expect(function() { $scope.saveParticipant(noType); }).toThrow(new Error("Participant type is required"));
    });

    it('Requires a location', function() {
      var noLocation = _.omit($scope.newParticipant, "location");
      expect(function() { $scope.saveParticipant(noLocation); }).toThrow(new Error("Participant location is required"));
    });

    it('type can be one of student, tutor, or admin', function() {
      var validTypes = ["student", "tutor", "admin"];
      validTypes.forEach(function (v) {
        var clone = _.clone($scope.newParticipant);
        clone.email = _.uniqueId() + "@test.com";
        clone.type = v;
        $scope.saveParticipant(clone);
        expect($scope.getParticipant(clone.email)).toEqual(clone);
      });
    });

    it('type must be one of student, tutor, admin', function() {
      var clone = _.clone($scope.newParticipant);
      clone.email = _.uniqueId() + "@test.com";
      clone.type = "foo";
      expect(function() {$scope.saveParticipant(clone); }).toThrow(new Error("Participant type must be one of: student, tutor, admin"));
    });

    it('if type is student or tutor requires a single advocate', function() {
      var testTypes = ["student", "tutor"];
      testTypes.forEach(function (v) {
        var clone = _.clone($scope.newParticipant);
        clone.email = _.uniqueId() + "@test.com";
        delete(clone.advocate);
        expect(function() {$scope.saveParticipant(clone); }).toThrow(new Error("An advocate must be assigned"));
      });
    });

    it('advocate must be an existing particpant', function() {
      var clone = _.clone($scope.newParticipant);
      clone.email = _.uniqueId() + "@test.com";
      clone.advocate = {email:"foo"};
      expect(function() {$scope.saveParticipant(clone); }).toThrow(new Error("Advocate must be an existing participant"));
    });

  });
});
