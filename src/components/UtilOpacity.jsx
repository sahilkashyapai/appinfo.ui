import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const LEVELS = [100, 75, 50, 25, 0];

export default function UtilOpacity() {
	return (
		<div className="comp-panel" id="p-opacity">
			<CompHeader
				title="Opacity"
				lead="Fade an entire element — its background, border, text, and every descendant — with .ai-opacity-{0,25,50,75,100}. This maps straight to the CSS opacity property, so it's one knob that dims everything inside the element together. That's different from a color-mix-based fade like .ai-link-opacity-* (see the Link page), which only lightens a single color value and leaves the rest of the element — and any children — untouched."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Opacity scale</div>
			<PreviewBlock label="ai-opacity-*">
				{LEVELS.map((level) => (
					<div key={level} className={`ai-opacity-${level} ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center`} style={{ width: '90px' }}>
						{level}
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Opacity fades children too</div>
			<PreviewBlock label="Same card, full opacity vs. ai-opacity-50">
				<div className="ai-border ai-rounded-2 ai-p-3" style={{ width: '190px' }}>
					<div className="ai-fw-bold ai-mb-1">Full opacity</div>
					<p className="ai-fs-8 ai-text-muted ai-mb-2">Heading, body text, and button all render normally.</p>
					<button className="ai-btn ai-btn-primary ai-fs-8" type="button">Action</button>
				</div>
				<div className="ai-opacity-50 ai-border ai-rounded-2 ai-p-3" style={{ width: '190px' }}>
					<div className="ai-fw-bold ai-mb-1">ai-opacity-50</div>
					<p className="ai-fs-8 ai-text-muted ai-mb-2">Heading, body text, border, and button fade together — nothing needs its own opacity class.</p>
					<button className="ai-btn ai-btn-primary ai-fs-8" type="button">Action</button>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>opacity value</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-opacity-0</code></td><td>0 — fully transparent, but still takes up layout space and remains clickable/focusable</td></tr>
						<tr><td><code>ai-opacity-25</code></td><td>0.25</td></tr>
						<tr><td><code>ai-opacity-50</code></td><td>0.5</td></tr>
						<tr><td><code>ai-opacity-75</code></td><td>0.75</td></tr>
						<tr><td><code>ai-opacity-100</code></td><td>1 — fully opaque (browser default)</td></tr>
					</tbody>
				</table>
			</div>

			<p className="ai-fs-7 ai-text-muted">
				Because opacity is a single compositing pass on the whole element, overlapping opaque children inside a faded parent can visually "show through" each other. If you only want to fade a color (e.g. a link) without touching its children or siblings, prefer a color-mix-based utility instead.
			</p>
		</div>
	);
}
