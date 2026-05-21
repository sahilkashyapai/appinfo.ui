import { useEffect, useRef, useState } from 'react';
import '../styles/pages/demo.scss';

const KPIS = [
	{ label: 'Active Devices', value: '142', delta: '+8 today', icon: 'sensors', tone: 'success' },
	{ label: 'Open Alerts', value: '7', delta: '2 critical', icon: 'notifications_active', tone: 'warning' },
	{ label: 'Avg Response', value: '12ms', delta: '-3ms vs week', icon: 'speed', tone: 'primary' },
	{ label: 'Uptime', value: '99.94%', delta: 'Last 30d', icon: 'health_and_safety', tone: 'success' },
];

const SIDEBAR_NAV = [
	{ id: 'overview', label: 'Overview', icon: 'dashboard' },
	{ id: 'devices', label: 'Devices', icon: 'sensors', badge: '142' },
	{ id: 'alerts', label: 'Alerts', icon: 'notifications', badge: '7' },
	{ id: 'analytics', label: 'Analytics', icon: 'monitoring' },
	{ id: 'zones', label: 'Zones', icon: 'map' },
	{ id: 'reports', label: 'Reports', icon: 'description' },
	{ id: 'settings', label: 'Settings', icon: 'settings' },
];

const DEVICE_ROWS = [
	{ id: 'SNSR-042', zone: 'Zone A', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.2', lastSeen: '2 min ago', load: 72 },
	{ id: 'SNSR-071', zone: 'Zone B', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.0', lastSeen: '5 min ago', load: 48 },
	{ id: 'CTRL-003', zone: 'Main', status: 'Pending', statusClass: 'ai-badge-warning', statusIcon: 'warning', firmware: 'v2.9.1', lastSeen: '12 min ago', load: 91 },
	{ id: 'PWR-011', zone: 'South', status: 'Offline', statusClass: 'ai-badge-danger', statusIcon: 'cancel', firmware: 'v3.0.0', lastSeen: '2 hrs ago', load: 0 },
	{ id: 'SNSR-088', zone: 'Zone C', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.2', lastSeen: '1 min ago', load: 34 },
];

const ACTIVITY_FEED = [
	{ id: 'snsr-042', label: 'SNSR-042 - Zone A', icon: 'sensors', badgeClass: 'ai-badge-success', badgeText: 'Online', active: true },
	{ id: 'snsr-071', label: 'SNSR-071 - Zone B', icon: 'sensors', badgeClass: 'ai-badge-success', badgeText: 'Online' },
	{ id: 'ctrl-003', label: 'CTRL-003 - Main', icon: 'tune', badgeClass: 'ai-badge-warning', badgeText: 'Pending' },
	{ id: 'pwr-011', label: 'PWR-011 - South', icon: 'battery_alert', badgeClass: 'ai-badge-danger', badgeText: 'Offline' },
];

const TAB_ITEMS = [
	{ id: 'overview', label: 'Overview', icon: 'sensors' },
	{ id: 'metrics', label: 'Metrics', icon: 'monitoring' },
	{ id: 'alerts', label: 'Alerts', icon: 'notifications' },
	{ id: 'history', label: 'History', icon: 'history' },
];

const ALERT_INITIAL = [
	{ id: 'a1', cls: 'ai-alert-warning', icon: 'warning', title: 'Warning:', message: 'Device SNSR-042 load above 70%.' },
	{ id: 'a2', cls: 'ai-alert-info', icon: 'info', title: 'Info:', message: 'Firmware v3.1.3 is available for 14 devices.' },
];

const FAQ = [
	{ id: 'f1', q: 'How often do devices sync?', a: 'By default every 60 seconds. You can change the poll interval per device.' },
	{ id: 'f2', q: 'Where are alerts delivered?', a: 'Real-time in the dashboard, plus email and webhook integrations.' },
	{ id: 'f3', q: 'Can I export reports?', a: 'Yes, every table supports CSV export from the Actions menu.' },
];

export default function DemoPage() {
	const [activeNav, setActiveNav] = useState('overview');
	const [activeTab, setActiveTab] = useState('overview');
	const [openDropdown, setOpenDropdown] = useState('');
	const [activeModal, setActiveModal] = useState('');
	const [pollInterval, setPollInterval] = useState('60');
	const [search, setSearch] = useState('');
	const [zone, setZone] = useState('all');
	const [chips, setChips] = useState({ online: true, warning: true, offline: false });
	const [thresholdRange, setThresholdRange] = useState(75);
	const [refreshRate, setRefreshRate] = useState(30);
	const [toggles, setToggles] = useState({ realtime: true, email: false, autoSync: true });
	const [alerts, setAlerts] = useState(ALERT_INITIAL);
	const [openFaq, setOpenFaq] = useState('f1');
	const [currentPage, setCurrentPage] = useState(1);
	const [showToast, setShowToast] = useState(true);
	const dropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setOpenDropdown('');
			}
		};
		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				setOpenDropdown('');
				setActiveModal('');
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);

	const toggleChip = (key) => setChips((prev) => ({ ...prev, [key]: !prev[key] }));
	const toggleSwitch = (key) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
	const removeAlert = (id) => setAlerts((prev) => prev.filter((a) => a.id !== id));

	const filteredRows = DEVICE_ROWS.filter((row) => {
		const matchesSearch = !search || row.id.toLowerCase().includes(search.toLowerCase()) || row.zone.toLowerCase().includes(search.toLowerCase());
		const matchesZone = zone === 'all' || row.zone.toLowerCase().includes(zone);
		const matchesChip =
			(row.status === 'Online' && chips.online) ||
			(row.status === 'Pending' && chips.warning) ||
			(row.status === 'Offline' && chips.offline);
		return matchesSearch && matchesZone && matchesChip;
	});

	return (
		<div className="dashboard">
			<aside className="dash-sidebar">
				<div className="dash-brand">
					<span className="material-symbols-outlined" aria-hidden="true">graph_3</span>
					<div>
						<div className="dash-brand-title">Control Center</div>
						<div className="dash-brand-sub">Operations</div>
					</div>
				</div>

				<div className="dash-sidebar-search">
					<input className="ai-input" type="text" placeholder="Quick search..." />
				</div>

				<nav className="dash-sidebar-nav">
					<div className="dash-sidebar-label">Workspace</div>
					{SIDEBAR_NAV.map((item) => (
						<button
							key={item.id}
							type="button"
							className={`dash-sidebar-link ${activeNav === item.id ? 'active' : ''}`}
							onClick={() => setActiveNav(item.id)}
						>
							<span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
							<span className="dash-sidebar-link-text">{item.label}</span>
							{item.badge && <span className="ai-badge ai-badge-primary">{item.badge}</span>}
						</button>
					))}
				</nav>

				<div className="dash-sidebar-footer">
					<div className="dash-user">
						<div className="ai-avatar ai-avatar-md" aria-hidden="true">SA</div>
						<div className="dash-user-meta">
							<div className="dash-user-name">Sahil Kashyap</div>
							<div className="dash-user-role">Administrator</div>
						</div>
						<button className="ai-btn ai-btn-ghost ai-btn-sm ai-icon-btn" type="button" aria-label="Sign out">
							<span className="material-symbols-outlined" aria-hidden="true">logout</span>
						</button>
					</div>
				</div>
			</aside>

			<div className="dash-main">
				<header className="dash-topbar">
					<div className="dash-topbar-left">
						<ul className="ai-breadcrumb" aria-label="Breadcrumb">
							<li>
								<a href="#"><span className="material-symbols-outlined" aria-hidden="true">home</span> Home</a>
								<span className="sep" aria-hidden="true"><span className="material-symbols-outlined">chevron_right</span></span>
							</li>
							<li>
								<a href="#">Operations</a>
								<span className="sep" aria-hidden="true"><span className="material-symbols-outlined">chevron_right</span></span>
							</li>
							<li className="active">Dashboard</li>
						</ul>
						<div className="dash-title-row">
							<h1 className="ai-h1">Operations Dashboard</h1>
							<span className="ai-badge ai-badge-success ai-badge-dot">Live</span>
						</div>
						<p className="ai-lead">Real-time monitoring across all devices, zones, and controllers.</p>
					</div>

					<div className="dash-topbar-right" ref={dropdownRef}>
						<div className="ai-tooltip-wrap">
							<button className="ai-btn ai-btn-ghost ai-icon-btn" type="button" aria-label="Search">
								<span className="material-symbols-outlined" aria-hidden="true">search</span>
							</button>
							<span className="ai-tooltip">Search</span>
						</div>

						<div className="ai-tooltip-wrap">
							<button className="ai-btn ai-btn-ghost ai-icon-btn" type="button" aria-label="Notifications">
								<span className="material-symbols-outlined" aria-hidden="true">notifications</span>
							</button>
							<span className="ai-tooltip">7 unread alerts</span>
						</div>

						<div className={`ai-dropdown ${openDropdown === 'actions' ? 'open' : ''}`}>
							<button
								className="ai-btn ai-btn-primary"
								type="button"
								onClick={() => setOpenDropdown((prev) => (prev === 'actions' ? '' : 'actions'))}
								aria-expanded={openDropdown === 'actions'}
							>
								<span className="material-symbols-outlined" aria-hidden="true">bolt</span>
								Quick Actions ▾
							</button>
							<div className="ai-dropdown-menu">
								<div className="ai-dropdown-item" onClick={() => { setActiveModal('add'); setOpenDropdown(''); }}>
									<span className="material-symbols-outlined" aria-hidden="true">add_circle</span> Add Device
								</div>
								<div className="ai-dropdown-item">
									<span className="material-symbols-outlined" aria-hidden="true">sync</span> Sync All
								</div>
								<div className="ai-dropdown-item">
									<span className="material-symbols-outlined" aria-hidden="true">download</span> Export CSV
								</div>
								<div className="ai-dropdown-sep" />
								<div className="ai-dropdown-item danger" onClick={() => { setActiveModal('delete'); setOpenDropdown(''); }}>
									<span className="material-symbols-outlined" aria-hidden="true">delete</span> Bulk Delete
								</div>
							</div>
						</div>
					</div>
				</header>

				{alerts.length > 0 && (
					<div className="dash-alerts">
						{alerts.map((alert) => (
							<div key={alert.id} className={`ai-alert ${alert.cls}`}>
								<div className="al-content">
                                    <span className="al-icon material-symbols-outlined" aria-hidden="true">{alert.icon}</span>
								    <div><strong>{alert.title}</strong> {alert.message}</div>
                                </div>
								<button className="al-close" onClick={() => removeAlert(alert.id)} type="button" aria-label="Close alert">
									<span className="material-symbols-outlined" aria-hidden="true">close</span>
								</button>
							</div>
						))}
					</div>
				)}

				<section className="dash-kpis">
					{KPIS.map((kpi) => (
						<div className="ai-card dash-kpi-card" key={kpi.label}>
							<div className="ai-card-body">
								<div className="dash-kpi-top">
									<span className={`dash-kpi-icon tone-${kpi.tone}`}>
										<span className="material-symbols-outlined" aria-hidden="true">{kpi.icon}</span>
									</span>
									<span className={`ai-badge ai-badge-${kpi.tone}`}>{kpi.delta}</span>
								</div>
								<div className="dash-kpi-value">{kpi.value}</div>
								<div className="dash-kpi-label">{kpi.label}</div>
							</div>
						</div>
					))}
				</section>

				<section className="dash-grid">
					<div className="dash-col-main">
						<div className="ai-card dash-toolbar">
							<div className="ai-card-body">
								<div className="dash-toolbar-row">
									<div className="ai-input-group dash-toolbar-search">
										<input
											className="ai-input"
											type="text"
											placeholder="Search devices by ID or zone..."
											value={search}
											onChange={(e) => setSearch(e.target.value)}
										/>
									</div>

									<select className="ai-select" value={zone} onChange={(e) => setZone(e.target.value)}>
										<option value="all">All Zones</option>
										<option value="zone a">Zone A</option>
										<option value="zone b">Zone B</option>
										<option value="zone c">Zone C</option>
										<option value="main">Main</option>
										<option value="south">South</option>
									</select>

									<div className="dash-divider" />

									<div className="dash-toolbar-chips">
										<span
											className={`ai-chip ${chips.online ? 'active' : ''}`}
											onClick={() => toggleChip('online')}
											role="button"
											tabIndex={0}
										>
											<span className="material-symbols-outlined" aria-hidden="true">check_circle</span> Online
										</span>
										<span
											className={`ai-chip ${chips.warning ? 'active' : ''}`}
											onClick={() => toggleChip('warning')}
											role="button"
											tabIndex={0}
										>
											<span className="material-symbols-outlined" aria-hidden="true">warning</span> Warning
										</span>
										<span
											className={`ai-chip ${chips.offline ? 'active' : ''}`}
											onClick={() => toggleChip('offline')}
											role="button"
											tabIndex={0}
										>
											<span className="material-symbols-outlined" aria-hidden="true">cancel</span> Offline
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className="ai-card">
							<div className="ai-card-header">
								<div className="ai-card-header-title">
									<span className="material-symbols-outlined" aria-hidden="true">view_list</span> Devices
								</div>
							</div>

							<div className="ai-tabs">
								<div className="ai-tab-list">
									{TAB_ITEMS.map((tab) => (
										<button
											key={tab.id}
											type="button"
											className={`ai-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
											onClick={() => setActiveTab(tab.id)}
										>
											<span className="material-symbols-outlined" aria-hidden="true">{tab.icon}</span> {tab.label}
										</button>
									))}
								</div>
							</div>

							{activeTab === 'overview' && (
								<div className="ai-table-wrap">
									<table className="ai-table">
										<thead>
											<tr>
												<th>Device ID</th>
												<th>Zone</th>
												<th>Status</th>
												<th>Load</th>
												<th>Firmware</th>
												<th>Last Seen</th>
												<th aria-label="Actions" />
											</tr>
										</thead>
										<tbody>
											{filteredRows.length === 0 && (
												<tr>
													<td colSpan="7" style={{ textAlign: 'center', color: 'var(--c-text-muted)', padding: '24px' }}>
														No devices match the current filters.
													</td>
												</tr>
											)}
											{filteredRows.map((row) => (
												<tr key={row.id}>
													<td><strong>{row.id}</strong></td>
													<td>{row.zone}</td>
													<td>
														<span className={`ai-badge ${row.statusClass}`}>
															<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span> {row.status}
														</span>
													</td>
													<td style={{ minWidth: '140px' }}>
														<div className="ai-progress" style={{ height: '6px' }}>
															<div
																className="ai-progress-bar"
																style={{
																	width: `${row.load}%`,
																	background: row.load > 80 ? '#ef4444' : row.load > 60 ? '#f59e0b' : undefined,
																}}
															/>
														</div>
														<span className="ai-small">{row.load}%</span>
													</td>
													<td><code>{row.firmware}</code></td>
													<td>{row.lastSeen}</td>
													<td>
														<button className="ai-btn ai-btn-ghost ai-btn-sm ai-icon-btn" type="button" aria-label="Edit device">
															<span className="material-symbols-outlined" aria-hidden="true">edit</span>
														</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}

							{activeTab === 'metrics' && (
								<div style={{ padding: '24px' }} className="dash-metrics">
									<div className="sub-heading">Throughput</div>
									<p className="sub-desc">1,240 events captured in last 24h · peak at 14:30 · avg response 12ms.</p>
									<div className="dash-metric-rows">
										{[
											{ label: 'CPU Usage', value: 64 },
											{ label: 'Network I/O', value: 41 },
											{ label: 'Memory', value: 78 },
											{ label: 'Disk Write', value: 22 },
										].map((m) => (
											<div key={m.label}>
												<div className="ai-progress-label"><span>{m.label}</span><span>{m.value}%</span></div>
												<div className="ai-progress">
													<div className="ai-progress-bar striped animated" style={{ width: `${m.value}%` }} />
												</div>
											</div>
										))}
									</div>
								</div>
							)}

							{activeTab === 'alerts' && (
								<div style={{ padding: '24px' }}>
									<p className="ai-body">No active alerts in this tab. Last alert: threshold breach 3 days ago (resolved).</p>
									<div style={{ marginTop: '12px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
										<span className="ai-tag">resolved</span>
										<span className="ai-tag">zone-a</span>
										<span className="ai-tag">sensor</span>
										<span className="ai-tag">low-priority</span>
									</div>
								</div>
							)}

							{activeTab === 'history' && (
								<div style={{ padding: '24px' }}>
									<p className="ai-body">Configuration history - 3 changes in last 30 days. All by Admin.</p>
									<blockquote className="ai-blockquote">"Reliable, consistent UI is the foundation of every good monitoring tool."</blockquote>
								</div>
							)}

							<div className="ai-card-footer dash-pager">
								<span className="ai-small">Showing {filteredRows.length} of {DEVICE_ROWS.length} devices</span>
								<nav className="ai-pagination" aria-label="Pagination">
									<button
										className="ai-page-btn"
										type="button"
										onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
										disabled={currentPage === 1}
										aria-label="Previous page"
									>
										<span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
									</button>
									{[1, 2, 3].map((page) => (
										<button
											key={page}
											type="button"
											className={`ai-page-btn ${currentPage === page ? 'active' : ''}`}
											onClick={() => setCurrentPage(page)}
										>
											{page}
										</button>
									))}
									<button
										className="ai-page-btn"
										type="button"
										onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
										disabled={currentPage === 3}
										aria-label="Next page"
									>
										<span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
									</button>
								</nav>
							</div>
						</div>

						<div className="ai-card">
							<div className="ai-card-header">
								<div className="ai-card-header-title">
									<span className="material-symbols-outlined" aria-hidden="true">help</span> Frequently Asked Questions
								</div>
							</div>
							<div className="ai-card-body" style={{ padding: 0 }}>
								<div className="ai-accordion" style={{ border: 'none', borderRadius: 0 }}>
									{FAQ.map((item) => {
										const isOpen = openFaq === item.id;
										return (
											<div className="ai-acc-item" key={item.id}>
												<button
													className={`ai-acc-btn ${isOpen ? 'open' : ''}`}
													type="button"
													onClick={() => setOpenFaq((prev) => (prev === item.id ? '' : item.id))}
													aria-expanded={isOpen}
												>
													{item.q}
													<span className="ai-acc-icon material-symbols-outlined" aria-hidden="true">expand_more</span>
												</button>
												<div className={`ai-acc-body ${isOpen ? 'open' : ''}`}>{item.a}</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<aside className="dash-col-side">
						<div className="ai-card">
							<div className="ai-card-header">
								<div className="ai-card-header-title">
									<span className="material-symbols-outlined" aria-hidden="true">bolt</span> Live Activity
								</div>
							</div>
							<div className="ai-list">
								{ACTIVITY_FEED.map((item) => (
									<div className={`ai-list-item ${item.active ? 'active' : ''}`} key={item.id}>
										<span className="li-icon">
											<span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
										</span>
										{item.label}
										<span className="li-meta">
											<span className={`ai-badge ${item.badgeClass}`}>{item.badgeText}</span>
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="ai-card">
							<div className="ai-card-header">
								<div className="ai-card-header-title">
									<span className="material-symbols-outlined" aria-hidden="true">tune</span> Controls
								</div>
							</div>
							<div className="ai-card-body dash-controls">
								<div className="ai-input-group">
									<label className="ai-label">Alert Threshold</label>
									<input
										className="ai-range"
										type="range"
										min="0"
										max="100"
										value={thresholdRange}
										onChange={(e) => setThresholdRange(Number(e.target.value))}
									/>
									<span className="ai-hint">Trigger alerts above {thresholdRange}%.</span>
								</div>

								<div className="ai-input-group">
									<label className="ai-label">Refresh Rate (seconds)</label>
									<input
										className="ai-range"
										type="range"
										min="5"
										max="120"
										step="5"
										value={refreshRate}
										onChange={(e) => setRefreshRate(Number(e.target.value))}
									/>
									<span className="ai-hint">Polling every {refreshRate}s.</span>
								</div>

								<div className="dash-divider full" />

								<label className="ai-switch">
									<button
										type="button"
										className={`ai-switch-track ${toggles.realtime ? 'on' : ''}`}
										onClick={() => toggleSwitch('realtime')}
										aria-pressed={toggles.realtime}
									>
										<span className="ai-switch-thumb" />
									</button>
									<span className="ai-switch-label">Real-time alerts</span>
								</label>

								<label className="ai-switch">
									<button
										type="button"
										className={`ai-switch-track ${toggles.email ? 'on' : ''}`}
										onClick={() => toggleSwitch('email')}
										aria-pressed={toggles.email}
									>
										<span className="ai-switch-thumb" />
									</button>
									<span className="ai-switch-label">Email notifications</span>
								</label>

								<label className="ai-switch">
									<button
										type="button"
										className={`ai-switch-track ${toggles.autoSync ? 'on' : ''}`}
										onClick={() => toggleSwitch('autoSync')}
										aria-pressed={toggles.autoSync}
									>
										<span className="ai-switch-thumb" />
									</button>
									<span className="ai-switch-label">Auto-sync devices</span>
								</label>
							</div>
						</div>

						<div className="ai-card">
							<div className="ai-card-header">
								<div className="ai-card-header-title">
									<span className="material-symbols-outlined" aria-hidden="true">hourglass_top</span> Pending Sync
								</div>
							</div>
							<div className="ai-card-body dash-skeleton">
								<div className="ai-skel" style={{ height: '14px', width: '70%' }} />
								<div className="ai-skel" style={{ height: '14px', width: '90%' }} />
								<div className="ai-skel" style={{ height: '14px', width: '55%' }} />
								<div className="dash-skeleton-row">
									<div className="ai-skel" style={{ height: '32px', width: '32px', borderRadius: '50%' }} />
									<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
										<div className="ai-skel" style={{ height: '12px', width: '60%' }} />
										<div className="ai-skel" style={{ height: '12px', width: '40%' }} />
									</div>
								</div>
								<div className="dash-skeleton-row dash-spinner-row">
									<div className="ai-spinner" aria-hidden="true" />
									<span className="ai-small">Fetching latest snapshot...</span>
								</div>
							</div>
						</div>

						<div className="ai-card">
							<div className="ai-card-header">
								<div className="ai-card-header-title">
									<span className="material-symbols-outlined" aria-hidden="true">group</span> Team Online
								</div>
							</div>
							<div className="ai-card-body">
								<div className="ai-avatar-stack">
									<div className="ai-avatar ai-avatar-md">SA</div>
									<div className="ai-avatar ai-avatar-md">JD</div>
									<div className="ai-avatar ai-avatar-md">KP</div>
									<div className="ai-avatar ai-avatar-md">MR</div>
									<div className="ai-avatar ai-avatar-md">+3</div>
								</div>
								<p className="ai-small" style={{ marginTop: '10px' }}>7 admins watching this dashboard right now.</p>
							</div>
						</div>
					</aside>
				</section>

				<footer className="dash-footer">
					<div className="ai-mono">AppInfo.UI · Dashboard v1.0</div>
					<div className="dash-footer-links">
						<a className="ai-link" href="#">Docs</a>
						<a className="ai-link" href="#">API</a>
						<a className="ai-link" href="#">Support</a>
					</div>
				</footer>
			</div>

			{showToast && (
				<div className="dash-toast">
					<div className="ai-toast">
						<span className="t-icon">
							<span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
						</span>
						<div className="t-body">
							<div className="t-title">Sync complete</div>
							<div className="t-msg">All 14 devices updated successfully.</div>
						</div>
						<button className="t-close" type="button" aria-label="Dismiss toast" onClick={() => setShowToast(false)}>
							<span className="material-symbols-outlined" aria-hidden="true">close</span>
						</button>
					</div>
				</div>
			)}

			<div
				className={`ai-modal-backdrop ${activeModal === 'add' ? 'open' : ''}`}
				onClick={(event) => { if (event.target === event.currentTarget) setActiveModal(''); }}
			>
				<div className="ai-modal" role="dialog" aria-modal="true">
					<div className="ai-modal-header">
						<span className="ai-modal-title">
							<span className="material-symbols-outlined" aria-hidden="true">add_circle</span> Add Device
						</span>
						<button className="ai-modal-close" onClick={() => setActiveModal('')} type="button" aria-label="Close dialog">
							<span className="material-symbols-outlined" aria-hidden="true">close</span>
						</button>
					</div>
					<div className="ai-modal-body">
						<div className="ai-input-group">
							<label className="ai-label">Device ID <span className="req">*</span></label>
							<input className="ai-input" type="text" placeholder="e.g. SNSR-100" />
							<span className="ai-hint">Use a unique alphanumeric identifier.</span>
						</div>
						<div className="ai-input-group" style={{ marginTop: '14px' }}>
							<label className="ai-label">Zone</label>
							<select className="ai-select">
								<option>Zone A - North</option>
								<option>Zone B - South</option>
								<option>Zone C - East</option>
								<option>Zone D - West</option>
							</select>
						</div>
						<div className="ai-input-group" style={{ marginTop: '14px' }}>
							<label className="ai-label">Poll Interval</label>
							<select className="ai-select" value={pollInterval} onChange={(e) => setPollInterval(e.target.value)}>
								<option value="30">30 seconds</option>
								<option value="60">60 seconds</option>
								<option value="300">5 minutes</option>
							</select>
						</div>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" type="button" onClick={() => setActiveModal('')}>Cancel</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" type="button" onClick={() => setActiveModal('')}>Add Device</button>
					</div>
				</div>
			</div>

			<div
				className={`ai-modal-backdrop ${activeModal === 'delete' ? 'open' : ''}`}
				onClick={(event) => { if (event.target === event.currentTarget) setActiveModal(''); }}
			>
				<div className="ai-modal" role="dialog" aria-modal="true">
					<div className="ai-modal-header">
						<span className="ai-modal-title">
							<span className="material-symbols-outlined" aria-hidden="true">warning</span> Confirm Bulk Delete
						</span>
						<button className="ai-modal-close" onClick={() => setActiveModal('')} type="button" aria-label="Close dialog">
							<span className="material-symbols-outlined" aria-hidden="true">close</span>
						</button>
					</div>
					<div className="ai-modal-body">
						<p>This will remove the currently selected devices and their historical data permanently. This action cannot be undone.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" type="button" onClick={() => setActiveModal('')}>Cancel</button>
						<button className="ai-btn ai-btn-danger ai-btn-sm" type="button" onClick={() => setActiveModal('')}>Yes, Delete</button>
					</div>
				</div>
			</div>
		</div>
	);
}
