import CopyButton from '../components/CopyButton';
import Navbar from '../components/Navbar';

const STEPS = [
  {
    num: 1,
    title: 'Add the stylesheet',
    desc: (
      <>
        Drop the AppInfo.UI <code>&lt;link&gt;</code> into your <code>&lt;head&gt;</code>.
        That's your entire setup for CSS.
      </>
    ),
  },
  {
    num: 2,
    title: 'Set your theme',
    desc: (
      <>
        Add <code>data-theme="glance"</code> (or any brand name) to your <code>&lt;html&gt;</code> tag.
        Switch anytime.
      </>
    ),
  },
  {
    num: 3,
    title: 'Use components',
    desc: 'Copy component markup from the docs. Everything uses semantic HTML with AppInfo.UI\'s utility classes.',
  },
];

function buildSnippet(origin, theme = 'glance') {
  return `<!-- 1. Add AppInfo.UI CSS -->
<link rel="stylesheet" href="${origin}/cdn/components.bundle.css">

<!-- 2. Add AppInfo.UI Images CDN -->
<link rel="preconnect" href="${origin}/images/">

<!-- 3. Set your brand theme on <html> -->
<html lang="en" data-theme="${theme}">

<!-- 4. Use components -->
<button class="ai-btn ai-btn-primary">Get Started</button>

<!-- Optional: Add JS for interactive components -->
<script src="${origin}/cdn/components.js"></script>`;
}

function buildBasicLayoutSnippet(origin, theme = 'glance') {
  return `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
<head>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App — Built with AppInfo.UI</title>

    <!-- AppInfo.UI CSS -->
    <link rel="stylesheet" href="${origin}/cdn/components.bundle.css">
</head>
<body>

    <header class="header header--no-nav">
      <div class="header-head">
        <div class="header-branding">
          <img src="${origin}/cdn/images/${theme}"/logo.png" class="brand-logo" alt="Logo"/>
          <span class="powered-by">Powered by APPLIED INFORMATION</span>
        </div>
        <div class="header-user-actions">
          <div class="user-info">
            <span class="user-name">Sahil kashyap</span>
            <span>-</span>
            <span class="user-business">Test Business AI</span>
          </div>
          <button class="ai-btn ai-btn-primary" type="button">
            <span class="logout-btn-text">LOGOUT</span>
            <span class="logout-btn-icon material-symbols-outlined">power_settings_new</span>
          </button>
        </div>
      </div>
    </header>
      
    <!-- AppInfo.UI JavaScript -->
    <script src="${origin}/cdn/components.js" defer></script>
</body>
</html>`;
}

