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
				lead="Top navigation bar - brand logo, links, and action areas. Theme-aware."
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
		</div>
	);
}
