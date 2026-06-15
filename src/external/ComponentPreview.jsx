import { useState } from 'react';

function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`.trim()} aria-hidden="true">
      {name}
    </span>
  );
}

const TABS = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'badges', label: 'Badges' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'forms', label: 'Forms' },
  { id: 'cards', label: 'Cards' },
];

function ButtonsPanel() {
  return (
    <>
      <p className="demo-meta">Variants</p>
      <div className="demo-row">
        <button className="demo-btn demo-btn-solid">Primary</button>
        <button className="demo-btn demo-btn-outline">Outline</button>
        <button className="demo-btn demo-btn-ghost">Ghost</button>
        <button className="demo-btn demo-btn-danger">Danger</button>
        <button className="demo-btn demo-btn-solid" disabled>Disabled</button>
      </div>
      <p className="demo-meta mt">Sizes</p>
      <div className="demo-row">
        <button className="demo-btn demo-btn-solid demo-btn-sm">Small</button>
        <button className="demo-btn demo-btn-solid">Default</button>
        <button className="demo-btn demo-btn-solid demo-btn-lg">Large</button>
      </div>
      <p className="demo-meta mt">With Icons</p>
      <div className="demo-row">
        <button className="demo-btn demo-btn-solid"><Icon name="bolt" /> Action</button>
        <button className="demo-btn demo-btn-outline"><Icon name="download" /> Download</button>
        <button className="demo-btn demo-btn-ghost"><Icon name="search" /> Search</button>
        <button className="demo-btn demo-btn-danger"><Icon name="delete" /> Delete</button>
      </div>
    </>
  );
}

function BadgesPanel() {
  return (
    <>
      <p className="demo-meta">Status badges</p>
      <div className="demo-row">
        <span className="demo-badge badge-primary"><Icon name="lens" /> Primary</span>
        <span className="demo-badge badge-dark">Dark</span>
        <span className="demo-badge badge-success"><Icon name="check" /> Active</span>
        <span className="demo-badge badge-warning"><Icon name="warning" /> Warning</span>
        <span className="demo-badge badge-error"><Icon name="close" /> Error</span>
        <span className="demo-badge badge-neutral">Neutral</span>
      </div>
      <p className="demo-meta mt">Inline with text</p>
      <p className="ai-fs-7 ai-text-muted">
        Device status: <span className="demo-badge badge-success"><Icon name="check" /> Online</span>&nbsp;
        Firmware: <span className="demo-badge badge-primary">v2.4.1</span>&nbsp;
        Sync: <span className="demo-badge badge-warning"><Icon name="warning" /> Pending</span>
      </p>
    </>
  );
}

function AlertsPanel() {
  return (
    <>
      <div className="demo-alert alert-info">
        <span className="demo-alert-icon"><Icon name="info" /></span>
        <div><strong>Info:</strong> Your configuration changes will take effect after the next device sync cycle.</div>
      </div>
      <div className="demo-alert alert-success">
        <span className="demo-alert-icon"><Icon name="check_circle" /></span>
        <div><strong>Success:</strong> All 14 devices have been updated to firmware version 3.1.2 successfully.</div>
      </div>
      <div className="demo-alert alert-warning">
        <span className="demo-alert-icon"><Icon name="warning" /></span>
        <div><strong>Warning:</strong> Device SNSR-042 has not reported in the last 30 minutes. Check connection.</div>
      </div>
      <div className="demo-alert alert-danger">
        <span className="demo-alert-icon"><Icon name="emergency" /></span>
        <div><strong>Critical:</strong> Threshold breach detected on Zone 3. Immediate attention required.</div>
      </div>
    </>
  );
}

function FormsPanel() {
  return (
    <div className="demo-forms-grid">
      <div>
        <div className="demo-input-group">
          <label className="demo-label">Device Name</label>
          <input className="demo-input" type="text" placeholder="e.g. SENSOR-042" />
        </div>
        <div className="demo-input-group">
          <label className="demo-label">IP Address</label>
          <input className="demo-input" type="text" placeholder="192.168.1.100" />
        </div>
        <div className="demo-input-group">
          <label className="demo-label">Zone</label>
          <select className="demo-select">
            <option>Zone A — North</option>
            <option>Zone B — South</option>
            <option>Zone C — East</option>
          </select>
        </div>
      </div>
      <div>
        <div className="demo-input-group">
          <label className="demo-label">Description</label>
          <textarea
            className="demo-input"
            rows={5}
            placeholder="Enter device description..."
            style={{ resize: 'vertical' }}
          />
        </div>
        <div className="demo-form-actions">
          <button className="demo-btn demo-btn-solid">Save Device</button>
          <button className="demo-btn demo-btn-ghost">Cancel</button>
        </div>
      </div>
    </div>
  );
}

function CardsPanel() {
  const cards = [
    {
      icon: 'sensors',
      title: 'Traffic Sensor',
      text: 'Monitoring intersection at 5th & Main. Last sync 2 min ago.',
      badge: { cls: 'badge-success', icon: 'check', label: 'Online' },
      btnCls: 'demo-btn-solid',
      btnLabel: 'View Details',
    },
    {
      icon: 'settings',
      title: 'Signal Controller',
      text: 'Phase timing active. Running adaptive cycle since 08:00.',
      badge: { cls: 'badge-primary', icon: 'lens', label: 'Active' },
      btnCls: 'demo-btn-outline',
      btnLabel: 'Configure',
    },
    {
      icon: 'battery_std',
      title: 'Power Unit',
      text: 'Battery at 23%. Solar charging interrupted — check panel.',
      badge: { cls: 'badge-warning', icon: 'warning', label: 'Attention' },
      btnCls: 'demo-btn-danger',
      btnLabel: 'Investigate',
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((c) => (
        <div key={c.title} className="demo-card">
          <div className="demo-card-top"><Icon name={c.icon} /></div>
          <div className="demo-card-body">
            <div className="demo-card-title">{c.title}</div>
            <p className="demo-card-text">{c.text}</p>
            <div className="ai-mt-2">
              <span className={`demo-badge ${c.badge.cls}`}><Icon name={c.badge.icon} /> {c.badge.label}</span>
            </div>
          </div>
          <div className="demo-card-footer">
            <button className={`demo-btn demo-btn-sm ${c.btnCls}`}>{c.btnLabel}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

const PANEL_MAP = {
  buttons: ButtonsPanel,
  badges: BadgesPanel,
  alerts: AlertsPanel,
  forms: FormsPanel,
  cards: CardsPanel,
};

export default function ComponentPreview() {
  const [activeTab, setActiveTab] = useState('buttons');
  const ActivePanel = PANEL_MAP[activeTab];

  return (
    <div className="section" id="components">
      <div className="section-eyebrow">Component Preview</div>
      <div className="section-title">Live examples, any theme.</div>
      <p className="section-lead">
        Every component you see below responds to the active theme. Switch themes above to see them
        all update in real time.
      </p>

      <div className="comp-tabs mt-32">
        {TABS.map((tab) => (
          <div
            key={tab.id}
            className={`comp-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="comp-panel">
        <ActivePanel />
      </div>
    </div>
  );
}
