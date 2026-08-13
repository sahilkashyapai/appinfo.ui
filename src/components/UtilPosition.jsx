import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function UtilPosition() {
	return (
		<div className="comp-panel" id="p-position">
			<CompHeader
				title="Position"
				lead="Set the CSS position value with .ai-position-{static,relative,absolute,fixed,sticky}, and offset a positioned element with .ai-top/right/bottom/left-{size}. Note this is separate from .ai-z-* (stacking order - see the Z-index page) and .ai-object-* (image/video fit - see Sizing/Overflow), which live in the same source file but cover different concerns."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Absolute + offsets</div>
			<PreviewBlock label="Absolute + offsets, inside a relative parent" canvasStyle={{ position: 'relative', height: '140px' }}>
				<div className="ai-position-relative ai-border ai-rounded-2 ai-bg-light" style={{ width: '100%', height: '120px' }}>
					<div className="ai-position-absolute ai-top-2 ai-left-2 ai-bg-primary ai-text-white ai-rounded-1 ai-p-2">top-2 left-2</div>
					<div className="ai-position-absolute ai-top-2 ai-right-2 ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2">top-2 right-2</div>
					<div className="ai-position-absolute ai-bottom-2 ai-left-2 ai-bg-success ai-text-white ai-rounded-1 ai-p-2">bottom-2 left-2</div>
					<div className="ai-position-absolute ai-bottom-2 ai-right-2 ai-bg-danger ai-text-white ai-rounded-1 ai-p-2">bottom-2 right-2</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Sticky, inside a scrolling ancestor</div>
			<PreviewBlock label="ai-position-sticky ai-top-0 - scroll the box to see the header stick">
				<div className="ai-position-relative ai-overflow-y-auto ai-border ai-rounded-2" style={{ width: '100%', height: '160px' }}>
					<div className="ai-position-sticky ai-top-0 ai-bg-primary ai-text-white ai-p-2 ai-fs-8 ai-fw-semibold">Sticky header (ai-position-sticky ai-top-0)</div>
					<div className="ai-p-2 ai-fs-8">
						<p>Row 1 - scroll down</p>
						<p>Row 2</p>
						<p>Row 3</p>
						<p>Row 4</p>
						<p>Row 5</p>
						<p>Row 6</p>
						<p>Row 7</p>
						<p>Row 8</p>
						<p>Row 9</p>
						<p>Row 10 - header is still stuck to the top</p>
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Effect</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-position-static</code></td><td>Default document flow, ignores offsets</td></tr>
						<tr><td><code>ai-position-relative</code></td><td>Offset relative to its normal position; establishes a containing block for absolute children</td></tr>
						<tr><td><code>ai-position-absolute</code></td><td>Removed from flow, positioned against the nearest positioned ancestor</td></tr>
						<tr><td><code>ai-position-fixed</code></td><td>Positioned against the viewport</td></tr>
						<tr><td><code>ai-position-sticky</code></td><td>Relative until the element would scroll past its offset threshold, then fixed within its scrolling ancestor. Requires an offset (e.g. <code>ai-top-0</code>) and a scrolling ancestor with room to scroll - it does nothing inside a box that never scrolls.</td></tr>
						<tr><td><code>ai-top/right/bottom/left-{`{size}`}</code></td><td>Offset scale: 0,1,2,3,4,5,6,7,8,9,10,12,16,20,24,25 (in 4px steps, same numbering as spacing but not every value in between is defined), plus <code>-auto</code></td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
