import { useEffect, useMemo, useState } from "react";
import Section from "../Section.jsx";
import "../../styles/products.css";

export default function ProductsSection({ t }) {
  const [active, setActive] = useState(null);

  const products = useMemo(
    () => [
      {
        id: "p1",
        img: "/assets/p1.jpg",
        title: t.p1_title,
        short: `${t.products_desc.slice(0, 90)}…`,
        detailText: t.p1_detail_text,
        specs: t.p1_specs || [],
      },
      {
        id: "p2",
        img: "/assets/p2.jpg",
        title: t.p2_title,
        short: `${t.products_desc.slice(0, 90)}…`,
        detailText: t.p2_detail_text,
        specs: t.p2_specs || [],
      },
      {
        id: "p3",
        img: "/assets/p3.jpg",
        title: t.p3_title,
        short: `${t.products_desc.slice(0, 90)}…`,
        detailText: t.p3_detail_text,
        specs: t.p3_specs || [],
      },
    ],
    [t]
  );

  const openDetail = (p) => setActive(p);
  const closeDetail = () => setActive(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeDetail();
    if (active) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <Section id="products" title={t.products_title} desc={t.products_desc}>
      <div className="products__grid">
        {products.map((p) => (
          <article className="productCard" key={p.id}>
            <button className="productCard__media" onClick={() => openDetail(p)} aria-label={`${p.title} detail`}>
              <img src={p.img} alt={p.title} />
              <div className="productCard__overlay">
               
              </div>
            </button>

            <div className="productCard__body">
              <h3 className="productCard__title">{p.title}</h3>
              <p className="productCard__text muted">{p.short}</p>

              <div className="productCard__actions">
                <button className="btn btn--primary" onClick={() => openDetail(p)}>
                  {t.view_detail}
                </button>
                <button
                  className="btn btn--ghost"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.nav_contact}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div className="modal" role="dialog" aria-modal="true" onMouseDown={closeDetail}>
          <div className="modal__panel" onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeDetail} aria-label="Close">✕</button>

            <div className="modal__content">
              <div className="modal__imageWrap">
                <img className="modal__image" src={active.img} alt={active.title} />
              </div>

              <div className="modal__info">
                <h3 className="modal__title">{active.title}</h3>
                <p className="modal__text muted">{active.detailText}</p>

                <div className="modal__specs">
                  <h4 className="modal__specTitle">{t.specs}</h4>
                  <ul>
                    {active.specs.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>

                <div className="modal__cta">
                  <button
                    className="btn btn--primary"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {t.get_offer}
                  </button>
                  <button className="btn btn--ghost" onClick={closeDetail}>
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}