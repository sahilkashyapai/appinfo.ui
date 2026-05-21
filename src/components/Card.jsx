import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Card() {
	return (
		<div className="comp-panel" id="p-card">
			<CompHeader
				title="Card"
				lead="Versatile content containers with optional header, footer, and image variants."
			/>

			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'grid', gap: '16px' }}
			>
				<div className="ai-card">
					<div className="ai-card-img">
						<span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '2.5rem' }}>sensors</span>
					</div>
					<div className="ai-card-body">
						<div className="ai-card-title">Traffic Sensor</div>
						<p className="ai-card-text">Zone A · Last sync 2 min ago</p>
						<div style={{ marginTop: '10px' }}><span className="ai-badge ai-badge-success"><span className="material-symbols-outlined" aria-hidden="true">check</span> Online</span></div>
					</div>
					<div className="ai-card-footer">
						<button className="ai-btn ai-btn-sm ai-btn-primary" type="button">View</button>
					</div>
				</div>

				<div className="ai-card">
					<div className="ai-card-header">
						<div className="ai-card-header-title">
							<span className="material-symbols-outlined" aria-hidden="true">monitoring</span>
							{' '}
							Statistics
						</div>
					</div>
					<div className="ai-card-body">
						<div className="ai-card-title">Daily Report</div>
						<p className="ai-card-text">1,240 events captured · 3 anomalies flagged</p>
					</div>
					<div className="ai-card-footer">
						<button className="ai-btn ai-btn-sm ai-btn-outline" type="button">Download</button>
					</div>
				</div>

				<div className="ai-card">
					<div className="ai-card-body">
						<div className="ai-card-title">
							<span className="material-symbols-outlined" aria-hidden="true">tune</span>
							{' '}
							Controller
						</div>
						<p className="ai-card-text">Adaptive cycle active since 08:00. Phase timing normal.</p>
						<div style={{ marginTop: '10px' }}><span className="ai-badge ai-badge-primary ai-badge-dot">Active</span></div>
					</div>
				</div>
			</PreviewBlock>
		</div>
	);
}
