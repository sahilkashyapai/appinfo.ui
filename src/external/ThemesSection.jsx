const DEFAULT_SWATCHES = ['var(--c-dark)', 'var(--c-mid)', 'var(--c-fade)', 'var(--c-accent)'];

const THEMES = [
  { id: 'glance', name: 'Glance', swatches: ['var(--c-dark)', 'var(--c-mid)', 'var(--c-accent)', 'var(--c-fade)'] },
  { id: 'mcomms', name: 'Mcomms', swatches: ['var(--c-dark)', 'var(--c-mid)', 'var(--c-accent)', 'var(--c-accent2)'] },
  { id: 'wwe', name: 'WWE' },
  { id: 'rattler', name: 'Rattler' },
  { id: 'mainelink', name: 'Mainelink' },
];

const images = import.meta.glob('../images/**/*', {
  eager: true,
  import: 'default',
})



export default function ThemesSection({ theme, onThemeChange }) {
  return (
    <div className="themes-section" id="themes">
      <div className="section">
        <div className="section-eyebrow">Brand Themes</div>
        <div className="section-title">One library, five personalities.</div>
        <p className="section-lead">
          Each theme is crafted from your product's official brand palette. Toggle instantly — all
          components update automatically.
        </p>

        <div className="themes-grid">
          {THEMES.map((t) => (
            <div
              key={t.id}
              data-theme={t.id}
              className={`theme-card${theme === t.id ? ' active-theme' : ''}`}
              onClick={() => onThemeChange(t.id)}
            >
              <div className={`theme-swatch theme-swatch-${t.id}`}>
                <img className="theme-logo" src={images[`../images/${t.id}/logo.png`]} alt={t.name.toUpperCase()} />
              </div>
              <div className="theme-card-body">
                <div className="theme-card-name">{t.name}</div>
                <div className="theme-swatches-row">
                  {(t.swatches ?? DEFAULT_SWATCHES).map((c) => (
                    <div key={c} className="mini-swatch" style={{ background: c }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
