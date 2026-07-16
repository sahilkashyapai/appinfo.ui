import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Tooltip() {
	return (
		<div className="comp-panel" id="p-tooltip">
			<CompHeader
				title="Tooltip"
				lead="CSS-only hover tooltips for contextual help and label augmentation. Wrap any trigger element in .ai-tooltip-wrap alongside a sibling .ai-tooltip label — the tooltip is invisible until the wrapper is hovered, then fades in above the trigger with a small pointer arrow. The trigger's disabled state doesn't block the tooltip since the hover listener lives on the wrapper, not the button, so users still get an explanation for why an action is unavailable. A second, positionable .ai-tooltip-floating variant exists for tooltips that need to track a coordinate (e.g. a chart data point or cursor position) rather than anchor to a fixed sibling element."
			/>
			<div className="sub-heading">Anchored Tooltips (hover the button)</div>
			<PreviewBlock
				label="Preview - hover each button"
				canvasStyle={{ gap: '24px' }}
			>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-primary" data-tooltip="Force sync all devices" type="button">Sync Now</button>
					<span className="ai-tooltip">Force sync all devices</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-ghost" data-tooltip="Search devices" type="button" aria-label="Search devices">
						<span className="material-symbols-outlined" aria-hidden="true">search</span>
					</button>
					<span className="ai-tooltip">Search devices</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-outline" data-tooltip="Download as CSV" type="button">Export</button>
					<span className="ai-tooltip">Download as CSV</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-success" data-tooltip="Mark device as verified" type="button">Verify</button>
					<span className="ai-tooltip">Mark device as verified</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-danger" data-tooltip="Select items first" disabled type="button">Delete</button>
					<span className="ai-tooltip">Select items first</span>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Longer Content</div>
			<PreviewBlock
				label="Preview - tooltip text wraps to the trigger, not the viewport"
				canvasStyle={{ gap: '24px', paddingTop: '32px' }}
			>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-ghost ai-icon-btn" data-tooltip="Last synced 2 minutes ago from gateway GW-14" type="button" aria-label="Sync status">
						<span className="material-symbols-outlined" aria-hidden="true">schedule</span>
					</button>
					<span className="ai-tooltip">Last synced 2 minutes ago from gateway GW-14</span>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Floating (Manually Positioned) Tooltip</div>
			<PreviewBlock
				label="Preview - .ai-tooltip-floating, positioned via inline style/JS instead of a wrapper"
				canvasStyle={{ position: 'relative', height: '90px', padding: '24px' }}
			>
				<span className="ai-badge ai-badge-primary ai-badge-dot" style={{ position: 'absolute', top: '30px', left: '40px' }}>Data point</span>
				<div className="ai-tooltip-floating" style={{ position: 'absolute', top: '4px', left: '30px' }}>42 events - 14:32</div>
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
						<tr><td><code>ai-tooltip-wrap</code></td><td>Positioning context for one trigger + its tooltip; reveals the tooltip on <code>:hover</code>.</td></tr>
						<tr><td><code>ai-tooltip</code></td><td>The bubble itself — dark background, white text, centered above the trigger with a small arrow. Hidden (<code>opacity: 0</code>) until the wrapper is hovered.</td></tr>
						<tr><td><code>data-tooltip</code></td><td>Convention for mirroring the visible tooltip text as an attribute, useful as an accessible fallback/hook for JS.</td></tr>
						<tr><td><code>ai-tooltip-floating</code></td><td>Standalone, fixed-position bubble (no wrapper/arrow) for tooltips whose position is computed in JS, e.g. following a cursor or chart point.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
