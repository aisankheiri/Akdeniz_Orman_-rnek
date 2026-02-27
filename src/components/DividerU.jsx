export default function DividerU({ flip = false, className = "" }) {
  return (
    <div className={`uDivider ${flip ? "uDivider--flip" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        {/* U / bowl shape */}
        <path d="M0,0 H1440 V40
                 C1200,140 960,140 720,90
                 C480,40 240,40 0,120
                 Z" />
      </svg>
    </div>
  );
}