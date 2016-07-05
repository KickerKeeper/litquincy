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
      email: "m@m.com",
      fullName: "Molly Mak",
      type: "admin",
      password: "12345",
      nickname: "Molly",
      birthdate: "12/25/1975",
      location: "Quincy",
      advocate: "",
      mediaConsent: true
    },
    {
      email:"a@b.com",
      fullName:"Joe Joebert",
      type: "tutor",
      password: "12345",
      nickname: "Jack",
      birthdate: "12/25/1950",
      location: "Quincy",
      advocate: {
        email: "m@m.com",
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
    {
      email:"b@c.com",
      fullName:"Judy Joebert",
      type: "tutor",
      password: "56789",
      nickname: "Judes",
      birthdate: "12/25/1950",
      location: "Quincy",
      advocate: {
        email: "m@m.com",
        fullName: "Molly Mak",
        type: "admin",
        password: "12345",
        nickname: "Molly",
        birthdate: "12/25/1975",
        location: "Quincy",
        advocate: "",
        mediaConsent: true
      },
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
    students: function(){
      return _.where(this.all(), {type:"student"});
    },
    tutors: function(){
      return _.where(this.all(), {type:"tutor"});
    },
    admins: function(){
      return _.where(this.all(), {type:"admin"});
    },
    advocatePool: function(participantType){
      var pool = [];
      switch(participantType){
        case "student":
          console.log("It's a student");
          console.log(this.tutors());
          pool = this.tutors();
          break;
        case "tutor":
          pool = this.admins();
          break;
        default:
          break;
      }
      return pool;
    },
    advocateTypeLabel: function(participantType){
      var advocateLabel = "";
      switch(participantType){
        case "student":
          advocateLabel = "Tutor";
          break;
        case "tutor":
          advocateLabel = "Admin"
          break;
        default:
          break;
      }
      return advocateLabel;
    },
    clientTypeLabel: function(participantType){
      var clientLabel = "";
      switch(participantType){
        case "tutor":
          clientLabel = "Students";
          break;
        case "admin":
          clientLabel = "Tutors"
          break;
        default:
          break;
      }
      return clientLabel;
    },
    add: function(participant){
      if (_.findWhere(this.all(), {email:participant.email}))
        throw new Error("Email address must be unique");
      if (!_.has(participant, "email"))
        throw new Error("Participant email is required");
      if (!_.has(participant, "type"))
        throw new Error("Participant type is required");
      if (!_.contains(['student', 'tutor', 'admin'], participant.type))
        throw new Error("Participant type must be one of: student, tutor, admin");
      if (!_.has(participant, "password"))
        throw new Error("Participant password is required");
      if (!_.has(participant, "fullName"))
        throw new Error("Participant fullName is required");
      if (!_.has(participant, "location"))
        throw new Error("Participant location is required");

      //Check that all advocates are actual participants
      if (_.contains(['student', 'tutor'], participant.type)){
        if (!participant.advocate || participant.advocate == {}) {
          throw new Error("An advocate must be assigned");
        }

        if (!_.contains(_.pluck(this.all(), "email"), participant.advocate.email))
        {
          throw new Error("Advocate must be an existing participant");
        }
      }

      participants.push(participant);
    },
    update: function(participant){
      if (!_.has(participant, "password"))
        throw new Error("Participant password is required");
      if (!_.has(participant, "location"))
        throw new Error("Participant location is required");

      //Check that all advocates are actual participants
      if (_.contains(['student', 'tutor'], participant.type)){
        if (!participant.advocate || participant.advocate == "" || participant.advocate == {}) {
          throw new Error("An advocate must be assigned");
        }
        var selectedAdvocate = participant.advocate.email;
        if (
          !_.contains(_.pluck(participants, "email"), selectedAdvocate)
        )
        {
          throw new Error("Advocate must be an existing participant");
        }
        participant.advocates = [selectedAdvocate];
      }

      var participantIndex = _.findIndex(function(v){ return (participant.email == v.email); });
      participants[participantIndex] = participant;


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
