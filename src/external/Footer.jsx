const FOOTER_LINKS = {
  Docs: ['Introduction', 'Installation', 'Theming', 'CSS Variables', 'Migration'],
  Components: ['Buttons', 'Navbar', 'Tables', 'Modals', 'Forms'],
  Resources: ['GitHub', 'Changelog', 'Issues', 'Discussions', 'License'],
};

const THEME_BADGES = [
  { cls: 'tbf-glance', label: 'GLANCE' },
  { cls: 'tbf-mcomms', label: 'MCOMMS' },
  { cls: 'tbf-wwe', label: 'WWE' },
  { cls: 'tbf-rattler', label: 'RATTLER' },
  { cls: 'tbf-mainelink', label: 'MAINELINK' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">AppInfo.UI</div>
          <p className="footer-brand-sub">
            A multi-theme component library built for traffic management and IoT monitoring
            products. MIT licensed.
          </p>
          <div className="theme-badges-footer" style={{ marginTop: '16px' }}>
            {THEME_BADGES.map(({ cls, label }) => (
              <span key={label} className={`theme-badge-f ${cls}`}>{label}</span>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title} className="footer-col">
            <h4>{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>© 2025 AppInfo.UI. Built with care for your product teams. Code licensed MIT, docs CC BY 3.0.</p>
        <p>v1.0.0</p>
      </div>
    </footer>
  );
}
