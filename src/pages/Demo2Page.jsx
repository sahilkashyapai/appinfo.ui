import { useEffect, useRef, useState } from 'react';
import '../styles/pages/demo2.scss';

const NAV_ITEMS = [
	{ label: 'Portal' },
	{
		label: 'Home',
		children: ['Ag test', 'Akash Thakur', 'angel angel', 'angeldeep angeldeep', 'Ashok samrat', 'Kevin R'],
		footer: 'Save Map Coordinates',
	},
	{ label: 'View', children: ['Map View', 'Grid View', 'Arterial View', 'Space Time Diagram'] },
	{ label: 'Scheduling', children: ['School Beacon', 'DMS', 'Preemption', 'Convenient Security', 'Street Lighting'] },
	{ label: 'Tools', children: ['Glance Video+', 'Playback', 'Preempt Speed Profile', 'Glance Web Services', 'Traffic Count', 'Glance BI'] },
	{ label: 'Reports', children: ['Report Viewer', 'On Demand', 'User Activity', 'Alarm Activity', 'Maintenance Mode'] },
	{ label: 'Help' },
	{ label: 'My Account' },
];

const HEADER_COLUMNS = ['Name', 'Status', 'A'];

const DEVICE_GROUPS = [
	{
		title: 'Addison TX Intersections',
		rows: [
			{ name: 'Addison-Airport', status: 'Online', count: '0', alert: false },
			{ name: 'Addison-Belt Line', status: 'Online', count: '0', alert: false },
			{ name: 'Addison-Beltway', status: 'Comms Fail', count: '2', alert: true },
			{ name: 'Addison-Midway', status: 'Online', count: '0', alert: false },
		],
	},
	{
		title: 'Atlanta GA Corridor',
		rows: [
			{ name: 'ATL-Peachtree-01', status: 'Online', count: '0', alert: false },
			{ name: 'ATL-Peachtree-02', status: 'Online', count: '1', alert: false },
			{ name: 'ATL-Peachtree-03', status: 'Offline', count: '3', alert: true },
			{ name: 'ATL-Spring-01', status: 'Online', count: '0', alert: false },
		],
	},
	{
		title: 'Phoenix AZ Network',
		rows: [
			{ name: 'PHX-Camelback-01', status: 'Online', count: '0', alert: false },
			{ name: 'PHX-Camelback-02', status: 'Online', count: '0', alert: false },
			{ name: 'PHX-Indian School', status: 'Pending', count: '1', alert: true },
		],
	},
	{
		title: 'Phoenix AZ Network',
		rows: [
			{ name: 'PHX-Camelback-01', status: 'Online', count: '0', alert: false },
			{ name: 'PHX-Camelback-02', status: 'Online', count: '0', alert: false },
			{ name: 'PHX-Indian School', status: 'Pending', count: '1', alert: true },
		],
	},
	{
		title: 'Phoenix AZ Network',
		rows: [
			{ name: 'PHX-Camelback-01', status: 'Online', count: '0', alert: false },
			{ name: 'PHX-Camelback-02', status: 'Online', count: '0', alert: false },
			{ name: 'PHX-Indian School', status: 'Pending', count: '1', alert: true },
		],
	},
];

const KPIS = [
	{ label: 'Online Devices', value: '128', delta: '+4 today', icon: 'sensors', tone: 'success' },
	{ label: 'Active Alarms', value: '6', delta: '2 critical', icon: 'notifications_active', tone: 'warning' },
	{ label: 'Avg Response', value: '11ms', delta: '-2ms vs week', icon: 'speed', tone: 'primary' },
	{ label: 'Uptime', value: '99.97%', delta: 'Last 30 days', icon: 'health_and_safety', tone: 'success' },
];

const RECENT_EVENTS = [
	{ id: 'e1', time: '10:42', device: 'ATL-Peachtree-03', message: 'Comms failure detected', tone: 'danger', icon: 'cancel' },
	{ id: 'e2', time: '10:31', device: 'Addison-Beltway', message: 'Reconnected after outage', tone: 'success', icon: 'check_circle' },
	{ id: 'e3', time: '10:14', device: 'PHX-Indian School', message: 'Firmware update pending', tone: 'warning', icon: 'warning' },
	{ id: 'e4', time: '09:58', device: 'ATL-Peachtree-02', message: 'Vehicle count anomaly', tone: 'warning', icon: 'monitoring' },
	{ id: 'e5', time: '09:30', device: 'Addison-Airport', message: 'Routine health check OK', tone: 'success', icon: 'check_circle' },
];

