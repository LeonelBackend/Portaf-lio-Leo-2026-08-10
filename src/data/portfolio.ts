export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Avanzado' | 'Intermedio' | 'Básico';
  category: 'Frontend' | 'Backend' | 'Herramientas';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Name of icon to render
}

export interface PortfolioData {
  name: string;
  avatar?: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  socials: SocialLink[];
  skills: Skill[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  name: "Leo",
  avatar: "/leo_leo.jpeg", // Pega aquí el enlace de tu foto o el nombre del archivo en la carpeta public (ej: "/mi-foto.jpg")
  title: "Desarrollador Back-End",
  tagline: "Aprendiendo y construyendo nuevas tecnologías.",
  bio: "Desarrollador de 29 años enfocado en el desarrollo web Back-End. Me entusiasma la tecnología, el aprendizaje constante y la creación de aplicaciones eficientes con Node.js y PostgreSQL.",
  email: "Leonelmunoz19971@gmail.com",
  location: "Lima-Perú",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/LeonelBackend",
      icon: "github"
    },


  ],
  skills: [
    // Frontend
    { name: "HTML5 / CSS3", level: "Avanzado", category: "Frontend" },
    { name: "JavaScript (ES6+)", level: "Avanzado", category: "Frontend" },
    { name: "TypeScript", level: "Avanzado", category: "Frontend" },
    { name: "React.js", level: "Avanzado", category: "Frontend" },
    { name: "Tailwind CSS", level: "Avanzado", category: "Frontend" },

    // Backend
    { name: "Node.js", level: "Avanzado", category: "Backend" },
    { name: "Express", level: "Intermedio", category: "Backend" },
    { name: "PostgreSQL", level: "Intermedio", category: "Backend" },
    { name: "MongoDB", level: "Intermedio", category: "Backend" },
    { name: "REST APIs", level: "Avanzado", category: "Backend" },

    // Herramientas
    { name: "Git / GitHub", level: "Avanzado", category: "Herramientas" },
    { name: "VS Code", level: "Avanzado", category: "Herramientas" },
    { name: "Vercel", level: "Avanzado", category: "Herramientas" },
    { name: "Figma", level: "Intermedio", category: "Herramientas" },
    { name: "Postman", level: "Intermedio", category: "Herramientas" }
  ],
  projects: [
    {
      title: "Web de la marca Honda ",
      description: "Pagina web para fanaticos de la marca Honda. ",
      tags: ["React", "JavaScript", "Render", "Git Hub"],
      image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_389a5160aebd4cecaa3befd71e368335.webp",
      demoUrl: "https://honda-autos-fronend.onrender.com/#vtec-visualizer",
      githubUrl: "https://github.com/LeonelBackend/Honda_autos_fronend.git"
    },
    {
      title: "Clinicamente App",
      description: "Aplicación movil para la asesoria de citas medicas especialistas en psicología  .",
      tags: ["Render ", "Java", "React", "Postgree", "Expo GO"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/LeonelBackend/Clinicamente.git"
    },

  ]
};
