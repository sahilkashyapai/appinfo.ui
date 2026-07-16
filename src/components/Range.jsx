import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Range() {
	const [thresholdLevel, setThresholdLevel] = useState(60);
	const [pollingInterval, setPollingInterval] = useState(30);
	const [brightness, setBrightness] = useState(75);

	return (
		<div className="comp-panel" id="p-range">
			<CompHeader
				title="Range Slider"
				lead="Styled range inputs for numeric value selection. .ai-range restyles a native <input type=range> to a full-width 10px accent-colored track using accent-color, so it inherits the browser's built-in drag handle, keyboard support (arrow keys/Page Up/Down/Home/End), and disabled/min/max/step semantics for free - no extra markup is required."
			/>
			<div className="sub-heading">Controlled Sliders with Live Value</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column' }}
			>
				<div className="ai-input-group ai-w-100 ai-mb-5">
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
				<div className="ai-input-group ai-w-100">
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

			<div className="sub-heading">Step Increments</div>
			<PreviewBlock
				label="min=0 max=100 step=5"
				canvasStyle={{ display: 'flex', flexDirection: 'column' }}
			>
				<div className="ai-input-group ai-w-100">
					<label className="ai-label">Brightness - <span>{brightness}</span>%</label>
					<input
						className="ai-range"
						type="range"
						min="0"
						max="100"
						step="5"
						value={brightness}
						onChange={(event) => setBrightness(Number(event.target.value))}
					/>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Disabled &amp; Static States</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column' }}
			>
				<div className="ai-input-group ai-w-100 ai-mb-5">
					<label className="ai-label">Locked Threshold (disabled) - 60%</label>
					<input
						className="ai-range"
						type="range"
						min="0"
						max="100"
						defaultValue="60"
						disabled
					/>
				</div>
				<div className="ai-input-group ai-w-100">
					<label className="ai-label">Uncontrolled Default - defaultValue=25</label>
					<input
						className="ai-range"
						type="range"
						min="0"
						max="100"
						defaultValue="25"
					/>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class / Attribute</th>
							<th>Applies to</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-range</code></td>
							<td><code>&lt;input type="range"&gt;</code></td>
							<td>Full width, 10px track height, rounded, <code>accent-color: var(--c-btn)</code>, pointer cursor. No separate size/color modifier classes - restyle via inline style or a wrapping utility if needed.</td>
						</tr>
						<tr>
							<td><code>min / max / step</code></td>
							<td>Native attributes</td>
							<td>Fully supported - drive the slider's range and increment; pair with a controlled <code>value</code> + <code>onChange</code> to show a live readout, as in the examples above.</td>
						</tr>
						<tr>
							<td><code>disabled</code></td>
							<td>Native attribute</td>
							<td>Dims and locks the control using the browser's default disabled treatment (no custom disabled styling is defined in the SCSS).</td>
						</tr>
						<tr>
							<td><code>ai-input-group</code> / <code>ai-label</code></td>
							<td>Wrapper / label</td>
							<td>Same label/group pattern used by text inputs, keeping the value readout inline in the label text.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