function NavList({ items }) {
	const [openIndex, setOpenIndex] = useState(null);
	const navRef = useRef(null);

	useEffect(() => {
		const onDocClick = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null);
		};
		document.addEventListener('mousedown', onDocClick);
		return () => document.removeEventListener('mousedown', onDocClick);
	}, []);

	return (
		<ul className="ai-navbar-nav" ref={navRef}>
			{items.map((item, i) => {
				const hasChildren = Array.isArray(item.children) && item.children.length > 0;
				const isOpen = openIndex === i;
				if (!hasChildren) {
					return (
						<li className="nav-item" key={item.label}>
							<a href="#" className="nav-link">{item.label}</a>
						</li>
					);
				}
				return (
					<li className={`nav-item nav-item--has-dropdown${isOpen ? ' is-open' : ''}`} key={item.label}>
						<span className="nav-link nav-link--toggle">
							<a href="#" className="nav-link-label">{item.label}</a>
							<button
								type="button"
								className="nav-caret-btn"
								aria-expanded={isOpen}
								aria-haspopup="true"
								aria-label={`Toggle ${item.label} menu`}
								onClick={() => setOpenIndex(isOpen ? null : i)}
							>
								<span className="material-symbols-outlined nav-caret" aria-hidden="true">
									{isOpen ? 'expand_less' : 'expand_more'}
								</span>
							</button>
						</span>
						{isOpen && (
							<div className="nav-dropdown" role="menu">
								<ul className="nav-dropdown-list">
									{item.children.map((child) => (
										<li key={child} role="none">
											<a href="#" role="menuitem" className="nav-dropdown-item">{child}</a>
										</li>
									))}
								</ul>
								{item.footer && <span className="nav-dropdown-save">{item.footer}</span>}
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
}

function DeviceRow({ name, status, count, alert }) {
	return (
		<ul className="devicelist-items">
			<li className="child1-item">
				<span className={`device-status-light${alert ? ' red' : ''}`}></span>
				<a href="#">{name}</a>
			</li>
			<li className="child1-item">
				<a href="#">{status}</a>
			</li>
			<li className="child1-item">
				<a href="#">{count}</a>
			</li>
		</ul>
	);
}

function DeviceListSidebar() {
	const wrapperRef = useRef(null);
	const [hasScroll, setHasScroll] = useState(false);
	const [expanded, setExpanded] = useState(false);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (!wrapper) return;
		const parent = wrapper.parentElement;
		if (!parent) return;

		const update = () => {
			setHasScroll(
				wrapper.scrollHeight > parent.clientHeight ||
				wrapper.scrollWidth > parent.clientWidth
			);
		};
		update();

		const ro = new ResizeObserver(update);
		ro.observe(wrapper);
		ro.observe(parent);
		Array.from(wrapper.children).forEach((child) => ro.observe(child));
		window.addEventListener('resize', update);

		return () => {
			ro.disconnect();
			window.removeEventListener('resize', update);
		};
	}, []);

	useEffect(() => {
		if (!expanded) return;
		const wrapper = wrapperRef.current;
		const parent = wrapper?.parentElement;
		if (!parent) return;

		const getScroller = () => {
			if (parent.scrollWidth > parent.clientWidth) return parent;
			if (wrapper.scrollWidth > wrapper.clientWidth) return wrapper;
			return parent;
		};

		const onWheel = (e) => {
			const scroller = getScroller();
			if (scroller.scrollWidth <= scroller.clientWidth) return;
			const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
			if (delta === 0) return;
			e.preventDefault();
			scroller.scrollLeft += delta;
		};

		parent.addEventListener('wheel', onWheel, { passive: false });
		wrapper.addEventListener('wheel', onWheel, { passive: false });
		return () => {
			parent.removeEventListener('wheel', onWheel);
			wrapper.removeEventListener('wheel', onWheel);
		};
	}, [expanded]);

	const handleToggle = () => {
		if (!hasScroll && !expanded) return;
		setExpanded((v) => !v);
	};

	const enabled = hasScroll || expanded;
	const asideClass = [
		'ai-devicelist-sidebar',
		'not-closable',
		'no-alarmbar',
		expanded ? 'sidebar-expanded-full' : '',
	].filter(Boolean).join(' ');

	return (
		<aside className={asideClass} id="devicelistSidebar">
			<div className="devicelist-header">
				<ul className="devicelist-items">
					{HEADER_COLUMNS.map((label) => (
						<li key={label}>{label}</li>
					))}
				</ul>
				<span
					className="devicelist-header-toggle"
					id="devicelistSidebarToggle"
					role="button"
					tabIndex={enabled ? 0 : -1}
					aria-disabled={!enabled}
					aria-expanded={expanded}
					onClick={handleToggle}
					onKeyDown={(e) => {
						if (enabled && (e.key === 'Enter' || e.key === ' ')) {
							e.preventDefault();
							handleToggle();
						}
					}}
					style={{
						pointerEvents: enabled ? 'auto' : 'none',
						opacity: enabled ? 1 : 0.4,
						cursor: enabled ? 'pointer' : 'default',
					}}
				>
					<span className="material-symbols-outlined">
						{expanded ? 'chevron_left' : 'chevron_right'}
					</span>
				</span>
			</div>
			<div className="devicelist-content">
				<div className="devicelist-item-wrapper" ref={wrapperRef}>
					{DEVICE_GROUPS.map((group) => (
						<div key={group.title}>
							<h6 className="device-title">{group.title}</h6>
							{group.rows.map((row, i) => (
								<DeviceRow key={`${group.title}-${i}`} {...row} />
							))}
						</div>
					))}
				</div>
			</div>
		</aside>
	);
}

export default function Demo2Page({ theme = 'glance' }) {
	const logoPath = `/src/images/${theme}/logo.png`;

	return (
		<div className="demo2-shell">
			<header className="header header--has-nav">
				<div className="header-head">
					<div className="header-branding">
						<img src={logoPath} className="brand-logo" alt="Logo" />
						<span className="powered-by">Powered by APPLIED INFORMATION</span>
					</div>

					<div className="header-user-actions">
						<div className="user-info">
							<span className="user-name">Sahil Kashyap</span>
							<span>-</span>
							<span className="user-business">Test Business AI</span>
						</div>
						<button className="ai-btn ai-btn-primary" type="button">
							<span className="logout-btn-text">LOGOUT</span>
							<span className="logout-btn-icon material-symbols-outlined">power_settings_new</span>
						</button>
					</div>
				</div>

				<nav className="ai-navbar">
					<div className="ai-navbar-searchbox">
						<input
							type="text"
							className="ai-input ai-input-search"
							placeholder="Search..."
							aria-label="Search through site content"
						/>
					</div>
					<NavList items={NAV_ITEMS} />
				</nav>
			</header>

			<main className="main-wrapper">
				<DeviceListSidebar />

				<section className="map-content-wrapper">
					<div className="demo2-page-head">
						<div>
							<h1 className="demo2-title">Operations Dashboard</h1>
							<p className="demo2-subtitle">Live overview of monitored intersections and field devices.</p>
						</div>
						<div className="demo2-page-actions">
							<button className="ai-btn ai-btn-secondary" type="button">
								<span className="material-symbols-outlined" aria-hidden="true">refresh</span>
								Refresh
							</button>
							<button className="ai-btn ai-btn-primary" type="button">
								<span className="material-symbols-outlined" aria-hidden="true">add</span>
								Add Device
							</button>
						</div>
					</div>

					<div className="demo2-kpis">
						{KPIS.map((kpi) => (
							<div className={`demo2-kpi tone-${kpi.tone}`} key={kpi.label}>
								<div className="demo2-kpi-icon">
									<span className="material-symbols-outlined" aria-hidden="true">{kpi.icon}</span>
								</div>
								<div className="demo2-kpi-meta">
									<div className="demo2-kpi-label">{kpi.label}</div>
									<div className="demo2-kpi-value">{kpi.value}</div>
									<div className="demo2-kpi-delta">{kpi.delta}</div>
								</div>
							</div>
						))}
					</div>

					<div className="demo2-grid">
						<section className="demo2-card">
							<div className="demo2-card-head">
								<h2>Recent Activity</h2>
								<a href="#" className="demo2-link">View all</a>
							</div>
							<ul className="demo2-events">
								{RECENT_EVENTS.map((evt) => (
									<li key={evt.id} className={`demo2-event tone-${evt.tone}`}>
										<span className="material-symbols-outlined demo2-event-icon" aria-hidden="true">{evt.icon}</span>
										<div className="demo2-event-body">
											<div className="demo2-event-top">
												<span className="demo2-event-device">{evt.device}</span>
												<span className="demo2-event-time">{evt.time}</span>
											</div>
											<div className="demo2-event-message">{evt.message}</div>
										</div>
									</li>
								))}
							</ul>
						</section>

						<section className="demo2-card">
							<div className="demo2-card-head">
								<h2>System Health</h2>
								<span className="ai-badge ai-badge-success">
									<span className="material-symbols-outlined" aria-hidden="true">check</span>
									All Systems Nominal
								</span>
							</div>
							<div className="demo2-health">
								<div className="demo2-health-row">
									<span>API Latency</span>
									<div className="ai-progress">
										<div className="ai-progress-bar ai-progress-success" style={{ width: '22%' }} />
									</div>
									<span className="demo2-health-value">22ms</span>
								</div>
								<div className="demo2-health-row">
									<span>Database Load</span>
									<div className="ai-progress">
										<div className="ai-progress-bar ai-progress-primary" style={{ width: '48%' }} />
									</div>
									<span className="demo2-health-value">48%</span>
								</div>
								<div className="demo2-health-row">
									<span>Queue Backlog</span>
									<div className="ai-progress">
										<div className="ai-progress-bar ai-progress-warning" style={{ width: '71%' }} />
									</div>
									<span className="demo2-health-value">71%</span>
								</div>
								<div className="demo2-health-row">
									<span>Storage</span>
									<div className="ai-progress">
										<div className="ai-progress-bar ai-progress-primary" style={{ width: '35%' }} />
									</div>
									<span className="demo2-health-value">35%</span>
								</div>
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	);
}
