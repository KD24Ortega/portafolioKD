import { portfolioData } from "../data/portfolioData.js";

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
    <div className="skill-group card">
      <h4>{title}</h4>

      <div className="skills-icons-grid">
        {items.map((item) => (
          <div key={item} className="tech-card" title={item}>
            <div className="tech-icon">{iconMap[item] || <FaCode />}</div>
            <span className="tech-label">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section">
      <div className="container">
        <h3 className="section-title">Conocimientos Técnicos</h3>

        <div className="grid-2">
          {Object.entries(skills).map(([category, items]) => (
            <SkillGroup key={category} title={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}