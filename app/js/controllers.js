angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicPopup, Security) {
  $scope.username = "";
  $scope.password = "";
  $scope.token = "";

  $scope.checkValidInput = function() {
    //Check if email format
    return true;
  };
  
  $scope.login = function() {

    if(!($scope.username.length > 0 || $scope.password.length > 0)) {
      var alertPopup = $ionicPopup.alert({
        title: 'Missing Input!',
        template: 'Username & Password must have a value'
      });
      throw new Error("Input Error - Empty Fields");
    }

    if(!$scope.username.includes('@')) {
      var alertPopup = $ionicPopup.alert({
        title: 'Bad Input!',
        template: 'Username must be an email'
      });
      throw new Error("Input Error - Bad Username");
    }

    $scope.token = Security.login($scope.username, $scope.password);

    $state.go('tab.dash', { username: $scope.username});
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

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
  $scope.add = function(a,b) {
    return a+b;
  }
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
