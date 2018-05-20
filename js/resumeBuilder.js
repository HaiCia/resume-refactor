// ------------------- Model------------------------.

const model = {
    bio: {
        "name": 'Katarzyna M Wisniewska',
        "role": 'Front-end Developer',
        "contacts": {},
        "mobile": '07804619397',
        "email": 'katarzyna.wisniewska1988@gmail.com',
        "gitHub": 'https://github.com/HaiCia',
        //twitter: 'string(optional)',
        "location": 'Leeds, West Yorkshire, UK',
        "welcomeMessage": 'Hello world',
        "skills": ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'git', 'gitHub', 'RWD'],
        'biopic': 'images/fry.jpg'
    },

    education: {
        "schools": [{
            "name": "zaspol szkol Agro-Technicznych im.Wincentego Witosa [technical secondary school",
            "city": "Ropczyce, Poland",
            "degree": "Technican",
            "majors": "Geodesy",
            "date": "2004-2008",
            "url": "http://www.zsat-ropczyce.pl/"
        }],
        "onlineCourses": [{
            "title": "Front End Nano Degree",
            "school": "Udacity",
            "date": "02.2018 -- Present",
            "url": "www.Udacity.com"
        }]
    },

    work: {
        "jobs": [{
                "employer": "PickFisk LTD",
                "title": "Production Operative",
                "date": "01.2015 -- Present",
                "description": "Checking products for quality on the production line and removing defective items, packing up into boxes, carry out tasks quickly and accurately, patience, as the tasks can be repetitive, work well in a team and on your own."
            },
            {
                "employer": "Harvard Technology Ltd",
                "title": "CNC machine operator",
                "date": "01. 2011 - 12.2014",
                "description": "Setting up and operating a computer numerical control(CNC) machine, maintaining quality and safety standards, keeping records, maintaining equipment and supplies, reading drawings and work orders, checking stock to determine amount available, carry out tasks quickly and accurately, filling in production and quality documents"
            }
        ]
    },


    projects: {
        "projects": [{
                "title": "Infestation",
                "dates": "04.2018",
                "description": "Udacity project- Arcade game, copy of popular frogger game, palyer needs to move across game field avoiding collision with enemy",
                "images": ['https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br', 'https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br','https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br']
            },
            {
                "title": "Match me",
                "dates": "03.2018",
                "description": "Memory game, by clicking on tiles match them with the same icon",
                "images": ['https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br', 'https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br','https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br']
            },
            {
                "title": "Pixel art maker",
                "dates": "02.2018",
                "description": "Udacity project- Drawing tool, by choosing size of grid and color of paint make your own pixel arts",
                "images": ['https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br', 'https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br','https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br']
            },
            {
                "title": "Basic Protfolio",
                "dates": "03.2018",
                "description": "Udacity project- Clean look basic portfolio site",
                "images": ['https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br', 'https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br','https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br']
            },
            {
                "title": "FeedReader - unit testing",
                "dates": "05.2018",
                "description": "Udacity project- testing with Jasmine.js(project application was given by Udacity) ",
                "images": ['https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br', 'https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br','https://vignette.wikia.nocookie.net/dofus/images/4/48/Pena_de_Piu_Rosa.png/revision/latest?cb=20170830203943&path-prefix=pt-br']
            }
        ]
    }
}


// --------------------------- view --------------------------------.


const octopus = {
    init: function () {
        view.viewBio();
        view.viewWork();
        view.viewProject();
        view.viewEdu();
    },

    getBio: function () {
        return model.bio;
    },

    getSchool: function () {
        return model.education.schools;
    },

    getCourse: function() {
        return model.education.onlineCourses;
    },

    getWork: function () {
        return model.work.jobs;
    },

    getProject: function () {
        return model.projects.projects;
    }
}

