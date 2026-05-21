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
				canvasStyle={{ alignItems: 'center', gap: '24px' }}
			>
				<span className="ai-spinner ai-spinner-sm" />
				<span className="ai-spinner" />
				<span className="ai-spinner ai-spinner-lg" />
			</PreviewBlock>
			<div className="preview-label" style={{ borderTop: '1px solid var(--c-border)', marginTop: '16px', paddingTop: '16px' }}>Dot Spinner</div>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', background: 'var(--c-surface)' }}>
				<div className="ai-spinner-dots">
					<div className="ai-spinner-dot" />
					<div className="ai-spinner-dot" />
					<div className="ai-spinner-dot" />
				</div>
			</div>
		</div>
	);
}
