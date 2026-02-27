import Section from "../Section.jsx";
import "../../styles/applications.css";

const ICONS = ["🏙️","🪑","🚚","⛱️","⛵","📐","🧖","🧱"]; // 8 item için

export default function ApplicationsSection({ t }) {
  const items = t.apps_items || [];

  return (
    <Section id="applications" title={t.apps_title} desc={t.apps_desc}>
      <div className="apps">
        {items.map((name, i) => (
          <article className="appCard" key={i}>
            <div className="appCard__top">
              <div className="appCard__icon" aria-hidden="true">
                {ICONS[i % ICONS.length]}
              </div>
              <div className="appCard__chip">{String(i + 1).padStart(2, "0")}</div>
            </div>

            <h3 className="appCard__title">{name}</h3>
            <p className="appCard__text muted">
              {t.apps_card_text || "Uygun ahşap seçimi ve doğru finisaj ile uzun ömürlü çözümler."}
            </p>

            <div className="appCard__bottom">
              <span className="appCard__hint">{t.apps_hint || "Detay için iletişime geçin"}</span>
              <a className="appCard__link" href="#contact">
                {t.apps_cta || "İletişim"} →
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}