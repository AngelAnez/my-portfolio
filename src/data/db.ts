import {
  collaboratorList,
  EmoticareImages,
  EmoticarePreview,
  FinanciaAlImages,
  FinanciaAlPreview,
  MatchProjectImages,
  MatchProjectPreview,
  RaizImages,
  RaizPreview,
  RentifyImages,
  RentifyPreview,
  skillLogos,
  SubastArtImages,
  SubastArtPreview,
  ZooSystemImages,
  ZooSystemPreview,
} from "@data/images";

import PDVSALogo from "@images/logos/PDVSA_Logo.svg"
import ZooParaguanaLogo from "@images/logos/ZooParaguana_Logo.png"
import NoCountryLogo from "@images/logos/NoCountry_Logo.png"
import FooTalentGroupLogo from "@images/logos/FooTalentGroup_Logo.png"
import InteligosLogo from "@images/logos/Inteligos_Logo.png"

export const MYLINKS = {
  CV: "https://drive.google.com/file/d/1BlDlkHywqzD7ooKapLDDslfvMcGQOijk/view?usp=sharing",
  LINKEDIN: "https://www.linkedin.com/in/angel-anez/",
  GITHUB: "https://github.com/AngelAnez",
  EMAIL: "hola@angel-anez.com",
};

export const ABOUTME: string = `Oriundo de Venezuela, descubrí mi pasión por la tecnología y el aprendizaje desde pequeño. Siguiendo esa idea, años mas tarde, me gradué en 2023 como Ingeniero de Sistemas y desde entonces empezó mi camino en la programación y el desarrollo web.

Como Freelance empecé en 2024 ayudando al zoológico de mi ciudad con el desarrollo de una aplicación web para el registro y gestión de visitantes, logrando digitalizar todos sus procesos y brindando nuevas herramientas para mejorar la toma de decisiones. Posteriormente, he estado creando MVPs en equipo dentro de la empresa No Country, a través de sus simulaciones laborales y Hackathones.  En estos proyectos, desempeñé el rol de Desarrollador Web Frontend, donde pude poner en práctica todas mis horas de estudio y coincidir con grandes profesionales del rubro, logrando presentar con éxito cada MVP realizado y consiguiendo el 3er lugar en un Hackathon.

Deseo seguir conociendo más de este mundo, y es por esa razón que busco demostrar todo ese conocimiento práctico que adquiero cada día para contribuir en la creación de productos de software capaces de conectar con las emociones en los usuarios, de la misma forma que la programación ha conectado conmigo.`;

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
    name: "NestJS",
    logo: skillLogos.nestjs,
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
    name: "PostgreSQL",
    logo: skillLogos.postgresql,
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
    name: "Postman",
    logo: skillLogos.postman,
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
  {
    name: 'Odoo',
    logo: skillLogos.odoo,
    type: "Desarrollo"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    position: "Pasante de Ingeniería de Sistemas",
    company: "Petróleos de Venezuela, S.A.",
    "start-date": "Abril 2023",
    "end-date": "Agosto 2023",
    "job-duty":
      "Implementé un nuevo módulo para el sistema Nagios de la empresa que automatiza el envío de alertas de estado de los equipos y servicios a través de Telegram. Y a su vez, puede generar reportes diarios sobre el estado general de los equipos y servicios monitoreados por el sistema. Este módulo logró optimizar el tiempo de detección de fallas de los equipos en un 80%, mejorando así la toma de decisiones en la Superintendencia.",
    stack: ["JavaScript", "PHP", "Python", "Nagios", "Telegram"],
    logo: PDVSALogo
  },
  {
    position: "Desarrollador de Software",
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
    logo: ZooParaguanaLogo,
  },
  {
    position: "Desarrollador Frontend",
    company: "No Country",
    "start-date": "Agosto 2024",
    "end-date": "Enero 2025",
    "job-duty":
      "Colaboré en 3 proyectos en equipo y una Hackathon donde pude aprender sobre los distintos pasos y roles necesarios para la creación de un producto de software, participar y liderar la toma de decisiones dentro de un equipo de desarrollo y conocer distintas tecnologías y metodologías de trabajo; logrando como resultado desarrollar 3 MVPs innovadores de forma satisfactoria y conseguir el 3er lugar en una Hackathon Fintech.",
    stack: ["JavaScript", "TypeScript", "React", "TailwindCSS"],
    logo: NoCountryLogo,
  },
  {
    position: "Desarrollador Backend",
    company: "Foo Talent Group",
    "start-date": "Abril 2025",
    "end-date": "Mayo 2025",
    "job-duty":
      "Lideré el desarrollo del Backend de una aplicación web para la fundación Patas Pirque, que permite la publicación de mascotas en adopción y la sugerencia de mascotas a los usuarios a través de un algoritmo para mostrar las más compatibles con los datos del usuario, aumentando así el número de adopciones responsables. En este proyecto pude gestionar las tareas entre mis compañeros, fomentar buenas prácticas de desarrollo y apoyar en decisiones del producto que permitieron satisfacer los objetivos establecidos para el proyecto",
    stack: ["TypeScript", "NestJS", "PostgresQL", "Swagger", "GitHub"],
    logo: FooTalentGroupLogo,

  },
  {
    position: "Analista de Control de Calidad",
    company: "Intéligos",
    "start-date": "Octubre 2025",
    "end-date": "Actualidad",
    "job-duty":
      "Me encargo de asegurar la integridad funcional de los módulos desarrollados en Odoo, diseñando y ejecutando múltiples tipos de pruebas; reportando observaciones, bugs, defectos o puntos de mejora en los nuevos desarrollos, y documentando procesos técnicos complejos en guías de usuarios simples. También participo en las Code Review, con el objetivo de buscar que el equipo siga un estandar de calidad alineado a unas buenas prácticas de desarrollo. Todo lo anterior me permite garantizar la calidad, estabilidad y presentación de las soluciones implementadas en los entornos de Staging y Producción",
    stack: ["Odoo", "Testing Manual", "Documentación de Procesos", "Claude", "Python", "GitHub", "Odoo SH"],
    logo: InteligosLogo,
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
    title: "Emoticare",
    description:
      "Plataforma de telemedicina que permite a los usuarios agendar citas médicas con especialistas de la salud mental y llevar a cabo estas consultas a través de videollamada.",
    stack: ["TypeScript", "React", "TailwindCSS", "Git", "Github"],
    preview: EmoticarePreview,
    images: EmoticareImages,
    github: "https://github.com/AngelAnez/Emoticare",
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
    team: collaboratorList.filter(
      (collaborator) =>
        collaborator.name.match("Rafael García") ||
        collaborator.name.match("Victor Hugo Murcio Mansilla") ||
        collaborator.name.match("Marcos Román Derbas") ||
        collaborator.name.match("Erich Armijo")
    ),
  },
  {
    title: "Rentify",
    description:
      "Aplicación web que simplifica el proceso de alquiler de propiedades, conectando a propietarios e inquilinos en un entorno intuitivo y seguro. Tanto propietarios como inquilinos pueden gestionar sus propiedades y búsquedas de manera eficiente.",
    stack: ["TypeScript", "React", "Material UI", "Git", "Github"],
    preview: RentifyPreview,
    images: RentifyImages,
    github: "https://github.com/AngelAnez/Rentify",
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
    team: collaboratorList.filter(
      (collaborator) =>
        collaborator.name.match("Triana Devia") ||
        collaborator.name.match("Kenti Gabriel Antezana") ||
        collaborator.name.match("Rafael Enrique Cortez") ||
        collaborator.name.match("Jhosep Tinta") ||
        collaborator.name.match("Edgar Camberos") ||
        collaborator.name.match("William Polanco") ||
        collaborator.name.match("Manuel Filgueira Marin") ||
        collaborator.name.match("Gabriel Romero") ||
        collaborator.name.match("Oliver Barahona") ||
        collaborator.name.match("Matias Badano") ||
        collaborator.name.match("Diego Agustin Jorges") ||
        collaborator.name.match("Joaquín Herrera") ||
        collaborator.name.match("Nestor Rubiano")
    ),
  },
  {
    title: "Financia.al",
    description:
      "Plataforma web fintech que busca conectar a inversores interesados en financiar la venta de terrenos en distintos países de Latinoamérica con potenciales compradores, ofreciendo una experiencia simplificada y segura para todos los usuarios.",
    stack: ["TypeScript", "React", "TailwindCSS", "Zustand", "Git", "Github"],
    preview: FinanciaAlPreview,
    images: FinanciaAlImages,
    role: "Dentro de este equipo me desempeñé como Frontend Developer. Al contar con una diseñadora UX/UI en el equipo, mi principal tarea fue maquetar los wireframes e implementar las funcionalidades básicas. Pero además, al ser una Hackathon, fueron necesarias varias reuniones para discutir y organizar como iba a funcionar el financiamiento y la inversión en la plataforma. Y debo destacar que el equipo siempre se mantuvo muy bien comunicado, donde todos tuvieron la oportunidad de sugerir y aportar ideas para hacer el mejor proyecto. Por mi parte, entre mis tareas como Frontend estuvieron la maquetación de todo el gran formulario para la solicitud de financiamiento, el simulador del comprador, y algunas vistas del administrador. Adicionalmente, como Emanuel y yo siempre estábamos comunicándonos, nos apoyabamos mútuamente con algún detalle que se nos hubiera pasado por alto. Por otro lado, también pude apoyar a Natalia con ciertas ideas de diseño para la plataforma, que fueron siempre bien recibidas por ella. Mientras que Abel y Deivison fueron la base del Backend a los cuales recurrí cuando tenía problemas para conectarme con la API y que también escuchaban mis propuestas para los endpoints. Definitivamente, un equipo excelente y muy profesional.",
    github: "https://github.com/AngelAnez/Financia.al",
    demo: "https://equipo-h3-18-proptech-desarrollo.onrender.com/",
    problem:
      "Este proyecto corresponde a una Hackathon de No Country, por lo tanto, la idea y temática fue designada por un cliente. Este cliente deseaba el desarrollo de una plataforma web fintech que pudiera ofrecer opciones de crédito accesible a las familias, para optar por la posibilidad de adquirir un terreno donde construir su hogar. Y que al mismo tiempo, proporcionara a quienes tienen capacidad de ahorro una forma de invertir sus fondos en la financiación de terrenos. Para ello, la plataforma debía ofrecer herramientas de análisis de inversión y métricas detalladas para compradores e inversores, permitiendoles evaluar el rendimiento y riesgo de sus decisiones. A partir de esa idea y más especificaciones del cliente, nuestro equipo desarrolló Financia.al.",
    result: `Tras 5 semanas de mucho esfuerzo y trabajo, se pudo presentar de forma satisfactoria el MVP de Financia.al en la presentación final para el cliente. Este MVP contó con las siguientes funcionalidades principales:

    📌 Gestión de Financiamiento: Herramientas que permite a los usuarios definir términos de pago, tasas de interés y plazos personalizados.
    📌 Simulador de Crédito: Un simulador interactivo que permite a los compradores e inversores simular diferentes escenarios de crédito y visualizar los resultados, estimando el monto de las cuotas mensuales basadas en el capital solicitado, tasa de interés y plazo.
    📌 Evaluación de Riesgo Crediticio: Herramienta que permite evaluar el riesgo crediticio de los usuarios compradores, brindando transparencia para los inversores.
    📌 Autenticación de Usuarios: Proceso de verificación riguroso que asegura la identidad de todos los usuarios para garantizar la confidencialidad y seguridad.
    📌 Panel de Control de Usuarios: Muestra un resumen de las finanzas realizadas por el usuario. A los compradores les muestra la información de sus préstamos y cuotas a pagar. Mientras que a los inversores les muestra un resumen completo de su inversión y las ganancias por mes.
    📌 Chatbot de Atención al Cliente: Chatbot que responde a preguntas frecuentes sobre la plataforma.
    
    Finalmente, quedamos como equipo finalista de la Hackaton, obteniendo el 3er lugar.`,
    team: collaboratorList.filter(
      (collaborator) =>
        collaborator.name.match("Abel Montes Vega") ||
        collaborator.name.match("Deivison Jimenez") ||
        collaborator.name.match("Emanuel Capo") ||
        collaborator.name.match("Natalia Caniza")
    ),
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
    github: "https://github.com/AngelAnez/SubastArt",
    problem:
      "Como parte de la simulación laboral de No Country, se buscaba desarrollar un MVP de una aplicación web para resolver una problemática. En este caso, en el equipo surgió la idea de una plataforma de subastas para artistas. Hoy en día, existen muchas plataformas para comprar o vender productos. Sin embargo, hace falta una plataforma donde los artistas y amantes del arte puedan vender sus mejores obras a través de subastas en vivo, donde sean los propios compradores los que le pongan precio a sus obras, logrando así crear un espacio para que los amantes del arte puedan apreciar, competir y conocer el valor de sus obras. De allí nació SubastArt.",
    result: `Tras el período de 5 semanas de la simulación laboral, se pudo desarrollar de forma satisfactoria un MVP de una plataforma de subastas de obra de arte que cuenta con las siguientes funcionalidades:

    📌 Registro y Autenticación: Registro de usuarios interesados en subastar sus obras o participar en las subastas de la plataforma.
    📌 Gestor de Subastas: Los usuarios pueden subir sus obras para crear subastas, editarlas, eliminarlas o ver los detalles de las mismas.
    📌 Explorar Subastas: Búsqueda de las subastas publicadas por todos los usuarios de la plataforma con filtros por nombre, categoría, precio o estado.
    📌 Seguimiento de Obras Favoritas: Los usuarios pueden agregar obras en favoritos para llevar un mayor seguimiento de su estado. Y pueden ver sus obras favoritas desde su perfil.
    📌 Sistema de Pujas en Vivo: Interfaz para participar en subastas en tiempo real, pujando por montos personalizados, con información del ranking actual para que en todo momento se pueda conocer el lider de la subasta y el tiempo restante de la subasta.`,
    team: collaboratorList.filter(
      (collaborator) =>
        collaborator.name.match("Leon Lederhos") ||
        collaborator.name.match("Brian Diaz") ||
        collaborator.name.match("Leandro Martínez")
    ),
  },
  {
    title: "Match Project",
    description:
      "Plataforma web para la fundación Patas Pirque que permite conectar a mascotas rescatadas con personas interesadas en la adopción de mascotas. A través de una interfaz amigable, se busca que los usuarios logren hacer match con las mascotas para concretar adopciones responsables.",
    preview: MatchProjectPreview,
    images: MatchProjectImages,
    stack: ["TypeScript", "NestJS", "PostgreSQL", "Git", "GitHub"],
    problem:
      "Patas Pirque es una fundación sin fines de lucro que se encarga de rescatar y dar en adopción perros y gatos callejeros en Chile. Esta fundación solo cuenta con 2 personas a cargo de todo el cuidado y alimentación de mascotas, su logística, y la gestión de los adoptantes, procesos que llevan a cabo de forma manual o a través de aplicaciones de mensajería como Whatsapp. Sin embargo, presentan una problemática: Varios adoptantes a los pocos meses devuelven a las mascotas nuevamente a la fundación. En vista de esta problemática, y para visibilizar las mascotas en adopción, se plantea el desarrollo de una aplicación web que tiene como objetivo principal conectar a personas para fomentar la adopción responsable de animales. A través de una interfaz amigable y funcionalidades específicas, se busca reducir el tiempo de búsqueda, difundir casos de mascotas rescatadas y rehabilitadas, y facilitar la interacción entre usuarios de forma rápida y segura, de manera de concretar adopciones responsables.",
    role: "Backend Developer",
    result: `Cumpliendo con los requerimientos propuestos por la stakeholder y en vista de la problemática, se desarrolló la plataforma web con las siguientes funcionalidades:

    📌 Autenticación de Usuarios por Rol: La plataforma permite que puedan iniciar sesión tanto usuarios adoptantes como administradores, restringiendo las funcionalidades y vistas en función a cada rol.

    📌 Registro de Adoptantes: Registro de usuarios interesados en adoptar mascotas. Este registro consiste en un gran formulario que los usuarios deben llenar para que el sistema pueda recomendarle mascotas en función a sus condiciones en el hogar y preferencias.

    📌 Visualización de Mascotas Compatibles: Los usuarios adoptantes pueden observar un listado de mascotas que posee la fundación disponibles para adoptar y que son compatibles con su estilo de vida. Cada usuario puede conocer más información de la mascota y hacer match con la que más le llame la atención.

    📌 Seguimiento de Solicitud: Una vez los usuarios adoptantes hacen match con una mascota, pueden observar el estado de su solicitud de adopción en la plataforma, de forma que puedan conocer si los administradores han visto su solicitud y planean comunicarse con el usuario, o si ya fue aprobada o rechazada.

    📌 Listado de Usuarios: Permite al administrador observar todos los usuarios adoptantes registrados en la plataforma. Cuenta con acciones para ver toda la información del adoptante o eliminarlo del sistema.

    📌 Listado de Mascotas: Permite al administrador gestionar todas las mascotas en la plataforma. Cuenta con acciones para agregar mascotas, editar sus datos, visualizar su información completa o eliminarlas del sistema.
    
    📌 Listado de Matches: Permite al administrador realizar un seguimiento de todos los matches que se han producido en la plataforma. Cuenta con acciones para visualizar el usuario y mascota asociado a cada match y para aprobar, rechazar o informar al usuario que su solicitud de adopción está en proceso.`,
    demo: "https://match-adopcion-mascotas.vercel.app",
    github: "https://github.com/AngelAnez/match_project",
    team: collaboratorList.filter(
      (collaborator) =>
        collaborator.name.match("Diana Mayorga") ||
        collaborator.name.match("Miriam Bautista") ||
        collaborator.name.match("Sonny Pimentel") ||
        collaborator.name.match("Ricardo Ortega") ||
        collaborator.name.match("Christian Martínez") ||
        collaborator.name.match("Eduardo Ismael Fuentes") ||
        collaborator.name.match("Luis Angel Quispe") ||
        collaborator.name.match("Ingrid Paola Chaves") ||
        collaborator.name.match("Carolina Castillo") ||
        collaborator.name.match("Anabel Somoza") ||
        collaborator.name.match("Daniela López Carrillo") ||
        collaborator.name.match("Nayely Rodriguez Aucassi") ||
        collaborator.name.match("Camila Schamun") ||
        collaborator.name.match("Feliangela García") ||
        collaborator.name.match("Gabriela Beatriz Pardo") ||
        collaborator.name.match("Claudia Campos") ||
        collaborator.name.match("Juan Francisco Aguilar")
    ),
  },
  {
    title: "Raiz",
    description:
      "Plataforma descentralizada que permite a personas e instituciones productoras emitir certificados digitales de sus productos en blockchain y también verificar el origen de los productos registrados escaneando su QR.",
    preview: RaizPreview,
    images: RaizImages,
    problem:
      "Actualmente, si un productor desea hacer la validación de certificados de sus productos, depende de autoridades centralizadas, procesos manuales y bases de datos privadas. Esto no solo dificulta la verificación rápida, sino que también genera vulnerabilidades ante la falsificación y la pérdida de información, generando una pérdida de confianza en la autenticidad y calidad de los productos certificados digitalmente. En este sentido, con la adopción de tecnologías blockchain, existe una oportunidad única de eliminar intermediarios, garantizar inmutabilidad, y permitir validaciones automáticas en segundos. De esta forma, surge la idea de desarrollar Raiz como una plataforma descentralizada que ayude a productores y compradores a emitir y verificar certificados digitales sin intermediarios.",
    stack: ["JavaScript", "React", "TailwindCSS", "Blockchain"],
    result: `Combinando la Web2 y la Web3, nace Raiz como aplicación web que cuenta con las siguientes funcionalidades:
    
    📌 Autenticación de Productores con Wallet: Permite a cualquier productor registrarse en la plataforma solo ingresando con su Wallet a través de la extensión web de MetaMask.
    
    📌 Registro de Nuevos Certificados: Los productores pueden generar nuevos certificados llenando un formulario con el nombre de producto, tipo de producto, institución emisora, fecha de produccion y fecha de emision.
    
    📌 Listado de Productos Certificados: Los productores pueden ver el listado de sus productos certificados, contando con la posibilidad de descargar la información de cada producto en formato PDF o sólo su código QR que lo identifica.
    
    📌 Escaneo de QR: Cualquier usuario sin necesidad de registro puede verificar la validez de un producto escaneando su código QR.
    
    📌 Chatbot Inteligente: Los usuarios tienen acceso a un chatbot con Inteligencia Artificial que puede responder cualquier duda sobre la aplicación`,
    role: "Frontend Developer",
    demo: "https://raiz-gold.vercel.app",
    github: "https://github.com/Yappur/Raiz",
    team: collaboratorList.filter(
      (collaborator) =>
        collaborator.name.match("Triana Devia") ||
        collaborator.name.match("Mateo Lopez Yapur") ||
        collaborator.name.match("Geraldine Cardozo") ||
        collaborator.name.match("Giuliano Nissero") ||
        collaborator.name.match("Jonathan Narváez Urresta") ||
        collaborator.name.match("Eudes Mieres") ||
        collaborator.name.match("Marcelo Peralta")
    ),
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Rafael Enrique Cortez"
    ),
    text: `Angel es solidario con sus compañeros, siempre dispuesto a ayudar, una persona muy comprometida y responsable.`,
    linkedin: "https://www.linkedin.com/in/rafael-ecortez",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Triana Devia"
    ),
    text: `Ángel es un líder nato, habiendo dirigido el equipo de Frontend con excelencia. Su carisma, participación activa y actitud solidaria han sido clave para el éxito del proyecto.`,
    linkedin: "https://www.linkedin.com/in/triana-devia",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Kenti Gabriel Antezana"
    ),
    text: `Tuve la oportunidad de trabajar con Ángel en No Country. Es un profesional impecable, bien predispuesto, con unas admirables habilidades en el desarrollo frontend. Posee grandes habilidades comunicativas, es una persona empatica y que se sabe comunicar muy bien. Ademas destaco su buen compañerismo y proactividad, con un perfil orientado al cumplimiento de objetivos. Sin dudas es alguien que recomiendo para trabajar.`,
    linkedin: "https://www.linkedin.com/in/kenti-gabriel-antezana-16364725b",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Deivison Jimenez"
    ),
    text: `Me es grato poder realizar esta recomendacion a Angel Durante el proyecto de No-Contry, ha sido una persona muy dedicada, de gran valor para el equipo, desde el Frontend a Realizado un Gran trabajo lleno de mucho apoyo, aporte al proyecto, es una persona Proactiva, reciliente, y demostrado gran compromiso al proyecto`,
    linkedin: "https://www.linkedin.com/in/deivison-jimenez",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Emanuel Capo"
    ),
    text: `Angel es un profesional muy organizado, proactivo y trabajador. Es muy comunicativo para expresar sus ideas y siempre está dispuesto a ayudar. Tiene un gran conocimiento de React y Typescript y su aporte fue fundamental para llevar adelante el proyecto que compartimos.`,
    linkedin: "https://www.linkedin.com/in/emanuel-capo",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Natalia Caniza"
    ),
    text: `Tuve la suerte de trabajar con Angel en un proyecto fintech que fue todo un desafío y no podría haber pedido un mejor compañero de equipo. Como programador front-end, su conocimiento técnico y atención a los detalles son impresionantes.
Sus aportes fueron clave para el éxito del proyecto y me ayudaron muchísimo a desempeñar mejor mi rol, ya que siempre estaba dispuesto a compartir su conocimiento y colaborar con soluciones creativas.
Sin dudas, trabajar con él fue una experiencia muy enriquecedora y sé que cualquier equipo que lo tenga será afortunado.`,
    linkedin: "https://www.linkedin.com/in/naticaniza",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Abel Montes Vega"
    ),
    text: `Trabajé junto a Ángel durante una hackathon, donde demostró su capacidad como desarrollador frontend. Supo trabajar de manera eficiente a la par con el backend, logrando una integración completa del proyecto. Además, tuvimos una comunicación fluida que facilitó el desarrollo del trabajo en equipo. Su proactividad y eficacia fueron claves para alcanzar los objetivos del proyecto.`,
    linkedin: "https://www.linkedin.com/in/abel-montes-vega",
  },
  {
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Leon Lederhos"
    ),
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
    ...collaboratorList.find(
      (collaborator) => collaborator.name === "Brian Diaz"
    ),
    text: `Tuve la oportunidad de trabajar con Ángel en el desarrollo de un MVP, donde se encargó de la parte frontend con React. Desde el primer momento, destacó por su proactividad y excelente comunicación, lo que facilitó enormemente la integración entre el frontend y el backend.

Su capacidad para resolver problemas y optimizar la interfaz de usuario fue clave para garantizar una experiencia fluida y atractiva. Además, siempre estuvo dispuesto a proponer mejoras, investigar nuevas soluciones y adaptarse a los cambios con rapidez.

Ángel es un profesional comprometido, con gran atención al detalle y un fuerte enfoque en la usabilidad y el rendimiento. Su actitud colaborativa y su pasión por la tecnología hacen que sea un miembro valioso en cualquier equipo de desarrollo`,
    linkedin: "https://www.linkedin.com/in/brianodz",
  },
];
