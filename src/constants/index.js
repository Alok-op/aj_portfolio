import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "Welcome to my portfolio! I’m a fullstack developer passionate about creating seamless, scalable web applications from responsive frontends to powerful backends. Explore my projects to see how I bring ideas to life with clean, efficient code.";

export const ABOUT_TEXT = [
  "I’m a Java fullstack developer with over 4.5 years of experience in building fast, responsive, and accessible web applications.",
  "My journey began with small website projects, and today, as a Senior Software Engineer at UKG, I work on large scale enterprise applications developing intuitive user interfaces on the frontend and robust APIs using Java on the backend.",
  "I enjoy blending logic and design to build scalable, user-friendly, and visually engaging digital experiences."
]

export const EXPERIENCES = [
  {
    year: "June 2023 - Present",
    role: "Fullstack Developer",
    company: "UKG (Ultimate Kronos Group)",
    description: [
      "Set up a microfrontend architecture using single-spa and Module Federation to enable independent deployments and seamless integration across teams.",
      "Developed and deployed end-to-end features using React.js and Spring Boot, contributing to a scalable and performant fullstack architecture.",
      "Led the design and implementation of a responsive React frontend integrated with RESTful APIs built in Spring Boot, improving load time through code splitting, lazy loading, and efficient state management.",
      "Implemented dynamic onboarding workflows and wizard interfaces, enhancing user experience and reducing user drop-off through personalized UI and form validation logic."
    ],
    technologies: ["React.js", "Spring Boot", "Redux", "Java", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    year: "February 2021 - May 2023",
    role: "Frontend Developer",
    company: "Damco Solutions",
    description: [
      "Streamlined claims management at Sagicor, reducing user task completion time and accelerating claim resolutions, boosting customer retention.",
      "Optimized policy renewal workflows at Sagicor, cutting processing time and improving customer satisfaction.",
      "Improved Sagicor user task completion time through UI/UX optimizations, resulting in faster customer interactions and higher conversions.",
      "Enhanced workflow efficiency at Sagicor by automating policy renewals and reminders, supporting sales teams in closing more policies."
    ],
    technologies: ["React", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3", "Node Js"],
  }
];

export const PROJECTS = [
  {
    title: "Movie Prime",
    image: project4,
    description:"Developed MoviePrime, a full-stack app using Spring Boot and React with JWT-based auth and complete CRUD operations for movies, including role-based access and form validation.",
    technologies: ["Spring Boot", "React", "Redux", "JavaScript", "typeScript", "MySql", "HTML"],
    githubRepoUrl:"https://github.com/Alok-op/Movie-Prime"
  },
  {
    title: "Online book store",
    image: project1,
    description: "A full-stack e-commerce platform for users to browse, search, and purchase books, with features like secure authentication, cart management etc.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express", "HTML", "CSS"],
    githubRepoUrl:"https://github.com/Alok-op/book-store"
  },
  {
    title: "My Portfolio Website",
    image: project3,
    description: "My personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "JavaScript", "Tailwind", "HTML", "CSS"],
    githubRepoUrl:"https://github.com/Alok-op/aj_portfolio"
  },
  {
    title: "E-Commerce web application",
    image: project4,
    description:"A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Angular", "JavaScript", "typeScript", "Node.js", "MongoDB", "HTML", "CSS"],
    githubRepoUrl:"https://github.com/Alok-op/ecommerce_application"
  },
];

export const CONTACT = {
  address: "Faridabad, Haryana, India - 121003",
  phoneNo: "+91 8800501498",
  email: "alokjha0209@gmail.com",
};
