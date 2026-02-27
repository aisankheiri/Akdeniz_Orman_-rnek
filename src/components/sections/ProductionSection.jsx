import Section from "../Section.jsx";
import "../../styles/production.css";

export default function ProductionSection({ t }) {
  const steps = t.production_steps || [];
  const badges = t.production_badges || [];

  return (
    <Section id="production" title={t.production_title} desc={t.production_desc} alt>
      <div className="prod2">
        {/* Visual */}
        <div className="prod2__visual">
          <div className="prod2__frame">
            <img className="prod2__img" src="/assets/production.jpg" alt={t.production_title} />
            <div className="prod2__shine" aria-hidden="true" />
          </div>

          <div className="prod2__badges">
            {badges.map((b, i) => (
              <span className="prod2__badge" key={i}>{b}</span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="prod2__stepsWrap">
          <p className="prod2__subtitle">{t.production_subtitle}</p>

          <div className="prod2__steps">
            <div className="prod2__rail" aria-hidden="true" />
            {steps.map((s, i) => (
              <div className="prod2Step" key={i}>
                <div className="prod2Step__dot">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="prod2Step__body">
                  <div className="prod2Step__title">{s.title}</div>
                  <div className="prod2Step__text muted">{s.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="prod2__note muted">
            {t.production_note || "Her adımda kalite kontrol ile standardı koruyoruz."}
          </div>
        </div>
      </div>
    </Section>
  );
}