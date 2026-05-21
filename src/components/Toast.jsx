import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Toast() {
	return (
		<div className="comp-panel" id="p-toast">
			<CompHeader
				title="Toast"
				lead="Non-blocking notification messages that appear at screen edges."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: '10px', minHeight: '160px' }}
			>
				<div className="ai-toast">
					<span className="t-icon">
						<span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
					</span>
					<div className="t-body">
						<div className="t-title">Sync complete</div>
						<div className="t-msg">All 14 devices updated successfully.</div>
					</div>
					<button className="t-close" type="button" aria-label="Dismiss toast">
						<span className="material-symbols-outlined" aria-hidden="true">close</span>
					</button>
				</div>

				<div className="ai-toast" style={{ borderLeft: '3px solid #ef4444' }}>
					<span className="t-icon">
						<span className="material-symbols-outlined" aria-hidden="true">warning</span>
					</span>
					<div className="t-body">
						<div className="t-title">Alert triggered</div>
						<div className="t-msg">Threshold breach on Zone 3.</div>
					</div>
					<button className="t-close" type="button" aria-label="Dismiss toast">
						<span className="material-symbols-outlined" aria-hidden="true">close</span>
					</button>
				</div>
			</PreviewBlock>
		</div>
	);
}
