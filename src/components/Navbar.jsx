export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#inicio" className="brand">TuPortfolio</a>
        <nav>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}