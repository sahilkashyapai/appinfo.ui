import { useEffect, useRef, useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const HEADER_COLUMNS = ['Name', 'Status', 'A'];

const DEVICE_GROUP = {
	title: 'Addison TX Intersections',
	rows: [
		{ name: 'Addison-Airport', status: 'Online', count: '0', alert: true },
		{ name: 'Addison-Airport', status: 'Comms Fail', count: '0', alert: false },
	],
};

const DEVICE_GROUP_COUNT = 10;

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

function SidebarPreview() {
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
		'no-alarmbar',
		expanded ? 'sidebar-expanded-full' : '',
	]
		.filter(Boolean)
		.join(' ');

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
					{Array.from({ length: DEVICE_GROUP_COUNT }).map((_, i) => (
						<DeviceGroup key={i} {...DEVICE_GROUP} />
					))}
				</div>
			</div>
		</aside>
	);
}

export default function Sidebars() {
	return (
		<div className="comp-panel active" id="p-external-aside">
			<CompHeader
				title="Sidebars"
				lead="Left-aligned device list sidebar with header, scrollable content, and status indicators."
			/>

			<PreviewBlock
				label="Preview - Left-Aligned Device List Sidebar without Alarmbar and without Expandable feature"
				canvasStyle={{ gap: '16px', padding: '24px' }}
			>
				<SidebarPreview />
			</PreviewBlock>
		</div>
	);
}
