import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function UtilText() {
	return (
		<div className="comp-panel" id="p-text">
			<CompHeader
				title="Text"
				lead="Font size (.ai-fs-*), weight (.ai-fw-*), style, alignment, decoration, transform, line-height, letter-spacing, and wrapping utilities. (Vertical alignment of inline content has its own dedicated page - see Vertical Align.)"
				badge="UTILITIES"
			/>

			<PreviewBlock label="Font size (.ai-fs-1 .. .ai-fs-8)" canvasClassName="ai-d-flex ai-flex-column">
				{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
					<span key={n} className={`ai-fs-${n}`}>ai-fs-{n} - The quick brown fox</span>
				))}
			</PreviewBlock>

			<PreviewBlock label="Weight (.ai-fw-*)" canvasClassName="ai-d-flex ai-flex-column">
				{['light', 'normal', 'medium', 'semibold', 'bold', 'bolder'].map((w) => (
					<span key={w} className={`ai-fw-${w}`}>ai-fw-{w}</span>
				))}
			</PreviewBlock>

			<PreviewBlock label="Decoration & transform">
				<span className="ai-text-decoration-underline">underline</span>
				<span className="ai-text-decoration-line-through">line-through</span>
				<span className="ai-text-decoration-overline">overline</span>
				<span className="ai-text-uppercase">uppercase</span>
				<span className="ai-text-capitalize">capitalize me</span>
				<span className="ai-text-lowercase">LOWERCASE ME</span>
			</PreviewBlock>

			<PreviewBlock label="Line height (.ai-lh-*) - same font size, different line spacing" canvasClassName="ai-d-flex ai-flex-column">
				<p className="ai-lh-1 ai-fs-8" style={{ width: '220px' }}>ai-lh-1: The quick brown fox jumps over the lazy dog near the riverbank.</p>
				<p className="ai-lh-base ai-fs-8" style={{ width: '220px' }}>ai-lh-base: The quick brown fox jumps over the lazy dog near the riverbank.</p>
				<p className="ai-lh-xl ai-fs-8" style={{ width: '220px' }}>ai-lh-xl: The quick brown fox jumps over the lazy dog near the riverbank.</p>
			</PreviewBlock>

			<PreviewBlock label="Letter spacing (.ai-ls-*)" canvasClassName="ai-d-flex ai-flex-column">
				<span className="ai-ls-tight">ai-ls-tight letters</span>
				<span className="ai-ls-normal">ai-ls-normal letters</span>
				<span className="ai-ls-wide">ai-ls-wide letters</span>
				<span className="ai-ls-wider">ai-ls-wider letters</span>
			</PreviewBlock>

			<PreviewBlock label="Truncate (.ai-text-truncate)">
				<div className="ai-text-truncate" style={{ width: '160px' }}>
					This sentence is far too long to fit in this box
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Group</th>
							<th>Classes</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>Alignment</td><td><code>ai-text-start / -center / -end / -left / -right / -justify</code></td></tr>
						<tr><td>Color</td><td><code>ai-text-primary / -secondary / -success / -danger / -warning / -info / -light / -dark / -white / -black / -muted</code></td></tr>
						<tr><td>Weight</td><td><code>ai-fw-light / -normal / -medium / -semibold / -bold / -bolder</code></td></tr>
						<tr><td>Size</td><td><code>ai-fs-1 .. ai-fs-8</code> (largest to smallest)</td></tr>
						<tr><td>Style</td><td><code>ai-fst-italic / -normal</code></td></tr>
						<tr><td>Decoration</td><td><code>ai-text-decoration-none / -underline / -line-through / -overline</code></td></tr>
						<tr><td>Transform</td><td><code>ai-text-uppercase / -lowercase / -capitalize / -none-case</code></td></tr>
						<tr><td>Line height</td><td><code>ai-lh-1 / -sm / -base / -lg / -xl</code></td></tr>
						<tr><td>Letter spacing</td><td><code>ai-ls-tight / -normal / -wide / -wider</code></td></tr>
						<tr><td>Wrapping</td><td><code>ai-text-wrap / -nowrap / -truncate</code></td></tr>
						<tr><td>Word break</td><td><code>ai-word-break</code> (overflow-wrap: break-word), <code>ai-text-break</code> (word-break: break-word)</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
