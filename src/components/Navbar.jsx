import { useEffect, useRef, useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';
import glanceLogo from '../images/glance/logo.png';
import mainelinkLogo from '../images/mainelink/logo.png';
import mcommsLogo from '../images/mcomms/logo.png';
import rattlerLogo from '../images/rattler/logo.png';
import wweLogo from '../images/wwe/logo.png';

const logoMap = {
	glance: glanceLogo,
	rattler: rattlerLogo,
	mcomms: mcommsLogo,
	mainelink: mainelinkLogo,
	wwe: wweLogo,
};

const NAV_ITEMS = [
	{ label: 'Sahil kashyap - Test Business AI' },
	{ label: 'Portal' },
	{
		label: 'Home',
		children: [
			'Ag test',
			'lorem ipsum',
			'lorem ipsum dolor',
			'lorem ipsum dolor sit amet',
			'lorem samrat',
			'lorem samrat ipsum',
			'Kevin R'
		],
		footer: 'Save Map Coordinates',
	},
	{ label: 'View', children: ['Map View', 'Grid View', 'Arterial View', 'Space Time Dialgram'] },
	{ label: 'Scheduling', children: ['School Beacon', 'DMS', 'Preemption', 'Convenient Security', 'Street Lighting'] },
	{ label: 'Tools', children: ['Glance Video+', 'Playback', 'Preempt Speed Profile', 'Glance Web Services', 'Traffic Count', 'Glance BI'] },
	{ label: 'Reports', children: ['Report Viewer', 'On Demand', 'User Activity', 'Alarm Activity', 'Maintenance Mode'] },
	{ label: 'Help' },
	{ label: 'My Account' }
];

function NavList({ items, showMobileSelectionControls = false }) {
	const [openIndex, setOpenIndex] = useState(null);
	const navRef = useRef(null);

	function renderNavItem(item, i) {
		const hasChildren = Array.isArray(item.children) && item.children.length > 0;
		const isOpen = openIndex === i;
		if (!hasChildren) {
			return (
				<li className="nav-item" key={item.label}>
					<div className="nav-link">{item.label}</div>
				</li>
			);
		}
		return (
			<li className={`nav-item nav-item--has-dropdown${isOpen ? ' is-open' : ''}`} key={item.label}>
				<span className="nav-link nav-link--toggle">
					<div className="nav-link-label">{item.label}</div>
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
				<div className="nav-dropdown" role="menu">
					<ul className="nav-dropdown-list">
						{item.children.map((child) => (
							<li key={child} role="none">
								<div role="menuitem" className="nav-dropdown-item">{child}</div>
							</li>
						))}
					</ul>
					{item.footer && (
						<span className="nav-dropdown-save">{item.footer}</span>
					)}
				</div>
			</li>
		);
	}

	useEffect(() => {
		function onDocClick(e) {
			if (navRef.current && !navRef.current.contains(e.target)) setOpenIndex(null);
		}
		document.addEventListener('mousedown', onDocClick);
		return () => document.removeEventListener('mousedown', onDocClick);
	}, []);

	return (
		<ul className="ai-navbar-nav" ref={navRef}>
			{items[0] && renderNavItem(items[0], 0)}

			{showMobileSelectionControls && (
				<>
					<li className="nav-item only-mobile">
						<div className="nav-link ai-w-100">
							<select className="ai-select" defaultValue="Select Business">
								<option value="Select Business">Select Business</option>
							</select>
						</div>
					</li>
					<li className="nav-item only-mobile">
						<div className="nav-link ai-w-100">
							<select className="ai-select" defaultValue="Select Device">
								<option value="Select Device">Select Device</option>
							</select>
						</div>
					</li>
					<li className="nav-item only-mobile">
						<div className="nav-link ai-w-100">
							<button className="ai-btn ai-btn-primary ai-icon-btn ai-text-center" type="button" aria-label="Submit selection">
								<span className="material-symbols-outlined" aria-hidden="true">arrow_right_alt</span>
							</button>
						</div>
					</li>
				</>
			)}
			{items.slice(1).map((item, i) => renderNavItem(item, i + 1))}
		</ul>
	);
}

export default function Navbar({ theme = 'glance' }) {
	const headerLogo = logoMap[theme] || logoMap['glance'];
	const [noNavExpanded, setNoNavExpanded] = useState(false);
	const [primaryNavExpanded, setPrimaryNavExpanded] = useState(false);
	const [dropdownNoNavExpanded, setDropdownNoNavExpanded] = useState(false);
	const [dropdownNavExpanded, setDropdownNavExpanded] = useState(false);

	return (
		<div className="comp-panel active" id="p-navbar">
			<CompHeader
				title="Navbar"
				lead="Top navigation bar - brand logo, links, and action areas. Theme-aware: the top strip uses var(--c-dark), the nav bar beneath it uses var(--c-mid), and dropdown panels use var(--c-fade-alpha), so the whole header restyles instantly when the theme selector changes. The header can ship with or without a secondary nav bar (.header--no-nav vs .header--has-nav), that nav bar can hold either a search box + multi-level dropdown menu or a row of quick-select dropdowns (.header--has-dropdowns), and every layout collapses below 1080px into a hamburger-triggered mobile menu with the same content re-flowed into a vertical list."
			/>

			<PreviewBlock
				label="Preview - Header Without Navbar"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<header className="header header--no-nav">
					<div className="header-head">
						<div className="header-branding">
							<img src={headerLogo} className="brand-logo" alt="Logo" />
							<span className="powered-by">Powered by APPLIED INFORMATION</span>
						</div>

						<div className="header-user-actions">
							<div className="user-info">
								<span className="user-name">Sahil kashyap</span>
								<span>-</span>
								<span className="user-business">Test Business AI</span>
							</div>
							<button className="ai-btn ai-btn-primary" type="button">
								<span className="logout-btn-text">LOGOUT</span>
								<span className="logout-btn-icon material-symbols-outlined">power_settings_new</span>
							</button>
						</div>

						<button
							className={`ai-navbar-toggler only-mobile${noNavExpanded ? ' burger-open' : ''}`}
							type="button"
							aria-label="Toggle navigation"
							aria-expanded={noNavExpanded}
							onClick={() => setNoNavExpanded((v) => !v)}
						>
							<div className="navtoggler-sticks">
								<div className="stick"></div>
								<div className="stick"></div>
								<div className="stick"></div>
							</div>
						</button>
					</div>

					<nav className={`ai-navbar ai-navbar--mobile-only${noNavExpanded ? ' navbar-expanded' : ''}`}>
						<ul className="ai-navbar-nav">
							<li className="nav-item">
								<div className="nav-link">Sahil kashyap - Test Business AI</div>
							</li>
							<li className="nav-item">
								<a className="nav-link">Logout</a>
							</li>
						</ul>
					</nav>
				</header>
			</PreviewBlock>

			<PreviewBlock
				label="Preview - Header With Navbar"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<header className="header header--has-nav">
					<div className="header-head">
						<div className="header-branding">
							<img src={headerLogo} className="brand-logo" alt="Logo" />
							<span className="powered-by">Powered by APPLIED INFORMATION</span>
						</div>

						<div className="header-user-actions">
							<div className="user-info">
								<span className="user-name">Sahil kashyap</span>
								<span>-</span>
								<span className="user-business">Test Business AI</span>
							</div>
							<button className="ai-btn ai-btn-primary" type="button">
								<span className="logout-btn-text">LOGOUT</span>
								<span className="logout-btn-icon material-symbols-outlined">power_settings_new</span>
							</button>
						</div>

						<button
							className={`ai-navbar-toggler only-mobile${primaryNavExpanded ? ' burger-open' : ''}`}
							type="button"
							aria-label="Toggle navigation"
							aria-expanded={primaryNavExpanded}
							onClick={() => setPrimaryNavExpanded((v) => !v)}
						>
							<div className="navtoggler-sticks">
								<div className="stick"></div>
								<div className="stick"></div>
								<div className="stick"></div>
							</div>
						</button>
					</div>

					<nav className={`ai-navbar${primaryNavExpanded ? ' navbar-expanded' : ''}`}>
						<div className="ai-navbar-searchbox">
							<input type="text" className="ai-input ai-input-search" placeholder="Search..." aria-label="Search through site content" />
						</div>

						<NavList items={NAV_ITEMS} />
					</nav>
				</header>
			</PreviewBlock>

			<PreviewBlock
				label="Preview - Header With Dropdowns"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<header className="header header--no-nav header--has-dropdowns">
					<div className="header-head">
						<div className="header-branding">
							<img src={headerLogo} className="brand-logo" alt="Logo" />
							<span className="powered-by">Powered by APPLIED INFORMATION</span>
						</div>

						<div className="header-user-actions">
							<div className="user-info">
								<span className="user-name">Sahil kashyap</span>
								<span>-</span>
								<span className="user-business">Test Business AI</span>
							</div>

							<div className="header-dropdown-items">
								<select className="ai-select" defaultValue="Select Business">
									<option value="Select Business">Select Business</option>
								</select>
								<select className="ai-select" defaultValue="Select Device">
									<option value="Select Device">Select Device</option>
								</select>

								<button className="ai-btn ai-btn-primary ai-icon-btn" type="button" aria-label="Submit selection">
									<span className="material-symbols-outlined" aria-hidden="true">arrow_right_alt</span>
								</button>
							</div>

							<button className="ai-btn ai-btn-primary" type="button">
								<span className="logout-btn-text">LOGOUT</span>
								<span className="logout-btn-icon material-symbols-outlined">power_settings_new</span>
							</button>
						</div>

						<button
							className={`ai-navbar-toggler only-mobile${dropdownNoNavExpanded ? ' burger-open' : ''}`}
							type="button"
							aria-label="Toggle navigation"
							aria-expanded={dropdownNoNavExpanded}
							onClick={() => setDropdownNoNavExpanded((v) => !v)}
						>
							<div className="navtoggler-sticks">
								<div className="stick"></div>
								<div className="stick"></div>
								<div className="stick"></div>
							</div>
						</button>
					</div>

					<nav className={`ai-navbar ai-navbar--mobile-only${dropdownNoNavExpanded ? ' navbar-expanded' : ''}`}>
						<ul className="ai-navbar-nav">
							<li className="nav-item">
								<div className="nav-link">Sahil kashyap - Test Business AI</div>
							</li>

							<li className="nav-item">
								<div className="nav-link">
									<select className="ai-select" defaultValue="Select Business">
										<option value="Select Business">Select Business</option>
									</select>
								</div>
							</li>

							<li className="nav-item">
								<div className="nav-link">
									<select className="ai-select" defaultValue="Select Device">
										<option value="Select Device">Select Device</option>
									</select>
								</div>
							</li>

							<li className="nav-item">
								<div className="nav-link">
									<button className="ai-btn ai-btn-primary ai-icon-btn" type="button" aria-label="Submit selection">
										<span className="material-symbols-outlined" aria-hidden="true">arrow_right_alt</span>
									</button>
								</div>
							</li>

							<li className="nav-item">
								<a className="nav-link">Logout</a>
							</li>
						</ul>
					</nav>
				</header>
			</PreviewBlock>


			<PreviewBlock
				label="Preview - Header With Dropdowns"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<header className="header header--has-nav header--has-dropdowns">
					<div className="header-head">
						<div className="header-branding">
							<img src={headerLogo} className="brand-logo" alt="Logo" />
							<span className="powered-by">Powered by APPLIED INFORMATION</span>
						</div>

						<div className="header-user-actions">
							<div className="user-info">
								<span className="user-name">Sahil kashyap</span>
								<span>-</span>
								<span className="user-business">Test Business AI</span>
							</div>

							<div className="header-dropdown-items">
								<select className="ai-select" defaultValue="Select Business">
									<option value="Select Business">Select Business</option>
								</select>
								<select className="ai-select" defaultValue="Select Device">
									<option value="Select Device">Select Device</option>
								</select>

								<button className="ai-btn ai-btn-primary ai-icon-btn" type="button" aria-label="Submit selection">
									<span className="material-symbols-outlined" aria-hidden="true">arrow_right_alt</span>
								</button>
							</div>

							<button className="ai-btn ai-btn-primary" type="button">
								<span className="logout-btn-text">LOGOUT</span>
								<span className="logout-btn-icon material-symbols-outlined">power_settings_new</span>
							</button>
						</div>

						<button
							className={`ai-navbar-toggler only-mobile${dropdownNavExpanded ? ' burger-open' : ''}`}
							type="button"
							aria-label="Toggle navigation"
							aria-expanded={dropdownNavExpanded}
							onClick={() => setDropdownNavExpanded((v) => !v)}
						>
							<div className="navtoggler-sticks">
								<div className="stick"></div>
								<div className="stick"></div>
								<div className="stick"></div>
							</div>
						</button>
					</div>

					<nav className={`ai-navbar${dropdownNavExpanded ? ' navbar-expanded' : ''}`}>
						<div className="ai-navbar-searchbox">
							<input type="text" className="ai-input ai-input-search" placeholder="Search..." aria-label="Search through site content" />
						</div>
						<NavList items={NAV_ITEMS} showMobileSelectionControls />
					</nav>
				</header>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>header</code></td><td>Root wrapper. Full width; height is fixed by <code>--header-head-height</code> alone, or plus <code>--navbar-height</code> when a nav bar is present.</td></tr>
						<tr><td><code>header--no-nav</code> / <code>header--has-nav</code></td><td>Whether the secondary <code>.ai-navbar</code> bar renders beneath the top strip.</td></tr>
						<tr><td><code>header--has-dropdowns</code></td><td>Adds a row of quick-select <code>&lt;select&gt;</code> dropdowns + submit button into the top strip's action area.</td></tr>
						<tr><td><code>header-branding</code> / <code>brand-logo</code> / <code>powered-by</code></td><td>Logo + "Powered by" label on the left of the top strip.</td></tr>
						<tr><td><code>header-user-actions</code> / <code>user-info</code></td><td>Right-aligned user name/business + logout button; hidden below 1080px in favor of the mobile menu.</td></tr>
						<tr><td><code>ai-navbar-toggler</code> / <code>navtoggler-sticks</code> / <code>.stick</code></td><td>Hamburger button, built from 3 absolutely-positioned bars.</td></tr>
						<tr><td><code>burger-open</code></td><td>Applied to the toggler when expanded — animates the 3 bars into an X.</td></tr>
						<tr><td><code>only-mobile</code></td><td>Utility that's hidden by default and shown (<code>flex</code>) only below the 1080px breakpoint.</td></tr>
						<tr><td><code>ai-navbar</code></td><td>The secondary bar — brand-mid background, holds the search box and/or nav list.</td></tr>
						<tr><td><code>ai-navbar--mobile-only</code></td><td>Modifier for a nav bar that only ever renders in the mobile collapsed layout (no desktop bar at all).</td></tr>
						<tr><td><code>navbar-expanded</code></td><td>Applied below 1080px when the hamburger is toggled open — switches the nav bar from <code>display: none</code> to a full-height flyout.</td></tr>
						<tr><td><code>ai-navbar-searchbox</code></td><td>Fixed-width search input area, sized to match the sidebar width; hidden below 1080px.</td></tr>
						<tr><td><code>ai-navbar-nav</code> / <code>nav-item</code> / <code>nav-link</code></td><td>The horizontal (desktop) or stacked (mobile) list of top-level nav entries.</td></tr>
						<tr><td><code>nav-item--has-dropdown</code> / <code>is-open</code></td><td>Marks an item with a child menu; <code>.is-open</code> reveals its <code>.nav-dropdown</code> panel.</td></tr>
						<tr><td><code>nav-link--toggle</code> / <code>nav-caret-btn</code> / <code>nav-caret</code></td><td>The label + chevron button that opens/closes a dropdown; the chevron glyph itself swaps between <code>expand_more</code>/<code>expand_less</code>.</td></tr>
						<tr><td><code>nav-dropdown</code> / <code>nav-dropdown-list</code> / <code>nav-dropdown-item</code></td><td>Absolutely-positioned (statically stacked on mobile) scrollable menu panel and its rows.</td></tr>
						<tr><td><code>nav-dropdown-save</code></td><td>Optional sticky footer action rendered at the bottom of a dropdown panel (e.g. "Save Map Coordinates").</td></tr>
						<tr><td><code>header-dropdown-items</code></td><td>Row of quick-select controls injected into the top strip when <code>.header--has-dropdowns</code> is set.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
