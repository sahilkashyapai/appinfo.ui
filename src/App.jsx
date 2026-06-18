import { useState, useEffect } from 'react';
import Navbar from './external/Navbar';
import Hero from './external/Hero';
import Features from './external/Features';
import ThemesSection from './external/ThemesSection';
import ComponentPreview from './external/ComponentPreview';
import QuickStart from './external/QuickStart';
import Footer from './external/Footer';
import ComponentsPage from './pages/ComponentsPage';
import DemoPage from './pages/DemoPage';
import Demo2Page from './pages/Demo2Page';


export default function App() {
  const [theme, setTheme] = useState('glance');
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    const onClick = (event) => {
      const anchor = event.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http')) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      window.history.pushState({}, '', url.pathname);
      setPathname(url.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const isComponentsPage = pathname === '/components' || pathname.startsWith('/components/');
  const isDemo2Page = pathname === '/demo2' || pathname.startsWith('/demo2/');
  const isDemoPage = !isDemo2Page && (pathname === '/demo' || pathname.startsWith('/demo/'));

  return (
    <>
      <Navbar
        theme={theme}
        onThemeChange={setTheme}
        currentPage={isDemo2Page ? 'demo2' : isDemoPage ? 'demo' : isComponentsPage ? 'components' : 'home'}
      />
      {isDemo2Page ? (
        <Demo2Page theme={theme} />
      ) : isDemoPage ? (
        <DemoPage theme={theme} />
      ) : isComponentsPage ? (
        <ComponentsPage pathname={pathname} theme={theme} />
      ) : (
        <>
          <Hero />
          <Features />
          <ThemesSection theme={theme} onThemeChange={setTheme} />
          <ComponentPreview />
          <QuickStart theme={theme} />
          <Footer />
        </>
      )}
    </>
  );
}
