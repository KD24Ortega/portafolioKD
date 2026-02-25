import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const links = useMemo(
    () => [
      { id: "inicio", label: "Inicio" },
      { id: "about", label: "Sobre mí" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Proyectos" },
      { id: "contact", label: "Contacto" },
    ],
    [],
  );

  const [activeId, setActiveId] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const navOffset = 80;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;

        intersecting.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top),
        );

        const id = intersecting[0]?.target?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        threshold: 0.01,
        rootMargin: `-${navOffset}px 0px -70% 0px`,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [links]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#inicio" className="brand" onClick={handleNavClick}>PortafolioKD</a>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>

        <nav id="nav-menu" className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick}
              aria-current={activeId === link.id ? "page" : undefined}
              className={activeId === link.id ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}