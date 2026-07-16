import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Columns() {
	return (
		<div className="comp-panel" id="p-columns">
			<CompHeader
				title="Columns"
				lead="Size columns on a 12-unit scale with .ai-col-{1-12}, adjust per breakpoint with .ai-col-{bp}-{n}, shift position with .ai-offset-{n}, and reorder with .ai-order-{n}."
				badge="LAYOUT"
			/>

			<div className="sub-heading">Fixed sizing</div>
			<PreviewBlock label="Fixed sizing (.ai-col-4 / .ai-col-8)">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col-4">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-4</div>
					</div>
					<div className="ai-col-8">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-8</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Responsive sizing</div>
			<PreviewBlock label="Responsive sizing (stacks on mobile, splits on md+)">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col-12 ai-col-md-6">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
							ai-col-12 ai-col-md-6
						</div>
					</div>
					<div className="ai-col-12 ai-col-md-6">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
							ai-col-12 ai-col-md-6
						</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Offset</div>
			<PreviewBlock label="Offset (.ai-offset-4)">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col-4 ai-offset-4">
						<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">ai-col-4 ai-offset-4</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Reorder</div>
			<PreviewBlock label="Reorder (.ai-order-*)">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col ai-order-3">
						<div className="ai-bg-warning ai-rounded-2 ai-p-3 ai-text-center">First in DOM, order-3</div>
					</div>
					<div className="ai-col ai-order-1">
						<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Second in DOM, order-1</div>
					</div>
					<div className="ai-col ai-order-2">
						<div className="ai-bg-danger ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Third in DOM, order-2</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Row columns (equal-split shorthand)</div>
			<p className="ai-fs-7 ai-text-muted">
				<code>.ai-row-cols-{'{n}'}</code> is applied to the <code>.ai-row</code> itself instead of to each column — it tells every direct child to take an equal <code>100% / n</code> width automatically, without adding a <code>.ai-col-*</code> class to each one. It's a shorthand for "N equal columns per row," and like everything else it has responsive <code>.ai-row-cols-{'{bp}'}-{'{n}'}</code> variants.
			</p>
			<PreviewBlock label="ai-row-cols-3 (3 equal items per row, wraps automatically)">
				<div className="ai-row ai-row-cols-3 ai-g-3" style={{ width: '100%' }}>
					<div><div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">1</div></div>
					<div><div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">2</div></div>
					<div><div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">3</div></div>
					<div><div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">4</div></div>
					<div><div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">5</div></div>
					<div><div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">6</div></div>
				</div>
			</PreviewBlock>

			<PreviewBlock label="ai-row-cols-2 ai-row-cols-md-4 (2 per row on mobile, 4 per row on md+)">
				<div className="ai-row ai-row-cols-2 ai-row-cols-md-4 ai-g-3" style={{ width: '100%' }}>
					<div><div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">A</div></div>
					<div><div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">B</div></div>
					<div><div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">C</div></div>
					<div><div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">D</div></div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class pattern</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-col-{'{1-12}'}</code></td>
							<td>Fixed width in twelfths at all viewport widths.</td>
						</tr>
						<tr>
							<td><code>ai-col-{'{bp}'}-{'{1-12}'}</code></td>
							<td>Fixed width in twelfths starting at the given breakpoint and up.</td>
						</tr>
						<tr>
							<td><code>ai-col-{'{bp}'}</code></td>
							<td>Equal-grow column (like <code>ai-col</code>) starting at the given breakpoint.</td>
						</tr>
						<tr>
							<td><code>ai-col-auto</code> / <code>ai-col-{'{bp}'}-auto</code></td>
							<td>Content-sized width instead of a fraction of 12.</td>
						</tr>
						<tr>
							<td><code>ai-offset-{'{0-12}'}</code> / <code>ai-offset-{'{bp}'}-{'{0-12}'}</code></td>
							<td>Pushes a column right by that many twelfths using left margin.</td>
						</tr>
						<tr>
							<td><code>ai-order-{'{0-12}'}</code> / <code>ai-order-{'{bp}'}-{'{0-12}'}</code></td>
							<td>Sets flex <code>order</code> to visually reorder columns independent of DOM order.</td>
						</tr>
						<tr>
							<td><code>ai-order-first</code> / <code>ai-order-last</code></td>
							<td>Shortcuts for <code>order: -1</code> and <code>order: 13</code> — guaranteed first/last regardless of other order values in range 0-12.</td>
						</tr>
						<tr>
							<td><code>ai-row-cols-{'{1-6}'}</code> / <code>ai-row-cols-{'{bp}'}-{'{1-6}'}</code></td>
							<td>Set on <code>.ai-row</code>; splits every direct child into N equal columns automatically.</td>
						</tr>
						<tr>
							<td><code>ai-row-cols-auto</code> / <code>ai-row-cols-{'{bp}'}-auto</code></td>
							<td>Set on <code>.ai-row</code>; sizes every direct child to its content width.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
