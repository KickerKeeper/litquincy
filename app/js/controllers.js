angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicPopup, Security) {
  $scope.data = { username: "", password: ""};
  $scope.token = "";

  $scope.checkValidInput = function() {
    //Check if email format
    return true;
  };
  
  $scope.login = function() {

    if(!($scope.data.username.length > 0 && $scope.data.password.length > 0)) {
      var alertPopup = $ionicPopup.alert({
        title: 'Missing Input!',
        template: 'Username & Password must have a value'
      });
      throw new Error("Input Error - Empty Fields");
    }

    if(!$scope.data.username.includes('@')) {
      var alertPopup = $ionicPopup.alert({
        title: 'Bad Input!',
        template: 'Username must be an email'
      });
      throw new Error("Input Error - Bad Username");
    }

    $scope.token = Security.login($scope.data.username, $scope.data.password);

    $state.go('tab.dash', { username: $scope.data.username});
  }
})

.controller('ParticipantsCtrl', function($scope, $state, $stateParams, Participants) {

  $scope.participants = Participants.all();
  $scope.students = _.where($scope.participants, {type:"student"});
  $scope.tutors = _.where($scope.participants, {type:"tutor"});
  $scope.admins = _.where($scope.participants, {type:"admin"});
  $scope.advocatePool = function(type){
    var pool = (type == "student") ? $scope.tutors : $scope.admins;
    return pool;
  }

  $scope.addParticipant = function() {
    $state.go('tab.participant-new');
  };

  $scope.saveParticipant = function(participant){
    Participants.add(participant);
    $state.go('tab.participants');
  }

  $scope.getParticipant = function(participantEmail){
    return Participants.get(participantEmail);
  }

})


.controller('ParticipantDetailCtrl', function($scope, $stateParams, Participants) {
  $scope.participant = Participants.get($stateParams.participantEmail);
  console.log($scope.participant);
  $scope.clients = _.filter(Participants.all(), function(v){ return _.contains(v.advocates, $scope.participant.email)});
  console.log($scope.clients);
  $scope.clientLabel = "";
  switch($scope.participant.type){
    case "student":
      $scope.clientLabel = null;
      break;
    case "tutor":
      $scope.clientLabel = "Students";
      break;
    case "admin":
      $scope.clientLabel = "Tutors";
      break;
  }
  $scope.advocateLabel = "";
  switch($scope.participant.type){
    case "student":
      $scope.advocateLabel = "Tutors";
      break;
    case "tutor":
      $scope.advocateLabel = "Managing Admins";
      break;
    case "admin":
      $scope.advocateLabel = null;
      break;
  }
})


.controller('ParticipantEditController', function($scope, $stateParams, $state, Students) {
  $scope.student = Students.get($stateParams.studentId);
  $scope.saveData = function() {
    Students.save($stateParams.studentId,$scope.student);
    $state.go('tab.students', { });
  }
})



.controller('ActivityLogsCtrl', function($scope, $state, $stateParams, ActivityLogs) {

  $scope.activityLogs = ActivityLogs.all();

  $scope.addActivityLog = function() {
    $state.go('tab.activityLog-new');
  };

  $scope.saveActivityLog = function(activityLogs){
    ActivityLogs.add(activityLogs);
    $state.go('tab.activityLogs');
  }
})


.controller('DashCtrl', function($scope, TimeEntries) {
  $scope.timeEntries = [];
  $scope.numberOfEntries = 5;
  $scope.userFilter = "";

  $scope.getTimeEntries = function(username, token) {
    $scope.timeEntries = TimeEntries.getTimeEntries(username, token, $scope.numberOfEntries);
  }

  $scope.displayedEntries = function() {
    records = [];
    $scope.timeEntries.forEach(function(val) {
      if(val.student == $scope.userFilter) {
        records.push(val);
      }
    });

    return records;
  }

  $scope.getTimeEntries('test@test.com', 'abc');
})

.controller('StudentsCtrl', function($scope, Students) {
  $scope.$on('$ionicView.enter', function() {
    $scope.students = Students.all();
  });

})

.controller('StudentDetailCtrl', function($scope, $stateParams, Students) {
  $scope.student = Students.get($stateParams.studentId);

})

.controller('StudentEditCtrl', function($scope, $stateParams, $state, Students) {
  $scope.student = Students.get($stateParams.studentId);
  $scope.saveData = function() {
    Students.save($stateParams.studentId,$scope.student);
    $state.go('tab.students', { });
  }
})

.controller('AccountCtrl', function($scope) {
});
