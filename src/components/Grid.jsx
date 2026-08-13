import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Grid() {
	return (
		<div className="comp-panel" id="p-grid">
			<CompHeader
				title="Grid"
				lead="A flexbox-based 12-column grid. Wrap columns in .ai-row, then use .ai-col / .ai-col-{n} to size each column. Combine with a .ai-container to center the grid on the page."
				badge="LAYOUT"
			/>

			<p className="ai-fs-7 ai-text-muted">
				<code>.ai-row</code> is a <code>flex</code> container with <code>-12px</code> left/right margins, and every <code>.ai-col*</code> child carries <code>12px</code> of left/right padding. Those two numbers are designed to cancel out: the row's negative margin pulls it back flush with its parent's edges, while each column's padding creates the visible gap ("gutter") between columns without ever touching their actual widths. This is why columns must always live directly inside a <code>.ai-row</code> - an <code>.ai-col-6</code> placed outside a row will still be 50% wide, but its padding will visibly overhang the row's edges instead of being absorbed by the negative margin. The <code>.ai-g-*</code> / <code>.ai-gx-*</code> / <code>.ai-gy-*</code> gutter utilities (see the <strong>Gutters</strong> page) work the same way at a different scale - they override the default 12px value on both the row's margin and the column's padding together.
			</p>

			<div className="sub-heading">Basic columns</div>
			<PreviewBlock label="Equal-width columns">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col</div>
					</div>
					<div className="ai-col">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col</div>
					</div>
					<div className="ai-col">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col</div>
					</div>
				</div>
			</PreviewBlock>

			<PreviewBlock label="Auto-width column next to a fixed column">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col-auto">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-auto</div>
					</div>
					<div className="ai-col">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Container + row + columns together</div>
			<PreviewBlock label=".ai-container > .ai-row > .ai-col-*" canvasClassName="ai-p-0">
				<div className="ai-container ai-bg-light ai-border ai-p-3">
					<div className="ai-row ai-g-3" style={{ width: '100%' }}>
						<div className="ai-col-4">
							<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-4</div>
						</div>
						<div className="ai-col-4">
							<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-4</div>
						</div>
						<div className="ai-col-4">
							<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-4</div>
						</div>
					</div>
				</div>
			</PreviewBlock>
			<p className="ai-fs-7 ai-text-muted">
				This is the standard page-layout pattern: a <code>.ai-container</code> centers and caps the overall width, the <code>.ai-row</code> inside it cancels the container's padding and opens up gutters, and each <code>.ai-col-*</code> divides the resulting space into 12ths. See the <strong>Containers</strong> page for the container max-width table and the <strong>Columns</strong> page for the full sizing/offset/order reference.
			</p>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Behavior</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-row</code></td>
							<td>Flex container, wraps its columns, applies -12px horizontal margin and the default gutter.</td>
						</tr>
						<tr>
							<td><code>ai-col</code></td>
							<td>Grows equally to fill remaining space (<code>flex: 1 0 0</code>) alongside sibling <code>.ai-col</code> elements.</td>
						</tr>
						<tr>
							<td><code>ai-col-auto</code></td>
							<td>Sizes to its content's natural width instead of stretching (<code>flex: 0 0 auto</code>).</td>
						</tr>
						<tr>
							<td><code>ai-col-{'{1-12}'}</code></td>
							<td>Fixed width as a fraction of 12 columns, e.g. <code>ai-col-4</code> = 4/12 = 33.33%.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
