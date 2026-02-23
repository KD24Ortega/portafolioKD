import { portfolioData } from "../data/portfolioData";
import { motion as Motion, useReducedMotion } from "framer-motion";

import {
  fadeSlideUp,
  fadeSlideUpFast,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../motionPresets";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      id="projects"
      className="section"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={fadeSlideUp}
    >
      <div className="container">
        <Motion.h3 className="section-title" variants={fadeSlideUpFast}>Proyectos</Motion.h3>
        <Motion.div className="projects-grid" variants={staggerContainer}>
          {portfolioData.projects.map((project) => (
            <Motion.article
              className="project-card card"
              key={project.title}
              tabIndex={0}
              variants={staggerItem}
            >
              <div className="project-media">
                <img src={project.image} alt={project.title} className="project-img" />

                {(project.demo !== "#" || project.repo !== "#") && (
                  <div className="project-overlay" aria-label={`Opciones para ${project.title}`}>
                    {project.demo !== "#" && (
                      <a className="btn btn-primary" href={project.demo} target="_blank" rel="noreferrer">
                        Ver demo
                      </a>
                    )}
                    {project.repo !== "#" && (
                      <a className="btn btn-secondary" href={project.repo} target="_blank" rel="noreferrer">
                        Ver código
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="chips">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              </div>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </Motion.section>
  );
}