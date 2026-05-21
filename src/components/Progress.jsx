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
				canvasStyle={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
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
					<div className="ai-progress" style={{ height: '12px' }}>
						<div className="ai-progress-bar" style={{ width: '90%', background: '#ef4444' }} />
					</div>
				</div>
			</PreviewBlock>
		</div>
	);
}