export default function QuickStart({ theme = 'glance' }) {
  const origin = window.location.origin;
  const cdnCss = `${origin}/cdn/components.bundle.css`;
  const cdnImg = `${origin}/images/`;
  const cdnJs = `${origin}/cdn/components.js`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(buildSnippet(origin, theme));
  };

  const handleCopyBasicLayout = async () => {
    await navigator.clipboard.writeText(buildBasicLayoutSnippet(origin, theme));
  };

  return (
    <div className="quick-start" id="quick-start">
      <div className="section">
        <div className="section-eyebrow">Quick Start</div>
        <div className="section-title">Up and running in 3 steps.</div>
        <p className="section-lead">
          No build tools, no configuration files, no npm installs required. Just HTML.
        </p>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.num} className="step-card">
              <div className="step-num-badge">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="install-block">
          <CopyButton className="install-copy" onClick={handleCopy} />
          <pre>
            <span className="comment">{'<!-- 1. Add AppInfo.UI CSS -->'}</span>{'\n'}
            <span className="cmd">{'<link'}</span>{' '}
            <span className="str">{'rel'}</span>={''}
            <span className="str">{'"stylesheet"'}</span>{' '}
            <span className="str">{'href'}</span>={''}
            <span className="str">{`"${cdnCss}"`}</span>
            <span className="cmd">{'>'}</span>{'\n\n'}
            <span className="comment">{'<!-- 2. Add AppInfo.UI Images CDN -->'}</span>{'\n'}
            <span className="cmd">{'<link'}</span>{' '}
            <span className="str">{'rel'}</span>={''}
            <span className="str">{'"preconnect"'}</span>{' '}
            <span className="str">{'href'}</span>={''}
            <span className="str">{`"${cdnImg}"`}</span>
            <span className="cmd">{'>'}</span>{'\n\n'}
            <span className="comment">{'<!-- 3. Set your brand theme on <html> -->'}</span>{'\n'}
            <span className="cmd">{'<html'}</span>{' '}
            <span className="str">{'lang'}</span>={''}
            <span className="str">{'"en"'}</span>{' '}
            <span className="str">{'data-theme'}</span>={''}
            <span className="str">{`"${theme}"`}</span>
            <span className="cmd">{'>'}</span>{'\n\n'}
            <span className="comment">{'<!-- 4. Use components -->'}</span>{'\n'}
            <span className="cmd">{'<button'}</span>{' '}
            <span className="str">{'class'}</span>={''}
            <span className="str">{'"ai-btn ai-btn-primary"'}</span>
            <span className="cmd">{'>'}</span>
            {'Get Started'}
            <span className="cmd">{'</button>'}</span>{'\n\n'}
            <span className="comment">{'<!-- Optional: Add JS for interactive components -->'}</span>{'\n'}
            <span className="cmd">{'<script'}</span>{' '}
            <span className="str">{'src'}</span>={''}
            <span className="str">{`"${cdnJs}"`}</span>
            <span className="cmd">{'></script>'}</span>
          </pre>
        </div>

        {/* Basic Layout / Starter Template Section */}
        <div className="basic-layout-section">
          <h2 className="basic-layout-title">Quick Start</h2>
          <p className="basic-layout-desc">
            Copy the following HTML template to get started with a basic layout that includes a header. This template is fully responsive and uses AppInfo.UI components for a modern look and feel.
          </p>

          <div className="install-block">
            <CopyButton className="install-copy" onClick={handleCopyBasicLayout} />
            <pre>
              <span className="cmd">{'<!DOCTYPE html>'}</span>{'\n'}

              <span className="cmd">{'<html'}</span>{' '}
              <span className="str">{'lang'}</span>=<span className="str">{'"en"'}</span>{' '}
              <span className="str">{'data-theme'}</span>=<span className="str">{`"${theme}"`}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              <span className="cmd">{'<head>'}</span>{'\n'}

              {'    '}<span className="comment">{'<!-- Meta tags -->'}</span>{'\n'}

              {'    '}<span className="cmd">{'<meta'}</span>{' '}
              <span className="str">{'charset'}</span>=<span className="str">{'"UTF-8"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'    '}<span className="cmd">{'<meta'}</span>{' '}
              <span className="str">{'name'}</span>=<span className="str">{'"viewport"'}</span>{' '}
              <span className="str">{'content'}</span>=<span className="str">{'"width=device-width, initial-scale=1.0"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'    '}<span className="cmd">{'<title>'}</span>
              {'My App — Built with AppInfo.UI'}
              <span className="cmd">{'</title>'}</span>{'\n\n'}

              {'    '}<span className="comment">{'<!-- AppInfo.UI CSS -->'}</span>{'\n'}

              {'    '}<span className="cmd">{'<link'}</span>{' '}
              <span className="str">{'rel'}</span>=<span className="str">{'"stylesheet"'}</span>{' '}
              <span className="str">{'href'}</span>=<span className="str">{`"${origin}/cdn/components.bundle.css"`}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              <span className="cmd">{'</head>'}</span>{'\n'}

              <span className="cmd">{'<body>'}</span>{'\n\n'}

              {'    '}<span className="comment">{'<!-- Application Header -->'}</span>{'\n'}

              {'    '}<span className="cmd">{'<header'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"header header--no-nav"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'        '}<span className="cmd">{'<div'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"header-head"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'            '}<span className="cmd">{'<div'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"header-branding"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'                '}<span className="cmd">{'<img'}</span>{' '}
              <span className="str">{'src'}</span>=
              <span className="str">{`"${origin}/src/images/${theme}/logo.png"`}</span>{' '}
              <span className="str">{'class'}</span>=
              <span className="str">{'"brand-logo"'}</span>{' '}
              <span className="str">{'alt'}</span>=
              <span className="str">{'"Logo"'}</span>
              <span className="cmd">{' />'}</span>{'\n'}

              {'                '}<span className="cmd">{'<span'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"powered-by"'}</span>
              <span className="cmd">{'>'}</span>
              {'Powered by APPLIED INFORMATION'}
              <span className="cmd">{'</span>'}</span>{'\n'}

              {'            '}<span className="cmd">{'</div>'}</span>{'\n'}

              {'            '}<span className="cmd">{'<div'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"header-user-actions"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'                '}<span className="cmd">{'<div'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"user-info"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'                    '}<span className="cmd">{'<span'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"user-name"'}</span>
              <span className="cmd">{'>'}</span>
              {'Sahil Kashyap'}
              <span className="cmd">{'</span>'}</span>{'\n'}

              {'                    '}<span>-</span>{'\n'}

              {'                    '}<span className="cmd">{'<span'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"user-business"'}</span>
              <span className="cmd">{'>'}</span>
              {'Test Business AI'}
              <span className="cmd">{'</span>'}</span>{'\n'}

              {'                '}<span className="cmd">{'</div>'}</span>{'\n'}

              {'                '}<span className="cmd">{'<button'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"ai-btn ai-btn-primary"'}</span>{' '}
              <span className="str">{'type'}</span>=<span className="str">{'"button"'}</span>
              <span className="cmd">{'>'}</span>{'\n'}

              {'                    '}<span className="cmd">{'<span'}</span>{' '}
              <span className="str">{'class'}</span>=<span className="str">{'"logout-btn-text"'}</span>
              <span className="cmd">{'>'}</span>
              {'LOGOUT'}
              <span className="cmd">{'</span>'}</span>{'\n'}

              {'                '}<span className="cmd">{'</button>'}</span>{'\n'}

              {'            '}<span className="cmd">{'</div>'}</span>{'\n'}

              {'        '}<span className="cmd">{'</div>'}</span>{'\n'}

              {'    '}<span className="cmd">{'</header>'}</span>{'\n\n'}

              {'    '}<span className="comment">{'<!-- AppInfo.UI JavaScript -->'}</span>{'\n'}

              {'    '}<span className="cmd">{'<script'}</span>{' '}
              <span className="str">{'src'}</span>=<span className="str">{`"${origin}/cdn/components.js"`}</span>{' '}
              <span className="str">{'defer'}</span>
              <span className="cmd">{'></script>'}</span>{'\n'}

              <span className="cmd">{'</body>'}</span>{'\n'}
              <span className="cmd">{'</html>'}</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
