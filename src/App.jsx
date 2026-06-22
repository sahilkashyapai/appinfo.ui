import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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

function HomePage({ theme, onThemeChange }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#quick-start') return;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById('quick-start');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <>
      <Hero />
      <Features />
      <ThemesSection theme={theme} onThemeChange={onThemeChange} />
      <ComponentPreview />
      <QuickStart theme={theme} />
      <Footer />
    </>
  );
}

export default function App() {
  const [theme, setTheme] = useState('glance');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onThemeChange={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage theme={theme} onThemeChange={setTheme} />} />
        <Route path="/components" element={<ComponentsPage theme={theme} />} />
        <Route path="/components/:panel" element={<ComponentsPage theme={theme} />} />
        <Route path="/demo2" element={<Demo2Page theme={theme} />} />
        <Route path="/demo/*" element={<DemoPage theme={theme} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
