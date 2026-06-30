import pc from "../assets/projects/portifolio.jpg";
import brinco from "../assets/projects/brinco.jpg";
import snake from "../assets/projects/snake.jpg";

export const HERO_CONTENT = `I am a passionate developer with a talent for 
building robust and scalable web applications. My goal is to leverage my experience to create innovative solutions 
that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I started studying programming in 2022 and have been 
continuously expanding my knowledge ever since. I enjoy working with low-level and low-abstraction programming 
languages because they help me better understand how software interacts with hardware. I have built several front-end 
websites as personal projects for fun and to improve my skills. I am also passionate about Linux environments and information security, 
and I enjoy exploring these areas through hands-on learning and experimentation.`;

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: pc,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
  },

  {
    title: "API Java",
    image: brinco,
    description:
      "The Glamour Jewelry Store Management API was developed using Spring Boot to support the management of a small jewelry store's resources.",
    technologies: ["Spring Boot", "Java"],
    link:"https://github.com/joaoexe/Glamour",
  },

  {
    title: "Snake Game",
    image: snake,
    description:
      "Thewell-known game inspired by the early 2000s.",
    technologies: ["Java" ],
    link:"https://github.com/joaoexe/SnakeGame-",
  },

];


