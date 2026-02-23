import { portfolioData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h3 className="section-title">Sobre mí</h3>
        <p className="section-text">{portfolioData.about}</p>
      </div>
    </section>
  );
}