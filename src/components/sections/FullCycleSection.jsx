import "../../styles/fullCycle.css";

export default function FullCycleSection({ t }) {
  const items = [
    { label: t.cycle_steps?.[0], img: "/assets/cycle-1.jpg" },
    { label: t.cycle_steps?.[1], img: "/assets/cycle-2.jpg" },
    { label: t.cycle_steps?.[2], img: "/assets/cycle-3.jpg" },
    { label: t.cycle_steps?.[3], img: "/assets/cycle-4.jpg" },
  ];

  return (
    <section className="stepper" id="cycle">
      <div className="stepper__wrap">
        <h2 className="stepper__title">
          {t.cycle_title}
        </h2>

        <div className="stepper__rail" />

        <div className="stepper__grid">
          {items.map((it, i) => (
            <div className="step" key={i}>
              <div className="step__circle">
                <img src={it.img} alt={it.label} />
              </div>
              <div className="step__label">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}