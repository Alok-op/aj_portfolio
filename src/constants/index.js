import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "Welcome to my portfolio! I’m a frontend developer focused on building intuitive, user-friendly web experiences. Explore my projects to see the innovative solutions I’ve crafted and my approach to design and development.";

export const ABOUT_TEXT = [
  "I'm a frontend developer with over 3.5+ years of experience in creating fast, responsive, and accessible websites and applications.",
  "My journey started with building small websites, and now, as a Senior Software Engineer at UKG, I work on large-scale projects, crafting delightful user interfaces and API integration.",
  "I love combining the worlds of logic and creative design to make eye-catching, accessible and user-friendly web applications."
]

export const EXPERIENCES = [
  {
    year: "June 2023 - Present",
    role: "Frontend Developer",
    company: "UKG (Ultimate Kronos Group)",
    description: [
      "Optimized web applications for maximum speed and scalability, improving load times through code optimization and effective use of modern front-end tools.",
      "Integrated RESTful APIs to connect the front-end interface with back-end services, enabling dynamic data presentation and real-time updates.",
      "Wrote unit and integration tests using Jasmine and Karma to ensure code quality, reducing bugs."
    ],
    technologies: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    year: "February 2021 - May 2023",
    role: "Frontend Developer",
    company: "Damco Solutions",
    description: [
      "Developed and maintained responsive, user-friendly web application components and features using React, JavaScript, HTML5 and CSS3.",
      "Upgraded Angular application from version 7 to 14, resolving breaking changes and updating dependencies to improve performance and maintain compatibility.",
      "Redesigned application sections to enhance visual appeal and create a more user-friendly experience."
    ],
    technologies: ["React", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  }
];

export const PROJECTS = [
  {
    title: "Online book store",
    image: project1,
    description: "A full-stack e-commerce platform for users to browse, search, and purchase books, with features like secure authentication, cart management etc.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express", "HTML", "CSS"],
  },
  {
    title: "My Portfolio Website",
    image: project3,
    description: "My personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    title: "E-Commerce web application",
    image: project4,
    description:"A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Angular", "JavaScript", "typeScript", "Node.js", "MongoDB", "HTML", "CSS"],
  },
];

export const CONTACT = {
  address: "Faridabad, Haryana, India - 121003",
  phoneNo: "+91 8800501498",
  email: "alokjha0209@gmail.com",
};
