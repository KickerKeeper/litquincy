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
.factory('Participants', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var participants = [
    {
      email:"a@b.com",
      fullName:"Joe Joebert",
      type: "tutor",
      password: "12345",
      nickname: "Jack",
      birthdate: "12/25/1950",
      location: "Quincy",
      mediaConsent: true
    },
    {
      email:"b@c.com",
      fullName:"Judy Joebert",
      type: "tutor",
      password: "56789",
      nickname: "Judes",
      birthdate: "12/25/1950",
      location: "Quincy",
      mediaConsent: false
    }
  ];

  return {
    all: function() {
      return participants;
    },
    get: function(participantEmail) {
      return _.findWhere(participants, {email:participantEmail});
    },
    add: function(participant){
      if (_.findWhere(this.all(), {email:participant.email})) throw new Error("Email address must be unique");
      if (!_.has(participant, "email")) throw new Error("Participant email is required");
      if (!_.has(participant, "type")) throw new Error("Participant type is required");
      if (!_.contains(['student', 'tutor', 'admin'], participant.type)) throw new Error("Participant type must be one of: student, tutor, admin");
      if (!_.has(participant, "password")) throw new Error("Participant password is required");
      if (!_.has(participant, "fullName")) throw new Error("Participant fullName is required");
      if (!_.has(participant, "location")) throw new Error("Participant location is required");

      participants.push(participant);
    }
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
