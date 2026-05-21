const STATS = [
  { num: '40+', label: 'UI Components' },
  { num: '5', label: 'Brand Themes' },
  { num: '0', label: 'Dependencies' },
  { num: '~18kb', label: 'CSS (gzipped)' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-blob" />

      <div className="hero-eyebrow">
        <span className="eyebrow-dot" />
        Multi-theme UI Component Library
      </div>

      <h1>
        Build faster.<br />
        <span className="highlight">Look consistent.</span>
      </h1>

      <p className="hero-sub">
        AppInfo.UI is a production-ready component library built for your internal products.
        5 themes, 40+ components, zero external dependencies — ship polished interfaces without reinventing the wheel.
      </p>

      <div className="hero-cta">
        <a href="#quick-start" className="btn-primary"><span className="material-symbols-outlined">bolt</span> Get Started</a>
        <a href="#components" className="btn-outline"><span className="material-symbols-outlined">browse </span> Browse Components</a>
      </div>

      <div className="hero-stats">
        {STATS.map(({ num, label }) => (
          <div key={label} className="stat-item">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
