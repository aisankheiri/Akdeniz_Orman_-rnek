import "../../styles/footer.css";

export default function Footer({ t }) {
  const year = new Date().getFullYear();

  const phoneRaw = t.footer_phone || "+90 (552) 861 86 06";
  const phoneTel = phoneRaw.replace(/[^\d+]/g, "");
  const mail = t.footer_mail || "aisankheiri20@gmail.com";

  return (
    <footer id="contact" className="footerX">
      <div className="container footerX__top">
        {/* Profile / Project owner */}
        <div className="footerX__profile">
          <div className="footerX__avatar" aria-hidden="true">
            AK
          </div>

          <div className="footerX__who">
            <h3 className="footerX__name">Aisan Kheiri</h3>
            <p className="footerX__role muted">
              {t.footer_role}
            </p>
          </div>

          <div className="footerX__links">
            <a
              className="footerX__link"
              href="https://www.linkedin.com/in/aisan-kheiri-11a0ba27a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
            <a className="footerX__link" href={`mailto:${mail}`}>
              {t.send_mail || "Mail"} →
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="footerX__col">
          <h4 className="footerX__title">{t.nav_contact}</h4>
          <ul className="footerX__list">
            <li><a href={`tel:${phoneTel}`}>{phoneRaw}</a></li>
            <li><a href={`mailto:${mail}`}>{mail}</a></li>
            <li className="muted">{t.footer_addr}</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="footerX__col">
          <h4 className="footerX__title">{t.footer_links || "Links"}</h4>
          <ul className="footerX__list">
            <li><a href="#about">{t.nav_about}</a></li>
            <li><a href="#production">{t.nav_production}</a></li>
            <li><a href="#applications">{t.nav_apps}</a></li>
            <li><a href="#products">{t.products_title}</a></li>
          </ul>
        </div>

        {/* CTA: Call only */}
        <div className="footerX__cta">
          <h4 className="footerX__title">{t.footer_cta_title || "Bizimle çalışmak"}</h4>
          <p className="muted footerX__ctaText">
            {t.footer_cta_desc || "Web sitesi tasarımı ve geliştirme için telefonla ulaşabilirsiniz."}
          </p>

          <a className="footerX__callBtn" href={`tel:${phoneTel}`}>
            📞 {t.call_me || "Ara"}: {phoneRaw}
          </a>
        </div>
      </div>

      <div className="container footerX__bottom">
        <span className="muted">© {year} — {t.footer_rights || "All rights reserved."}</span>
        <a className="muted footerX__toplink" href="#top">↑ {t.back_to_top || "Top"}</a>
      </div>
    </footer>
  );
}