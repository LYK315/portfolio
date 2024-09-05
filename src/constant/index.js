import {
  backend,
  web,
  android,
  ga,

  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  django,
  firebase,
  google_cloud,
  google_or,
  java,
  mui,
  postgre,
  python,
  cpp,
  jira,
  virtualbox,
  uipath,
  bootstrap,
  androidstudio,
  jupyter,
  mysql,
  threejs,

  vivahomes,
  dataannotation,
  newtz,

  github,
  linkedin,

  myedoctor,
  healthcare,
  nepts,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "connect",
    title: "Connect",
  },
];

const services = [
  {
    title: "Ftontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Application",
    icon: android,
  },
  {
    title: "Genetic Algorithm",
    icon: ga,
  },
];

const skills = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Postgre SQL",
    icon: postgre,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "Google Cloud",
    icon: google_cloud,
  },
  {
    name: "Google OR-Tools",
    icon: google_or,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
  {
    name: "UiPath",
    icon: uipath,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "Jupyter",
    icon: jupyter,
  },
];

// "Developing and maintaining web applications using React.js and other related technologies.",
// "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// "Implementing responsive design and ensuring cross-browser compatibility.",
// "Participating in code reviews and providing constructive feedback to other developers.",
const journeys = [
  {
    title: "Real Estate Negotiator",
    company_name: "Vivahomes Realty",
    icon: vivahomes,
    iconBg: "#383E56",
    date: "Sep 2021 - Aug 2023",
    points: [
      "Learnt the most important skills in my life, sales, negotiation and customer management.",
      "Unexpected challenges arise daily in the property business, and I've developed strong problem-solving skills as a result.",
      "Allows me to approach challenges with unique perspectives."
    ],
  },
  {
    title: "Co-Founder, Shirt Printing Business",
    company_name: "Newtz",
    icon: newtz,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Co-founded a shirt printing business, initially handling operations, sales, and marketing.",
      "Transitioned to a more strategic role as the business grew, allowing a focus on IT career while the business continued to thrive under the leadership of other partners."
    ],
  },
  {
    title: "Data Annotator",
    company_name: "Data Annotation",
    icon: dataannotation,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Analyzes and Annotate responses from Large Language Models (LLM) in various topics (e.g. programming, algorithm, coding theory)",
      "Familiarized myself the training process of LLMs, which has improved my ability to interact with other LLMs and enhance efficiency for my daily tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Non-Emergency Patient Transport Service",
    description:
      "A platform that offers a seamless Non-Emergency Patient Transport Service (NEPTS), enabling patients to manage their bookings through a few simple steps. It also provides staff with access to optimized routing schedules.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "google or-tools",
        color: "pink-text-gradient",
      },
    ],
    image: nepts,
    source_code_link: "https://github.com/LYK315/Top_Patient_Web_App",
  },
  {
    name: "Helth Care Center",
    description:
      "Web application that enables users to book appointment online, view schedules, find doctor specialists, get latest health care information, and more. Bringing the medical center online.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/LYK315/Health-Care-Web-App",
  },
  {
    name: "My E-Doctor",
    description:
      "Android Application that allows patients to manage appointments, get latest health information, attend online meeting with doctor, and more. Aiming to minimize contact between people during the pandemic time.",
    tags: [
      {
        name: "android-studio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: myedoctor,
    source_code_link: "https://github.com/LYK315/My-E-Doctor",
  },
];

const connect = [
  {
    name: "linkedin",
    icon: linkedin,
    source_code_link: "http://www.linkedin.com/in/yi-kai-liaw-04aa7221a",
  },
  {
    name: "github",
    icon: github,
    source_code_link: "https://github.com/LYK315",
  }
]

const questions = [
  {
    question: "I like to work 24/7 💻",
    ans: false,
    correct: "Mhm.. Kai needs rest. But he only rests when the job is done.",
    wrong: "Kai is not a machine.. But he only rests when the job is done.",
  },
  {
    question: "Stress and Challenge will only fuel my adrenaline and push me to new heights🔥🔥",
    ans: true,
    correct: "Mhm.. Indeed, Kai has a strong appetite for challenges.",
    wrong: "Kai is not built different, but he thrives on challenges!",
  },
  {
    question: "I can do anything 💪",
    ans: false,
    correct: "True, Kai is not a genius.. but he will learn anything necessary to get the job done.",
    wrong: "Sorry, Kai can't do anything.. but he will learn anything necessary to get the job done.",
  }
]

export { services, skills, journeys, testimonials, projects, connect, questions };
