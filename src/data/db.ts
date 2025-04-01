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
  CV: "https://drive.google.com/file/d/11AuJz6Ynx3-jA2eRa4pC4dJ0ihehHtor/view?usp=sharing",
  LINKEDIN: "https://www.linkedin.com/in/angel-anez/",
  GITHUB: "https://github.com/AngelAnez",
  EMAIL: "angdavid2910@gmail.com",
};

export const ABOUTME: string = `Oriundo de Venezuela, descubrí mi pasión por la tecnología y el aprendizaje desde pequeño. Siguiendo esa idea, años mas tarde, me gradué en 2023 como Ingeniero de Sistemas y desde entonces empezó mi camino en la programación y el desarrollo web.

Como Freelance empecé en 2024 ayudando al zoológico de mi ciudad con el desarrollo de una aplicación web para el registro y gestión de visitantes, logrando digitalizar todos sus procesos y brindando nuevas herramientas para mejorar la toma de decisiones. Posteriormente, he estado creando MVPs en equipo dentro de la empresa No Country, a través de sus simulaciones laborales y Hackathones.  En estos proyectos, desempeñé el rol de Desarrollador Web Frontend, donde pude poner en práctica todas mis horas de estudio y coincidir con grandes profesionales del rubro, logrando presentar con éxito cada MVP realizado y consiguiendo el 3er lugar en un Hackathon.

Deseo seguir conociendo más de este mundo, y es por esa razón que busco demostrar todo ese conocimiento práctico que adquiero cada día para contribuir en la creación de productos de software capaces de conectar con las emociones en los usuarios, de la misma forma que la programación ha conectado conmigo.`

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
    name: "Express",
    logo: skillLogos.express,
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
    position: "Pasante",
    company: "Petróleos de Venezuela, S.A.",
    "start-date": "Abril 2023",
    "end-date": "Agosto 2023",
    "job-duty":
      "Implementé un nuevo módulo para el sistema Nagios de la empresa que automatiza el envío de alertas de estado de los equipos y servicios a través de Telegram. Y a su vez, puede generar reportes diarios sobre el estado general de los equipos y servicios monitoreados por el sistema. Este módulo logró optimizar el tiempo de detección de fallas de los equipos en un 80%, mejorando así la toma de decisiones en la Superintendencia.",
    stack: ["JavaScript", "PHP", "Python", "Nagios", "Telegram"],
  },
  {
    position: "Freelancer",
    company: "Zoológico Paraguaná",
    "start-date": "Octubre 2023",
    "end-date": "Marzo 2024",
    "job-duty":
      "Construí un sistema para el control y registro de los visitantes del Zoológico Paraguaná para digitalizar la información, sustituir los registros en papel, generar reportes y gráficas automáticos, y mejorar la persistencia y seguridad de los datos; logrando optimizar tiempos de trabajo, facilitar el análisis de la información y obtener un nivel de satisfacción de los trabajadores con la nueva herramienta del 100%.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "NodeJS",
      "Express",
      "EJS",
      "MySQL",
    ],
  },
  {
    position: "Desarrollador Web Frontend",
    company: "No Country",
    "start-date": "Agosto 2024",
    "end-date": "Enero 2025",
    "job-duty":
      "Colaboré en 3 proyectos en equipo y una Hackathon donde pude aprender sobre los distintos pasos y roles necesarios para la creación de un producto de software, participar y liderar la toma de decisiones dentro de un equipo de desarrollo y conocer distintas tecnologías y metodologías de trabajo; logrando como resultado desarrollar 3 MVPs innovadores de forma satisfactoria y conseguir el 3er lugar en una Hackathon Fintech.",
    stack: ["JavaScript", "TypeScript", "React", "TailwindCSS"],
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
    problem: `Desde su creación, el Zoológico Paraguaná ha llevado el control de cada visitante y los pagos de forma manual, registrando cada visita en libros y documentos que posteriormente tenían que transcribir al computador. En sus inicios, esto no era un inconveniente ya que el Zoológico contaba con mucho personal a disposición. Pero hoy en día, con un grupo de trabajo más reducido, resulta evidente la necesidad de una herramienta que permita digitalizar el proceso. Es por ello que se les ofreció una aplicación web para poder automatizar el control de la información referente a visitas y pagos, almacenando de forma segura los datos, y con nuevas funcionalidades que les permitan mejorar la toma de decisiones y reducir la carga de trabajo.`,
    result: `Para poder controlar la información de los visitantes de mejor forma, se desarrolló este sistema dividiéndolo en los siguientes módulos:

    📌 Registro de Visitantes: Permite registrar cada visita conociendo la cantidad de miembros en función al género y la edad, su datos de pago, y los datos de contacto del representante familiar.
    📌 Historial de Visitas: Muestra una tabla que enlista todas las visitas registradas, permitiendo filtrar las búsquedas y conocer toda la información de cada visita. También, los usuarios administradores pueden editar la información de alguna visita en caso de ser necesario.
    📌 Estadísticas Generales: Muestra a través de gráficas la cantidad de visitantes totales en función a un rango de fecha establecido. A su vez, permite descargar esta información a través de informes en formato PDF.
    📌 Registro y Control de Novedades: Permite registrar novedades o acontecimientos que ocurran durante la jornada, como por ejemplo, la donación de alimento por parte de alguna familia o institución.
    📌 Administración de Usuarios: Sección exclusiva para administradores que permite promover, modificar o eliminar usuarios del sistema.
    📌 Configuraciones: Permite ajustar ciertos parámetros del sistema, como el valor de las entradas, o especificar una tasa personalizada para el dolar.
    
    Gracias a estos módulos, el Sistema de Registro de Visitantes del Zoológico Paraguaná pudo:
    
    ✅ Mejorar la calidad de los datos, evitando redundancia y facilitando la búsqueda
    ✅ Reducir costos en papel, impresoras, archivadores y demás herramientas para almacenar la información
    ✅ Obtener en tiempo real el valor del dolar y el cálculo del precio a pagar por cada visita
    ✅ Mejorar la toma de decisiones gracias a las estadísticas y los reportes
    ✅ Reducir el impacto ambiental causado por la producción de papel`,
    github: "https://github.com/AngelAnez/registro-zoo-paraguana",
  },
  {
    title: "Portafolio Personal",
    description:
      "Mi sitio web personal enfocado en mi camino como desarrollador de software, donde se puede visualizar mi experiencia laboral, proyectos, recomendaciones de otros compañeros, certificaciones y más.",
    stack: ["Astro", "TailwindCSS"],
    preview: MyPortfolioPreview,
    images: MyPortfolioImages,
    problem:
      "Como un estudiante recién egresado de la universidad, resulta complicado conseguir el primer empleo como desarrollador de software. Al carecer de experiencia laboral, es necesario buscar otras formas de demostrar las habilidades y conocimientos que se poseen para aportar valor a cualquier empresa, proyecto o equipo de trabajo. Es por ello que es necesario poseer una herramienta que pueda complementar al currículum y que permita reflejar el talento y la experiencia de un desarrollador. De aquí nace la idea de un portafolio web, donde puedan exhibirse los proyectos realizados, las tecnologías conocidas, la creatividad, los testimonios de otros compañeros de trabajo y demás información relevante de un desarrollador.",
    result: `Tras varias ideas y mucha investigación, se desarrolló un sitio web tipo portafolio que cuenta con las siguientes secciones:

    📌 Sobre Mí: Pequeño resumen introductorio sobre mi historia personal.
    📌 Experiencia Laboral: Corresponde a mi experiencia y logros conseguidos en los trabajos en los que he participado, ya sea a una empresa directamente o de forma Freelance.
    📌 Recomendaciones: Testimonios de otros compañeros de trabajo que han dejado en mi perfil de LinkedIn.
    📌 Proyectos: Listado de proyectos web que he podido desarrollar en solitario o en equipo. Cada proyecto cuenta con su información detallada del proceso de desarrollo.
    📌 Tecnologías: Corresponde a todos aquellos lenguajes, herramientas, bibliotecas o frameworks que he podido utilizar en mis proyectos.
    📌 Certificaciones: Galería de certificados y diplomas que he obtenido a través de formaciones y cursos en diferentes instituciones.
    📌 Contacto: Sección que contiene mis redes sociales y datos personales donde pueden contactarme.`,
    demo: "/",
    github: "https://github.com/AngelAnez/my-portfolio",
  },
  {
    title: "Emoticare",
    description:
      "Plataforma de telemedicina que permite a los usuarios agendar citas médicas con especialistas de la salud mental y llevar a cabo estas consultas a través de videollamada.",
    stack: ["TypeScript", "React", "TailwindCSS", "Git", "Github"],
    preview: EmoticarePreview,
    images: EmoticareImages,
    github: "https://github.com/AngelAnez/c20-41-n-node-react",
    demo: "https://emoticare-demo.onrender.com",
    problem:
      "Para nuestra primera simulación laboral en No Country se nos pidió escoger un proyecto para desarrollar en un período de 5 semanas. Tras debatir varias opciones optamos por una plataforma de Telemedicina. En un mundo donde cada día es más común encontrar personas con depresión, es necesario brindar mayor accesibilidad a esas personas con los mejores recursos para su salud. Es con este objetivo en mente que surge la idea de crear una plataforma web que permita conectar a todos aquellos pacientes que lo requieran con médicos especialistas a cualquier hora y desde cualquier lugar con solo un teléfono o computador con acceso a internet.",
    result: `Durante este lapso de tiempo se pudo desarrollar el MVP de una plataforma de telemedicina enfocada en salud mental con las siguientes características:

    📌 Registro y Autenticación por Roles: Los nuevos visitantes de la plataforma pueden registrarse como pacientes y tener su perfil único.
    📌 Agendar Citas: Los pacientes tienen acceso al calendario de la plataforma donde pueden seleccionar la especialidad que desean y se les presentarán los médicos disponibles en los próximos días, así como su horario.
    📌 Listado de Citas: Los pacientes y médicos cuentan con una sección para ver sus citas agendadas, la fecha, hora y el paciente o médico asociado. Por otro lado, los administradores tienen acceso a todas las citas agendadas en la plataforma.
    📌 Registrar Médicos: Los administradores cuentan con un formulario donde pueden registrar nuevos médicos en la plataforma, creandoles un perfil único a cada uno.
    📌 Listado de Médicos: Los administradores pueden observar todos los médicos de la plataforma, así como su especialidad.`,
    role: "Empecé mis simulaciones laborales como Frontend Developer. Como fue la primera simulación laboral de todos, al principio fue dificil comunicarnos eficientemente para aprovechar el tiempo de mejor manera. Sin embargo, con el pasar de las semanas, la comunicación fue fluyendo naturalmente y así todos pudimos desenvolvernos en nuestras tareas. En esta ocasión, entre mis compañeros Frontend, yo era el que más experiencia tenía, por lo que pude ayudarlos y guíarlos para desarrollar entre todos interfaces de usuario agradables y prácticas. Y con el apoyo de mis compañeros Backend, pudimos dar grandes avances en el MVP y presentar un producto inicial que sirvió para aprender mucho sobre el trabajo en equipo y la organización del tiempo.",
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
          "https://media.licdn.com/dms/image/v2/D4E03AQHriuo-3XZ53w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710788903755?e=2147483647&v=beta&t=QfDDr7palgejA-pZdJXjFGxZn1KApqj91X6jgsM60QM",
        role: "Backend Developer",
      },
    ],
  },
  {
    title: "Rentify",
    description:
      "Aplicación web que simplifica el proceso de alquiler de propiedades, conectando a propietarios e inquilinos en un entorno intuitivo y seguro. Tanto propietarios como inquilinos pueden gestionar sus propiedades y búsquedas de manera eficiente.",
    stack: ["TypeScript", "React", "Material UI", "Git", "Github"],
    preview: RentifyPreview,
    images: RentifyImages,
    github: "https://github.com/AngelAnez/S18-23-n-java-react",
    demo: "https://rentify-demo.onrender.com/",
    problem:
      "Como parte de la simulación laboral en No Country, el equipo buscaba desarrollar un proyecto que resuelva una problemática actual. En este sentido, hoy en día encontrar propiedades para arriendo prolongado y con trato directo al propietario puede ser una experiencia complicada. Muchas plataformas de alquiler están llenas de propiedades para vacacionar o están llenas de intermediarios y agentes, lo que aumenta el costo y puede dificultar la comunicación directa entre arrendatario y propietario. Además, quienes desean tanto arrendar como ofrecer una propiedad suelen encontrarse con el problema de tener que manejar diferentes perfiles o cuentas en las plataformas actuales. En este contexto, se presenta la necesidad de una aplicación de alquiler de propiedades que conecte a los arrendatarios directamente con los propietarios, eliminando intermediarios y que facilite la gestión y el seguimiento de sus propiedades o solicitudes de arriendo. Con ese objetivo nace Rentify.",
    result: ` Durante el período de 5 semanas, se logró desarrollar un MVP que cuenta con las siguientes funcionalidades:

    📌 Registro de Usuarios: Registro de usuarios propietarios e inquilinos en un mismo rol.
    📌 Gestión de Propiedades: Los usuarios pueden publicar sus propiedades en alquiler, editarlas o eliminarlas.
    📌 Búsqueda Avanzada: Los usuarios pueden explorar todas las propiedades publicadas en la plataforma y añadir filtros como precio, tipo de propiedad, antigüedad, ciudad, provincia, entre otros.
    📌 Propiedad Detallada: Cada usuario puede conocer muchos detalles de cada propiedad para tomar mejores decisiones. Entre estos detalles están la ubicación geográfica, el número y tipo de habitaciones, antigüedad, y demás características especiales de cada propiedad.
    📌 Contacto Directo: Cada usuario registrado puede conocer la información de contacto del dueño de cada propiedad, para entablar negociaciones directas sin intermediarios.`,
    role: "En este proyecto ocupé el rol de Frontend Developer. A pesar de ser un grupo numeroso y que contabamos con una excelente Project Manager, la organización en el Frontend fue un poco complicada debido al horario de trabajo de muchos compañeros. Por esa razón, tomé un rol de líder entre los Frontend para poder organizar y distribuir las tareas que surgían en las charlas con el Backend y nuestra Project Manager. Entre mis tareas de Frontend, me encargué principalmente del registro de propiedades y del filtro de búsqueda, ya que eran las tareas en las que había que tener más comunicación con el Backend para consumir los endpoints y mostrar la información necesaria en cada sección. Pero en general, la buena organización y proactividad del equipo permitió que el proyecto fuera realizado satisfactoriamente.",
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
          "https://media.licdn.com/dms/image/v2/C4E03AQHR_GR1yH6hDw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516952538346?e=2147483647&v=beta&t=49L8OBhhZEYLNVYxECbL3vmumlnZEMrs1LtNxOiSqZE",
        role: "Frontend Developer",
      },
      {
        name: "Gabriel Romero",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQFhS9COR0kI5w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1697292174367?e=2147483647&v=beta&t=WM8gOL5qzpud_JFGc7TvZUnSl7SWTEXGPoKHf78fJyw",
        role: "Backend Developer",
      },
      {
        name: "Oliver Barahona",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQF3hQ-D_gfPSQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698553817424?e=2147483647&v=beta&t=1dN-beZCdDXZjDdCkMNUU8yjYN5fTfSKrtrhgW7HdtE",
        role: "Backend Developer",
      },
      {
        name: "Matias Badano",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHO7GgAzxp7nw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1691640362479?e=2147483647&v=beta&t=qMXWnr1fN5C5ouOBemsx-MywK_25_AkpxA_NSqcPUDM",
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
          "https://media.licdn.com/dms/image/v2/D4D03AQGJqgTp8sCeBQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1683770616612?e=2147483647&v=beta&t=HO64oSeFbTFSE9D_fNrVo9gkjkeO7pGHLIxYpR7aIrQ",
        role: "UX/UI Designer",
      },
    ],
  },
  {
    title: "Financia.al",
    description:
      "Plataforma web fintech que busca conectar a inversores interesados en financiar la venta de terrenos en distintos países de Latinoamérica con potenciales compradores, ofreciendo una experiencia simplificada y segura para todos los usuarios.",
    stack: ["TypeScript", "React", "TailwindCSS", "Zustand", "Git", "Github"],
    preview: FinanciaAlPreview,
    images: FinanciaAlImages,
    role: "Dentro de este equipo me desempeñé como Frontend Developer. Al contar con una diseñadora UX/UI en el equipo, mi principal tarea fue maquetar los wireframes e implementar las funcionalidades básicas. Pero además, al ser una Hackathon, fueron necesarias varias reuniones para discutir y organizar como iba a funcionar el financiamiento y la inversión en la plataforma. Y debo destacar que el equipo siempre se mantuvo muy bien comunicado, donde todos tuvieron la oportunidad de sugerir y aportar ideas para hacer el mejor proyecto. Por mi parte, entre mis tareas como Frontend estuvieron la maquetación de todo el gran formulario para la solicitud de financiamiento, el simulador del comprador, y algunas vistas del administrador. Adicionalmente, como Emanuel y yo siempre estábamos comunicándonos, nos apoyabamos mútuamente con algún detalle que se nos hubiera pasado por alto. Por otro lado, también pude apoyar a Natalia con ciertas ideas de diseño para la plataforma, que fueron siempre bien recibidas por ella. Mientras que Abel y Deivison fueron la base del Backend a los cuales recurrí cuando tenía problemas para conectarme con la API y que también escuchaban mis propuestas para los endpoints. Definitivamente, un equipo excelente y muy profesional.",
    github: "https://github.com/AngelAnez/equipo-h3-18-proptech",
    demo: "https://equipo-h3-18-proptech-desarrollo.onrender.com/",
    problem: "Este proyecto corresponde a una Hackathon de No Country, por lo tanto, la idea y temática fue designada por un cliente. Este cliente deseaba el desarrollo de una plataforma web fintech que pudiera ofrecer opciones de crédito accesible a las familias, para optar por la posibilidad de adquirir un terreno donde construir su hogar. Y que al mismo tiempo, proporcionara a quienes tienen capacidad de ahorro una forma de invertir sus fondos en la financiación de terrenos. Para ello, la plataforma debía ofrecer herramientas de análisis de inversión y métricas detalladas para compradores e inversores, permitiendoles evaluar el rendimiento y riesgo de sus decisiones. A partir de esa idea y más especificaciones del cliente, nuestro equipo desarrolló Financia.al.",
    result: `Tras 5 semanas de mucho esfuerzo y trabajo, se pudo presentar de forma satisfactoria el MVP de Financia.al en la presentación final para el cliente. Este MVP contó con las siguientes funcionalidades principales:

    📌 Gestión de Financiamiento: Herramientas que permite a los usuarios definir términos de pago, tasas de interés y plazos personalizados.
    📌 Simulador de Crédito: Un simulador interactivo que permite a los compradores e inversores simular diferentes escenarios de crédito y visualizar los resultados, estimando el monto de las cuotas mensuales basadas en el capital solicitado, tasa de interés y plazo.
    📌 Evaluación de Riesgo Crediticio: Herramienta que permite evaluar el riesgo crediticio de los usuarios compradores, brindando transparencia para los inversores.
    📌 Autenticación de Usuarios: Proceso de verificación riguroso que asegura la identidad de todos los usuarios para garantizar la confidencialidad y seguridad.
    📌 Panel de Control de Usuarios: Muestra un resumen de las finanzas realizadas por el usuario. A los compradores les muestra la información de sus préstamos y cuotas a pagar. Mientras que a los inversores les muestra un resumen completo de su inversión y las ganancias por mes.
    📌 Chatbot de Atención al Cliente: Chatbot que responde a preguntas frecuentes sobre la plataforma.
    
    Finalmente, quedamos como equipo finalista de la Hackaton, obteniendo el 3er lugar.`,
    team: [
      {
        name: "Abel Montes Vega",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQGUZl1TBu_bgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724166166352?e=2147483647&v=beta&t=m2WM9Gyx7jNeSMc5zD9i1AIiSS3KIzMuqWkDD7VpVB4",
        role: "Backend Developer",
      },
      {
        name: "Deivison Jimenez",
        image:
          "https://media.licdn.com/dms/image/v2/C5103AQFCoHZnMOd7Pw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517534765267?e=2147483647&v=beta&t=DYzzwwSrFoKIiJwPPPiNaKRr6_4lxCceZsJ7udk67yU",
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
          "https://media.licdn.com/dms/image/v2/D4D03AQHH3kTDeVbXrg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710448319684?e=2147483647&v=beta&t=eO58dKeX0OOrxbCNsPqYeLhijvhuudkR65nujrHlTew",
        role: "UX/UI Designer",
      },
    ],
  },
  {
    title: "SubastArt",
    description:
      "Plataforma de subastas online, donde los usuarios pueden publicar y vender obras de arte o participar en emocionantes subastas en vivo para conseguir obras exclusivas.",
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
    role: `Durante este proyecto me desempeñé como Frontend Developer. Al ser un equipo tan pequeño, la toma de decisiones para el Frontend recayó principalemente en Leandro y en mí, con sugerencias ocasionales de nuestros otros compañeros. Sin embargo, la buena comunicación que tuvimos Leandro y yo revisando lo que el otro hacía, y sugiriendo mejoras en donde fuera necesario, nos permitió distribuir y desarrollar nuestras tareas sin muchas complicaciones. Algunas de mis tareas en el Frontend fueron la conexión a través de WebSockets con el Backend, para hacer las subastas en vivo, y el diseño y maquetación de algunas páginas, como la de los detalles de cada subasta. Adicionalmente, mi participación en las reuniones con mis compañeros en el Backend me permitió comentar sugerencias y puntos de mejora en la API que nos ayudó a solucionar problemas que fueron surgiendo para así poder terminar de desarrollar el MVP.`,
    demo: "https://s20-04-n-frontend.onrender.com/",
    problem:
      "Como parte de la simulación laboral de No Country, se buscaba desarrollar un MVP de una aplicación web para resolver una problemática. En este caso, en el equipo surgió la idea de una plataforma de subastas para artistas. Hoy en día, existen muchas plataformas para comprar o vender productos. Sin embargo, hace falta una plataforma donde los artistas y amantes del arte puedan vender sus mejores obras a través de subastas en vivo, donde sean los propios compradores los que le pongan precio a sus obras, logrando así crear un espacio para que los amantes del arte puedan apreciar, competir y conocer el valor de sus obras. De allí nació SubasArt.",
    result: `Tras el período de 5 semanas de la simulación laboral, se pudo desarrollar de forma satisfactoria un MVP de una plataforma de subastas de obra de arte que cuenta con las siguientes funcionalidades:

    📌 Registro y Autenticación: Registro de usuarios interesados en subastar sus obras o participar en las subastas de la plataforma.
    📌 Gestor de Subastas: Los usuarios pueden subir sus obras para crear subastas, editarlas, eliminarlas o ver los detalles de las mismas.
    📌 Explorar Subastas: Búsqueda de las subastas publicadas por todos los usuarios de la plataforma con filtros por nombre, categoría, precio o estado.
    📌 Seguimiento de Obras Favoritas: Los usuarios pueden agregar obras en favoritos para llevar un mayor seguimiento de su estado. Y pueden ver sus obras favoritas desde su perfil.
    📌 Sistema de Pujas en Vivo: Interfaz para participar en subastas en tiempo real, pujando por montos personalizados, con información del ranking actual para que en todo momento se pueda conocer el lider de la subasta y el tiempo restante de la subasta.`,
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
      "https://media.licdn.com/dms/image/v2/C5103AQFCoHZnMOd7Pw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517534765267?e=2147483647&v=beta&t=DYzzwwSrFoKIiJwPPPiNaKRr6_4lxCceZsJ7udk67yU",
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
      "https://media.licdn.com/dms/image/v2/D4D03AQHH3kTDeVbXrg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710448319684?e=2147483647&v=beta&t=eO58dKeX0OOrxbCNsPqYeLhijvhuudkR65nujrHlTew",
    role: "UX/UI Designer",
    text: `Tuve la suerte de trabajar con Angel en un proyecto fintech que fue todo un desafío y no podría haber pedido un mejor compañero de equipo. Como programador front-end, su conocimiento técnico y atención a los detalles son impresionantes.
Sus aportes fueron clave para el éxito del proyecto y me ayudaron muchísimo a desempeñar mejor mi rol, ya que siempre estaba dispuesto a compartir su conocimiento y colaborar con soluciones creativas.
Sin dudas, trabajar con él fue una experiencia muy enriquecedora y sé que cualquier equipo que lo tenga será afortunado.`,
    linkedin: "https://www.linkedin.com/in/naticaniza",
  },
  {
    name: "Abel Montes Vega",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGUZl1TBu_bgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1724166166352?e=2147483647&v=beta&t=m2WM9Gyx7jNeSMc5zD9i1AIiSS3KIzMuqWkDD7VpVB4",
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
