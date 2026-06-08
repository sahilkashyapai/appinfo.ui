import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Range() {
	const [thresholdLevel, setThresholdLevel] = useState(60);
	const [pollingInterval, setPollingInterval] = useState(30);

	return (
		<div className="comp-panel" id="p-range">
			<CompHeader
				title="Range Slider"
				lead="Styled range inputs for numeric value selection."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column' }}
			>
				<div className="ai-input-group">
					<label className="ai-label">Threshold Level - <span>{thresholdLevel}</span>%</label>
					<input
						className="ai-range"
						type="range"
						min="0"
						max="100"
						value={thresholdLevel}
						onChange={(event) => setThresholdLevel(Number(event.target.value))}
					/>
				</div>
				<div className="ai-input-group">
					<label className="ai-label">Polling Interval - <span>{pollingInterval}</span>s</label>
					<input
						className="ai-range"
						type="range"
						min="5"
						max="120"
						value={pollingInterval}
						onChange={(event) => setPollingInterval(Number(event.target.value))}
					/>
				</div>
			</PreviewBlock>
		</div>
	);
}
