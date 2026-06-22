import { useState } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';

const THEMES = ['glance', 'mcomms', 'wwe', 'rattler', 'mainelink'];

export default function Navbar({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleThemeChange = (e) => {
    onThemeChange(e.target.value);
  };

  const closeMenu = () => setMenuOpen(false);

  const handleGetStarted = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname === '/' && location.hash === '#quick-start') {
      const target = document.getElementById('quick-start');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    navigate('/#quick-start');
  };

  const linkClass = ({ isActive }) => (isActive ? 'active' : '');
  const getStartedClass =
    location.pathname === '/' && location.hash === '#quick-start' ? 'active' : '';

  return (
    <nav className="p-nav">
      <div className="p-nav-logo">
        AppInfo.UI
        <span className="ver-tag">v1.0</span>
      </div>

      <div className={`nav-items${menuOpen ? ' open' : ''}`} id="navItems">
        <div className="p-nav-links">
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>
            Docs
          </NavLink>

          <Link to="/#quick-start" className={getStartedClass} onClick={handleGetStarted}>
            Get Started
          </Link>

          <NavLink to="/components" className={linkClass} onClick={closeMenu}>
            Components
          </NavLink>

          <NavLink to="/demo2" className={linkClass} onClick={closeMenu}>
            Demo
          </NavLink>


          <div className="nav-divider" />

          <a href="https://github.com/sahilkashyapai/appinfo.ui" target="_new" rel="noopener noreferrer" onClick={closeMenu}>
            GitHub
          </a>
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
