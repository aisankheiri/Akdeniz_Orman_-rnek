import { useEffect, useMemo, useState } from "react";
import Section from "../Section.jsx";
import "../../styles/chairs.css";

export default function ChairsSection({ t }) {
    const [active, setActive] = useState(null);

    const items = useMemo(() => {
        const arr = t.chairs_items || [];
        // 6 görsel: g1..g6
        return arr.slice(0, 6).map((x, i) => ({
            ...x,
            img: `/assets/chairs/g${i + 1}.jpg`,
        }));
    }, [t]);

    // marquee akışı pürüzsüz olsun diye track'i 2 kere basıyoruz
    const trackItems = useMemo(() => [...items, ...items], [items]);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setActive(null);
        if (active) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active]);

    useEffect(() => {
        if (!active) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [active]);

    return (
        <Section id="chairs" title={t.chairs_title} desc={t.chairs_desc} alt>
            <div className="chairs">
                <div className="chairs__fade chairs__fade--left" aria-hidden="true" />
                <div className="chairs__fade chairs__fade--right" aria-hidden="true" />

                <div className="chairs__viewport">
                    <div className="chairs__track">
                        {trackItems.map((x, idx) => (
                            <button
                                key={`${x.title}-${idx}`}
                                className="chairCard"
                                onClick={() => setActive(x)}
                                aria-label={t.chairs_view}
                            >
                                <img className="chairCard__img" src={x.img} alt={x.title} />
                                <div className="chairCard__meta" aria-hidden="true" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail "Sayfa" (Modal) */}
            {active && (
                <div className="cmodal" role="dialog" aria-modal="true" onMouseDown={() => setActive(null)}>
                    <div className="cmodal__panel" onMouseDown={(e) => e.stopPropagation()}>
                        <button className="cmodal__close" onClick={() => setActive(null)} aria-label={t.chairs_close}>✕</button>

                        <div className="cmodal__content">
                            <div className="cmodal__imgWrap">
                                <img className="cmodal__img" src={active.img} alt={active.title} />
                            </div>

                            <div className="cmodal__info">
                                <h3 className="cmodal__title">{active.title}</h3>
                                <p className="muted cmodal__text">{active.detail}</p>

                                <div className="cmodal__specs">
                                    <h4 className="cmodal__specTitle">{t.chairs_specs}</h4>
                                    <ul>
                                        {(active.specs || []).map((s, i) => <li key={i}>{s}</li>)}
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}