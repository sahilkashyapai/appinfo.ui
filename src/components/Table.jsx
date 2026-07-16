import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TABLE_ROWS = [
	{ id: 'SNSR-042', zone: 'Zone A', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.2', lastSeen: '2 min ago' },
	{ id: 'SNSR-071', zone: 'Zone B', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.0', lastSeen: '5 min ago' },
	{ id: 'CTRL-003', zone: 'Main', status: 'Pending', statusClass: 'ai-badge-warning', statusIcon: 'warning', firmware: 'v2.9.1', lastSeen: '12 min ago' },
	{ id: 'PWR-011', zone: 'South', status: 'Offline', statusClass: 'ai-badge-danger', statusIcon: 'cancel', firmware: 'v3.0.0', lastSeen: '2 hrs ago' },
];

const WIDE_ROWS = [
	{ id: 'SNSR-042', zone: 'Zone A', mfr: 'AcuSense', model: 'AS-200T', firmware: 'v3.1.2', ip: '10.20.4.11', uptime: '14d 02h', status: 'Online', statusClass: 'ai-badge-success', lastSeen: '2 min ago' },
	{ id: 'SNSR-071', zone: 'Zone B', mfr: 'AcuSense', model: 'AS-200T', firmware: 'v3.1.0', ip: '10.20.4.34', uptime: '9d 17h', status: 'Online', statusClass: 'ai-badge-success', lastSeen: '5 min ago' },
	{ id: 'CTRL-003', zone: 'Main', mfr: 'Voltek', model: 'VK-CTL9', firmware: 'v2.9.1', ip: '10.20.1.02', uptime: '61d 08h', status: 'Pending', statusClass: 'ai-badge-warning', lastSeen: '12 min ago' },
	{ id: 'PWR-011', zone: 'South', mfr: 'Voltek', model: 'VK-PWR3', firmware: 'v3.0.0', ip: '10.20.6.19', uptime: '0d 00h', status: 'Offline', statusClass: 'ai-badge-danger', lastSeen: '2 hrs ago' },
];

export default function Table() {
	return (
		<div className="comp-panel" id="p-table">
			<CompHeader
				title="Table"
				lead="Data tables (.ai-table inside a .ai-table-wrap) with hover row highlighting, uppercase mono-font headers, status badges, and inline code cells. The wrapper adds a rounded border and scrolls horizontally (overflow-x: auto) so wide tables never break the page layout."
			/>
			<div className="sub-heading">Standard</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: 0 }}
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

			<div className="sub-heading">Wide Table (responsive horizontal scroll)</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: 0 }}
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
						<tr><td>(default)</td><td><code>th</code></td><td>Uppercase, letter-spaced, mono-font (DM Mono) column headers.</td></tr>
						<tr><td>(default)</td><td><code>td</code></td><td>Body cell, muted text, bottom border (removed on the last row).</td></tr>
						<tr><td>(hover)</td><td><code>tr:hover td</code></td><td>Subtle accent-tinted row highlight - built in, no modifier class needed.</td></tr>
						<tr><td>(default)</td><td><code>td code</code></td><td>Inline code chip style for values like firmware versions or IP addresses.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
