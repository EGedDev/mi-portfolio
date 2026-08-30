export const personal = {
  name: "Eli Garro",
  title: "Desarrollador Backend",
  bio: "Enfocado en construir sistemas robustos, escalables y bien estructurados. Especialista en diseño de APIs, manejo eficiente de datos y automatización de procesos.",
  linkedin:
    "https://www.linkedin.com/in/eli-gedeon-garro-nieto-3a705b385/",
  github: "https://github.com/EGedDev",
  email: "egarronieto@gmail.com",
  whatsapp: "928978841",
};

export const experience = [
  {
    role: "Desarrollador Backend Java",
    company: "ITAVEN S.A.C",
    period: "Feb 2024 - Abr 2025",
    description:
      "Diseño e implementación de APIs REST utilizando Java, Spring Boot y WebFlux. Aplicación de arquitectura hexagonal, optimización de consultas PostgreSQL mediante JPA/Hibernate y desarrollo de soluciones backend escalables.",
  },
  {
    role: "Desarrollador Backend Java | Funciones DevOps",
    company: "ITAVEN S.A.C",
    period: "Jul 2025 - May 2026",
    description:
      "Diseño de pipelines CI/CD con Jenkins, gestión de artefactos mediante Nexus, análisis de calidad con SonarQube y automatización de despliegues usando Ansible.",
  },
];

export const projects = [
  {
    name: "Sistema ERP Agroempresarial",
    description:
      "Plataforma web para digitalizar la gestión logística y comercial de una empresa agrícola, integrando catálogo, clientes, ventas, compras, inventario, caja, cartera y control de acceso.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JPA / Hibernate",
      "Docker",
      "Next.js",
      "React",
    ],
    image: "/projects/itaven.png",
    code: "https://github.com/EGedDev/agro-empresa-mvp",
    preview: "https://itavensac.vercel.app/",
  },

  {
    name: "API REST - Gestión de Usuarios",
    description:
      "API REST desarrollada con Java y Spring Boot para gestionar usuarios mediante operaciones CRUD, utilizando WebFlux y una arquitectura orientada a una separación clara de responsabilidades.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "WebFlux",
    ],
    image: "/projects/telco.png",
    code: "https://github.com/EGedDev/telco-fija-hogar",
    preview: "#",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Java",
  "Node.js",
  "Spring Boot",
  "Quarkus",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "Git",
];

export const certifications = [
  {
    name: "Docker Basics",
    issuer: "Platzi",
    date: "2025",
  },
  {
    name: "Java Avanzado",
    issuer: "EDteam",
    date: "2025",
    extra: "50 horas",
  },
  {
    name: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    date: "Enero 2025",
  },
  {
    name: "Spring Boot Course",
    issuer: "ATL Academy",
    date: "2025",
    extra: "25 horas",
  },
  {
    name: "AWS para empresas",
    issuer: "Entrena / TIDWIT",
    date: "Marzo 2026",
  },
  {
    name: "Microsoft Azure Fundamentals AZ-900",
    issuer: "Udemy",
    date: "Marzo 2025",
  },
  {
    name: "Inglés Básico A1",
    issuer: "Platzi",
    date: "2025",
  },
];

export const about = `Soy Eli Gedeon Garro Nieto, un apasionado del desarrollo de software y la tecnología. Mi viaje en la programación comenzó desde joven, impulsado por la curiosidad y el deseo de crear soluciones que realmente aporten valor.

A lo largo de mi carrera he trabajado en aplicaciones web, APIs e integraciones, buscando siempre un equilibrio entre eficiencia, escalabilidad y mantenibilidad. Actualmente continúo fortaleciendo mis conocimientos en desarrollo backend, arquitectura de software y tecnologías cloud.`;