import { getThemeImages } from '../utils/themeImages';

const FOOTER_LINKS = {
  Docs: ['Introduction', 'Installation', 'Theming', 'CSS Variables', 'Migration'],
  Components: ['Buttons', 'Navbar', 'Tables', 'Modals', 'Forms'],
  Resources: ['GitHub', 'Changelog', 'Issues', 'Discussions', 'License'],
};

const THEME_IDS = ['glance', 'mcomms', 'wwe', 'rattler', 'mainelink'];

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
          <div className="theme-badges-footer ai-mt-4">
            {THEME_IDS.map((id) => (
              <img
                key={id}
                className="theme-badge-f"
                src={getThemeImages(id).footer_logo}
                alt={id}
              />
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
