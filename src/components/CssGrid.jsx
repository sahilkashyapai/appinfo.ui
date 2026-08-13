import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function CssGrid() {
	return (
		<div className="comp-panel" id="p-cssgrid">
			<CompHeader
				title="CSS Grid"
				lead="Native CSS Grid utilities for two-dimensional layouts. Pair .ai-d-grid with .ai-grid-cols-{n} / .ai-grid-rows-{n} to define the track count, and .ai-gap-{size} to space items - no wrapper markup required."
				badge="LAYOUT"
			/>

			<p className="ai-fs-7 ai-text-muted">
				Reach for the <code>.ai-row</code> / <code>.ai-col</code> flexbox grid (see the <strong>Grid</strong> and <strong>Columns</strong> pages) when you're laying things out along one direction at a time - a row of cards, a form's label/input pairs, content that should grow or shrink to fill available space. Reach for <code>.ai-d-grid</code> instead when you need to control <strong>rows and columns together</strong> as a single two-dimensional structure - a dashboard of evenly-sized tiles, a photo grid, or anything where item widths and heights both need to line up on a shared grid. Unlike <code>.ai-row</code>, a grid container needs no matching child class (no <code>.ai-col-*</code> equivalent) - every direct child automatically becomes a grid item and is placed into the next available track.
			</p>

			<div className="sub-heading">Column tracks</div>
			<PreviewBlock label="ai-d-grid ai-grid-cols-3 ai-gap-3">
				<div className="ai-d-grid ai-grid-cols-3 ai-gap-3" style={{ width: '100%' }}>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">1</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">2</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">3</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">4</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">5</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">6</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Responsive tracks</div>
			<PreviewBlock label="Responsive: 2 columns on mobile, 4 on md+">
				<div className="ai-d-grid ai-grid-cols-2 ai-grid-cols-md-4 ai-gap-4" style={{ width: '100%' }}>
					<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">A</div>
					<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">B</div>
					<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">C</div>
					<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">D</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Row tracks</div>
			<PreviewBlock label="Fixed rows: ai-grid-rows-2">
				<div className="ai-d-grid ai-grid-cols-2 ai-grid-rows-2 ai-gap-3" style={{ width: '100%', height: '160px' }}>
					<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">1</div>
					<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">2</div>
					<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">3</div>
					<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">4</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Independent row/column gap</div>
			<PreviewBlock label="ai-grid-cols-3 ai-gap-x-6 ai-gap-y-2 (wide columns, tight rows)">
				<div className="ai-d-grid ai-grid-cols-3 ai-gap-x-6 ai-gap-y-2" style={{ width: '100%' }}>
					<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">1</div>
					<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">2</div>
					<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">3</div>
					<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">4</div>
					<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">5</div>
					<div className="ai-bg-success ai-text-white ai-rounded-2 ai-p-3 ai-text-center">6</div>
				</div>
			</PreviewBlock>
			<p className="ai-fs-7 ai-text-muted">
				<code>ai-gap-{'{size}'}</code> sets spacing on both axes at once; <code>ai-gap-x-{'{size}'}</code> and <code>ai-gap-y-{'{size}'}</code> (from the same flexbox/gap utility set used by <code>.ai-d-flex</code>) let you control column-gap and row-gap independently - useful when a grid's rows and columns need visually different amounts of breathing room.
			</p>

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
							<td><code>ai-d-grid</code> / <code>ai-d-inline-grid</code></td>
							<td>Sets <code>display: grid</code> / <code>display: inline-grid</code> on the container.</td>
						</tr>
						<tr>
							<td><code>ai-grid-cols-{'{1-12}'}</code></td>
							<td>Sets <code>grid-template-columns: repeat(n, minmax(0, 1fr))</code> - n equal-width column tracks.</td>
						</tr>
						<tr>
							<td><code>ai-grid-rows-{'{1-12}'}</code></td>
							<td>Sets <code>grid-template-rows: repeat(n, minmax(0, 1fr))</code> - n equal-height row tracks (container needs an explicit height to see the effect).</td>
						</tr>
						<tr>
							<td><code>ai-grid-cols-none</code> / <code>ai-grid-rows-none</code></td>
							<td>Resets template columns/rows to <code>none</code>, removing explicit tracks.</td>
						</tr>
						<tr>
							<td><code>ai-grid-cols-{'{bp}'}-{'{1-12}'}</code> / <code>ai-grid-rows-{'{bp}'}-{'{1-12}'}</code></td>
							<td>Responsive variants - change the track count starting at the given breakpoint and up.</td>
						</tr>
						<tr>
							<td><code>ai-gap-{'{size}'}</code></td>
							<td>Sets <code>gap</code> (both row-gap and column-gap) using the shared spacing scale.</td>
						</tr>
						<tr>
							<td><code>ai-gap-x-{'{size}'}</code> / <code>ai-gap-y-{'{size}'}</code></td>
							<td>Sets <code>column-gap</code> / <code>row-gap</code> independently.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
