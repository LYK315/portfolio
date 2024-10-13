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
    icon: image.frontend,
  },
  {
    title: "Backend Development",
    icon: image.backend,
  },
  {
    title: "Unit Testings",
    icon: image.unitTest,
  },
  {
    title: "Docker & Kubernetes",
    icon: image.docker,
  },
];

export const TECH_SKILLS = [
  {
    name: "React",
    icon: image.reactjs,
  },
  {
    name: "Django",
    icon: image.django,
  },
  {
    name: "Express",
    icon: image.express,
  },
  {
    name: "Python",
    icon: image.python,
  },
  {
    name: "HTML 5",
    icon: image.html,
  },
  {
    name: "CSS 3",
    icon: image.css,
  },
  {
    name: "TypeScript",
    icon: image.typescript,
  },
  {
    name: "JavaScript",
    icon: image.javascript,
  },
  {
    name: "Node.js",
    icon: image.nodejs,
  },
  {
    name: "Java",
    icon: image.java,
  },
  {
    name: "C++",
    icon: image.cpp,
  },
  {
    name: "Tailwind CSS",
    icon: image.tailwind,
  },
  {
    name: "Material UI",
    icon: image.mui,
  },
  {
    name: "Bootstrap",
    icon: image.bootstrap,
  },
  {
    name: "Postgre SQL",
    icon: image.postgre,
  },
  {
    name: "MySQL",
    icon: image.mysql,
  },
  {
    name: "Firebase",
    icon: image.firebase,
  },
  {
    name: "Three.js",
    icon: image.threejs,
  },
  {
    name: "git",
    icon: image.git,
  },
  {
    name: "Jira",
    icon: image.jira,
  },
  {
    name: "Puppeteer",
    icon: image.puppeteer,
  },
  {
    name: "Playwright",
    icon: image.playwright,
  },
  {
    name: "Google Cloud",
    icon: image.google_cloud,
  },
  {
    name: "Google OR-Tools",
    icon: image.google_or,
  },
  {
    name: "figma",
    icon: image.figma,
  },
  {
    name: "VirtualBox",
    icon: image.virtualbox,
  },
  {
    name: "UiPath",
    icon: image.uipath,
  },
  {
    name: "Android Studio",
    icon: image.androidstudio,
  },
  {
    name: "Jupyter",
    icon: image.jupyter,
  },
];

export const JOURNEY = [
  {
    title: "Real Estate Negotiator",
    company_name: "Vivahomes Realty",
    icon: image.vivahomes,
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
    icon: image.newtz,
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
    icon: image.dataannotation,
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
    image: image.nepts,
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
    image: image.healthcare,
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
    image: image.myedoctor,
    source_code_link: "https://github.com/LYK315/My-E-Doctor",
  },
];

export const CONNECT = [
  {
    name: "linkedin",
    icon: image.linkedin,
    source_code_link: "http://www.linkedin.com/in/yi-kai-liaw-04aa7221a",
  },
  {
    name: "github",
    icon: image.github,
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
