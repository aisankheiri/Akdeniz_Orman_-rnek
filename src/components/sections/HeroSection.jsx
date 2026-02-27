import "../../styles/hero.css";

export default function HeroSection({ t, go }) {
  return (
    <section className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: "url(/assets/hero.jpg)" }}
      />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="hero__kicker">{t.hero_kicker}</p>

        <h1 className="hero__title">
          {t.hero_title_1}
          <br />
          {t.hero_title_2}
        </h1>

        <p className="hero__subtitle">{t.hero_subtitle}</p>

        <div className="hero__cta">
          <button
            className="btn btn--primary"
            onClick={() => go("products")}
          >
            {t.products_title}
          </button>

          <button
            className="btn btn--ghost"
            onClick={() => go("contact")}
          >
            {t.nav_contact}
          </button>
        </div>
      </div>
    </section>
  );
}