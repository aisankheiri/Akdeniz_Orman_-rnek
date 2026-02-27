import "../styles/section.css";

export default function Section({
  id,
  title,
  desc,
  alt = false,
  children
}) {
  return (
    <section
      id={id}
      className={`section ${alt ? "section--alt" : ""}`}
    >
      <div className="container">

        {(title || desc) && (
          <div className="section__header">
            {title && (
              <h2 className="section__title">
                {title}
              </h2>
            )}

            {desc && (
              <p className="section__desc">
                {desc}
              </p>
            )}
          </div>
        )}

        {children}

      </div>
    </section>
  );
}