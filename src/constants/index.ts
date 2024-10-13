import * as image from "@assets/index";

export const NAVBAR = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "connect",
    title: "Connect",
  },
];

export const CORE_SKILL = [
  {
    title: "Ftontend Development",
    icon: image.About.frontend,
  },
  {
    title: "Backend Development",
    icon: image.About.backend,
  },
  {
    title: "Unit Testings",
    icon: image.About.unitTest,
  },
  {
    title: "Docker & Kubernetes",
    icon: image.About.docker,
  },
];

export const TECH_SKILLS = [
  {
    name: "React",
    icon: image.Tech.reactjs,
  },
  {
    name: "Django",
    icon: image.Tech.django,
  },
  {
    name: "Express",
    icon: image.Tech.express,
  },
  {
    name: "Python",
    icon: image.Tech.python,
  },
  {
    name: "HTML 5",
    icon: image.Tech.html,
  },
  {
    name: "CSS 3",
    icon: image.Tech.css,
  },
  {
    name: "TypeScript",
    icon: image.Tech.typescript,
  },
  {
    name: "JavaScript",
    icon: image.Tech.javascript,
  },
  {
    name: "Node.js",
    icon: image.Tech.nodejs,
  },
  {
    name: "Java",
    icon: image.Tech.java,
  },
  {
    name: "C++",
    icon: image.Tech.cpp,
  },
  {
    name: "Tailwind CSS",
    icon: image.Tech.tailwind,
  },
  {
    name: "Material UI",
    icon: image.Tech.mui,
  },
  {
    name: "Bootstrap",
    icon: image.Tech.bootstrap,
  },
  {
    name: "Postgre SQL",
    icon: image.Tech.postgre,
  },
  {
    name: "MySQL",
    icon: image.Tech.mysql,
  },
  {
    name: "Firebase",
    icon: image.Tech.firebase,
  },
  {
    name: "Three.js",
    icon: image.Tech.threejs,
  },
  {
    name: "git",
    icon: image.Tech.git,
  },
  {
    name: "Jira",
    icon: image.Tech.jira,
  },
  {
    name: "Puppeteer",
    icon: image.Tech.puppeteer,
  },
  {
    name: "Playwright",
    icon: image.Tech.playwright,
  },
  {
    name: "Google Cloud",
    icon: image.Tech.google_cloud,
  },
  {
    name: "Google OR-Tools",
    icon: image.Tech.google_or,
  },
  {
    name: "figma",
    icon: image.Tech.figma,
  },
  {
    name: "VirtualBox",
    icon: image.Tech.virtualbox,
  },
  {
    name: "UiPath",
    icon: image.Tech.uipath,
  },
  {
    name: "Android Studio",
    icon: image.Tech.androidstudio,
  },
  {
    name: "Jupyter",
    icon: image.Tech.jupyter,
  },
];

export const JOURNEY = [
  {
    title: "Real Estate Negotiator",
    company_name: "Vivahomes Realty",
    icon: image.Work.vivahomes,
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
    icon: image.Work.newtz,
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
    icon: image.Work.dataannotation,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Analyzes and Annotate responses from Large Language Models (LLM) in various topics (e.g. programming, algorithm, coding theory)",
      "Familiarized myself the training process of LLMs, which has improved my ability to interact with other LLMs and enhance efficiency for my daily tasks.",
    ],
  },
];

export const PROJECTS = [
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
    image: image.Projects.nepts,
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
    image: image.Projects.healthcare,
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
    image: image.Projects.myedoctor,
    source_code_link: "https://github.com/LYK315/My-E-Doctor",
  },
];

export const CONNECT = [
  {
    name: "linkedin",
    icon: image.Other.linkedin,
    source_code_link: "http://www.linkedin.com/in/yi-kai-liaw-04aa7221a",
  },
  {
    name: "github",
    icon: image.Other.github,
    source_code_link: "https://github.com/LYK315",
  }
]

export const QUESTIONS = [
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
