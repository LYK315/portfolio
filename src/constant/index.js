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

  vivahomes,
  dataannotation,

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
    id: "work",
    title: "Work",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Postgre SQL",
    icon: postgre,
  },
  {
    name: "Google OR-Tools",
    icon: google_or,
  },
  {
    name: "Google Cloud",
    icon: google_cloud,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

// "Developing and maintaining web applications using React.js and other related technologies.",
// "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// "Implementing responsive design and ensuring cross-browser compatibility.",
// "Participating in code reviews and providing constructive feedback to other developers.",
const experiences = [
  {
    title: "Real Estate Negotiator",
    company_name: "Vivahomes Realty",
    icon: vivahomes,
    iconBg: "#383E56",
    date: "Sep 2021 - Aug 2023",
    points: [
      "Learnt the most important skills in my life, sales and negotiation.",
      "There are always unexpected troubles coming up everyday in the property business, I've developed massive problem-solving skills in this industry.",
    ],
  },
  {
    title: "Data Annotator",
    company_name: "Data Annotation",
    icon: dataannotation,
    iconBg: "#383E56",
    date: "Feb 2024 - Current",
    points: [
      "Part Time",
      "Analyzes and Annotate responses from Large Language Models (LLM) in various topics (e.g. programming, algorithm, coding theory)",
      "Applied this job to familiarize myself with more knowledges about different realms in the tech industry.",
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
      "A platform that provides seamless Non-Emergency Patient Transport Service (NEPTS), allowing patient to manage their booking through few simple steps. As well as allowing staffs to view optimized routing schedule.",
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
    source_code_link: "https://github.com/LYK315/ICP-Project",
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
      "Android Application that allow patients to manage appointments, get latest health information, attend online meeting with doctor, and more. Aiming to minimize contact between people during the pandemic.",
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

export { services, skills, experiences, testimonials, projects, connect };
