import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card contact-card">
          <h3 className="section-title">Contacto</h3>
          <p>Si quieres colaborar o tienes una oportunidad, escríbeme.</p>
          <div className="contact-links">
            <a href={`mailto:${personal.email}`}>Email</a>
            {personal.cv !== "#" && (
              <a href={personal.cv} target="_blank" rel="noreferrer">CV</a>
            )}
            <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
            {/* <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}