import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Spinner() {
	return (
		<div className="comp-panel" id="p-spinner">
			<CompHeader
				title="Spinner"
				lead="Loading indicators - ring spinners in three sizes, and bouncing dots variant."
			/>
			<PreviewBlock
				label="Ring Spinners"
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
		</div>
	);
}
