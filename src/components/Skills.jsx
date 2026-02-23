import { portfolioData } from "../data/portfolioData.js";
import { useMemo, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

import {
  fadeSlideUp,
  fadeSlideUpFast,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../motionPresets";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaJava,
  FaCode,
  FaServer,
  FaNetworkWired,
  FaLinux,
  FaTools,
  FaVial,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiVercel,
  SiTypescript,
  SiLaravel,
  SiBlazor,
  SiVirtualbox,
  SiVmware,
  SiGrafana,
  SiPostman,
  SiNginx,
  SiApache,
  SiUbuntu,
  SiDebian,
  SiAlpinelinux,
  SiRockylinux,
  SiLinux,
} from "react-icons/si";

// Mapeo nombre -> icono
// Si una tecnología no tiene icono disponible en tu versión, se usa fallback genérico
const iconMap = {
  // Lenguajes
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  Bootstrap: <FaBootstrap />,
  "Tailwind CSS": <SiTailwindcss />,
  Python: <FaPython />,
  Java: <FaJava />,
  PHP: <FaPhp />,
  "Node.js": <FaNodeJs />,
  "C++": <FaCode />,
  "C#": <FaCode />,
  C: <FaCode />,

  // .NET / Frameworks
  ".NET Framework": <SiDotnet />,
  ".NET Core": <SiDotnet />,
  Blazor: <SiBlazor />,
  Laravel: <SiLaravel />,

  // Bases de datos
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  SQLite: <SiSqlite />,
  "SQL Server": <FaDatabase />, // seguro (evita error por ícono faltante)

  // Herramientas / plataformas
  Docker: <FaDocker />,
  VirtualBox: <SiVirtualbox />,
  VMware: <SiVmware />,
  "Power BI": <FaDatabase />, // fallback seguro
  Grafana: <SiGrafana />,
  Zabbix: <FaServer />,
  Hop: <FaTools />, // Apache Hop (fallback)
  Postman: <SiPostman />,
  JMeter: <FaVial />, // fallback testing
  Nginx: <SiNginx />,
  Apache: <SiApache />,
  Vercel: <SiVercel />,

  // Redes e infra
  "Redes (Nivel medio)": <FaNetworkWired />,
  "Packet Tracer": <FaNetworkWired />,
  GNS3: <FaNetworkWired />,
  "EVE-NG": <FaNetworkWired />,

  // Sistemas operativos
  Linux: <SiLinux />,
  "Alpine Linux": <SiAlpinelinux />,
  Ubuntu: <SiUbuntu />,
  Debian: <SiDebian />,
  "Rocky Linux": <SiRockylinux />,
};

function SkillGroup({ title, items }) {
  return (
    <Motion.div className="skill-group card" variants={fadeSlideUpFast}>
      <h4>{title}</h4>

      <Motion.div className="skills-icons-grid" variants={staggerContainer}>
        {items.map((item) => (
          <Motion.div key={item} className="tech-card" title={item} variants={staggerItem}>
            <div className="tech-icon">{iconMap[item] || <FaCode />}</div>
            <span className="tech-label">{item}</span>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;
  const reduceMotion = useReducedMotion();

  const categories = useMemo(() => Object.keys(skills), [skills]);
  const [activeCategory, setActiveCategory] = useState(null);

  const visibleEntries = useMemo(() => {
    if (!activeCategory) return Object.entries(skills);
    return [[activeCategory, skills[activeCategory]]];
  }, [activeCategory, skills]);

  return (
    <Motion.section
      id="skills"
      className="section"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={fadeSlideUp}
    >
      <div className="container">
        <Motion.h3 className="section-title" variants={fadeSlideUpFast}>Conocimientos Técnicos</Motion.h3>

        <Motion.div className="chips skills-filter" aria-label="Filtro de conocimientos técnicos" variants={fadeSlideUpFast}>
          <button
            type="button"
            className="chip"
            aria-pressed={!activeCategory}
            onClick={() => setActiveCategory(null)}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="chip"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </Motion.div>

        <Motion.div className="grid-2" variants={staggerContainer}>
          {visibleEntries.map(([category, items]) => (
            <SkillGroup key={category} title={category} items={items} />
          ))}
        </Motion.div>
      </div>
    </Motion.section>
  );
}