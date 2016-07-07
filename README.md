
~-~-~-~-~-~-~-~-~
Submission Number 1: Team formation, product launch, and initial product backlog
~-~-~-~-~-~-~-~-~

Application Name : LitQuincy
=================
* Time logging solution for Quincy Library tutors from Literacy Volunteers of Massachusetts.



Team Name : Team Rosetta
=================


Team Roster
========
* Jeremy Clark — Product Owner and Dev team member
* Joshua Coffie — Scrum Master and Dev team member
* Muhammad Abdullah — Dev team member
* Ian Hoffmann — Dev team member
* Jason Reed — Dev team member
* Carnic — Dev team member


Far Vision
======
Connect Literacy Program participants so that they can share achievements, document their efforts, and cultivate friendships within the adult learning community


Near Vision
=======
* Provide an administrative interface for program coordinators to analyze participant activity and generate reports
* Allow participants to register for membership to the site
* Offer a user-friendly interface for tutors to log student activity
* Provide an administrative interface for program coordinators to analyze participant activity



Stakeholders
========
* Program Administrators
* Tutors
* Students



“Real Stakeholder” : User Persona
========
****** [Click here to view the user Persona PDF v2](../master/UX%20Template%20-%20Group%20Project%20v2.pdf "User Persona PDF") ******
* Molly is the Program Administrator
* She is 40 years old
* Patient, passionate, charismatic, fun
* Has spent most of her life in the educational services field, focusing on ESL and international education
* Traveled to Spain in college to learn Spanish, traveled to Costa Rica to teach at an English School
* Her primary device is a Windows Laptop
* Her mobile device is an iPhone 6

---

A little bit more about Molly:

> She is a full-time mother of two with a passion for helping people. She finds immense fulfillment in teaching ESL at the local library while balancing duties at home. She builds relationships quickly, preferring to hand-make cards for people rather than buy them, builds lifelong friendships working alongside adults teaching them English, stays up late to take care of her family, and insists that she makes plenty of time in her day for her kids to garden and teach them about life.

Her frustrations with the current system:

* Repetition/inefficiency of tasks
* Making sense of raw data
* Limitations on data filtering
* Lengthy technology interaction



