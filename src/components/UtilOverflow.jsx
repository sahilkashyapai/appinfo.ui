import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const OVERFLOWS = ['visible', 'hidden', 'scroll', 'auto'];

export default function UtilOverflow() {
	return (
		<div className="comp-panel" id="p-overflow">
			<CompHeader
				title="Overflow"
				lead="Control how content that doesn't fit its box is handled with .ai-overflow-{value} (both axes) or .ai-overflow-x-* / .ai-overflow-y-* (single axis). A related pair, .ai-overflow-wrap-normal / -break-word, controls whether a single long unbroken word or URL is allowed to break onto a new line instead of overflowing its box — that's a text-wrapping concern, not a scrolling one, but it lives in the same overflow family."
				badge="UTILITIES"
			/>

			<div className="sub-heading">ai-overflow-* / ai-overflow-x-* / ai-overflow-y-*</div>
			<PreviewBlock label="ai-overflow-* (50x50 box, taller content)">
				{OVERFLOWS.map((value) => (
					<div key={value} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<div
							className={`ai-overflow-${value} ai-border ai-rounded-2 ai-bg-light`}
							style={{ width: '90px', height: '60px', padding: '4px' }}
						>
							<div className="ai-bg-primary ai-text-white ai-rounded-1" style={{ width: '70px', height: '110px', fontSize: '11px', padding: '4px' }}>
								Tall content
							</div>
						</div>
						<span className="ai-fs-8 ai-text-muted">{value}</span>
					</div>
				))}
			</PreviewBlock>

			<PreviewBlock label="Single-axis: ai-overflow-y-auto vertical scroll, horizontal clipped">
				<div className="ai-overflow-y-auto ai-overflow-x-hidden ai-border ai-rounded-2 ai-bg-light" style={{ width: '140px', height: '70px', padding: '4px' }}>
					<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8" style={{ width: '260px', marginBottom: '6px' }}>Wide row 1 (clipped horizontally)</div>
					<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8" style={{ width: '260px', marginBottom: '6px' }}>Wide row 2 (clipped horizontally)</div>
					<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2 ai-fs-8" style={{ width: '260px' }}>Wide row 3 (clipped horizontally)</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Overflow wrap (long unbroken strings)</div>
			<PreviewBlock label="ai-overflow-wrap-normal vs ai-overflow-wrap-break-word">
				<div className="ai-border ai-rounded-2 ai-p-2 ai-fs-8" style={{ width: '160px' }}>
					<div className="ai-fw-semibold ai-mb-1">normal</div>
					<div className="ai-overflow-wrap-normal">https://example.com/a/very/long/unbroken-url-segment-that-does-not-wrap</div>
				</div>
				<div className="ai-border ai-rounded-2 ai-p-2 ai-fs-8" style={{ width: '160px' }}>
					<div className="ai-fw-semibold ai-mb-1">break-word</div>
					<div className="ai-overflow-wrap-break-word">https://example.com/a/very/long/unbroken-url-segment-that-wraps-cleanly</div>
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
						<tr><td><code>ai-overflow-visible / -hidden / -scroll / -auto</code></td><td>overflow, both axes</td></tr>
						<tr><td><code>ai-overflow-x-*</code></td><td>Same values, horizontal axis only</td></tr>
						<tr><td><code>ai-overflow-y-*</code></td><td>Same values, vertical axis only</td></tr>
						<tr><td><code>ai-overflow-wrap-normal</code></td><td>overflow-wrap: normal — long words overflow the box rather than breaking</td></tr>
						<tr><td><code>ai-overflow-wrap-break-word</code></td><td>overflow-wrap: break-word — breaks a long unbroken word/URL so it wraps instead of overflowing</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
