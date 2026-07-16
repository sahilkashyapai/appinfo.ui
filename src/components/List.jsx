import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const LIST_ITEMS = [
	{
		id: 'snsr-042',
		label: 'SNSR-042 - Zone A',
		icon: 'sensors',
		badgeClass: 'ai-badge-success',
		badgeText: 'Online',
		active: true,
	},
	{
		id: 'snsr-071',
		label: 'SNSR-071 - Zone B',
		icon: 'sensors',
		badgeClass: 'ai-badge-success',
		badgeText: 'Online',
	},
	{
		id: 'ctrl-003',
		label: 'CTRL-003 - Main',
		icon: 'tune',
		badgeClass: 'ai-badge-warning',
		badgeText: 'Pending',
	},
	{
		id: 'pwr-011',
		label: 'PWR-011 - South',
		icon: 'battery_alert',
		badgeClass: 'ai-badge-danger',
		badgeText: 'Offline',
	},
];

const SIMPLE_ITEMS = [
	'Zone A - North Wing',
	'Zone B - South Wing',
	'Zone C - Rooftop Array',
	'Zone D - Basement Utility',
];

const ACTION_ITEMS = [
	{ id: 'view-report', icon: 'description', label: 'View diagnostic report' },
	{ id: 'export-csv', icon: 'download', label: 'Export device list (CSV)' },
	{ id: 'add-device', icon: 'add_circle', label: 'Add new device', active: true },
];

export default function List() {
	return (
		<div className="comp-panel" id="p-listgroup">
			<CompHeader
				title="List Group"
				lead="Structured vertical lists (.ai-list > .ai-list-item) with icons, right-aligned metadata/badges, hover feedback, and an .active state for the currently selected row. Works equally well for plain text rows, icon + badge rows, or clickable action rows."
			/>
			<div className="sub-heading">Devices (icon + badge + active state)</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: 0, padding: '24px' }}
			>
				<div className="ai-list">
					{LIST_ITEMS.map((item) => (
						<div className={`ai-list-item ${item.active ? 'active' : ''}`} key={item.id}>
							<span className="li-icon">
								<span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
							</span>
							{item.label}
							<span className="li-meta"><span className={`ai-badge ${item.badgeClass}`}>{item.badgeText}</span></span>
						</div>
					))}
				</div>
			</PreviewBlock>

			<div className="sub-heading">Simple Text List</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: 0, padding: '24px' }}
			>
				<div className="ai-list">
					{SIMPLE_ITEMS.map((label) => (
						<div className="ai-list-item" key={label}>{label}</div>
					))}
				</div>
			</PreviewBlock>

			<div className="sub-heading">Clickable Action List</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: 0, padding: '24px' }}
			>
				<div className="ai-list">
					{ACTION_ITEMS.map((item) => (
						<div
							className={`ai-list-item ${item.active ? 'active' : ''}`}
							key={item.id}
							role="button"
							tabIndex={0}
							style={{ cursor: 'pointer' }}
						>
							<span className="li-icon">
								<span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
							</span>
							{item.label}
							<span className="li-meta">
								<span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
							</span>
						</div>
					))}
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Applies to</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-list</code></td><td><code>div</code></td><td>Bordered, rounded container that clips its children.</td></tr>
						<tr><td><code>ai-list-item</code></td><td><code>div</code></td><td>Row: flex layout, 12px/18px padding, bottom border (removed on the last child).</td></tr>
						<tr><td>(hover)</td><td><code>.ai-list-item:hover</code></td><td>Surface2 background highlight.</td></tr>
						<tr><td><code>active</code></td><td><code>.ai-list-item.active</code></td><td>Tinted accent background, accent text color, bold weight - marks the selected row.</td></tr>
						<tr><td><code>li-icon</code></td><td><code>span</code></td><td>Leading icon slot, fixed 16px size, non-shrinking.</td></tr>
						<tr><td><code>li-meta</code></td><td><code>span</code></td><td>Trailing slot pushed to the right (<code>margin-left: auto</code>) - holds a badge, icon, or timestamp.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
