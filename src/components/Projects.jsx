import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h3 className="section-title">Proyectos</h3>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article className="project-card card" key={project.title}>
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="chips">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                  )}
                  {project.repo !== "#" && (
                    <a href={project.repo} target="_blank" rel="noreferrer">Código</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}