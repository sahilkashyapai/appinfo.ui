import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Badge() {
	return (
		<div className="comp-panel" id="p-badge">
			<CompHeader
				title="Badge"
				lead="Small status indicators and count labels. Semantic color variants for every context."
			/>

			<PreviewBlock
				label="Variants"
				canvasClassName="ai-d-flex ai-flex-wrap ai-gap-2"
			>
				<span className="ai-badge ai-badge-primary ai-badge-dot">Primary</span>
				<span className="ai-badge ai-badge-dark">Dark</span>
				<span className="ai-badge ai-badge-success"><span className="material-symbols-outlined" aria-hidden="true">check</span> Success</span>
				<span className="ai-badge ai-badge-warning"><span className="material-symbols-outlined" aria-hidden="true">warning</span> Warning</span>
				<span className="ai-badge ai-badge-danger"><span className="material-symbols-outlined" aria-hidden="true">close</span> Danger</span>
				<span className="ai-badge ai-badge-neutral">Neutral</span>
			</PreviewBlock>
		</div>
	);
}
