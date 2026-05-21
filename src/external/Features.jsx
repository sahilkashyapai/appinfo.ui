const FEATURES = [
  {
    icon: 'palette',
    title: '5 Brand Themes',
    desc: 'Switch themes with a single data-theme attribute. Every component adapts instantly using CSS custom properties.',
  },
  {
    icon: 'bolt',
    title: 'CDN-Ready',
    desc: 'Drop a single <link> tag into your project and you\'re live. No build steps, no bundlers needed to get started.',
  },
  {
    icon: 'straighten',
    title: 'Design Tokens',
    desc: 'All brand colors, spacing, radii, and shadows are exposed as CSS variables. Override any token to create custom sub-themes.',
  },
  {
    icon: 'extension',
    title: '40+ Components',
    desc: 'Buttons, modals, navbars, data tables, accordions, toasts, and more — every pattern your IoT dashboard needs.',
  },
  {
    icon: 'accessibility_new',
    title: 'Accessible by Default',
    desc: 'ARIA attributes, focus rings, keyboard navigation, and screen-reader-friendly markup baked into every component.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile First',
    desc: 'Responsive layouts that work from compact dashboards on tablets to full desktop monitoring stations.',
  },
];

export default function Features() {
  return (
    <div className="features-section">
      <div className="section">
        <div className="section-eyebrow">Why AppInfo.UI</div>
        <div className="section-title">
          Everything your team needs,<br />nothing you don't.
        </div>
        <p className="section-lead">
          Designed for speed and consistency across your product portfolio — Glance, Mcomms, WWE,
          Rattler, and Mainelink all share the same component API, just different palettes.
        </p>

        <div className="features-grid">
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="feat-card">
              <div className="feat-icon"><span className="material-symbols-outlined" aria-hidden="true">{icon}</span></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
