import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Progress() {
	return (
		<div className="comp-panel" id="p-progress">
			<CompHeader
				title="Progress"
				lead="Linear progress bars with label, percentage, striped, and animated variants."
			/>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-column ai-gap-4"
			>
				<div>
					<div className="ai-progress-label"><span>Sync Progress</span><span>72%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar" style={{ width: '72%' }} />
					</div>
				</div>
				<div>
					<div className="ai-progress-label"><span>Uploading...</span><span>45%</span></div>
					<div className="ai-progress">
						<div className="ai-progress-bar striped animated" style={{ width: '45%' }} />
					</div>
				</div>
				<div>
					<div className="ai-progress-label"><span>Storage Used</span><span>90%</span></div>
					<div className="ai-progress ai-h-3">
						<div className="ai-progress-bar" style={{ width: '90%', background: '#ef4444' }} />
					</div>
				</div>
			</PreviewBlock>
		</div>
	);
}
