
//JSONs for work, bio, education and projects
var	work = {
		"jobs": [
		{
			"employer" : "Freelance",
			"title" : "Web Developer",
			"location" : "New York, New York",
			"datesWorked"    : "July 2014 - Current",
			"description" : "Freelance web developer with a front-end/UI lean. Clients include Digital Agencies, non-profits and small businesses"
		},
		{
			"employer" : "US Dept. of State",
			"title" : "Fulbright Fellow",
			"location" : "Mokpo, S. Korea",
			"datesWorked"    : "July 2013 - July 2014",
			"description" : "Researched and reported on media addiction among Korean millennials. Taught 20 classes of English weekly to 750+ Korean students at Deogin Middle School."
		},	
		{
			"employer" : "Vassar College",
			"title" : "Cognitive Science Assistant",
			"location" : "Poughkeepsie, New York",
			"datesWorked"    : "September 2010 - May 2013",
			"description" : "Assisted students on quantitative assignments and essays for departmental classes. Edited course syllabi and acted as a liaison between professors, administration and students"
		},
		{
			"employer" : "Institute of Intelligent Systems",
			"title" : "Research Assistant",
			"location" : "Memphis, Tennessee",
			"datesWorked"    : "June 2012 - July 2012",
			"description" : "Scripted and debugged chat-bots in XML and C# designed to tutor middle school biology"
		},
		{
			"employer" : "Laboratory of Applied Linguistics, Texas A&M University",
			"title" : "Research Assistant",
			"location" : "Commerce, Texas",
			"datesWorked"    : "July 2012 - August 2012",
			"description" : "Designed and conducted studies on prosody in joke telling. Analyzed experimental data in SPSS, research currently in peer review."
		},
		{
			"employer" : "Nature Place Day Camp",
			"title" : "Activity Leader",
			"location" : "Chestnut Ridge, NY",
			"datesWorked"    : "May 2010 - August 2011",
			"description" : "Led non-competitive, drama and music activities for campers (ages 3 &#45; 15)."
		}
		],
	assembleWork : function(){
		//Append work experience div and assemble job info
		$('#workExperience').append(HTMLworkStart);

		for(var n = 0; n < work.jobs.length; n++){
			var employer = HTMLworkEmployer.replace('%data%', work.jobs[n].employer);
			var workTitle = HTMLworkTitle.replace('%data%', work.jobs[n].title);
			var employerTitle = employer.concat(workTitle);
			var dates = HTMLworkDates.replace('%data%', work.jobs[n].datesWorked);
			var loc = HTMLworkLocation.replace('%data%', work.jobs[n].location);
			var description = HTMLworkDescription.replace('%data%', work.jobs[n].description);
			$('.work-entry').append(employerTitle, dates, loc, description);
		}
	}
};

var	projects = {
		"projects": [
		{
			"title" : "SphinxQuest",
			"datesWorked": "June 2014",
			"description": "An in-browser quiz game written in JavaScript",
			"images" : "images/sphinxsprite.png"
		}
	],
		assembleProjects : function(){
			//Assemble and append projects Div to DOM 
			$('#projects').append(HTMLprojectStart);

			for(var x = 0; x < projects.projects.length; x++){
				var projTitle = HTMLprojectTitle.replace('%data%', projects.projects[x].title);
				var projDate = HTMLprojectDates.replace('%data%', projects.projects[x].datesWorked);
				var projDesc = HTMLprojectDescription.replace('%data%', projects.projects[x].description);
				var projPic = HTMLprojectImage.replace('%data%', 'images/sphinxsprite.png');
				$('.project-entry').append(projTitle, projDate, projDesc, projPic);
			}
		}
};

var	bio = {
		"name" : "Daniel Sohval",
		"role" : "Web Developer",
		"welcomeMessage" : "Excelsior!",
		"contacts" : {
			"mobile" : 2017073744,
			"email" : "daniel.sohval@gmail.com",
			"github" : "danceoval",
			"twitter" : "danceoval",
			"location" : "Ridgewood, NJ"
		},
		"skills" : ["JavaScript", "Python", "HTML5", "CSS3", "Scheme"],
		assembleBio : function(){
			//Assemble and append Name, title and contacts to DOM
			var myName = HTMLheaderName.replace('%data%', bio.name);
			var myJob = HTMLheaderRole.replace('%data%', bio.role);
 			var profPic = HTMLbioPic.replace('%data%', 'images/profile.jpg');
			var greeting = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
			var myNumber = HTMLmobile.replace('%data%', bio.contacts.mobile);
			var myEmail = HTMLemail.replace('%data%', bio.contacts.email);
			var myTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
			var myGithub = HTMLgithub.replace('%data%', bio.contacts.github);
			var myLocation = HTMLlocation.replace('%data%',bio.contacts.location);

			$('#header').prepend(myName, myJob);
			$('#header').append(profPic, greeting, HTMLskillsStart);
			$('#topContacts').append(myNumber, myEmail, myTwitter, myGithub, myLocation);
			$('#footerContacts').append(myNumber, myEmail, myTwitter, myGithub, myLocation);
			for(var i = 0; i <  bio.skills.length; i++){
				var mySkill = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(mySkill);
				}
		}
};

var	education = {
		"schools" : [ {
			"name": "Vassar College",
			"location" : "Poughkeepsie, NY",
			"degree" : "BA",
			"major" : "Cognitive Science and English",
			"datesAttended" : "2009 - 2013",
			"url" : "http://www.vassar.edu"
		}],
		"onlineCourses" : {
			"title" : "Front End Developer Nanodegree",
			"school" : "Udacity",
			"datesAttended" : "Fall 2014",
			"url" : "www.udacity.com"
		},
		assembleEducation: function(){
			//Assemble and append college info to DOM
			var schoolName = HTMLschoolName.replace('%data%', education.schools[0].name);
			var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[0].degree);
			var school = schoolName.concat(schoolDegree);
			var schoolDates = HTMLschoolDates.replace('%data%', education.schools[0].datesAttended);
			var schoolLoc = HTMLschoolLocation.replace('%data%', education.schools[0].location);
			var major = HTMLschoolMajor.replace('%data%', education.schools[0].major);

			//Assemble and Append online course info to DOM
			var onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses.title);
			var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses.school);
			var udacity = onlineTitle.concat(onlineSchool);
			var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses.datesAttended);
			var udacityURL = HTMLonlineURL.replace('%data%', education.onlineCourses.url);
			$('#education').append(HTMLschoolStart);
			$('.education-entry').append(school, schoolDates, schoolLoc, major);
			$('#education').append(HTMLonlineClasses, HTMLschoolStart);
			$('.education-entry:eq(1)').append(udacity, onlineDates, udacityURL);

		}

};


//Call assembler functions
(function makeSite(){
	$('#mapDiv').append(googleMap);
	bio.assembleBio();
	projects.assembleProjects();
	work.assembleWork();
	education.assembleEducation();
	initializeMap();
}());




