import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const ALIGNS = ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'];

export default function UtilVerticalAlign() {
	return (
		<div className="comp-panel" id="p-vertical-align">
			<CompHeader
				title="Vertical align"
				lead="Align inline, inline-block, or table-cell elements against their line box with .ai-valign-{value} (the CSS vertical-align property). Named .ai-valign-* rather than .ai-align-*, which is already used by the flexbox align-items shorthands in _flexbox.scss — the two properties look similar by name but do completely different things, so distinct prefixes avoid an easy mix-up."
				badge="UTILITIES"
			/>

			<p className="ai-fs-7 ai-text-muted">
				<strong>When this actually does something:</strong> vertical-align only affects elements laid out as <code>inline</code>, <code>inline-block</code>, or <code>table-cell</code> — it aligns the element relative to the line box (or table row) it sits in. It has <em>no effect</em> on block-level elements, and no effect on flex or grid items (those use <code>ai-align-items-*</code> / <code>ai-align-self-*</code> instead). Applying <code>ai-valign-*</code> to a flex child is a no-op, which is a common point of confusion.
			</p>

			<div className="sub-heading">Works: inline-block elements sharing a line</div>
			<PreviewBlock label="ai-valign-* on inline-block boxes sharing a line">
				<div style={{ width: '100%' }}>
					{ALIGNS.map((value) => (
						<span
							key={value}
							className={`ai-valign-${value} ai-d-inline-block ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8`}
						>
							{value}
						</span>
					))}
					<span className="ai-fs-1">Aligned to this large text</span>
				</div>
			</PreviewBlock>

			<div className="sub-heading">No effect: flex items</div>
			<PreviewBlock label="Same classes applied to flex children — vertical-align is ignored">
				<div className="ai-d-flex ai-align-center ai-bg-light ai-border ai-rounded-2 ai-p-2" style={{ width: '100%', height: '70px' }}>
					<span className="ai-valign-top ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">ai-valign-top</span>
					<span className="ai-valign-bottom ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8">ai-valign-bottom</span>
					<span className="ai-fs-1">Large text</span>
				</div>
			</PreviewBlock>
			<p className="ai-fs-7 ai-text-muted">
				Both children above sit at the same vertical position — the flex container's <code>ai-align-center</code> is what's controlling their alignment, not the <code>ai-valign-*</code> classes.
			</p>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Effect</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-valign-baseline</code></td><td>Aligns the element's baseline with the parent's baseline (default)</td></tr>
						<tr><td><code>ai-valign-top</code></td><td>Aligns the top of the element with the top of the line box</td></tr>
						<tr><td><code>ai-valign-middle</code></td><td>Aligns the vertical midpoint of the element with the baseline plus half the parent's x-height</td></tr>
						<tr><td><code>ai-valign-bottom</code></td><td>Aligns the bottom of the element with the bottom of the line box</td></tr>
						<tr><td><code>ai-valign-text-top</code></td><td>Aligns with the top of the parent element's font</td></tr>
						<tr><td><code>ai-valign-text-bottom</code></td><td>Aligns with the bottom of the parent element's font</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
