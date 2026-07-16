import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Progress() {
	return (
		<div className="comp-panel" id="p-progress">
			<CompHeader
				title="Progress"
				lead="Linear progress bars with label, percentage, striped, and animated variants. .ai-progress is the 8px-tall track (rounded, clipped); .ai-progress-bar is the filled portion sized with an inline width percentage. Combine .striped with .animated for a moving diagonal-stripe effect, resize the track with the .ai-h-3/.ai-h-4/.ai-h-5 height utilities, and recolor the bar with an .ai-bg-* utility class or an inline background."
			/>
			<div className="sub-heading">Labeled, Striped &amp; Sizes</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
			>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Sync Progress</span><span>72%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar" style={{ width: '72%' }} />
					</div>
				</div>
				<div  className="ai-w-100">
					<div className="ai-progress-label"><span>Uploading...</span><span>45%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar striped animated" style={{ width: '45%' }} />
					</div>
				</div>
				<div  className="ai-w-100">
					<div className="ai-progress-label"><span>Storage Used</span><span>90%</span></div>
					<div className="ai-progress ai-h-3">
								<div className="ai-progress-bar" style={{ width: '90%', background: 'var(--c-danger)' }} />
					</div>
				</div>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Firmware Package (striped, static)</span><span>60%</span></div>
					<div className="ai-progress ai-h-4">
						<div className="ai-progress-bar striped" style={{ width: '60%' }} />
					</div>
				</div>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Backup Snapshot (tall track)</span><span>33%</span></div>
					<div className="ai-progress ai-h-5">
						<div className="ai-progress-bar animated striped" style={{ width: '33%' }} />
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Color Variants</div>
			<PreviewBlock
				label="Recolor the fill with an ai-bg-* utility class"
				canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
			>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Success</span><span>100%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar ai-bg-success" style={{ width: '100%' }} />
					</div>
				</div>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Warning</span><span>55%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar ai-bg-warning" style={{ width: '55%' }} />
					</div>
				</div>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Danger</span><span>90%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar ai-bg-danger" style={{ width: '90%' }} />
					</div>
				</div>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Info</span><span>18%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar ai-bg-info" style={{ width: '18%' }} />
					</div>
				</div>
				<div className="ai-w-100">
					<div className="ai-progress-label"><span>Empty (0%)</span><span>0%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar" style={{ width: '0%' }} />
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Applies to</th>
							<th>Effect</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-progress</code></td>
							<td>Track</td>
							<td>100% width, 8px height, rounded, clipped, <code>var(--c-surface2)</code> background.</td>
						</tr>
						<tr>
							<td><code>ai-progress-bar</code></td>
							<td>Fill</td>
							<td>Full-height fill using <code>var(--c-btn)</code>; width set inline as a percentage; animates on width change (0.4s ease).</td>
						</tr>
						<tr>
							<td><code>ai-progress-bar.striped</code></td>
							<td>Fill modifier</td>
							<td>45-degree repeating-linear-gradient stripe overlay.</td>
						</tr>
						<tr>
							<td><code>ai-progress-bar.animated</code></td>
							<td>Fill modifier</td>
							<td>Animates the stripe's background-position on a 1s linear loop (use with <code>.striped</code>).</td>
						</tr>
						<tr>
							<td><code>ai-progress-label</code></td>
							<td>Caption row</td>
							<td>Flex row with <code>space-between</code>, placed above the track for a "name … percent" label pair.</td>
						</tr>
						<tr>
							<td><code>ai-h-3 / ai-h-4 / ai-h-5</code></td>
							<td>Track (utility)</td>
							<td>Overrides track height to 12px / 16px / 20px.</td>
						</tr>
						<tr>
							<td><code>ai-bg-success / -warning / -danger / -info</code></td>
							<td>Fill (utility)</td>
							<td>Recolors the bar; an inline <code>background</code> style works the same way.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
