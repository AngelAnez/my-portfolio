export const MYLINKS = {
  CV: "https://drive.google.com/file/d/1Ad-R33SOG9fnXSQb5CoqNz9vVxv-bnb2/view?usp=sharing",
  LINKEDIN: "https://www.linkedin.com/in/angel-anez/",
  GITHUB: "https://github.com/AngelAnez",
  EMAIL: "angdavid2910@gmail.com",
};

export const SKILLS: Skill[] = [
  {
    name: "HTML",
    logo: "/images/html.svg",
  },
  {
    name: "CSS",
    logo: "/images/css.svg",
  },
  {
    name: "JavaScript",
    logo: "/images/javascript.svg",
  },
  {
    name: "Bootstrap",
    logo: "/images/bootstrap.svg",
  },
  {
    name: "TailwindCSS",
    logo: "/images/tailwindcss.svg",
  },
  {
    name: "NodeJS",
    logo: "/images/nodejs.svg",
  },
  {
    name: "ExpressJS",
    logo: "/images/expressjs.svg",
  },
  {
    name: "PHP",
    logo: "/images/php.svg",
  },
  {
    name: "Python",
    logo: "/images/python.svg",
  },
  {
    name: "MySQL",
    logo: "/images/mysql.svg",
  },
  {
    name: "Git",
    logo: "/images/git.svg",
  },
  {
    name: "GitHub",
    logo: "/images/github.svg",
  },
  {
    name: "EJS",
    logo: "/images/ejs.svg",
  },
  {
    name: "TypeScript",
    logo: "/images/typescript.svg",
  },
  {
    name: "React",
    logo: "/images/react.svg",
  },
  {
    name: "Astro",
    logo: "/images/astro.svg",
  },
  {
    name: "Docker",
    logo: "/images/docker.svg",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    position: "Practicante",
    company: "PDVSA",
    "start-date": "Abril 2023",
    "end-date": "Agosto 2023",
    "job-duty": [
      "Construí una API utilizando Python que recopila la información de los equipos monitoreados por Nagios",
      "Desarrollé un módulo en Python para enviar notificaciones y alertas de estado de los equipos críticos a través de un bot de Telegram",
      "Implementé la generación reportes en PDF sobre el estado general de equipos y servicios en la interfaz web de Nagios haciendo uso de JavaScript y PHP",
    ],
  },
  {
    position: "Frontend Web Developer",
    company: "No Country",
    "start-date": "Agosto 2024",
    "end-date": "Enero 2025",
    "job-duty": [
      "Desarrollé interfaces de usuario llamativas adaptadas al diseño responsivo haciendo uso de React y TypeScript",
      "Apliqué estilos a las vistas de las aplicaciones haciendo uso de Tailwind CSS y Material UI",
      "Implementé formularios haciendo uso de React Hook Form para proporcionarle al usuario mensajes de validación personalizados",
      "Utilicé React Router para el manejo de las vistas a través de rutas en una SPA",
      "Integré servicios y APIs externas haciendo uso de Axios",
      "Colaboré con otros Frontend, Backend, Diseñadores y Project Manager para la distribución de tareas que nos permitiera llevar a cabo los proyectos en los plazos establecidos",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Registro de Visitantes",
    description: [
      "Sistema diseñado con el objetivo de ayudar al Zoológico Paraguaná a automatizar su flujo de trabajo en la taquilla.",
      "Además de registrar visitantes, cuenta con secciones para ver el historial de cada visita, conocer las estadísticas generales en un rango de fechas y exportarlas a PDF, generar novedades, administrar las cuentas de usuario y modificar el precio de las entradas.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "NodeJS",
      "ExpressJS",
      "EJS",
      "MySQL",
    ],
    image: "zoo-system.webp",
    github: "https://github.com/AngelAnez/registro-zoo-paraguana",
  },
  {
    title: "Portafolio Personal",
    description: [
      "Carta de presentación para mostrar mi experiencia, proyectos, tecnologías y datos de contacto.",
      "Este proyecto permitió prácticar el uso de Astro para generar sitios estáticos, crear componentes reutilizables, y prácticar los estilos con TailwindCSS.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Astro"],
    image: "my-portfolio.webp",
    demo: "/",
    github: "https://github.com/AngelAnez/my-portfolio",
  },
  {
    title: "Emoticare",
    description: [
      "Plataforma de telemedicina realizada en equipo que permite a los usuarios agendar citas médicas con especialistas de la salud mental y llevar a cabo estas consultas a través de videollamada.",
      "En este proyecto, trabajé en la parte del Frontend y pude prácticar mis conocimientos en React y TypeScript, así como el trabajo en equipo a través de ramas de Git y GitHub",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TailwindCSS",
      "React",
      "TypeScript",
      "Git",
      "Github",
    ],
    image: "Emoticare-3.webp",
    github: "https://github.com/AngelAnez/c20-41-n-node-react",
    demo: "https://emoticare-demo.onrender.com",
  },
];
