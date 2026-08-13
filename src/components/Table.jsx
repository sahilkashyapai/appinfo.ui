import { useMemo, useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TABLE_ROWS = [
	{ id: 'SNSR-042', zone: 'Zone A', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.2', lastSeen: '2 min ago' },
	{ id: 'SNSR-071', zone: 'Zone B', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.0', lastSeen: '5 min ago' },
	{ id: 'CTRL-003', zone: 'Main', status: 'Pending', statusClass: 'ai-badge-warning', statusIcon: 'warning', firmware: 'v2.9.1', lastSeen: '12 min ago' },
	{ id: 'PWR-011', zone: 'South', status: 'Offline', statusClass: 'ai-badge-danger', statusIcon: 'cancel', firmware: 'v3.0.0', lastSeen: '2 hrs ago' },
];

const SORT_COLUMNS = [
	{ key: 'id', label: 'Device ID' },
	{ key: 'zone', label: 'Zone' },
	{ key: 'status', label: 'Status' },
	{ key: 'firmware', label: 'Firmware' },
	{ key: 'lastSeen', label: 'Last Seen' },
];

const SCROLL_ROWS = Array.from({ length: 5 }, (_, batch) => TABLE_ROWS.map((row) => ({
	...row,
	id: `${row.id}-${batch + 1}`,
}))).flat();

const WIDE_ROWS = [
	{ id: 'SNSR-042', zone: 'Zone A', mfr: 'AcuSense', model: 'AS-200T', firmware: 'v3.1.2', ip: '10.20.4.11', uptime: '14d 02h', status: 'Online', statusClass: 'ai-badge-success', lastSeen: '2 min ago' },
	{ id: 'SNSR-071', zone: 'Zone B', mfr: 'AcuSense', model: 'AS-200T', firmware: 'v3.1.0', ip: '10.20.4.34', uptime: '9d 17h', status: 'Online', statusClass: 'ai-badge-success', lastSeen: '5 min ago' },
	{ id: 'CTRL-003', zone: 'Main', mfr: 'Voltek', model: 'VK-CTL9', firmware: 'v2.9.1', ip: '10.20.1.02', uptime: '61d 08h', status: 'Pending', statusClass: 'ai-badge-warning', lastSeen: '12 min ago' },
	{ id: 'PWR-011', zone: 'South', mfr: 'Voltek', model: 'VK-PWR3', firmware: 'v3.0.0', ip: '10.20.6.19', uptime: '0d 00h', status: 'Offline', statusClass: 'ai-badge-danger', lastSeen: '2 hrs ago' },
];

export default function Table() {
	const [sortKey, setSortKey] = useState(null);
	const [sortDir, setSortDir] = useState('ascending');

	const sortedRows = useMemo(() => {
		if (!sortKey) return TABLE_ROWS;
		const rows = [...TABLE_ROWS].sort((a, b) =>
			String(a[sortKey]).localeCompare(String(b[sortKey]), undefined, { numeric: true, sensitivity: 'base' })
		);
		if (sortDir === 'descending') rows.reverse();
		return rows;
	}, [sortKey, sortDir]);

	const handleSort = (key) => {
		if (key === sortKey) {
			setSortDir((dir) => (dir === 'ascending' ? 'descending' : 'ascending'));
		} else {
			setSortKey(key);
			setSortDir('ascending');
		}
	};

	const ariaSortFor = (key) => (key === sortKey ? sortDir : 'none');

	return (
		<div className="comp-panel" id="p-table">
			<CompHeader
				title="Table"
				lead="Data tables (.ai-table inside a .ai-table-wrap) with hover row highlighting, uppercase mono-font headers, status badges, and inline code cells. The wrapper adds a rounded border and scrolls horizontally (overflow-x: auto) so wide tables never break the page layout. Every header is sticky by default, and adding .ai-table--sortable plus a data-sort-key button per column makes rows click-to-sort. Mix in .ai-table--striped, .ai-table--compact, and .ai-table--bordered for zebra rows, denser padding, and column dividers - all modifiers stack on the same table."
			/>
			<div className="sub-heading">Standard</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap" style={{ width: '100%' }}>
					<table className="ai-table">
						<thead>
							<tr>
								<th>Device ID</th>
								<th>Zone</th>
								<th>Status</th>
								<th>Firmware</th>
								<th>Last Seen</th>
							</tr>
						</thead>
						<tbody>
							{TABLE_ROWS.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Sortable</div>
			<PreviewBlock
				label="Preview - click a column header to sort"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap" style={{ width: '100%' }}>
					<table className="ai-table ai-table--sortable">
						<thead>
							<tr>
								{SORT_COLUMNS.map((col) => (
									<th key={col.key} aria-sort={ariaSortFor(col.key)}>
										<button type="button" className="ai-th-sort" data-sort-key={col.key} onClick={() => handleSort(col.key)}>
											{col.label}
										</button>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{sortedRows.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Striped</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap" style={{ width: '100%' }}>
					<table className="ai-table ai-table--striped">
						<thead>
							<tr>
								<th>Device ID</th>
								<th>Zone</th>
								<th>Status</th>
								<th>Firmware</th>
								<th>Last Seen</th>
							</tr>
						</thead>
						<tbody>
							{TABLE_ROWS.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Compact</div>
			<PreviewBlock
				label="Preview - tighter padding for dense, data-heavy tables"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap" style={{ width: '100%' }}>
					<table className="ai-table ai-table--compact">
						<thead>
							<tr>
								<th>Device ID</th>
								<th>Zone</th>
								<th>Status</th>
								<th>Firmware</th>
								<th>Last Seen</th>
							</tr>
						</thead>
						<tbody>
							{TABLE_ROWS.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Bordered</div>
			<PreviewBlock
				label="Preview - vertical dividers between columns"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap" style={{ width: '100%' }}>
					<table className="ai-table ai-table--bordered">
						<thead>
							<tr>
								<th>Device ID</th>
								<th>Zone</th>
								<th>Status</th>
								<th>Firmware</th>
								<th>Last Seen</th>
							</tr>
						</thead>
						<tbody>
							{TABLE_ROWS.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Combined - striped, compact, sortable &amp; sticky</div>
			<PreviewBlock
				label="Preview - modifiers stack freely; click a column header to sort"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap ai-table-wrap--scroll" style={{ width: '100%' }}>
					<table className="ai-table ai-table--striped ai-table--compact ai-table--sortable">
						<thead>
							<tr>
								{SORT_COLUMNS.map((col) => (
									<th key={col.key} aria-sort={ariaSortFor(col.key)}>
										<button type="button" className="ai-th-sort" data-sort-key={col.key} onClick={() => handleSort(col.key)}>
											{col.label}
										</button>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{sortedRows.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Sticky Header (scrolling body)</div>
			<PreviewBlock
				label="Preview - header stays pinned while the body scrolls"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap ai-table-wrap--scroll" style={{ width: '100%' }}>
					<table className="ai-table">
						<thead>
							<tr>
								<th>Device ID</th>
								<th>Zone</th>
								<th>Status</th>
								<th>Firmware</th>
								<th>Last Seen</th>
							</tr>
						</thead>
						<tbody>
							{SCROLL_ROWS.map((row) => (
								<tr key={row.id}>
									<td>{row.id}</td>
									<td>{row.zone}</td>
									<td>
										<span className={`ai-badge ${row.statusClass}`}>
											<span className="material-symbols-outlined" aria-hidden="true">{row.statusIcon}</span>
											{' '}
											{row.status}
										</span>
									</td>
									<td><code>{row.firmware}</code></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Wide Table (responsive horizontal scroll)</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: 20 }}
			>
				<div className="ai-table-wrap" style={{ width: '100%' }}>
					<table className="ai-table">
						<thead>
							<tr>
								<th>Device ID</th>
								<th>Zone</th>
								<th>Manufacturer</th>
								<th>Model</th>
								<th>Firmware</th>
								<th>IP Address</th>
								<th>Uptime</th>
								<th>Status</th>
								<th>Last Seen</th>
							</tr>
						</thead>
						<tbody>
							{WIDE_ROWS.map((row) => (
								<tr key={row.id}>
									<td><code>{row.id}</code></td>
									<td>{row.zone}</td>
									<td>{row.mfr}</td>
									<td>{row.model}</td>
									<td><code>{row.firmware}</code></td>
									<td><code>{row.ip}</code></td>
									<td>{row.uptime}</td>
									<td><span className={`ai-badge ${row.statusClass}`}>{row.status}</span></td>
									<td>{row.lastSeen}</td>
								</tr>
							))}
						</tbody>
					</table>
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
						<tr><td><code>ai-table-wrap</code></td><td><code>div</code></td><td>Bordered, rounded outer shell; scrolls horizontally on overflow so the table itself stays unstyled by width constraints.</td></tr>
						<tr><td><code>ai-table</code></td><td><code>table</code></td><td>Full-width, border-collapsed, 13.5px body text.</td></tr>
						<tr><td>(default)</td><td><code>thead</code></td><td>Surface2 background band behind the header row.</td></tr>
						<tr><td>(default)</td><td><code>th</code></td><td>Uppercase, letter-spaced, mono-font (DM Mono) column headers - sticky to the top of the nearest scrolling ancestor by default.</td></tr>
						<tr><td>(default)</td><td><code>td</code></td><td>Body cell, muted text, bottom border (removed on the last row).</td></tr>
						<tr><td>(hover)</td><td><code>tr:hover td</code></td><td>Subtle accent-tinted row highlight - built in, no modifier class needed.</td></tr>
						<tr><td>(default)</td><td><code>td code</code></td><td>Inline code chip style for values like firmware versions or IP addresses.</td></tr>
						<tr><td><code>ai-table-wrap--scroll</code></td><td><code>div</code></td><td>Bounds the wrapper to a fixed height with vertical scroll, giving the sticky header a visible scrolling ancestor.</td></tr>
						<tr><td><code>ai-table--sortable</code></td><td><code>table</code></td><td>Removes default <code>th</code> padding so the header button can fill the cell.</td></tr>
						<tr><td><code>ai-th-sort</code></td><td><code>button</code> in <code>th</code></td><td>Real, focusable sort trigger - set <code>data-sort-key</code> to the row-data key it sorts by. Its <code>::after</code> icon reflects the parent <code>th</code>'s <code>aria-sort</code>.</td></tr>
						<tr><td><code>th[aria-sort]</code></td><td><code>th</code></td><td><code>"none"</code> / <code>"ascending"</code> / <code>"descending"</code> - drives the sort icon; toggle it (and reorder rows) on click.</td></tr>
						<tr><td><code>ai-table--striped</code></td><td><code>table</code></td><td>Zebra-shades even body rows with the surface2 tint; row hover still takes priority over the stripe.</td></tr>
						<tr><td><code>ai-table--compact</code></td><td><code>table</code></td><td>Tighter <code>th</code>/<code>td</code> padding for dense, data-heavy tables.</td></tr>
						<tr><td><code>ai-table--bordered</code></td><td><code>table</code></td><td>Adds a right-hand divider to every cell except the last column, for a gridded look.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
