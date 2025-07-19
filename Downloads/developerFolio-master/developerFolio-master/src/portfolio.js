/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
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
  username: "Yogeshwaran",
  title: "Hi all, I'm Yogi",
  subTitle: emoji(
    "A passionate Embedded Systems Engineer & Automation Test Specialist 🚀 with experience in building real-time IoT projects, automation testing frameworks, and training the next-gen innovators through my EdTech startup — **Yadhronics**."
  ),
  //resumeLink:
   // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
 // github: "https://github.com/saadpasta",
  //linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "yadhronics.edukid@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
 // facebook: "https://www.facebook.com/saad.pasta7",
 // medium: "https://medium.com/@saadpasta",
 // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVELOPER + EDUCATOR WHO BUILDS TECH & TRAINS TALENT",
 skills: [
  emoji("⚡ Develop real-time IoT and Embedded Systems Projects using Arduino, ESP32, 8051, and PIC16F877A"),
  emoji("⚡ Design and automate test frameworks using Selenium, Java, Cucumber, and JUnit"),
  emoji("⚡ Conduct hands-on workshops and training for school & college students on Arduino, IoT & Automation"),
  emoji("⚡ Integration of sensors, GSM, GPS, Cloud (AWS/Firebase) for smart automation"),
  emoji("⚡ Build end-to-end Automation Projects from hardware to deployment & testing")
],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
     // skillName: "IOT",
      //fontAwesomeClassname: "fab fa-html5"
    },
    {
      //skillName: "css3",
      //fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      //skillName: "sass",
      //fontAwesomeClassname: "fab fa-sass"
    },
    {
      //skillName: "JavaScript",
    //  fontAwesomeClassname: "fab fa-js"
    },
    {
      //skillName: "reactjs",
     // fontAwesomeClassname: "fab fa-react"
    },
    {
      //skillName: "nodejs",
      //fontAwesomeClassname: "fab fa-node"
    },
    {
      //skillName: "swift",
      //fontAwesomeClassname: "fab fa-swift"
    },
    {
      //skillName: "npm",
      //fontAwesomeClassname: "fab fa-npm"
    },
    {
      //skillName: "sql-database",
     // fontAwesomeClassname: "fas fa-database"
    },
    {
      //skillName: "aws",
     // fontAwesomeClassname: "fab fa-aws"
    },
    {
      //skillName: "firebase",
     // fontAwesomeClassname: "fas fa-fire"
    },
    {
      //skillName: "python",
      //fontAwesomeClassname: "fab fa-python"
    },
    {
      //skillName: "docker",
      //fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SNS College of Technology",
      logo: require("./assets/images/snsLogo.png"), // Replace with your actual logo file
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "August 2017 - April 2021",
      desc: "Focused on Embedded Systems, Microcontrollers, and IoT. Completed multiple real-time projects during academics.",
      descBullets: [
        "Built mini and major projects using 8051, Arduino, and PIC microcontrollers",
        "Actively participated in electronics workshops and project exhibitions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Embedded Systems",
      progressPercentage: "95%"
    },
    {
      Stack: "IoT (Arduino, ESP32, GSM, Sensors)",
      progressPercentage: "95%"
    },
    {
      Stack: "Automation Testing (Selenium Java)",
      progressPercentage: "95%"
    },
    {
      Stack: "Teaching & Mentoring",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Engineer",
      company: "Wipro Technologies",
      companylogo: require("./assets/images/wiproLogo.png"), // Add wiproLogo.png to your images folder
      date: "April 2021 – December 2023",
      desc: "Worked on Embedded System design and development using 8051 microcontroller, focusing on real-time automation applications.",
      descBullets: [
        "Developed and tested embedded solutions using C for 8051 architecture",
        "Collaborated with hardware and testing teams for integrated system validation"
      ]
    },
    {
      role: "Business Analyst",
      company: "Zak Apps Private Limited",
      companylogo: require("./assets/images/zakappsLogo.png"), // Add zakappsLogo.png to your images folder
      date: "January 2024 – Aug 2024",
      desc: "Involved in gathering client requirements, creating technical documentation, and ensuring seamless communication between development and QA teams.",
      descBullets: [
        "Bridged communication between technical and non-technical stakeholders",
        "Documented user stories, system requirements, and process flows"
      ]
    },
      {
  role: "Founder & CEO",
  company: "Yadhronics Private Limited",
  companylogo: require("./assets/images/yadhronicsLogo.png"), // Make sure the image exists
  date: "January 2025 – Present",
  descBullets: [
    "Founded Yadhronics to bridge industry and education through practical electronics and automation training",
    "Designed and delivered workshops on Embedded Systems, IoT, and Automation Testing",
    "Led a team to develop hands-on tech solutions and upskill students across schools and colleges"
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
  subtitle: "REAL-WORLD SOLUTIONS BUILT IN EMBEDDED SYSTEMS & IOT",
  projects: [
    {
      image: require("./assets/images/accidentAlertLogo.png"), // Add a suitable logo image
      projectName: "Accident Alert System",
      projectDesc:
        "Built using ESP32, GSM, GPS (satellite), and Accelerometer to detect bike accidents and send emergency alerts with location.",
      footerLink: [
        {
          name: "Project Demo",
          url: "https://yadhronics.com/accident-alert-demo" // Replace with actual link if available
        }
      ]
    },
    {
      image: require("./assets/images/deafDumbCommLogo.png"), // Add a suitable logo image
      projectName: "Communication Device for Deaf & Dumb",
      projectDesc:
        "Gesture-based communication device using Bluetooth and Flex sensors to convert hand movements into text/audio.",
      footerLink: [
        {
          name: "Project Video",
          url: "https://yadhronics.com/deaf-comm-demo" // Replace with actual link if available
        }
      ]
    },
    {
      image: require("./assets/images/beeHiveLogo.png"), // Add a suitable logo image
      projectName: "Smart Beehive Monitoring System",
      projectDesc:
        "Developed an IoT-based smart beehive system for temperature, humidity, and activity monitoring with real-time alerts.",
      footerLink: [
        {
          name: "View Details",
          url: "https://yadhronics.com/beehive" // Replace with actual link if available
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "NCC Training Completion",
      subtitle:
        "Successfully completed 3 years of NCC (National Cadet Corps) training with leadership and physical endurance certification.",
      image: require("./assets/images/nccLogo.png"), // Add the relevant image to your assets
      imageAlt: "NCC Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "" // Add your certificate link here
        }
      ]
    },
    {
      title: "Embedded System Design",
      subtitle:
        "Completed hands-on embedded design projects with 8051, ESP32, Arduino, Raspberry Pi and various communication protocols (UART, SPI, I2C).",
      image: require("./assets/images/embeddedLogo.png"), // Add your own icon
      imageAlt: "Embedded Systems Logo",
      footerLink: []
    },
    {
      title: "Career Counseling",
      subtitle:
        "Guided 50+ students across schools and colleges as a certified Career Counselor.",
      image: require("./assets/images/counselorLogo.png"), // Add your own icon
      imageAlt: "Career Counseling Logo",
      footerLink: []
    },
    {
      title: "Motivational Speaker",
      subtitle:
        "Delivered motivational sessions and keynotes to inspire youth in over 5+ institutions.",
      image: require("./assets/images/speakerLogo.png"), // Add your own icon
      imageAlt: "Motivational Speaker Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7639329479",
  email_address: "yadhronics.edukid@gmail.com"
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
  isHireable,
  resumeSection
};
