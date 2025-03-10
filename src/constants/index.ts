import * as image from "assets/index";

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
    name: "MongoDB",
    icon: image.Tech.mongodb,
  },
  {
    name: "Firebase",
    icon: image.Tech.firebase,
  },
  {
    name: "Flutter",
    icon: image.Tech.flutter,
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
    company_name: "Vivahomes Realty | MY",
    icon: image.Work.vivahomes,
    iconBg: "#383E56",
    date: "Sep 2021 - Aug 2023",
    points: [
      "Learnt the most important skills in my life, sales, negotiation and customer management.",
      "Unexpected challenges arise daily in the property business, and I've developed strong problem-solving skills as a result.",
      "Allows me to approach challenges with unique perspectives.",
    ],
  },
  {
    title: "Co-Founder, Shirt Printing Business",
    company_name: "Newtz | MY",
    icon: image.Work.newtz,
    iconBg: "#383E56",
    date: "Nov 2022 - Dec 2023",
    points: [
      "Co-founded a shirt printing business, initially handling operations, sales, and marketing.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Freelance",
    icon: image.Work.freelance,
    iconBg: "#EEEEEE",
    date: "Jan 2024 - Present",
    points: [
      "Developed a stock management system and build a bespoke web-based product catalouge for a private liquor collection.",
      "I love learning new things, doing my freelance job allows me to learn new technologies while enjoying my free time.",
    ],
  },
  {
    title: "Data Annotator",
    company_name: "Data Annotation",
    icon: image.Work.dataannotation,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Analyzes and Annotate responses from Large Language Models (LLM) in various topics (e.g. programming, algorithm, coding theory).",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Play2Earn | UK",
    icon: image.Work.play2earn,
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Leveraged my expertise in React and Node.js, further enhancing my skills and gaining valuable experience in this role.",
      "Explored blockchain technologies extensively, building a strong foundation and practical skills in this domain.",
    ],
  },
  {
    title: "LLM-GUI Internship",
    company_name: "Quantimental Technologies | UK",
    icon: image.Work.qmt,
    iconBg: "#FFF",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Gained valuable experience learning and using Flutter in this role, I can now say Im also a cross-platform mobile developer.",
      "Acquired practical experience in fine-tuning and adapting LLM models to address specialized applications.",
    ],
  },
  // {
  //   title: "",
  //   company_name: "",
  //   icon: image.Work.,
  //   iconBg: "#383E56",
  //   date: "",
  //   points: [],
  // },
];

export const PROJECTS = [
  {
    name: "Marginal.AI - Financial LLM Chatbot",
    description:
      "An LLM chatbot web app focused on banking and finance, offering stock analysis, insights on U.S.-listed companies, and subscription-based event alerts.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "Node.JS",
        color: "pink-text-gradient",
      },
      {
        name: 'MongoDB',
        color: "orange-text-gradient"
      },
    ],
    // image: ,
    video: image.ProjectVideos.marginalVideo,
    // source_code_link: "https://github.com/LYK315/Top_Patient_Web_App",
  },
  {
    name: "Non-Emergency Patient Transport Service",
    description:
      "A platform that offers a seamless Non-Emergency Patient Transport Service (NEPTS), enabling patients to manage their bookings through a few simple steps. It also provides staff with access to optimized routing schedules.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
      {
        name: 'PostgreSQL',
        color: "orange-text-gradient"
      },
      {
        name: "Google OR-Tools",
        color: "text-red-400",
      },
    ],
    image: image.ProjectImages.nepts,
    video: image.ProjectVideos.neptsVideo,
    source_code_link: "https://github.com/LYK315/Top_Patient_Web_App",
  },
  {
    name: "Helth Care Center",
    description:
      "Web application that enables users to book appointment online, view schedules, find doctor specialists, get latest health care information, and more. Bringing the medical center online.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: image.ProjectImages.healthcare,
    source_code_link: "https://github.com/LYK315/Health-Care-Web-App",
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
  },
];

export const QUESTIONS = [
  {
    question: "I like to work 24/7 💻",
    ans: false,
    correct: "Mhm.. Kai needs rest. But he only rests when the job is done.",
    wrong: "Kai is not a machine.. But he only rests when the job is done.",
  },
  {
    question:
      "Stress and Challenge will only fuel my adrenaline and push me to new heights🔥🔥",
    ans: true,
    correct: "Mhm.. Indeed, Kai has a strong appetite for challenges.",
    wrong: "Kai is not built different, but he thrives on challenges!",
  },
  {
    question: "I can do anything 💪",
    ans: false,
    correct:
      "True, Kai is not a genius.. but he will learn anything necessary to get the job done.",
    wrong:
      "Sorry, Kai can't do anything.. but he will learn anything necessary to get the job done.",
  },
];