const view = {
    viewBio: function () {

        const getBio = octopus.getBio();

        const name = HTMLheaderName.replace("%data%", getBio.name);
        const role = HTMLheaderRole.replace("%data%", getBio.role);
        const mobile = HTMLmobile.replace("%data%", getBio.mobile);
        const email = HTMLemail.replace("%data%", getBio.email);
        const twitter = HTMLtwitter.replace("%data%", getBio.twitter);
        const gitHub = HTMLgithub.replace("%data%", getBio.gitHub);
        const blog = HTMLblog.replace("%data%", getBio.blog);
        const location = HTMLlocation.replace("%data%", getBio.location);
        const bioPic = HTMLbioPic.replace('%data%', getBio.biopic);
        const message = HTMLwelcomeMsg.replace('%data%', getBio.welcomeMessage);


        $('#header').prepend(role);
        $('#header').prepend(name);
        $('#topContacts').append(mobile);
        $('#topContacts').append(email);
        $('#topContacts').append(gitHub);
        $('#topContacts').append(twitter);
        $('#topContacts').append(blog);
        $('#header').append(bioPic);
        $('#header').append(message);
        $('#header').append(HTMLskillsStart);

        for (let i = 0; i < getBio.skills.length; i++) {
            const skills = HTMLskills.replace('%data%', getBio.skills[i]);
            $('#skills-h3').append(skills);
        }
    },

    viewWork: function () {
        const getWork = octopus.getWork();
        $('#workExperience').append(HTMLworkStart);

        for (let i = 0; i < getWork.length; i++) {
            const workEmployer = HTMLworkEmployer.replace('%data%', getWork[i].employer);
            const workTitle = HTMLworkTitle.replace('%data%', getWork[i].title);
            const workDate = HTMLworkDates.replace('%data%', getWork[i].date);
            const workDescription = HTMLworkDescription.replace('%data%', getWork[i].description);

            $('.work-entry').append(workEmployer + workTitle);
            $('.work-entry').append(workDate);
            $('.work-entry').append(workDescription);
        }

    },
    viewProject: function () {
        const getProject = octopus.getProject();
        $('#projects').append(HTMLprojectStart);

        for (let i = 0; i < getProject.length; i++) {
            //console.log(i);
            const projectTitle = HTMLprojectTitle.replace('%data%', getProject[i].title);
            const projectDates = HTMLprojectDates.replace('%data%', getProject[i].dates);
            const projectDescription = HTMLprojectDescription.replace('%data%', getProject[i].description);
            

            $('.project-entry').append(projectTitle);
            $('.project-entry').append(projectDates);
            $('.project-entry').append(projectDescription);

            for( let j = 0; j < getProject[i].images.length; j++) {
                
                const projectImg = HTMLprojectImage.replace('%data%', getProject[i].images[j]);
                $('.project-entry').append(projectImg);
            }
        }

    },

    viewEdu: function() {
        const getEdu = octopus.getSchool();
        const getCourse = octopus.getCourse();
        //console.log(getCourse.length)
        $('#education').append(HTMLschoolStart);
        for(let i = 0; i < getEdu.length; i++) {
            const schoolName = HTMLschoolName.replace('%data%', getEdu[i].name);
            const schoolDegree = HTMLschoolDegree.replace('%data%', getEdu[i].degree);
            const schoolDates = HTMLschoolDates.replace('%data%', getEdu[i].date);
            const schoolLocation = HTMLschoolLocation.replace('%data%', getEdu[i].city);
            const schoolMajor = HTMLschoolMajor.replace('%data%', getEdu[i].majors);

            $('.education-entry').append(schoolName+ schoolDegree);
            $('.education-entry').append(schoolDates);
            $('.education-entry').append(schoolLocation);
            $('.education-entry').append(schoolMajor);
        }

        $('.education-entry').append(HTMLonlineClasses);

        for(let j = 0; j < getCourse.length; j++) {
            const courseTitle= HTMLonlineTitle.replace('%data%', getCourse[j].title);
            const courseSchool= HTMLonlineSchool.replace('%data%', getCourse[j].school);
            const courseDates = HTMLonlineDates.replace('%data%', getCourse[j].date);
            const courseURL = HTMLonlineURL.replace('%data%', getCourse[j].url);

             $('.education-entry').append(courseTitle + courseSchool + courseDates + courseURL);
        }
    }

}

octopus.init();