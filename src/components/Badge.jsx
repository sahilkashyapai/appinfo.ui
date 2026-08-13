import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Badge() {
	return (
		<div className="comp-panel" id="p-badge">
			<CompHeader
				title="Badge"
				lead="Small pill-shaped status indicators and count labels. Six semantic color variants, an optional leading dot indicator, and icon support for every context - inline text, table cells, or alongside card titles."
			/>

			<div className="sub-heading">Variants</div>
			<PreviewBlock
				label="Colors"
				canvasClassName="ai-d-flex ai-flex-wrap ai-gap-2"
			>
				<span className="ai-badge ai-badge-primary ai-badge-dot">Primary</span>
				<span className="ai-badge ai-badge-dark">Dark</span>
				<span className="ai-badge ai-badge-success"><span className="material-symbols-outlined" aria-hidden="true">check</span> Success</span>
				<span className="ai-badge ai-badge-warning"><span className="material-symbols-outlined" aria-hidden="true">warning</span> Warning</span>
				<span className="ai-badge ai-badge-danger"><span className="material-symbols-outlined" aria-hidden="true">close</span> Danger</span>
				<span className="ai-badge ai-badge-neutral">Neutral</span>
			</PreviewBlock>

			<div className="sub-heading">Every Color, Plain Text</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-wrap ai-gap-2"
			>
				<span className="ai-badge ai-badge-primary">Primary</span>
				<span className="ai-badge ai-badge-dark">Dark</span>
				<span className="ai-badge ai-badge-success">Success</span>
				<span className="ai-badge ai-badge-warning">Warning</span>
				<span className="ai-badge ai-badge-danger">Danger</span>
				<span className="ai-badge ai-badge-neutral">Neutral</span>
			</PreviewBlock>

			<div className="sub-heading">With Dot Indicator</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-wrap ai-gap-2"
			>
				<span className="ai-badge ai-badge-primary ai-badge-dot">Primary</span>
				<span className="ai-badge ai-badge-success ai-badge-dot">Success</span>
				<span className="ai-badge ai-badge-warning ai-badge-dot">Warning</span>
				<span className="ai-badge ai-badge-danger ai-badge-dot">Danger</span>
				<span className="ai-badge ai-badge-neutral ai-badge-dot">Neutral</span>
			</PreviewBlock>

			<div className="sub-heading">With Icon</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-wrap ai-gap-2"
			>
				<span className="ai-badge ai-badge-primary"><span className="material-symbols-outlined" aria-hidden="true">bolt</span> Active</span>
				<span className="ai-badge ai-badge-success"><span className="material-symbols-outlined" aria-hidden="true">check_circle</span> Verified</span>
				<span className="ai-badge ai-badge-warning"><span className="material-symbols-outlined" aria-hidden="true">schedule</span> Pending</span>
				<span className="ai-badge ai-badge-danger"><span className="material-symbols-outlined" aria-hidden="true">error</span> Failed</span>
				<span className="ai-badge ai-badge-dark"><span className="material-symbols-outlined" aria-hidden="true">lock</span> Locked</span>
			</PreviewBlock>

			<div className="sub-heading">In Context</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-wrap ai-gap-3 ai-align-center"
			>
				<span>Server status: <span className="ai-badge ai-badge-success ai-badge-dot">Online</span></span>
				<span>Build: <span className="ai-badge ai-badge-danger ai-badge-dot">Failing</span></span>
				<span>Plan: <span className="ai-badge ai-badge-neutral">Free Tier</span></span>
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
						<tr><td><code>ai-badge</code></td><td>Base class - required on every badge. Sets the pill shape, padding, and font.</td></tr>
						<tr><td><code>ai-badge-primary</code></td><td>Tinted brand color background with a subtle border.</td></tr>
						<tr><td><code>ai-badge-dark</code></td><td>Solid dark background, white text.</td></tr>
						<tr><td><code>ai-badge-success</code></td><td>Light green background, dark green text.</td></tr>
						<tr><td><code>ai-badge-warning</code></td><td>Light amber background, dark amber text.</td></tr>
						<tr><td><code>ai-badge-danger</code></td><td>Light red background, dark red text.</td></tr>
						<tr><td><code>ai-badge-neutral</code></td><td>Surface-tinted background with a border - for low-emphasis labels.</td></tr>
						<tr><td><code>ai-badge-dot</code></td><td>Adds a small solid <code>currentColor</code> dot before the label (status indicator).</td></tr>
						<tr><td><code>.material-symbols-outlined</code> child</td><td>Any icon placed inside a badge is automatically sized to 16px.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
