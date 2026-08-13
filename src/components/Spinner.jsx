import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Spinner() {
	return (
		<div className="comp-panel" id="p-spinner">
			<CompHeader
				title="Spinner"
				lead="Loading indicators for async or in-progress states. Ring spinners in three sizes, plus a bouncing three-dot variant for a softer feel."
			/>
			<div className="sub-heading">Ring Spinners</div>
			<PreviewBlock
				label="Sizes"
				canvasClassName="ai-d-flex ai-align-center ai-gap-5"
			>
				<span className="ai-spinner ai-spinner-sm" />
				<span className="ai-spinner" />
				<span className="ai-spinner ai-spinner-lg" />
			</PreviewBlock>

			<div className="preview-label ai-border-top ai-mt-4 ai-pt-4">Dot Spinner</div>
			<div className="ai-d-flex ai-justify-center ai-align-center ai-p-5 ai-bg-body-secondary">
				<div className="ai-spinner-dots">
					<div className="ai-spinner-dot" />
					<div className="ai-spinner-dot" />
					<div className="ai-spinner-dot" />
				</div>
			</div>

			<div className="sub-heading">In Context</div>
			<PreviewBlock
				label="Loading Button & Inline Text"
				canvasClassName="ai-d-flex ai-align-center ai-gap-4"
			>
				<button className="ai-btn ai-btn-primary" type="button" disabled>
					<span className="ai-spinner ai-spinner-sm" /> Loading…
				</button>
				<span className="ai-d-flex ai-align-center ai-gap-2">
					<span className="ai-spinner ai-spinner-sm" /> Fetching data
				</span>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-spinner</code></td><td>Base ring spinner (36px), rotating border with a solid top segment.</td></tr>
						<tr><td><code>ai-spinner-sm</code></td><td>Small ring spinner - 20px, thinner border.</td></tr>
						<tr><td><code>ai-spinner-lg</code></td><td>Large ring spinner - 52px, thicker border.</td></tr>
						<tr><td><code>ai-spinner-dots</code></td><td>Flex row container for the three-dot bouncing variant.</td></tr>
						<tr><td><code>ai-spinner-dot</code></td><td>A single bouncing dot; each child staggers its animation delay automatically.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
