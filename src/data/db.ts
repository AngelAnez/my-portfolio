import {
  EmoticareImages,
  EmoticarePreview,
  FinanciaAlImages,
  FinanciaAlPreview,
  MyPortfolioImages,
  MyPortfolioPreview,
  RentifyImages,
  RentifyPreview,
  skillLogos,
  SubastArtImages,
  SubastArtPreview,
  ZooSystemImages,
  ZooSystemPreview,
} from "@images/index";

export const MYLINKS = {
  CV: "https://drive.google.com/file/d/1Ad-R33SOG9fnXSQb5CoqNz9vVxv-bnb2/view?usp=sharing",
  LINKEDIN: "https://www.linkedin.com/in/angel-anez/",
  GITHUB: "https://github.com/AngelAnez",
  EMAIL: "angdavid2910@gmail.com",
};

export const SKILLS: Skill[] = [
  {
    name: "HTML",
    logo: skillLogos.html,
    type: "Frontend",
  },
  {
    name: "CSS",
    logo: skillLogos.css,
    type: "Frontend",
  },
  {
    name: "JavaScript",
    logo: skillLogos.javascript,
    type: "Frontend",
  },
  {
    name: "Bootstrap",
    logo: skillLogos.bootstrap,
    type: "Frontend",
  },
  {
    name: "TailwindCSS",
    logo: skillLogos.tailwindcss,
    type: "Frontend",
  },
  {
    name: "NodeJS",
    logo: skillLogos.nodejs,
    type: "Backend",
  },
  {
    name: "ExpressJS",
    logo: skillLogos.expressjs,
    type: "Backend",
  },
  {
    name: "PHP",
    logo: skillLogos.php,
    type: "Backend",
  },
  {
    name: "Python",
    logo: skillLogos.python,
    type: "Backend",
  },
  {
    name: "MySQL",
    logo: skillLogos.mysql,
    type: "Backend",
  },
  {
    name: "Git",
    logo: skillLogos.git,
    type: "Desarrollo",
  },
  {
    name: "GitHub",
    logo: skillLogos.github,
    type: "Desarrollo",
  },
  {
    name: "EJS",
    logo: skillLogos.ejs,
    type: "Backend",
  },
  {
    name: "TypeScript",
    logo: skillLogos.typescript,
    type: "Frontend",
  },
  {
    name: "React",
    logo: skillLogos.react,
    type: "Frontend",
  },
  {
    name: "Astro",
    logo: skillLogos.astro,
    type: "Frontend",
  },
  {
    name: "Docker",
    logo: skillLogos.docker,
    type: "Desarrollo",
  },
  {
    name: "MaterialUI",
    logo: skillLogos.materialui,
    type: "Frontend",
  },
  {
    name: "Zustand",
    logo: skillLogos.zustand,
    type: "Frontend",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    position: "Pasantías de Ingeniero de Sistemas",
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
    position: "Desarrollador Web Freelance",
    company: "Zoológico Paraguaná",
    "start-date": "Octubre 2023",
    "end-date": "Marzo 2024",
    "job-duty": [
      "Desarrollé un sistema para digitalizar el registro y control de visitantes del Zoológico",
    ],
  },
  {
    position: "Desarrollador Web Frontend",
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
    description:
      "Sistema web desarrollado a medida para el Zoológico Paraguaná con el objetivo de registrar los datos de los visitantes. Además del registro digital, cuenta con un historial de visitas, estadísticas y reportes por fecha, y una sección para guardar novedades.",
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
    preview: ZooSystemPreview,
    images: ZooSystemImages,
    problem: "",
    result: `Para poder controlar la información de los visitantes de mejor forma, se desarrolló este sistema dividiéndolo en los siguientes módulos:

    📝 Registro de Visitantes: Permite registrar cada visita conociendo la cantidad de miembros en función al género y la edad, su datos de pago, y los datos de contacto del representante familiar.
    🔎 Historial de Visitas: Muestra una tabla que enlista todas las visitas registradas, permitiendo filtrar las búsquedas y conocer toda la información de cada visita. También, los usuarios administradores pueden editar la información de alguna visita en caso de ser necesario.
    📊 Estadísticas Generales: Muestra a través de gráficas la cantidad de visitantes totales en función a un rango de fecha establecido. A su vez, permite descargar esta información a través de informes en formato PDF.
    ❗️ Registro y Control de Novedades: Permite registrar novedades o acontecimientos que ocurran durante la jornada, como por ejemplo, la donación de alimento por parte de alguna familia o institución.
    👥 Administración de Usuarios: Sección única para administradores que permite promover, modificar o eliminar usuarios del sistema.
    ⚙️ Configuraciones: Permite ajustar ciertos parámetros del sistema, como el valor de las entradas, o especificar una tasa personalizada para el dolar.
    
    Gracias a estos módulos, el Sistema de Registro de Visitantes del Zoológico Paraguaná pudo:
    
    - Mejorar la calidad de los datos, evitando redundancia y facilitando la búsqueda
    - Reducir costos en papel, impresoras, archivadores y demás herramientas para almacenar la información
    - Obtener en tiempo real el valor del dolar y el cálculo del precio a pagar por cada visita
    - Mejorar la toma de decisiones gracias a las estadísticas y los reportes
    - Reducir el impacto ambiental causado por la producción de papel`,
    github: "https://github.com/AngelAnez/registro-zoo-paraguana",
  },
  {
    title: "Portafolio Personal",
    description:
      "Mi sitio web personal enfocado en mi camino como desarrollador de software, donde se puede visualizar mi experiencia laboral, proyectos, recomendaciones de otros compañeros, certificaciones y más.",
    /* "Este proyecto permitió prácticar el uso de Astro para generar sitios estáticos, crear componentes reutilizables, y prácticar los estilos con TailwindCSS." */
    stack: ["Astro", "TailwindCSS"],
    preview: MyPortfolioPreview,
    images: MyPortfolioImages,
    problem:
      "Como un estudiante recién egresado de la universidad, resulta complicado conseguir el primer empleo como desarrollador de software. Al carecer de experiencia laboral, es necesario buscar otras formas de demostrar las habilidades y conocimientos que se poseen para aportar valor a cualquier empresa, proyecto o equipo de trabajo. Es por ello que es necesario poseer una herramienta que pueda complementar al currículum y que permita reflejar el talento y la experiencia de un desarrollador. De aquí nace la idea de un portafolio web, donde puedan exhibirse los proyectos realizados, las tecnologías conocidas, la creatividad, los testimonios de otros compañeros de trabajo y demás información relevante de un desarrollador.",
    demo: "/",
    github: "https://github.com/AngelAnez/my-portfolio",
  },
  {
    title: "Emoticare",
    description:
      "Plataforma de telemedicina que permite a los usuarios agendar citas médicas con especialistas de la salud mental y llevar a cabo estas consultas a través de videollamada.",
    /* "En este proyecto, trabajé en la parte del Frontend y pude prácticar mis conocimientos en React y TypeScript, así como el trabajo en equipo a través de ramas de Git y GitHub" */
    stack: ["TypeScript", "React", "TailwindCSS", "Git", "Github"],
    preview: EmoticarePreview,
    images: EmoticareImages,
    github: "https://github.com/AngelAnez/c20-41-n-node-react",
    demo: "https://emoticare-demo.onrender.com",
    team: [
      {
        name: "Rafael García",
        image:
          "https://media.licdn.com/dms/image/v2/D4E03AQFVSVk3IBYBqQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1701292502757?e=1745452800&v=beta&t=o83Le-xWCs6wNIGBMtyqYxid8tC5Ld7UsjwLCyjbngM",
        role: "Frontend Developer",
      },
      {
        name: "Victor Hugo Murcio Mansilla",
        image:
          "https://media.licdn.com/dms/image/v2/D4E03AQEf6kV2efVT5Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718381042944?e=1745452800&v=beta&t=xRIXojfGliw-wTedne2y4ce_wNrWHja3jJQwxpdw2zY",
        role: "Frontend Developer",
      },
      {
        name: "Marcos Román Derbas",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQESqRO2WAvLBw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680135799486?e=1745452800&v=beta&t=NFgHe3uAa37iFUuVr8LUEqcvBI_N5_mrKo9zp8Al9O8",
        role: "Backend Developer",
      },
      {
        name: "Erich Armijo",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQGLURTtAMjNfg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1721225957335?e=1740668400&v=beta&t=u0Pt20umeFUDFRdqlwhHf3jN_Cj0m8qPeoC-Q3SDowU",
        role: "Backend Developer",
      },
    ],
  },
  {
    title: "Rentify",
    description:
      "Aplicación web que simplifica el proceso de alquiler de propiedades, conectando a propietarios e inquilinos en un entorno intuitivo y seguro. Tanto propietarios como inquilinos pueden gestionar sus propiedades y búsquedas de manera eficiente.",
    /* "En este proyecto, trabajé con Material UI como librería de componentens en conjunto con React y TypeScript para desarrollar las interfaces de forma más óptima", */
    stack: ["TypeScript", "React", "Material UI", "Git", "Github"],
    preview: RentifyPreview,
    images: RentifyImages,
    github: "https://github.com/AngelAnez/S18-23-n-java-react",
    demo: "https://rentify-demo.onrender.com/",
    team: [
      {
        name: "Triana Devia",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHjUgeOwmUtdw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728234699056?e=1744848000&v=beta&t=Gv3aN3FdnaP05iCof7_Oc0BHTRI07SgftQE25f7B41A",
        role: "Project Manager",
      },
      {
        name: "Kenti Gabriel Antezana",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHHR31kfQEIIg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1671717691480?e=1744848000&v=beta&t=tAi7bi67swIAz6O8scN2qri_r_BG6cR2TBxIi5whB4o",
        role: "Backend Developer",
      },
      {
        name: "Rafael Enrique Cortez",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHKzfD3rGfKsA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730396990188?e=1744848000&v=beta&t=6MDUk2smiETgvDRqeR1aHIe2fj-kQfkq64kYxelFDNI",
        role: "Backend Developer",
      },
      {
        name: "Jhosep Tinta",
        image:
          "https://media.licdn.com/dms/image/v2/C4E03AQHBJTn1qiruaQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1568034056095?e=1745452800&v=beta&t=6saawt9PVnKPoF1jYOTOeWkFkCKydfIqqx3GzoDI60E",
        role: "Frontend Developer",
      },
      {
        name: "Edgar Camberos",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQG94zsQ9s5T7g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720605912276?e=1745452800&v=beta&t=Rmew_gYmfD1IqdABogZoxZsXn1WI13j85z2fUV3j6IM",
        role: "Backend Developer",
      },
      {
        name: "William Polanco",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHRaNYyyrpbRQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1716217605329?e=1745452800&v=beta&t=rlT_UsG0Xo3VZKWEc2gINyQaKJI_lpz3YCBH_pxxfpk",
        role: "Frontend Developer",
      },
      {
        name: "Manuel Filgueira Marin",
        image:
          "https://media.licdn.com/dms/image/v2/D4E35AQGsr5BoU_nqXA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1730480297649?e=1740664800&v=beta&t=hWuRTMhQW3g2vm8TqF5YW9cocSh4CLKqO0alWo738DI",
        role: "Frontend Developer",
      },
      {
        name: "Gabriel Romero",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQG4vY3Y37HRIA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1697292176024?e=1740664800&v=beta&t=pWouayhTIrWxtdZNoAeM0Z0KYCz9a6T-HGP33syMhx8",
        role: "Backend Developer",
      },
      {
        name: "Oliver Barahona",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQG-8JuMZq_Vpw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1698553819121?e=1740664800&v=beta&t=7fNyhxqWaXCHt95Akjaz8i0Y1l18D2eiXbCS2fgQwEQ",
        role: "Backend Developer",
      },
      {
        name: "Matias Badano",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQG_70VHivqFSw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1691640364890?e=1740664800&v=beta&t=Tmr8K5c8hJ-ud-MZCgh-SzAo1tdLTX7mGbcPrB98UOM",
        role: "Backend Developer",
      },
      {
        name: "Diego Agustin Jorges",
        image:
          "https://media.licdn.com/dms/image/v2/C4D03AQEO3-HilvXyUw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1660006874063?e=1745452800&v=beta&t=YFkrpyTWFBWyV41-kCVmLvAy3Ugd4YhWpZTfZguTSXE",
        role: "Backend Developer",
      },
      {
        name: "Joaquín Herrera",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQEv7Xyp6KkP7A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709747738298?e=1745452800&v=beta&t=j9Z3ev65CaS7JAZM2NW6efvSUvqKdoQgW3pwEPWPaaY",
        role: "Frontend Developer",
      },
      {
        name: "Nestor Rubiano",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQGxHP3zM8VbYA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1683771078424?e=1740664800&v=beta&t=9Bb-3ZGfpRbXDU7jWVBgakCdgLc4fgazdeDEEi5qtD4",
        role: "UX/UI Designer",
      },
    ],
  },
  {
    title: "Financia.al",
    description:
      "Financia.al es una plataforma web fintech que busca conectar a inversores interesados en financiar la venta de terrenos en distintos países de Latinoamérica con potenciales compradores, ofreciendo una experiencia simplificada y segura para todos los usuarios.",
    /* "En este proyecto, trabajé con Material UI como librería de componentens en conjunto con React y TypeScript para desarrollar las interfaces de forma más óptima", */
    stack: ["TypeScript", "React", "TailwindCSS", "Zustand", "Git", "Github"],
    preview: FinanciaAlPreview,
    images: FinanciaAlImages,
    role: "Frontend Developer",
    github: "https://github.com/AngelAnez/equipo-h3-18-proptech",
    demo: "https://equipo-h3-18-proptech-desarrollo.onrender.com/",
    team: [
      {
        name: "Abel Montes Vega",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQFpwnZVlIzYxw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1735909161044?e=1740157200&v=beta&t=EG5OhNAQy5LlnN7GqbqyVgmpTX0VIkP_SBRKM7BA3Fo",
        role: "Backend Developer",
      },
      {
        name: "Deivison Jimenez",
        image:
          "https://media.licdn.com/dms/image/v2/D4E35AQEBCtuhlg1X3A/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1728668908296?e=1740157200&v=beta&t=hvzwCJQekqwpIsOEMuGFL5b5D9p9MKk2ycXs5hFgJJQ",
        role: "Backend Developer",
      },
      {
        name: "Emanuel Capo",
        image:
          "https://media.licdn.com/dms/image/v2/C4D03AQE8oaeOOU4fdA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1655414851207?e=1745452800&v=beta&t=1w9Axdu1MzRy9siavev_fwgGvc1OTGuUsjUORO8yDOU",
        role: "Frontend Developer",
      },
      {
        name: "Natalia Caniza",
        image:
          "https://media.licdn.com/dms/image/v2/D4D35AQEJ9iUZBjVKVQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1738527190006?e=1740157200&v=beta&t=lyQvPjphwdR2gmSiQ2G7Qma5NZm1863COeAfv-3baTg",
        role: "UX/UI Designer",
      },
    ],
  },
  {
    title: "SubastArt",
    description:
      "Plataforma de subastas online, donde los usuarios pueden publicar y vender obras de arte o participar en emocionantes subastas en vivo para conseguir obras exclusivas.",
    /* "En este proyecto, pude aprender y practicar la conexión con WebSockets con React y JavaScript, así como mejorar en el uso de las View Transitions.", */
    stack: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "Zustand",
      "WebSockets",
      "Git",
      "Github",
    ],
    preview: SubastArtPreview,
    images: SubastArtImages,
    role: `Durante este proyecto me desempeñé como Frontend Developer. Al ser un equipo tan pequeño, la toma de decisiones para el Frontend recayó principalemente en Leandro y en mí, con sugerencias ocasionales de nuestros otros compañeros. Sin embargo, la buena comunicación que tuvimos Leandro y yo revisando lo que el otro hacía y sugiriendo mejoras en donde fuera necesario nos permitió distribuir y desarrollar nuestras tareas sin muchas complicaciones. A su vez, mi participación en las reuniones con mis compañeros en el Backend me permitió comentar sugerencias y puntos de mejora en la API que nos ayudó a solucionar problemas que fueron surgiendo para así poder terminar de desarrollar el MVP.`,
    demo: "https://s20-04-n-frontend.onrender.com/",
    team: [
      {
        name: "Leon Lederhos",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQFil0rLZ-WdEw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727624547253?e=1744848000&v=beta&t=jJc-wq0RdA1N0WCPIIYInFGN9zzkxEVHddFBuKIiXxk",
        role: "Backend Developer",
      },
      {
        name: "Brian Diaz",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQEfI4-56WowZg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1666802397424?e=1744848000&v=beta&t=3wqT-RgKcuP0zZuHdhn0z9yO-yiJJjImEMZ4fPNLCUI",
        role: "Backend Developer",
      },
      {
        name: "Leandro Martínez",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQGu2097XB4VfQ/profile-displayphoto-shrink_100_100/B4DZUBmoqBGcAU-/0/1739488660896?e=1745452800&v=beta&t=-A6-aWY_2ObRgqxgzCHyAa3N6-He5UChjaAK3iy4v-g",
        role: "Frontend Developer",
      },
    ],
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
