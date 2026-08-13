import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const WIDTHS = [25, 50, 75, 100];

export default function UtilSizing() {
	return (
		<div className="comp-panel" id="p-sizing">
			<CompHeader
				title="Sizing"
				lead="Percentage width/height (.ai-w-*, .ai-h-*), viewport sizing, min/max constraints, and aspect-ratio utilities. The viewport classes (.ai-w-100vw, .ai-h-100vh, .ai-min-h-100vh) are built on dvw/dvh (dynamic viewport units) rather than plain vw/vh, so they account for mobile browsers showing/hiding their address bar instead of leaving a gap or forcing a scrollbar."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Width</div>
			<PreviewBlock label="Width (.ai-w-*)" canvasClassName="ai-d-flex ai-flex-column">
				{WIDTHS.map((pct) => (
					<div key={pct} className={`ai-w-${pct} ai-bg-primary ai-text-white ai-p-2 ai-rounded-1 ai-text-center`}>
						ai-w-{pct} ({pct}%)
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Aspect ratio</div>
			<PreviewBlock label="Aspect ratio (.ai-aspect-*)">
				<div className="ai-aspect-1x1 ai-bg-secondary ai-text-white ai-rounded-2 ai-d-flex ai-align-center ai-justify-center" style={{ width: '100px' }}>1x1</div>
				<div className="ai-aspect-16x9 ai-bg-secondary ai-text-white ai-rounded-2 ai-d-flex ai-align-center ai-justify-center" style={{ width: '160px' }}>16x9</div>
				<div className="ai-aspect-4x3 ai-bg-secondary ai-text-white ai-rounded-2 ai-d-flex ai-align-center ai-justify-center" style={{ width: '120px' }}>4x3</div>
				<div className="ai-aspect-9x16 ai-bg-secondary ai-text-white ai-rounded-2 ai-d-flex ai-align-center ai-justify-center" style={{ width: '68px' }}>9x16</div>
			</PreviewBlock>

			<div className="sub-heading">Min / max constraints together</div>
			<PreviewBlock label="ai-max-w-100 capping an intrinsically wider box to its parent">
				<div className="ai-border ai-rounded-2 ai-p-2" style={{ width: '220px' }}>
					<div className="ai-max-w-100 ai-bg-primary ai-text-white ai-rounded-1 ai-p-2 ai-text-center ai-fs-8" style={{ width: '400px' }}>
						ai-max-w-100 (would render at 400px, capped to fill its 220px parent instead)
					</div>
				</div>
			</PreviewBlock>

			<PreviewBlock label="ai-aspect-16x9 + ai-max-w-100 - a responsive media placeholder">
				<div style={{ width: '200px' }}>
					<div className="ai-aspect-16x9 ai-max-w-100 ai-bg-dark ai-text-white ai-rounded-2 ai-d-flex ai-align-center ai-justify-center ai-fs-8" style={{ width: '340px' }}>
						16:9 media, scaled down to fit
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
						<tr><td><code>ai-w-25 / -50 / -75 / -100 / -auto</code></td><td>Percentage width</td></tr>
						<tr><td><code>ai-h-25 / -50 / -75 / -100 / -auto</code></td><td>Percentage height</td></tr>
						<tr><td><code>ai-w-100vw / ai-h-100vh / ai-h-100vw</code></td><td>Full viewport width / height, using dvw/dvh</td></tr>
						<tr><td><code>ai-min-w-0 / -100 / -auto</code></td><td>min-width</td></tr>
						<tr><td><code>ai-min-h-0 / -100 / -auto / -100vh</code></td><td>min-height</td></tr>
						<tr><td><code>ai-max-w-100 / -none / -auto / -100vw</code></td><td>max-width</td></tr>
						<tr><td><code>ai-max-h-100 / -none / -auto / -100vh</code></td><td>max-height</td></tr>
						<tr><td><code>ai-aspect-1x1 / -16x9 / -4x3 / -21x9 / -9x16 / -3x4</code></td><td>aspect-ratio - pair with <code>ai-max-w-100</code> for responsive media boxes</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
