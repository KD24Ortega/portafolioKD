import { portfolioData } from "../data/portfolioData";
import { motion as Motion, useReducedMotion } from "framer-motion";

import { fadeSlideUp, viewportOnce } from "../motionPresets";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      id="about"
      className="section"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={fadeSlideUp}
    >
      <div className="container">
        <h3 className="section-title">Sobre mí</h3>
        <p className="section-text">{portfolioData.about}</p>
      </div>
    </Motion.section>
  );
}