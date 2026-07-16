import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Card() {
	return (
		<div className="comp-panel" id="p-card">
			<CompHeader
				title="Card"
				lead="Versatile content containers with optional header, image, body, and footer sections that can be mixed and matched. Every card lifts with a soft shadow on hover, no extra markup needed."
			/>

			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-grid ai-gap-4"
			>
				<div className="ai-card">
					<div className="ai-card-img">
						<span className="material-symbols-outlined ai-fs-2" aria-hidden="true">sensors</span>
					</div>
					<div className="ai-card-body">
						<div className="ai-card-title">Traffic Sensor</div>
						<p className="ai-card-text">Zone A · Last sync 2 min ago</p>
						<div className="ai-mt-3"><span className="ai-badge ai-badge-success"><span className="material-symbols-outlined" aria-hidden="true">check</span> Online</span></div>
					</div>
					<div className="ai-card-footer">
						<button className="ai-btn ai-btn-sm ai-btn-primary" type="button">View</button>
					</div>
				</div>

				<div className="ai-card">
					<div className="ai-card-header">
						<div className="ai-card-header-title">
							<span className="material-symbols-outlined" aria-hidden="true">monitoring</span>
							{' '}
							Statistics
						</div>
					</div>
					<div className="ai-card-body">
						<div className="ai-card-title">Daily Report</div>
						<p className="ai-card-text">1,240 events captured · 3 anomalies flagged</p>
					</div>
					<div className="ai-card-footer">
						<button className="ai-btn ai-btn-sm ai-btn-outline" type="button">Download</button>
					</div>
				</div>

				<div className="ai-card">
					<div className="ai-card-body">
						<div className="ai-card-title">
							<span className="material-symbols-outlined" aria-hidden="true">tune</span>
							{' '}
							Controller
						</div>
						<p className="ai-card-text">Adaptive cycle active since 08:00. Phase timing normal.</p>
						<div className="ai-mt-3"><span className="ai-badge ai-badge-primary ai-badge-dot">Active</span></div>
					</div>
				</div>

				<div className="ai-card">
					<div className="ai-card-img">
						<span className="material-symbols-outlined ai-fs-2" aria-hidden="true">videocam</span>
					</div>
					<div className="ai-card-header">
						<div className="ai-card-header-title">
							<span className="material-symbols-outlined" aria-hidden="true">visibility</span>
							{' '}
							CCTV Feed
						</div>
					</div>
					<div className="ai-card-body">
						<div className="ai-card-title">Junction Camera 12</div>
						<p className="ai-card-text">Full composition: image, header, body and footer combined in one card.</p>
					</div>
					<div className="ai-card-footer">
						<button className="ai-btn ai-btn-sm ai-btn-outline" type="button">Dismiss</button>
						<button className="ai-btn ai-btn-sm ai-btn-primary" type="button">Open Feed</button>
					</div>
				</div>
			</PreviewBlock>

			<p className="ai-fs-7 ai-text-muted ai-mt-3">
				Every card lifts and gains a soft shadow on hover automatically — no extra class required.
			</p>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-card</code></td><td>Base container — surface background, border, rounded corners. Lifts with a shadow on hover by default.</td></tr>
						<tr><td><code>ai-card-img</code></td><td>Fixed-height (120px) image/graphic band at the top of the card, centered content over the hero gradient.</td></tr>
						<tr><td><code>ai-card-header</code></td><td>Optional top section above the body, with its own bottom border and secondary surface background.</td></tr>
						<tr><td><code>ai-card-header-title</code></td><td>Bold title text used inside <code>ai-card-header</code>.</td></tr>
						<tr><td><code>ai-card-body</code></td><td>Main padded content area.</td></tr>
						<tr><td><code>ai-card-title</code></td><td>Bold heading used inside the body.</td></tr>
						<tr><td><code>ai-card-text</code></td><td>Muted secondary paragraph text inside the body.</td></tr>
						<tr><td><code>ai-card-footer</code></td><td>Optional bottom bar with a top border; content right-aligned with gap — typically action buttons.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