Backlog items URL
===========
[Trello backlog](https://trello.com/b/j9MKFvqG/litquincy-application)


How is the backlog ordered?
=================

The key aspect of backlog ordering we took into account over all others was MVP. This is expressed through our choice to put the main time-logging functionality ahead of most other non-core backlog items. Initial comps of the product was chosen as the most important backlog item, because giving the stakeholders an idea of how the product will look and function is of great value to them. Some of the items at the bottom of the project backlog
are there because of dependencies and non-essential functions.  Nevertheless, they constitute functionality that would be appreciated by stakeholders.  All in all, MVP, dependencies, stakeholder involvement, and time constraints played the largest factor in ordering the backlog to its current condition.


~-~-~-~-~-~-~-~-~
Submission Number 2: Backlog estimating and Sprint Planning
~-~-~-~-~-~-~-~-~

[Trello backlog (Kanban Board) with estimation in comments](https://trello.com/b/j9MKFvqG/litquincy-application)

Of note: our Trello is being used as a Kansan board by visually depicting the flow that backlog items must go through in order to reach the sprint and, eventually, done status.


Whole Team, Relative Size Estimating Activity*
========
Our team method: Planning Poker using PlanningPoker App for iPhone and Android

*Only Development Team members participated in this activity.

Estimate results:
========

Entire Product backlog, as of 28 June 2016 23:55:00: 53 story points.  This does not include items that require more information or are product features that do not have enough detail in order to estimate at this time.  We have engaged the product owner to clarify information for this items.

Sprint backlog estimate, as of 28 June 2016 23:55:00: 38 story points.  This number was number was determined through the following methods:

1. We do not have previous sprints in order to determine historical velocity, therefore we had to use a rough calculation of size to feasibility of completion for our development team in order to arrive at an expected completion effort for this sprint.
2. We took into account that a series of backlog items must be complete in order for this product to become an MVP (minimal viable product) for usage by users.  Be believe that our team would need to complete the following backlog items in order to reach an MVP level by the end of our single development sprint: Initial Comps of Product, User Login, Activity Logging, View Past Submissions, Participant Registration, Relate students to tutors, and Admin Report Generation.
3. We believe that we could potentially complete more items than this in our Sprint so we have prepped and primed additional backlog items into our “Ready for Sprint Backlog” category, where they are prioritized for completion (higher priority on top), and will add additional items to our current sprint if we have available bandwidth.

Of note: the largest story for this sprint is an effort of 8; therefore, no items are greater than 50% of the total forecast for this sprint.  We believe that each backlog item is in a small enough chunk to be consumable by the development team for this sprint.  The refinement and scaling of backlog items occurred throughout the multiple backlog grooming activities that the team held this week and we look forward to our Sprint review and retrospective to discuss how the sprint met/didn’t meet our expectations.

Also, only development team members participated in this activity.

Sprint Burndown Chart
========
[Click here to view the Team Turndown Chart for Team Rosetta](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx) “Team Burndown Chart - Team Rosetta xlsx“)

litquincy/Team Burndown Chart - Team Rosetta.xlsx
Included in this file is a sprint turndown chart as well as a product burndown chart.  We believe that both are incredibly helpful in relaying the effect of development velocity to stakeholders, with regard to product completion.


~-~-~-~-~-~-~-~-~
Submission Number 3: Start Sprinting, use TDD to get started
~-~-~-~-~-~-~-~-~

#Inital Code With Tests - for 7/1/2016 submission

Node webservice API written with express.

Only thing implemented so far is a *basic* participant API.

##Installing and Testing
* Assumes you have node installed (I used 0.10.31 - kinda older)
* Clone this repo, and get the the 'api' branch
* Install mocha:
	* npm install -g mocha
		* If that fails, try running as admin to install mocha (sudo npm install -g mocha)
* Install istanbul
	* npm install -g istanbul
* *cd* to the project directory (wherever you cloned the repo)
* Install dependencies
	* npm install
* Run tests
	* npm test

##Running
* From the project directory run
	* node bin/www

##Testing the Running app
* Open something like postman to issue a "POST" http request
* Make the following request:
	* POST http://localhost:3000/participant
	* Add a header: "x-litquincy-healthcheck"
	* The response should be a 200 OK

Proof of TDD
========

I've included a couple screen caps to show the process I followed for TDD.

Look in the "TDD images" folder in the API branch of the repo.


Scrum Notes 30 June 2016
========
**Joshua**
last 24- Design research for UI, looking at industry standard for rapid prototyping vs. interactive UX testing
next 24- Continue to develop UI designs for application - going to begin developing UX click-through design so that they can be used in this and future iterations of the product
roadblocks- Need a team discussion with what users would need to see in their main page if we decide to go with a front-end in our development of the product this sprint

**Jeremy**
last 24- Fair amount of research on user testing and require.js (looks like it’s more overhead than it’s worth), added some of the team to Kinvey but needs to add the rest to the application
next 24- Work with as many people as possible for code sharing and pair program to build out template and farm to team (with Jeremy specifically, perhaps?)
roadblocks- We all need to get to a point where we all feel like we’re working on the same thing/project, should we consider something different (canceling this sprint) for our team submission, there seems to be a bifurcation from the design aspect to the architecture, and everything in between.

**Jason**
last 24- Heroku setup, ran into some issues setting up, but now we can push to github and it posts to Heroku
next 24- Working on getting a template setup and put onto heroku for us to develop with
roadblocks- Need the team to decide on a general template and begin contributing to the code base

**Ian**
last 24- Installed IDEs for project (web storm) and reviewed trello for backlog items that he’s working on
next 24- unit testing with jasmine, but needs to see what makes sense for the functions he needs to implement.  Now that there’s something on Heroku, wants to think of a tool that might help with initial tests.
roadblocks- Understanding of Heroku and Node.js - clarifying with team SME following Scrum on how testing will work.

**Carnac**
last 24- studying javascript and node.js and review of tasks
next 24- Learning more of javascript and working on the tasks to complete backlog item
roadblocks- Need to decide on effort for dashboard

**Muhammad**
last 24- Reading on node to learn the environment
next 24- developing test cases for participant registration and data visualization
roadblocks- not much background in this stack, so will need to lean on other people to learn the layout of the architecture, time is also a factor in how much he can learn before the due date


Removing Impediments
========

The first step in removing our team impediments consisted of a meeting following scrum in which we discussed the feasibility of canceling our sprint and undertaking a different approach to the project.  The main concerns, outlined above, was that we're at a point as a team that we need to begin producing code for our product, but our platform wasn't setup, our architecture was still uncertain, and we may have taken a project on that was much larger than we could complete, given our collective free-time out of work and the limited number of days in this single sprint.  The conclusion was that we would explore two different approaches to the product; one would be an api of our product so that a front-end could be plugged in at a later iteration, the second was an Angular product that emphasized building the front-end and setting up connections to the back-end that would be established at a later date.  We broke group to develop prototypes of each option and will reconvene tonight to decide on the best approach.  Both approaches have been documented in our git repo under different branches with working test for each.  We will use the decider protocol to make a firm decision at our team meeting tonight, following our daily scrum.

We also spent time getting the team up to speed on the various architecture of both available options.  Now that everyone has done their homework and research, we should be prepared to vote tonight following our scrum, on which approach we will take, vastly eliminating the roadblocks mentioned above.


Proof of Mobbin'
========

[Click here to view our evidence of Mob Programming](https://github.com/KickerKeeper/litquincy/blob/master/Mobbin'%20like%20it's%201999.jpg)


Team Burndown Chart
========
[Click here to view the updated Team Turndown Chart for Team Rosetta](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx)



~-~-~-~-~-~-~-~-~
Submission Number 4: Continue Sprinting
~-~-~-~-~-~-~-~-~

Team Scrummage Notes
========
[Click here to view July 1 Scrum](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx)

[Click here to view July 2 Scrum](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx)

[Click here to view July 5 Scrum](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx)

[Click here to view July 6 Scrum](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx)


Team Burndown Chart
========
[Click here to view the updated Team Turndown Chart for Team Rosetta](https://github.com/KickerKeeper/litquincy/blob/master/Team%20Burndown%20Chart%20-%20Team%20Rosetta.xlsx)

Additional Pair Programming / Mobbing Evidence
========
[Click here for additional documentation of continued Pair Programming /
Mobbing] (https://github.com/KickerKeeper/litquincy/blob/master/Pair%20Programming%20Evidence.jpg)

Team Burndown Chart
========



~-~-~-~-~-~-~-~-~-~-
Copyright Notice
=================

Copyright (c) 2016, Team Rosetta and Harvard University, CSCI S-71 Agile Software Development

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
