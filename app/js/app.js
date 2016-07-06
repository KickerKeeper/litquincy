// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngSanitize', 'ngCsv', 'jett.ionic.filter.bar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
      })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.students', {
      url: '/students',
      views: {
        'tab-students': {
          templateUrl: 'templates/tab-students.html',
          controller: 'StudentsCtrl'
        }
      }
    })
    .state('tab.student-detail', {
      url: '/student/:studentId',
      views: {
        'tab-students': {
          templateUrl: 'templates/student-detail.html',
          controller: 'StudentDetailCtrl'
        }
      }
    })

	 .state('tab.student-edit', {
        url: '/student/:studentId/edit',
        views: {
          'tab-students': {
            templateUrl: 'templates/student-edit.html',
            controller: 'StudentEditCtrl'
          }
        }
      })


    .state('tab.participants', {
      url: '/participants',
      views: {
        'tab-participants': {
          templateUrl: 'templates/tab-participants.html',
          controller: 'ParticipantsCtrl'
        }
      }
    })

    .state('tab.participant-detail', {
      url: '/participant/:participantEmail',
      views: {
        'tab-participants': {
          templateUrl: 'templates/participant-detail.html',
          controller: 'ParticipantDetailCtrl'
        }
      }
    })

    .state('tab.participant-edit', {
      url: '/participant/:participantEmail/edit',
      views: {
        'tab-participants': {
          templateUrl: 'templates/participant-edit.html',
          controller: 'ParticipantEditCtrl'
        }
      }
    })

    .state('tab.participant-new', {
      url: '/participant/new',
      views: {
        'tab-participants': {
          templateUrl: 'templates/participant-new.html',
          controller: 'ParticipantsCtrl'
        }
      }
    })
      
    .state('tab.activityLogs', {
      url: '/activityLogs',
      views: {
        'tab-activityLogs': {
          templateUrl: 'templates/tab-activityLogs.html',
          controller: 'ActivityLogsCtrl'
        }
      }
    })

    .state('tab.activityLog-new', {
      url: '/activityLog/new',
      views: {
        'tab-activityLogs': {
          templateUrl: 'templates/activityLog-new.html',
          controller: 'ActivityLogsCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});

