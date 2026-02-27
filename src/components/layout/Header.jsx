import { useEffect, useMemo, useState } from "react";

 export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const links = useMemo(
    () => [
      { id: "about", label: t.nav_about },
      { id: "production", label: t.nav_production },
      { id: "applications", label: t.nav_apps },
      { id: "products", label: t.products_title },
      { id: "contact", label: t.nav_contact },
    ],
    [t]
  );

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

 
  return (
     <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <button className="brand" onClick={() => go("top")} aria-label="Home">
          <img className="brand__logo" src="/assets/logo.png" alt="Logo" />
          <span className="brand__text">Örnek Proje</span>
        </button>

        <nav className="nav" aria-label="Main">
          <button
            className="nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav__links ${open ? "is-open" : ""}`}>
            {links.map((x) => (
              <button key={x.id} className="nav__link" onClick={() => go(x.id)}>
                {x.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="lang">
          <button
            className={`lang__btn ${lang === "tr" ? "is-active" : ""}`}
            onClick={() => setLang("tr")}
          >
            TR
          </button>
          <button
            className={`lang__btn ${lang === "en" ? "is-active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}