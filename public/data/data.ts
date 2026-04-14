import { BsBehance, BsGithub, BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const DataComponents = {
  menu: [
    { id: 1, title: "home", to: "/", isDownload: false },
    { id: 2, title: "skills", to: "skills", isDownload: false },
    {
      id: 3,
      title: "experience",
      to: "experience",
      isDownload: false,
    },
    {
      id: 4,
      title: "projects",
      to: "projects",
      isDownload: false,
    },
    {
      id: 5,
      title: "contact us",
      to: "contact",
      isDownload: false,
    },
  ],
  skillsData: {
    frontend: {
      languages: [
        { id: 1, name: "HTML,HTML5" },
        { id: 13, name: "CSS,CSS3" },
        { id: 14, name: "Java script" },
        { id: 15, name: "Typescript" },
      ],
      styling: [
        { id: 6, name: "Tailwind css" },
        { id: 7, name: "Bootstrap 4,5" },
      ],
      framework: [
        { id: 16, name: "React JS" },
        { id: 2, name: "Next JS" },
      ],
      api: [
        { id: 3, name: "Context API" },
        { id: 4, name: "Redux" },
        { id: 5, name: "Redux Toolkit" },
      ],
      library: [
        { id: 11, name: "React Hook Form" },
        { id: 8, name: "Framer motion" },
        { id: 9, name: "Headless UI" },
        { id: 10, name: "Swiper JS" },
        { id: 12, name: "Babylon js" },
      ],
    },

    cicd: [
      { id: 1, name: "Github" },
      { id: 2, name: "Bitbucket" },
      { id: 3, name: "Jira" },
      { id: 4, name: "Netlify" },
      { id: 5, name: "Vercel" },
    ],
    tools: [
      { id: 1, name: "Figma" },
      { id: 6, name: "Canva" },
    ],
  },
  experienceData: [
    {
      id: 1,
      for: "Plly",
      city: "Manila",
      job: "Frontend",
      type: "remotely",
      date: "2022-Aug / 2023-Nov",
      responsibilities: [
        {
          id: 1,
          item: "Developed a dynamic website builder's front-end using React.js, focusing on responsiveness and user-friendliness.",
        },
        {
          id: 2,
          item: "Create components to different categories.",
        },
        { id: 3, item: "Design templates by using components." },
        {
          id: 4,
          item: "Design 3d components by using 3d models and fix it by blinder app then develop it.",
        },
      ],
      skillsUsed:
        "React js , tailwind css , framer motion , headless UI , Babylon js , Next js, Figma ,Swiper JS, clsx , react-hook-form , css , Blind",
    },
    {
      id: 2,
      for: "Techboom",
      city: "Manila",
      job: "Frontend",
      type: "remotely",
      date: "2023-Des / 2024-Mar",
      responsibilities: [
        {
          id: 1,
          item: "Developed a dynamic website builder's front-end using React.js, focusing on responsiveness and user-friendliness.",
        },
        {
          id: 2,
          item: "Update editor page , components and develop templates as websites",
        },
      ],
      skillsUsed:
        "React js , tailwind css , framer motion , headless UI , react-hook-form , css",
    },
    {
      id: 3,
      for: "Accommodation Network",
      city: "New York",
      job: "Frontend",
      type: "remotely",
      date: "2024-Feb",
      link: "https://www.accommodation.network/",
      responsibilities: [
        {
          id: 1,
          item: "Frontend developer for this website  ",
        },
        {
          id: 2,
          item: "update UI design and check it with customer",
        },
      ],
      skillsUsed:
        "Next JS , framer motion , react icons , react scroll , react-spinners",
    },
  ],
  projects: [
    {
      title: "E-learning Platform",
      subtitle: "working with team",
      url: "./assets/courses.png",
      skillsUsed:
        "React 19 + Vite , React Router DOM , React Query (TanStack Query) , Axios , Tailwind CSS , React Hook Form + Zod , Recharts , Framer Motion , ESLint",
      demo: "https://learn-app-five-eta.vercel.app/",
    },
    {
      title: "khadamatak",
      subtitle: "working with team",
      url: "./assets/khadamat.png",
      skillsUsed:
        "React 19 + Vite, Axios , Tailwind CSS , lucid Charts , framer-motion ... etc",
      demo: "https://khadamatak-gamma.vercel.app/",
      github: "https://github.com/NorhanGamalY/khadamatak",
    },
    {
      title: "Accommodation Network",
      url: "./assets/tech.png",
      skillsUsed:
        "Next js ,tailwind css , typescript , framer-motion , headless UI , react-scroll , react-spinners",
      demo: "https://www.accommodation.network/",
    },
    {
      title: "E-commerce",
      url: "./assets/ecom1.png",
      skillsUsed:
        "React js , Tailwind css , swiper js , react-scroll , react-scroll",
      github: "https://github.com/abrar997/ecom-4.git",
      demo: "https://ecom-4.vercel.app/",
    },
    {
      title: "Weather App",
      url: "./assets/weather.png",
      skillsUsed: "React js , Tailwind css , react-icons ",
      github: "https://github.com/abrar997/weather-task.git",
      demo: "https://abrar997.github.io/weather-task/",
    },
    {
      title: "Crud system management",
      url: "./assets/crud2.png",
      skillsUsed: "React Js , Tailwind css , react icons",
      github: "https://github.com/abrar997/crud-system-managment.git",
      demo: "https://crud-system-managment.vercel.app/",
    },
    {
      title: "3D Portfolio",
      url: "./assets/port.png",
      skillsUsed: "Next js , babylon js , tailwind css , typescript",
      github: "https://github.com/abrar997/3d-first",
      demo: "https://3d-first.vercel.app/",
    },
  ],
};

export const SocialData = [
  {
    id: 1,
    title: "email",
    url: "abraralrawi997@gmail.com",
    text: "abraralrawi997@gmail.com",
    icon: MdEmail,
  },
  {
    id: 2,
    title: "phone",
    url: "9647831190254",
    text: "+9647831190254",
    icon: BsTelephone,
  },
  {
    id: 3,
    title: "github",
    url: "https://github.com/abrar997",
    text: "Abrar Muthana",
    icon: BsGithub,
  },
  {
    id: 4,
    title: "behance",
    url: "https://www.behance.net/abraralrawi",
    text: "Abrar Muthana",
    icon: BsBehance,
  },
];
export const formInputs = [
  { type: "text", placeholder: "your name", key: "name", label: "Name" },
  {
    type: "email",
    placeholder: "example@gmail.com",
    key: "email",
    label: "Email",
  },
  {
    type: "text",
    placeholder: "+9647831190",
    key: "phone",
    label: "Phone Number",
  },
  {
    key: "message",
    placeholder: "hello Abrar '_' ",
    label: "Your message ",
  },
];
