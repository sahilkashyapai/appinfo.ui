import CopyButton from '../components/CopyButton';

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

const SNIPPET = `<!-- 1. Add AppInfo.UI CSS -->
<link rel="stylesheet" href="https://cdn.appinfo.ui.io/v1/appinfoui.min.css">

<!-- 2. Set your brand theme on <html> -->
<html lang="en" data-theme="glance">

<!-- 3. Use components -->
<button class="ai-btn ai-btn-primary">Get Started</button>

<!-- Optional: Add JS for interactive components -->
<script src="https://cdn.appinfo.ui.io/v1/appinfoui.bundle.min.js"></script>`;

export default function QuickStart() {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(SNIPPET);
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
            <span className="str">{'"https://cdn.appinfo.ui.io/v1/appinfoui.min.css"'}</span>
            <span className="cmd">{'>'}</span>{'\n\n'}
            <span className="comment">{'<!-- 2. Set your brand theme on <html> -->'}</span>{'\n'}
            <span className="cmd">{'<html'}</span>{' '}
            <span className="str">{'lang'}</span>={''}
            <span className="str">{'"en"'}</span>{' '}
            <span className="str">{'data-theme'}</span>={''}
            <span className="str">{'"glance"'}</span>
            <span className="cmd">{'>'}</span>{'\n\n'}
            <span className="comment">{'<!-- 3. Use components -->'}</span>{'\n'}
            <span className="cmd">{'<button'}</span>{' '}
            <span className="str">{'class'}</span>={''}
            <span className="str">{'"ai-btn ai-btn-primary"'}</span>
            <span className="cmd">{'>'}</span>
            {'Get Started'}
            <span className="cmd">{'</button>'}</span>{'\n\n'}
            <span className="comment">{'<!-- Optional: Add JS for interactive components -->'}</span>{'\n'}
            <span className="cmd">{'<script'}</span>{' '}
            <span className="str">{'src'}</span>={''}
            <span className="str">{'"https://cdn.appinfo.ui.io/v1/appinfoui.bundle.min.js"'}</span>
            <span className="cmd">{'></script>'}</span>
          </pre>
        </div>
      </div>
    </div>
  );
}
