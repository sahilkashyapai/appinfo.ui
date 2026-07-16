import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Pagination() {
	const [page, setPage] = useState(4);
	const totalPages = 9;

	const goTo = (target) => {
		setPage(Math.min(Math.max(target, 1), totalPages));
	};

	return (
		<div className="comp-panel" id="p-pagination">
			<CompHeader
				title="Pagination"
				lead="Page navigation controls (.ai-pagination > .ai-page-btn) for large data sets and multi-page content. Supports an .active current-page indicator, natively disabled prev/next arrows at the edges of the range, and an ellipsis token for collapsing long ranges."
			/>

			<div className="sub-heading">Interactive (click a page)</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
			>
				<div className="ai-pagination">
					<button className="ai-page-btn" disabled={page === 1} type="button" onClick={() => goTo(page - 1)}>‹</button>
					{page > 2 && <button className="ai-page-btn" type="button" onClick={() => goTo(1)}>1</button>}
					{page > 3 && <span className="ai-page-ellipsis">...</span>}
					{page > 1 && <button className="ai-page-btn" type="button" onClick={() => goTo(page - 1)}>{page - 1}</button>}
					<button className="ai-page-btn active" type="button">{page}</button>
					{page < totalPages && <button className="ai-page-btn" type="button" onClick={() => goTo(page + 1)}>{page + 1}</button>}
					{page < totalPages - 2 && <span className="ai-page-ellipsis">...</span>}
					{page < totalPages - 1 && <button className="ai-page-btn" type="button" onClick={() => goTo(totalPages)}>{totalPages}</button>}
					<button className="ai-page-btn" disabled={page === totalPages} type="button" onClick={() => goTo(page + 1)}>›</button>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Ellipsis on Both Sides</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
			>
				<div className="ai-pagination">
					<button className="ai-page-btn" type="button">‹</button>
					<button className="ai-page-btn" type="button">1</button>
					<span className="ai-page-ellipsis">...</span>
					<button className="ai-page-btn" type="button">5</button>
					<button className="ai-page-btn active" type="button">6</button>
					<button className="ai-page-btn" type="button">7</button>
					<span className="ai-page-ellipsis">...</span>
					<button className="ai-page-btn" type="button">12</button>
					<button className="ai-page-btn" type="button">›</button>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Compact Range (no ellipsis needed)</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
			>
				<div className="ai-pagination">
					<button className="ai-page-btn" disabled type="button">‹</button>
					<button className="ai-page-btn active" type="button">1</button>
					<button className="ai-page-btn" type="button">2</button>
					<button className="ai-page-btn" type="button">3</button>
					<button className="ai-page-btn" type="button">4</button>
					<button className="ai-page-btn" type="button">›</button>
				</div>
			</PreviewBlock>

			<div className="sub-heading">At Last Page (next disabled)</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
			>
				<div className="ai-pagination">
					<button className="ai-page-btn" type="button">‹</button>
					<button className="ai-page-btn" type="button">1</button>
					<span className="ai-page-ellipsis">...</span>
					<button className="ai-page-btn" type="button">10</button>
					<button className="ai-page-btn" type="button">11</button>
					<button className="ai-page-btn active" type="button">12</button>
					<button className="ai-page-btn" disabled type="button">›</button>
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
						<tr><td><code>ai-pagination</code></td><td><code>div</code></td><td>Flex row container, 4px gap between controls.</td></tr>
						<tr><td><code>ai-page-btn</code></td><td><code>button</code></td><td>34x34px square control, mono font, border + surface background.</td></tr>
						<tr><td>(hover)</td><td><code>.ai-page-btn:hover</code></td><td>Accent border/text color.</td></tr>
						<tr><td><code>active</code></td><td><code>.ai-page-btn.active</code></td><td>Solid accent background with white text - marks the current page.</td></tr>
						<tr><td><code>disabled</code> (attr)</td><td><code>.ai-page-btn:disabled</code></td><td>35% opacity, <code>cursor: not-allowed</code> - used on the prev/next arrows at range edges.</td></tr>
						<tr><td><code>ai-page-ellipsis</code></td><td><code>span</code></td><td>Muted "..." token used to collapse skipped page ranges.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
