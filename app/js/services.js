angular.module('starter.services', [])

.factory('Security', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var login = function(username, password) {

    if(username == 'test@test.com' && password == 'test') {
      token = 'abc';
      return token;
    }
    else {
      return '';
    }

  }

  return {
    login: login
  }
})

.factory('TimeEntries', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var getTimeEntries = function(username, token, count) {

    entries = [];

    for(var i =0; i<count; i++) {
      entries.push({
        username: "test@test.com",
        student: "John Doe",
        date: "1/1/2016",
        hours: "5"
      });
    }

    return entries;

  };

  return {
    getTimeEntries: getTimeEntries
  }
})
/**
 * A simple example service that returns some data.
 */
.factory('Students', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var students = [
    { id: 0, name: 'Scruff McGruff', location: "Quincy, MA", tutor: "Joe Smith", pictureURL: "https://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg" },
    { id: 1, name: 'G.I. Joe', location: "Quincy, MA", tutor: "Joe Smith", pictureURL: "https://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg"  },
    { id: 2, name: 'Miss Frizzle', location: "Quincy, MA", tutor: "Joe Smith", pictureURL: "https://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg"  },
    { id: 3, name: 'Ash Ketchum', location: "Quincy, MA", tutor: "Joe Smith", pictureURL: "https://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg"  }
  ];

  return {
    all: function() {
      console.log(students);
      return students;
    },
    get: function(studentId) {
      // Simple index lookup
      return students[studentId];
    },
    save: function(studentId, student) {
      students[studentId] = student;
    }
  }
});
