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
