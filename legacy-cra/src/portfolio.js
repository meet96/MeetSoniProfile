/* Portfolio Configuration — Meet Soni */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Meet Soni",
  title: "Hello, I'm Meet Soni",
  subTitle: emoji(
    "A Full Stack Software Developer 🚀 with hands-on experience building scalable web applications using .NET Core, Angular, React, and modern cloud technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17YAAqH6J7NGj-ZXodQUpD8w1P7CTknqC/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/meet96",
  linkedin: "https://www.linkedin.com/in/meet-soni-755774a6/",
  gmail: "mksoni1627@gmail.com",
  medium: "https://medium.com/@mksoni1627",
  stackoverflow: "https://stackoverflow.com/users/8405818/meet-soni",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING ROBUST & SCALABLE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build responsive, high-performance front-end interfaces with modern frameworks"
    ),
    emoji(
      "⚡ Design and implement scalable backend architectures and RESTful APIs"
    ),
    emoji(
      "⚡ Deploy and manage cloud infrastructure on AWS, Azure & GCP"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Gujarat Technological University",
      logo: require("./assets/images/GTU.png"),
      subHeader: "Bachelor of Engineering — Computer Science",
      duration: "June 2013 – May 2017",
      desc: "Focused on core computer science fundamentals and competitive programming.",
      descBullets: [
        "Secured 1st Rank in GTU Zonal-level coding competition"
      ]
    }
  ]
};

// Proficiency Section

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming & Problem Solving",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Consultant",
      company: "Neudesic",
      companylogo: require("./assets/images/NeudesicLogo.png"),
      date: "Dec 2021 – Present",
      desc: "Lead full-stack development of enterprise applications using C#, .NET Core, Python, and Angular. Drive architecture decisions and mentor junior developers.",
    },
    {
      role: "Software Engineer II",
      company: "Numerator",
      companylogo: require("./assets/images/Numerator.png"),
      date: "Jan 2019 – Feb 2021",
      desc: "Built 100+ automated web crawlers using Python, C#, and Angular to deliver real-time pricing intelligence at scale.",
      descBullets: [
        "Participated in 5+ hackathons and designed 3 internal productivity tools"
      ]
    },
    {
      role: "Junior Software Developer",
      company: "Odysseus Solutions",
      companylogo: require("./assets/images/OdyLogo.jpg"),
      date: "June 2017 – Jan 2019",
      desc: "Integrated 5+ third-party web services into a travel booking platform and maintained automated data pipelines.",
      descBullets: [
        "Contributed across the full SDLC — from requirements to production releases"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects

const bigProjects = {
  title: "Notable Projects",
  subtitle: "KEY PROJECTS AND PRODUCTS I HAVE CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "A healthcare platform improving access to digital health services",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "An ed-tech platform for Latin American professionals",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications, awards, and milestones from my professional journey.",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru available on 2 billion+ devices worldwide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed PWA Web App Development certification from SMIT.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "I enjoy writing about things I've learned — from dev tips to deep dives into technology.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I love sharing knowledge at conferences and meetups 🎤"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I enjoy discussing technology and sharing experiences",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true
};

const contactInfo = {
  title: emoji("Get In Touch ☎️"),
  subtitle:
    "Have a project in mind or just want to connect? My inbox is always open.",
  email_address: "mksoni1627@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
