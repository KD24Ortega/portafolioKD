export const portfolioData = {
  personal: {
    name: "Kevin Ortega",
    role: "Desarrollador Web",
    tagline:
      "Construyo aplicaciones web modernas, responsivas y enfocadas en una buena experiencia de usuario.",
    location: "Quito - Ecuador",
    email: "david.ortega2468@gmail.com",
    github: "https://github.com/KD24Ortega",
    linkedin: "#",//"https://www.linkedin.com/in/david-ortega-0b9350172/",
    cv: "/cv.pdf",
  },

  about: `Estudiante de séptimo nivel de Ingeniería en Tecnologías de la Información en la Universidad de las Fuerzas Armadas con sólidos conocimientos en desarrollo web, gestión de datos, redes e infraestructura. Experiencia práctica en proyectos académicos de aplicaciones web, análisis de métricas con herramientas de monitoreo y virtualización de redes. Busco oportunidades de prácticas preprofesionales donde pueda aplicar mis habilidades técnicas y continuar desarrollándome profesionalmente en entornos de desarrollo web, gestión de datos o infraestructura tecnológica`,

  skills: {
    "Lenguajes de Programación": [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "C#",
      "PHP",
      "C",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],

    "Bases de Datos": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "SQL Server",
    ],

    "Frameworks y Tecnologías": [
      "React",
      ".NET Framework",
      ".NET Core",
      "Blazor",
      "Laravel",
      "Node.js",
    ],

    "Herramientas y Plataformas": [
      "Docker",
      "VirtualBox",
      "VMware",
      "Power BI",
      "Grafana",
      "Zabbix",
      "Hop",
      "Postman",
      "JMeter",
      "Nginx",
      "Apache",
    ],

    "Redes e Infraestructura": [
      "Redes (Nivel medio)",
      "Packet Tracer",
      "GNS3",
      "EVE-NG",
    ],

    "Sistemas Operativos": [
      "Linux",
      "Alpine Linux",
      "Ubuntu",
      "Debian",
      "Rocky Linux",
    ],
  },

  projects: [
    {
      title: "Proyecto MVC - CRUD Medico",
      description:
        "Aplicación web de gestión de médicos utilizando el patrón MVC con ASP.NET Framework, Entity Framework y SQL Server. Credenciales de prueba: SuperAdmin / 123",
      image: "/projects/ProyectoMVC.png",
      stack: [".NET Framework", "Entity Framework", "SQL Server", "C#", "JavaScript", "Bootstrap"],
      demo: "https://crudkdortega.somee.com",
      repo: "https://github.com/KD24Ortega/ProyectoP1_DesarrolloWEB.git",
    },
    {
      title: "Proyecto Monitoreo de Niveles de Depresion y Ansiedad - CalmaSense",
      description:
        "Aplicación web para monitoreo de niveles de depresión y ansiedad utilizando el patron de Tres Capas (three-tier architecture) FastAPI para la capa de negocio, React para la capa de presentación y PostgreSQL para la capa de datos.",
      image: "/projects/CalmaSense.png",
      stack: ["Python", "FastAPI", "Docker", "DLIB", "React", "Tailwind CSS", "JavaScript", "PostgreSQL"],
      demo: "#",
      repo: "https://github.com/KD24Ortega/Proyecto_Lectura_Espejo_Inteligente.git",
    },
    {
      title: "Proyecto Monitoreo de Niveles de Atencion - FaceEDU",
      description:
        "Aplicación de escritorio para monitoreo de niveles de atención utilizando un patrón Patrón modular por capas simples con Python(POO), OpenCV, MediaPipe y MySQL para almacenamiento de datos.",
      image: "/projects/FaceEDU.png",
      stack: ["Python", "OpenCV", "MediaPipe", "MySQL"],
      demo: "#",
      repo: "https://github.com/KD24Ortega/FaceEdu.git",
    },
    {
      title: "Interfaz Rating de Peliculas - RetroRank",
      description:
        "Aplicación web para calificación de películas con HTML, CSS y JavaScript, utilizando localStorage para persistencia de datos.",
      image: "/projects/RetroRank.png",
      stack: ["HTML", "CSS", "JavaScript"],
      demo: "https://retrorank.vercel.app/",
      repo: "https://github.com/KD24Ortega/PRY_WEB_COMPONENTS_P1.git",
    },
    {
      title: "Aplicacion de Cuestionario de Estudio con PWA",
      description:
        "Aplicación web para gestión de cuestionarios con soporte offline y notificaciones push.",
      image: "/projects/AplicacionPWACuestionario.png",
      stack: ["React", "Bootstrap", "TypeScript", "PWA"],
      demo: "https://quest-ts.vercel.app/",
      repo: "https://github.com/KD24Ortega/cuestionariots.git",
    },
    {
      title: "Aplicacion de Gestion de Gastos con PWA",
      description:
        "Aplicación web para gestión de gastos personales con soporte offline, gráficos y notificaciones push.",
      image: "/projects/GastoZen.png",
      stack: ["React", "Bootstrap", "JavaScript", "PWA"],
      demo: "https://gastozen.vercel.app/",
      repo: "https://github.com/KD24Ortega/exposicionp3_kd.git",
    }
  ],
};