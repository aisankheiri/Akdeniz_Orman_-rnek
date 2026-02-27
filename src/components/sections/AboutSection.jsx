import "../../styles/about.css";

export default function AboutSection({ t }) {
  return (
    <section id="about" className="about">
      {/* Background */}
      <div
        className="about__bg"
        style={{ backgroundImage: "url(/assets/about-bg.jpg)" }}
      />

      <div className="container about__content">
        {/* Left Image */}
        <div className="about__imageWrap">
          <img
            src="/assets/about-product.jpg"
            alt="Wood Table and Chairs"
            className="about__image"
          />
        </div>

        {/* Right Text */}
        <div className="about__text">
          <h2 className="about__title">{t.about_title}</h2>
          <p className="about__subtitle">{t.about_subtitle}</p>

          <p className="about__desc">{t.about_text_1}</p>
          <p className="about__desc muted">{t.about_text_2}</p>

          <div className="about__stats">
            <div className="about__stat">{t.about_stat_1}</div>
            <div className="about__stat">{t.about_stat_2}</div>
            <div className="about__stat">{t.about_stat_3}</div>
          </div>
        </div>
      </div>
    </section>
  );
}