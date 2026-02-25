import { portfolioData } from "../data/portfolioData";
import { motion as Motion, useReducedMotion } from "framer-motion";

import {
  fadeSlideUp,
  fadeSlideUpFast,
  staggerContainer,
  viewportOnce,
} from "../motionPresets";

export default function Hero() {
  const { personal } = portfolioData;
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      id="inicio"
      className="hero section"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={fadeSlideUp}
    >
      <Motion.div
        className="container hero-grid"
        variants={staggerContainer}
      >
        <Motion.div variants={fadeSlideUpFast}>
          <p className="eyebrow">Hola, soy</p>
          <h1>{personal.name}</h1>
          <h2>{personal.role}</h2>
          <p className="hero-text">{personal.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Ver proyectos</a>
            {personal.cv !== "#" && (
              <a className="btn btn-secondary" href={personal.cv} target="_blank" rel="noreferrer">
                Ver CV
              </a>
            )}
            <a className="btn btn-secondary" href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </Motion.div>

        <Motion.div className="hero-card" variants={fadeSlideUpFast}>
          {/* <img src="/profile.jpg" alt="Foto de perfil" /> */}
          <div className="hero-card-info">
            <p>{personal.location}</p>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
        </Motion.div>
      </Motion.div>
    </Motion.section>
  );
}