/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import itatsLogo from "./assets/images/itats.png";
import trivLogo from "./assets/images/triv.jpeg";
import jasuindoLogo from "./assets/images/jasuindo.jpeg";
import alugaraLogo from "./assets/images/alugara.jpeg";
import pujaseraLogo from "./assets/images/ppa.png";
import fishinfoLogo from "./assets/images/fishinfo.png";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Afif Bahtiar",
  title: "Hi all, I'm Afif",
  subTitle: emoji(
    "A passionate Android Developer 🚀 having an experience of building Mobile applications with Java / Kotlin / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1fwLhExD5EBXmNqEe1lkXSeDnvgsRfVmu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pitong10",
  linkedin: "https://www.linkedin.com/in/pitong10/",
  gmail: "pitongku@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ANDROID DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Payment Gateway / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "devicon-androidstudio-plain colored"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain colored"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "devicon-kotlin-plain colored"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain colored"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "devicon-dart-plain colored"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "devicon-sqldeveloper-plain"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "devicon-firebase-plain colored"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain colored"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Teknologi Adhi Tama Surabaya",
      logo: itatsLogo,
      subHeader: "Bachelor Degree in Informatics Engineering",
      duration: "August 2014 - November 2019",
      desc: "Participated in the research of Unity Game Development and published 1 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",
      company: "Triv Crypto Exchange",
      companylogo: trivLogo,
      date: "May 2023 – Present",
      desc: "Indonesian cryptocurrency trading platform enabling users to buy, sell, and manage digital assets securely.",
      descBullets: [
        "Implement MVVM + Clean Architecture for scalable and maintainable code.",
        "Collaborate with backend and product teams to deliver new features.",
        "Optimize app performance and improve user experience.",
      ]
    },
    {
      role: "Software Developer",
      company: "PT Jasuindo Tiga Perkasa Tbk",
      companylogo: jasuindoLogo,
      date: "Oct 2020 – May 2023",
      desc: "Leading Indonesian security printing company specializing in secure documents, smart cards, and digital identity solutions.",
      descBullets: [
        "Built applications and internal tools to support company operations.",
        "Worked with multiple technologies including Android, backend integration, and system automation.",
      ]
    },
    {
      role: "Android Developer",
      company: "PT Alugara Inovasi Utama",
      companylogo: alugaraLogo,
      date: "Mar 2019 – Oct 2020",
      desc: "Tech company specializing in software development and digital solutions, delivering innovative applications and technology services for various industries.",
      descBullets: [
        "Integrated REST APIs and implemented UI/UX based on design requirements.",
        "Maintained and improved existing application features.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: pujaseraLogo,
      projectName: "PPA Pujasera",
      projectDesc: "Developed a food ordering application for Koperasi PPA Sejahtera, enabling employees to order meals digitally from the cooperative cafeteria with a more efficient and organized system.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://play.google.com/store/apps/details?id=com.ppapujasera"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: fishinfoLogo,
      projectName: "Fish Info Jatim",
      projectDesc: "Fisheries information platform that provides data on fish prices, stock availability, and fisheries products across East Java.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fishinfojatim.net/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

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
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
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
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-877-0315-6387",
  email_address: "pitongku@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
