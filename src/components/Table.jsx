import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TABLE_ROWS = [
	{ id: 'SNSR-042', zone: 'Zone A', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.2', lastSeen: '2 min ago' },
	{ id: 'SNSR-071', zone: 'Zone B', status: 'Online', statusClass: 'ai-badge-success', statusIcon: 'check_circle', firmware: 'v3.1.0', lastSeen: '5 min ago' },
	{ id: 'CTRL-003', zone: 'Main', status: 'Pending', statusClass: 'ai-badge-warning', statusIcon: 'warning', firmware: 'v2.9.1', lastSeen: '12 min ago' },
	{ id: 'PWR-011', zone: 'South', status: 'Offline', statusClass: 'ai-badge-danger', statusIcon: 'cancel', firmware: 'v3.0.0', lastSeen: '2 hrs ago' },
];

export default function Table() {
	return (
		<div className="comp-panel" id="p-table">
			<CompHeader
				title="Table"
				lead="Data tables with hover rows, sortable headers, status badges, and code cells."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: 0 }}
			>
				<div className="ai-table-wrap">
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
		</div>
	);
}
