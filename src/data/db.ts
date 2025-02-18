/* Skills */
import HTMLLogo from "@images/logos/html.svg";
import CSSLogo from "@images/logos/css.svg";
import JavaScriptLogo from "@images/logos/javascript.svg";
import BootstrapLogo from "@images/logos/bootstrap.svg";
import TailwindCSSLogo from "@images/logos/tailwindcss.svg";
import NodeJSLogo from "@images/logos/nodejs.svg";
import ExpressJSLogo from "@images/logos/expressjs.svg";
import PHPLogo from "@images/logos/php.svg";
import PythonLogo from "@images/logos/python.svg";
import MySQLLogo from "@images/logos/mysql.svg";
import GitLogo from "@images/logos/git.svg";
import GithubLogo from "@images/logos/github.svg";
import EJSLogo from "@images/logos/ejs.svg";
import TypeScriptLogo from "@images/logos/typescript.svg";
import ReactLogo from "@images/logos/react.svg";
import AstroLogo from "@images/logos/astro.svg";
import DockerLogo from "@images/logos/docker.svg";

/* Projects */
import ZooSystem from "@images/projects/zoo-system.webp";
import MyPortfolio from "@images/projects/my-portfolio.webp";
import Emoticare from "@images/projects/emoticare.webp";
import Rentify from "@images/projects/rentify.webp";
import FinanciaAl from "@images/projects/financia.al.webp";
import SubastArt from "@images/projects/subastart.webp";

export const MYLINKS = {
  CV: "https://drive.google.com/file/d/1Ad-R33SOG9fnXSQb5CoqNz9vVxv-bnb2/view?usp=sharing",
  LINKEDIN: "https://www.linkedin.com/in/angel-anez/",
  GITHUB: "https://github.com/AngelAnez",
  EMAIL: "angdavid2910@gmail.com",
};

