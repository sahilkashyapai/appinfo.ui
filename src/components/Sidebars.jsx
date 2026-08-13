import { useEffect, useRef, useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const HEADER_COLUMNS = ['Name', 'Status', 'A'];

const FOOTER_STATS = [
	{ label: 'Alarms', value: 3 },
	{ label: 'Critical', value: 1, tone: 'danger' },
	{ label: 'High', value: 1, tone: 'warning' },
	{ label: 'Low', value: 1 },
];

const DEVICE_GROUP = {
	title: 'Addison TX Intersections',
	rows: [
		{ name: 'Addison-Airport', status: 'Online', count: '1', statusLight: 'red' },
		{ name: 'Addison-Belt Line', status: 'Comms Fail', count: '0', statusLight: 'black' },
		{ name: 'Addison-Beltway', status: 'Online', count: '0', statusLight: '' },
	],
};

const DEVICE_GROUP_COUNT = 10;

function DeviceRow({ name, status, count, statusLight = '' }) {
	return (
		<ul className="devicelist-items">
			<li className="child1-item">
				<span className={`device-status-light${statusLight ? ` ${statusLight}` : ''}`}></span>
				<a href="#">{name}</a>
			</li>
			<li className="child1-item">
				<a href="#">{status}</a>
			</li>
			<li className="child1-item">
				<a href="#">
					<span className={`device-count${count !== '0' ? ' device-count--alert' : ''}`}>{count}</span>
				</a>
			</li>
		</ul>
	);
}

function DeviceGroup({ title, rows }) {
	return (
		<>
			<h6 className="device-title">{title}</h6>
			{rows.map((row, i) => (
				<DeviceRow key={i} {...row} />
			))}
		</>
	);
}

function SidebarAlarmbar({ stats }) {
	return (
		<div className="devicelist-footer">
			<div className="devicelist-footer-stats">
				{stats.map((stat) => (
					<div className={`devicelist-footer-stat${stat.tone ? ` tone-${stat.tone}` : ''}`} key={stat.label}>
						<span className="devicelist-footer-value">{stat.value}</span>
						<span className="devicelist-footer-label">{stat.label}</span>
					</div>
				))}
			</div>
			<span className="devicelist-footer-toggle" aria-hidden="true">
				<span className="material-symbols-outlined">chevron_right</span>
			</span>
		</div>
	);
}

function SidebarPreview({ groupCount = DEVICE_GROUP_COUNT, instanceId = 'devicelistSidebar', hasAlarmbar = false }) {
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

	const handleToggle = () => {
		if (!hasScroll && !expanded) return;
		setExpanded((v) => !v);
	};

	const enabled = hasScroll || expanded;

	// Convert vertical wheel to horizontal scroll when expanded
	useEffect(() => {
		if (!expanded) return;
		const wrapper = wrapperRef.current;
		const parent = wrapper?.parentElement;
		if (!parent) return;

		// Pick whichever element actually has horizontal overflow
		const getScroller = () => {
			if (parent.scrollWidth > parent.clientWidth) return parent;
			if (wrapper.scrollWidth > wrapper.clientWidth) return wrapper;
			return parent;
		};

		const onWheel = (e) => {
			const scroller = getScroller();
			if (scroller.scrollWidth <= scroller.clientWidth) return;
			const delta =
				Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
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

	const asideClass = [
		'ai-devicelist-sidebar',
		'not-closable',
		hasAlarmbar ? 'has-alarmbar' : 'no-alarmbar',
		expanded ? 'sidebar-expanded-full' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<aside className={asideClass} id={instanceId}>
			<div className="devicelist-header">
				<ul className="devicelist-items">
					{HEADER_COLUMNS.map((label) => (
						<li key={label}>{label}</li>
					))}
				</ul>
				<span
					className="devicelist-header-toggle"
					id={`${instanceId}Toggle`}
					data-sidebar-toggle={instanceId}
					role="button"
					aria-controls={instanceId}
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
				>
					<span className="material-symbols-outlined">
						{expanded ? 'chevron_left' : 'chevron_right'}
					</span>
				</span>
			</div>
			<div className="devicelist-content">
				<div className="devicelist-item-wrapper" ref={wrapperRef}>
					{Array.from({ length: groupCount }).map((_, i) => (
						<DeviceGroup key={i} {...DEVICE_GROUP} />
					))}
				</div>
			</div>
			{hasAlarmbar && <SidebarAlarmbar stats={FOOTER_STATS} />}
		</aside>
	);
}

export default function Sidebars() {
	return (
		<div className="comp-panel active" id="p-external-aside">
			<CompHeader
				title="Sidebars"
				lead="A reusable left-aligned device-list sidebar (.ai-devicelist-sidebar) meant for consuming apps: a fixed-width header row, a vertically scrollable content area grouped by device group, and per-row status-light indicators. When its content overflows, a header toggle expands the sidebar to a fixed width and flips the scroll direction to horizontal so every group's columns stay legible - the toggle disables itself automatically when there's nothing to expand. Rows band automatically (zebra striping) and non-zero alarm counts pick up a warning badge. Add .has-alarmbar (instead of .no-alarmbar) plus a devicelist-footer to summarize Alarms/Critical/High/Low counts at the bottom."
			/>

			<div className="sub-heading">Scrollable, Expandable (10 groups)</div>
			<PreviewBlock
				label="Preview - Left-Aligned Device List Sidebar without Alarmbar and without Expandable feature"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<SidebarPreview />
			</PreviewBlock>

			<div className="sub-heading">Compact - Nothing to Scroll</div>
			<PreviewBlock
				label="Preview - fits without overflow, so the expand toggle is disabled (aria-disabled)"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<SidebarPreview groupCount={1} instanceId="devicelistSidebarCompact" />
			</PreviewBlock>

			<div className="sub-heading">With Alarm Bar</div>
			<PreviewBlock
				label="Preview - .has-alarmbar swaps in a bottom Alarms/Critical/High/Low summary strip"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<SidebarPreview instanceId="devicelistSidebarAlarmbar" hasAlarmbar />
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class / Attribute</th>
							<th>Applies to</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-devicelist-sidebar</code></td>
							<td>Root <code>&lt;aside&gt;</code></td>
							<td>Fixed <code>--sidebar-width</code> (340px) by default.</td>
						</tr>
						<tr>
							<td><code>sidebar-expanded-full</code></td>
							<td>Root modifier</td>
							<td>Switches width to <code>auto</code>, makes the content area scroll horizontally, and lays device groups out as columns side by side.</td>
						</tr>
						<tr>
							<td><code>not-closable</code></td>
							<td>Root modifier</td>
							<td>Marker class consumers use to signal layout intent (no close affordance) in their own app shell.</td>
						</tr>
						<tr>
							<td><code>no-alarmbar</code> / <code>has-alarmbar</code></td>
							<td>Root modifiers</td>
							<td>Mutually exclusive: <code>no-alarmbar</code> hides the <code>devicelist-footer</code> summary strip (default); <code>has-alarmbar</code> shows it. Pair <code>has-alarmbar</code> with a rendered <code>devicelist-footer</code> - see "With Alarm Bar" above.</td>
						</tr>
						<tr>
							<td><code>devicelist-header</code></td>
							<td>Header bar</td>
							<td>Fixed <code>--sidebar-header-height</code> (40px) row with the column labels and the expand toggle.</td>
						</tr>
						<tr>
							<td><code>devicelist-items</code></td>
							<td>Header/row <code>&lt;ul&gt;</code></td>
							<td>3-column flex layout: name 53%, status 35%, count 12%.</td>
						</tr>
						<tr>
							<td><code>devicelist-header-toggle</code></td>
							<td>Expand/collapse control</td>
							<td>Chevron button; gets <code>aria-disabled="true"</code> (and is skipped in tab order) when the list already fits without scrolling.</td>
						</tr>
						<tr>
							<td><code>devicelist-content</code> / <code>devicelist-item-wrapper</code></td>
							<td>Scroll region</td>
							<td>Vertically scrollable by default; wrapper height is capped to the viewport minus header heights.</td>
						</tr>
						<tr>
							<td><code>device-title</code></td>
							<td>Group heading</td>
							<td>Bold, accent-colored group label (e.g. an intersection name) above its rows.</td>
						</tr>
						<tr>
							<td><code>child1-item</code></td>
							<td>Row cell (<code>li</code>)</td>
							<td>One column of a device row.</td>
						</tr>
						<tr>
							<td><code>device-status-light</code></td>
							<td>Status dot</td>
							<td>10x10px square dot preceding the device name; add <code>.red</code> for an alert/fault state or <code>.black</code> for a distinct neutral state. No modifier renders an invisible placeholder so names stay aligned.</td>
						</tr>
						<tr>
							<td>(default)</td>
							<td><code>devicelist-items</code> (even)</td>
							<td>Zebra row banding - every other device row gets a surface2 tint, counted continuously across group boundaries.</td>
						</tr>
						<tr>
							<td><code>device-count</code> / <code>device-count--alert</code></td>
							<td><code>span</code> in the count cell</td>
							<td>Wraps the alarm-count value; <code>--alert</code> highlights non-zero counts with a warning-colored badge.</td>
						</tr>
						<tr>
							<td><code>devicelist-footer</code></td>
							<td>Footer bar</td>
							<td>Fixed strip below the scroll region - stat cells plus a chevron affordance, mirroring the header's visual weight. Hidden unless the root carries <code>has-alarmbar</code>.</td>
						</tr>
						<tr>
							<td><code>devicelist-footer-stat</code></td>
							<td>Stat cell</td>
							<td>Equal-width column with a value/label pair; add <code>.tone-danger</code> or <code>.tone-warning</code> to tint the value.</td>
						</tr>
						<tr>
							<td><code>devicelist-footer-toggle</code></td>
							<td>Footer control</td>
							<td>Chevron affordance at the footer's trailing edge, styled like <code>devicelist-header-toggle</code>.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
