import { useState } from 'react';

const THEMES = ['glance', 'mcomms', 'wwe', 'rattler', 'mainelink'];

export default function Navbar({ theme, onThemeChange, currentPage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeChange = (e) => {
    onThemeChange(e.target.value);
  };

  return (
    <nav className="p-nav">
      <div className="p-nav-logo">
        AppInfo.UI
        <span className="ver-tag">v1.0</span>
      </div>

      <div className={`nav-items${menuOpen ? ' open' : ''}`} id="navItems">
        <div className="p-nav-links">
          <a href="/" className={currentPage === 'home' ? 'active' : ''}>Docs</a>
          <a href="/components" className={currentPage === 'components' ? 'active' : ''}>Components</a>
          <a href="/demo" className={currentPage === 'demo' ? 'active' : ''}>Demo</a>
          <a href="/demo2" className={currentPage === 'demo2' ? 'active' : ''}>Demo 2</a>
          <a href="#themes">Themes</a>
          <a href="#quick-start">Get Started</a>
          <div className="nav-divider" />
          <a href="#">GitHub</a>
        </div>

        <div className="nav-divider" />

        <div className="theme-switcher">
          <span className="theme-label">Select Theme</span>
          <select
            className="ai-select"
            value={theme}
            onChange={handleThemeChange}
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        className={`menu-toggle${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