export const SKILLS: Skill[] = [
  {
    name: "HTML",
    logo: HTMLLogo,
    type: "Frontend",
  },
  {
    name: "CSS",
    logo: CSSLogo,
    type: "Frontend",
  },
  {
    name: "JavaScript",
    logo: JavaScriptLogo,
    type: "Frontend",
  },
  {
    name: "Bootstrap",
    logo: BootstrapLogo,
    type: "Frontend",
  },
  {
    name: "TailwindCSS",
    logo: TailwindCSSLogo,
    type: "Frontend",
  },
  {
    name: "NodeJS",
    logo: NodeJSLogo,
    type: "Backend",
  },
  {
    name: "ExpressJS",
    logo: ExpressJSLogo,
    type: "Backend",
  },
  {
    name: "PHP",
    logo: PHPLogo,
    type: "Backend",
  },
  {
    name: "Python",
    logo: PythonLogo,
    type: "Backend",
  },
  {
    name: "MySQL",
    logo: MySQLLogo,
    type: "Backend",
  },
  {
    name: "Git",
    logo: GitLogo,
    type: "Desarrollo",
  },
  {
    name: "GitHub",
    logo: GithubLogo,
    type: "Desarrollo",
  },
  {
    name: "EJS",
    logo: EJSLogo,
    type: "Backend",
  },
  {
    name: "TypeScript",
    logo: TypeScriptLogo,
    type: "Frontend",
  },
  {
    name: "React",
    logo: ReactLogo,
    type: "Frontend",
  },
  {
    name: "Astro",
    logo: AstroLogo,
    type: "Frontend",
  },
  {
    name: "Docker",
    logo: DockerLogo,
    type: "Desarrollo",
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
    image: ZooSystem,
    github: "https://github.com/AngelAnez/registro-zoo-paraguana",
  },
  {
    title: "Portafolio Personal",
    description: [
      "Carta de presentación para mostrar mi experiencia, proyectos, tecnologías y datos de contacto.",
      "Este proyecto permitió prácticar el uso de Astro para generar sitios estáticos, crear componentes reutilizables, y prácticar los estilos con TailwindCSS.",
    ],
    stack: ["Astro", "TailwindCSS"],
    image: MyPortfolio,
    demo: "/",
    github: "https://github.com/AngelAnez/my-portfolio",
  },
  {
    title: "Emoticare",
    description: [
      "Plataforma de telemedicina que permite a los usuarios agendar citas médicas con especialistas de la salud mental y llevar a cabo estas consultas a través de videollamada.",
      "En este proyecto, trabajé en la parte del Frontend y pude prácticar mis conocimientos en React y TypeScript, así como el trabajo en equipo a través de ramas de Git y GitHub",
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Git", "Github"],
    image: Emoticare,
    github: "https://github.com/AngelAnez/c20-41-n-node-react",
    demo: "https://emoticare-demo.onrender.com",
  },
  {
    title: "Rentify",
    description: [
      "Aplicación web que simplifica el proceso de alquiler de propiedades, conectando a propietarios e inquilinos en un entorno intuitivo y seguro. Tanto propietarios como inquilinos pueden gestionar sus propiedades y búsquedas de manera eficiente.",
      "En este proyecto, trabajé con Material UI como librería de componentens en conjunto con React y TypeScript para desarrollar las interfaces de forma más óptima",
    ],
    stack: ["React", "TypeScript", "Material UI", "Git", "Github"],
    image: Rentify,
    github: "https://github.com/AngelAnez/S18-23-n-java-react",
    demo: "https://rentify-demo.onrender.com/",
  },
  {
    title: "Financia.al",
    description: [
      "Financia.al es una plataforma web fintech que busca conectar a inversores interesados en financiar la venta de terrenos en distintos países de Latinoamérica con potenciales compradores, ofreciendo una experiencia simplificada y segura para todos los usuarios.",
      "En este proyecto, trabajé con Material UI como librería de componentens en conjunto con React y TypeScript para desarrollar las interfaces de forma más óptima",
    ],
    stack: ["React", "TypeScript", "TailwindCSS", "Zustand", "Git", "Github"],
    image: FinanciaAl,
    github: "https://github.com/AngelAnez/equipo-h3-18-proptech",
    demo: "https://equipo-h3-18-proptech-desarrollo.onrender.com/",
  },
  {
    title: "SubastArt",
    description: [
      "Plataforma de subastas online, donde los usuarios pueden publicar y vender obras de arte o participar en emocionantes subastas en vivo para conseguir obras exclusivas.",
      "En este proyecto, pude aprender y practicar la conexión con WebSockets con React y JavaScript, así como mejorar en el uso de las View Transitions.",
    ],
    stack: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "WebSockets",
      "Git",
      "Github",
    ],
    image: SubastArt,
    demo: "https://s20-04-n-frontend.onrender.com/",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rafael Enrique Cortez",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHKzfD3rGfKsA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730396990188?e=1744848000&v=beta&t=6MDUk2smiETgvDRqeR1aHIe2fj-kQfkq64kYxelFDNI",
    role: "Backend Developer",
    text: `Angel es solidario con sus compañeros, siempre dispuesto a ayudar, una persona muy comprometida y responsable.`,
    linkedin: "https://www.linkedin.com/in/rafael-ecortez",
  },
  {
    name: "Triana Devia",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHjUgeOwmUtdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728234699056?e=1744848000&v=beta&t=Gv3aN3FdnaP05iCof7_Oc0BHTRI07SgftQE25f7B41A",
    role: "Project Manager",
    text: `Ángel es un líder nato, habiendo dirigido el equipo de Frontend con excelencia. Su carisma, participación activa y actitud solidaria han sido clave para el éxito del proyecto.`,
    linkedin: "https://www.linkedin.com/in/triana-devia",
  },
  {
    name: "Kenti Gabriel Antezana",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHHR31kfQEIIg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1671717691480?e=1744848000&v=beta&t=tAi7bi67swIAz6O8scN2qri_r_BG6cR2TBxIi5whB4o",
    role: "Backend Developer",
    text: `Tuve la oportunidad de trabajar con Ángel en No Country. Es un profesional impecable, bien predispuesto, con unas admirables habilidades en el desarrollo frontend. Posee grandes habilidades comunicativas, es una persona empatica y que se sabe comunicar muy bien. Ademas destaco su buen compañerismo y proactividad, con un perfil orientado al cumplimiento de objetivos. Sin dudas es alguien que recomiendo para trabajar.`,
    linkedin: "https://www.linkedin.com/in/kenti-gabriel-antezana-16364725b",
  },
  {
    name: "Deivison Jimenez",
    image:
      "https://media.licdn.com/dms/image/v2/D4E35AQEBCtuhlg1X3A/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1728668908296?e=1740157200&v=beta&t=hvzwCJQekqwpIsOEMuGFL5b5D9p9MKk2ycXs5hFgJJQ",
    role: "Backend Developer",
    text: `Me es grato poder realizar esta recomendacion a Angel Durante el proyecto de No-Contry, ha sido una persona muy dedicada, de gran valor para el equipo, desde el Frontend a Realizado un Gran trabajo lleno de mucho apoyo, aporte al proyecto, es una persona Proactiva, reciliente, y demostrado gran compromiso al proyecto`,
    linkedin: "https://www.linkedin.com/in/deivison-jimenez",
  },
  {
    name: "Emanuel Capo",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQE8oaeOOU4fdA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1655414851207?e=1745452800&v=beta&t=1w9Axdu1MzRy9siavev_fwgGvc1OTGuUsjUORO8yDOU",
    role: "FullStack Developer",
    text: `Angel es un profesional muy organizado, proactivo y trabajador. Es muy comunicativo para expresar sus ideas y siempre está dispuesto a ayudar. Tiene un gran conocimiento de React y Typescript y su aporte fue fundamental para llevar adelante el proyecto que compartimos.`,
    linkedin: "https://www.linkedin.com/in/emanuel-capo",
  },
  {
    name: "Natalia Caniza",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQEJ9iUZBjVKVQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1738527190006?e=1740157200&v=beta&t=lyQvPjphwdR2gmSiQ2G7Qma5NZm1863COeAfv-3baTg",
    role: "UX/UI Designer",
    text: `Tuve la suerte de trabajar con Angel en un proyecto fintech que fue todo un desafío y no podría haber pedido un mejor compañero de equipo. Como programador front-end, su conocimiento técnico y atención a los detalles son impresionantes.
Sus aportes fueron clave para el éxito del proyecto y me ayudaron muchísimo a desempeñar mejor mi rol, ya que siempre estaba dispuesto a compartir su conocimiento y colaborar con soluciones creativas.
Sin dudas, trabajar con él fue una experiencia muy enriquecedora y sé que cualquier equipo que lo tenga será afortunado.`,
    linkedin: "https://www.linkedin.com/in/naticaniza",
  },
  {
    name: "Abel Montes Vega",
    image:
      "https://media.licdn.com/dms/image/v2/D4D35AQFpwnZVlIzYxw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1735909161044?e=1740157200&v=beta&t=EG5OhNAQy5LlnN7GqbqyVgmpTX0VIkP_SBRKM7BA3Fo",
    role: "Backend Developer",
    text: `Trabajé junto a Ángel durante una hackathon, donde demostró su capacidad como desarrollador frontend. Supo trabajar de manera eficiente a la par con el backend, logrando una integración completa del proyecto. Además, tuvimos una comunicación fluida que facilitó el desarrollo del trabajo en equipo. Su proactividad y eficacia fueron claves para alcanzar los objetivos del proyecto.`,
    linkedin: "https://www.linkedin.com/in/abel-montes-vega",
  },
  {
    name: "Leon Lederhos",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFil0rLZ-WdEw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727624547253?e=1744848000&v=beta&t=jJc-wq0RdA1N0WCPIIYInFGN9zzkxEVHddFBuKIiXxk",
    role: "Backend Developer",
    text: `Trabaje con Angel desarrollando un MVP en NO-Country. Es una persona excelente completa en todos los ambitos:
- demostro escucha activa y una resolucion de problemas eficaz para cualquier situacion que se plantease
- una puntualidad excelente todos los dias
- Deseos de aprender y mejorar 
- Capacidad de aprendizaje y adaptacion
- Autodidacta proponiendo soluciones nuevas e innovando soluciones existentes

En definitiva fue un placer trabajar con Angel y haber desarrollado el MVP SubastArt`,
    linkedin: "https://www.linkedin.com/in/leonlederhos",
  },
  {
    name: "Brian Díaz",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEfI4-56WowZg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1666802397424?e=1744848000&v=beta&t=3wqT-RgKcuP0zZuHdhn0z9yO-yiJJjImEMZ4fPNLCUI",
    role: "Backend Developer",
    text: `Tuve la oportunidad de trabajar con Ángel en el desarrollo de un MVP, donde se encargó de la parte frontend con React. Desde el primer momento, destacó por su proactividad y excelente comunicación, lo que facilitó enormemente la integración entre el frontend y el backend.

Su capacidad para resolver problemas y optimizar la interfaz de usuario fue clave para garantizar una experiencia fluida y atractiva. Además, siempre estuvo dispuesto a proponer mejoras, investigar nuevas soluciones y adaptarse a los cambios con rapidez.

Ángel es un profesional comprometido, con gran atención al detalle y un fuerte enfoque en la usabilidad y el rendimiento. Su actitud colaborativa y su pasión por la tecnología hacen que sea un miembro valioso en cualquier equipo de desarrollo`,
    linkedin: "https://www.linkedin.com/in/brianodz",
  },
];
