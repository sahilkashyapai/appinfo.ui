import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const SWATCHES = [
	'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark',
];

// Small tileable pattern, used to demonstrate background-repeat.
const TILE_IMG =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">' +
			'<rect width="40" height="40" fill="#eef2f7"/>' +
			'<circle cx="20" cy="20" r="9" fill="#2878a3"/>' +
			'</svg>'
	);

// Larger single scene, used to demonstrate background-position and background-size.
const SCENE_IMG =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180">' +
			'<rect width="300" height="180" fill="#2878a3"/>' +
			'<rect x="15" y="15" width="90" height="120" fill="#56c8f0"/>' +
			'<circle cx="220" cy="90" r="55" fill="#ffffff" opacity="0.5"/>' +
			'</svg>'
	);

const POSITIONS = ['top', 'right', 'bottom', 'left', 'center'];
const SIZES = ['cover', 'contain', 'auto'];
const REPEATS = ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'];

export default function UtilBackground() {
	return (
		<div className="comp-panel" id="p-bg">
			<CompHeader
				title="Background"
				lead="Semantic background-color utilities (.ai-bg-{color}), plus background-image position, size, repeat and attachment controls (.ai-bg-{position|size|repeat|scroll,fixed}). Color classes set background-color; the image classes below set the other background-* longhands, so they combine freely with any element that already has a background-image set via inline style."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Colors</div>
			<PreviewBlock label="Semantic colors (.ai-bg-*)">
				{SWATCHES.map((name) => (
					<div key={name} className={`ai-bg-${name} ai-rounded-2 ai-p-3 ai-text-center`} style={{ width: '110px' }}>
						<span className={name === 'light' ? 'ai-text-dark' : 'ai-text-white'}>{name}</span>
					</div>
				))}
			</PreviewBlock>

			<PreviewBlock label="Neutral (.ai-bg-white / .ai-bg-black / .ai-bg-transparent)">
				<div className="ai-bg-white ai-border ai-rounded-2 ai-p-3 ai-text-center" style={{ width: '110px' }}>white</div>
				<div className="ai-bg-black ai-rounded-2 ai-p-3 ai-text-center" style={{ width: '110px' }}>
					<span className="ai-text-white">black</span>
				</div>
				<div className="ai-bg-transparent ai-border ai-rounded-2 ai-p-3 ai-text-center" style={{ width: '110px' }}>transparent</div>
			</PreviewBlock>

			<div className="sub-heading">Background image: position</div>
			<PreviewBlock label="ai-bg-{top,right,bottom,left,center} (90x90 box, larger image, ai-bg-no-repeat)">
				{POSITIONS.map((pos) => (
					<figure key={pos} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<div
							className={`ai-bg-${pos} ai-bg-no-repeat ai-border ai-rounded-2`}
							style={{ width: '90px', height: '90px', backgroundImage: `url(${SCENE_IMG})` }}
						/>
						<figcaption className="ai-fs-8 ai-text-muted">{pos}</figcaption>
					</figure>
				))}
			</PreviewBlock>

			<div className="sub-heading">Background image: size</div>
			<PreviewBlock label="ai-bg-{cover,contain,auto} (combined with ai-bg-center ai-bg-no-repeat)">
				{SIZES.map((size) => (
					<figure key={size} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<div
							className={`ai-bg-${size} ai-bg-center ai-bg-no-repeat ai-border ai-rounded-2`}
							style={{ width: '90px', height: '90px', backgroundImage: `url(${SCENE_IMG})` }}
						/>
						<figcaption className="ai-fs-8 ai-text-muted">{size}</figcaption>
					</figure>
				))}
			</PreviewBlock>

			<div className="sub-heading">Background image: repeat</div>
			<PreviewBlock label="ai-bg-repeat / -repeat-x / -repeat-y / -no-repeat (small tile image)">
				{REPEATS.map((mode) => (
					<figure key={mode} className="ai-d-flex ai-flex-column ai-align-center" style={{ gap: '4px' }}>
						<div
							className={`ai-bg-${mode} ai-border ai-rounded-2`}
							style={{ width: '110px', height: '80px', backgroundImage: `url(${TILE_IMG})` }}
						/>
						<figcaption className="ai-fs-8 ai-text-muted">{`ai-bg-${mode}`}</figcaption>
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
						<tr><td><code>ai-bg-body</code></td><td>Page background color</td></tr>
						<tr><td><code>ai-bg-body-secondary</code></td><td>Secondary page surface color</td></tr>
						<tr><td><code>ai-bg-cover / ai-bg-contain / ai-bg-auto</code></td><td>background-size</td></tr>
						<tr><td><code>ai-bg-center / ai-bg-top / ai-bg-right / ai-bg-bottom / ai-bg-left</code></td><td>background-position</td></tr>
						<tr><td><code>ai-bg-repeat / ai-bg-repeat-x / ai-bg-repeat-y / ai-bg-no-repeat</code></td><td>background-repeat</td></tr>
						<tr><td><code>ai-bg-scroll / ai-bg-fixed</code></td><td>background-attachment (fixed pins the image to the viewport instead of the element, visible once the page scrolls)</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
