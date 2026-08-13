import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const DEMO_IMG =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">' +
			'<rect width="400" height="200" fill="#2878a3"/>' +
			'<rect x="20" y="20" width="120" height="160" fill="#56c8f0"/>' +
			'<circle cx="300" cy="100" r="70" fill="#ffffff" opacity="0.5"/>' +
			'</svg>'
	);

const FITS = ['fill', 'contain', 'cover', 'scale-down', 'none'];
const POSITIONS = ['top', 'right', 'bottom', 'left', 'center'];

export default function UtilObjectFit() {
	return (
		<div className="comp-panel" id="p-object-fit">
			<CompHeader
				title="Object fit"
				lead="Control how a replaced element (img, video, canvas) fills its box with .ai-object-{fill,contain,cover,scale-down,none}, and where it's anchored with .ai-object-position-{top,right,bottom,left,center}. object-position only has a visible effect once the image isn't stretched to exactly match the box - that's why the position demo below pairs it with ai-object-none, which keeps the image at its natural size and lets the box crop it."
				badge="UTILITIES"
			/>

			<PreviewBlock label="object-fit (100x100 box, 400x200 source image)">
				{FITS.map((fit) => (
					<figure key={fit} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<img
							className={`ai-object-${fit} ai-border ai-rounded-2`}
							src={DEMO_IMG}
							alt={fit}
							style={{ width: '100px', height: '100px' }}
						/>
						<figcaption className="ai-fs-8 ai-text-muted">{fit}</figcaption>
					</figure>
				))}
			</PreviewBlock>

			<PreviewBlock label="object-position (with object-fit: none)">
				{POSITIONS.map((pos) => (
					<figure key={pos} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<img
							className={`ai-object-none ai-object-position-${pos} ai-border ai-rounded-2`}
							src={DEMO_IMG}
							alt={pos}
							style={{ width: '100px', height: '100px' }}
						/>
						<figcaption className="ai-fs-8 ai-text-muted">{pos}</figcaption>
					</figure>
				))}
			</PreviewBlock>

			<PreviewBlock label="object-position (with object-fit: cover) - image still fills the box, but the crop anchor shifts">
				{POSITIONS.map((pos) => (
					<figure key={pos} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<img
							className={`ai-object-cover ai-object-position-${pos} ai-border ai-rounded-2`}
							src={DEMO_IMG}
							alt={pos}
							style={{ width: '100px', height: '60px' }}
						/>
						<figcaption className="ai-fs-8 ai-text-muted">{pos}</figcaption>
					</figure>
				))}
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
						<tr><td><code>ai-object-fill</code></td><td>Stretches the source to exactly fill the box, ignoring aspect ratio (the default browser behavior for img)</td></tr>
						<tr><td><code>ai-object-contain</code></td><td>Scales the source to fit entirely inside the box, preserving aspect ratio (may letterbox)</td></tr>
						<tr><td><code>ai-object-cover</code></td><td>Scales the source to fully cover the box, preserving aspect ratio (crops overflow)</td></tr>
						<tr><td><code>ai-object-scale-down</code></td><td>Behaves like `none` or `contain`, whichever renders smaller</td></tr>
						<tr><td><code>ai-object-none</code></td><td>Ignores the box size entirely and renders the source at its natural size (may overflow or under-fill)</td></tr>
						<tr><td><code>ai-object-position-top / -right / -bottom / -left / -center</code></td><td>Anchors the source within the box when it isn't a perfect fill (used with `none`, `contain`, `scale-down`, or `cover`)</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
