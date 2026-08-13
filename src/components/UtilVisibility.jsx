import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function UtilVisibility() {
	return (
		<div className="comp-panel" id="p-visibility">
			<CompHeader
				title="Visibility"
				lead="Toggle an element's visibility without removing it from the layout - unlike .ai-d-none, which sets display:none and takes the element out of the flow entirely (its space collapses), .ai-invisible sets visibility:hidden: the element is unclickable and invisible, but its box still reserves its space, so surrounding elements don't reflow."
				badge="UTILITIES"
			/>

			<div className="sub-heading">ai-visible / ai-invisible</div>
			<PreviewBlock label="ai-visible vs ai-invisible">
				<div className="ai-visible ai-bg-primary ai-text-white ai-rounded-2 ai-p-3">ai-visible</div>
				<div className="ai-invisible ai-bg-primary ai-text-white ai-rounded-2 ai-p-3">ai-invisible (still occupies space)</div>
				<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3">Next element</div>
			</PreviewBlock>

			<div className="sub-heading">ai-invisible vs ai-d-none: space is reserved or not</div>
			<PreviewBlock label="ai-invisible - middle box's space is kept">
				<div style={{ width: '100%' }}>
					<div className="ai-d-flex" style={{ gap: '8px' }}>
						<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">Box 1</div>
						<div className="ai-invisible ai-bg-primary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">Box 2</div>
						<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">Box 3</div>
					</div>
				</div>
			</PreviewBlock>
			<PreviewBlock label="ai-d-none - middle box's space collapses, Box 3 shifts left">
				<div style={{ width: '100%' }}>
					<div className="ai-d-flex" style={{ gap: '8px' }}>
						<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">Box 1</div>
						<div className="ai-d-none ai-bg-primary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">Box 2</div>
						<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">Box 3</div>
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
						<tr><td><code>ai-visible</code></td><td>visibility: visible - restores visibility, e.g. to override an inherited <code>ai-invisible</code></td></tr>
						<tr><td><code>ai-invisible</code></td><td>visibility: hidden - hides the element, but its layout box still takes up space</td></tr>
						<tr><td><code>ai-d-none</code> (Display page)</td><td>display: none - removes the element from the layout entirely, space collapses</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
