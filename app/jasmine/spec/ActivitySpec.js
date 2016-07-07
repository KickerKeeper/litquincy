/**
 * Created by JEREMY CLARK on 7/2/2016.
 */
describe('ActivitiesController', function() {

  var $controller;
  var $scope;

  beforeEach(
    module('starter')
  );

  beforeEach(inject(function(_$controller_, $state, ActivityLogs, Participants, Security){

    participantService = Participants;
    securityService = Security;
    activityService = ActivityLogs;
    stateService = $state;


    securityService.login("joe@tutor.com", "12345");

    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $scope = {
      newActivity: {
        tutor: {email:"joe@tutor.com",
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
        },
        student: {
          email: "sammy@student.com",
          fullName: "Sammy Student",
          type: "student",
          password: "12345",
          nickname: "Sammy",
          birthdate: "12/25/1975",
          location: "Quincy",
          advocate: {
            email:"joe@tutor.com",
            fullName:"Joe Joebert",
            type: "tutor",
            password: "12345",
            nickname: "Jack",
            birthdate: "12/25/1950",
            location: "Quincy",
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
          },
          mediaConsent: true
        },
        date:"",
        hours: 5
      }
    };
    var controller = $controller('ActivityLogsCtrl', { $scope: $scope});
  }));


  describe('New Activity', function() {

    it('Displays the create activity screen', function () {
      spyOn(stateService, "go");
      $scope.addActivityLog();
      expect(stateService.go).toHaveBeenCalledWith('tab.activityLog-new');
    });

  });


  describe('Save Activity', function() {

    it('Calls add from the Activity factory', function() {
      spyOn(activityService, 'add').and.callThrough();
      $scope.saveActivityLog($scope.newActivity);
      expect(activityService.add).toHaveBeenCalledWith($scope.newActivity);
    });

    it('Adds a new activity', function() {
      $scope.saveActivityLog($scope.newActivity);
      expect(activityService.all().length).toEqual(2);
    });

    it('Redirects to the activities list', function() {
      spyOn(stateService, 'go');
      $scope.saveActivityLog($scope.newActivity);
      expect(stateService.go).toHaveBeenCalledWith('tab.activityLogs');
    });

    it('Requires a tutor', function() {
      var noTutor = _.omit($scope.newActivity, "tutor");
      expect(function() { $scope.saveActivityLog(noTutor); }).toThrow(new Error("Tutor is required"));
    });
    //
    it('Requires a student', function() {
      var noStudent = _.omit($scope.newActivity, "student");
      expect(function() { $scope.saveActivityLog(noStudent); }).toThrow(new Error("Student is required"));
    });

    it('Requires a date', function() {
      var noDate = _.omit($scope.newActivity, "date");
      expect(function() { $scope.saveActivityLog(noDate); }).toThrow(new Error("Date is required"));
    });

    it('Requires hours', function() {
      var noHours = _.omit($scope.newActivity, "hours");
      expect(function() { $scope.saveActivityLog(noHours); }).toThrow(new Error("Hours are required"));
    });

  });
});
