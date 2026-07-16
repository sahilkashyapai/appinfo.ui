import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Switch() {
	const [switches, setSwitches] = useState({
		realtimeAlerts: true,
		emailNotifications: false,
		autoSyncDevices: true,
	});

	const toggleSwitch = (key) => {
		setSwitches((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<div className="comp-panel" id="p-switch">
			<CompHeader
				title="Switch / Toggle"
				lead="Binary on/off controls (.ai-switch > .ai-switch-track + .ai-switch-thumb) for settings and feature flags. The track fills with the accent color and the thumb slides right when the .on class is applied; the trailing label can be swapped to lead the control, and the native disabled attribute mutes both track and label."
			/>
			<div className="sub-heading">Interactive</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
			>
				<label className="ai-switch">
					<button
						className={`ai-switch-track ${switches.realtimeAlerts ? 'on' : ''}`}
						onClick={() => toggleSwitch('realtimeAlerts')}
						type="button"
						aria-pressed={switches.realtimeAlerts}
					>
						<span className="ai-switch-thumb" />
					</button>
					<span className="ai-switch-label">Real-time alerts enabled</span>
				</label>

				<label className="ai-switch">
					<button
						className={`ai-switch-track ${switches.emailNotifications ? 'on' : ''}`}
						onClick={() => toggleSwitch('emailNotifications')}
						type="button"
						aria-pressed={switches.emailNotifications}
					>
						<span className="ai-switch-thumb" />
					</button>
					<span className="ai-switch-label">Email notifications</span>
				</label>

				<label className="ai-switch">
					<button
						className={`ai-switch-track ${switches.autoSyncDevices ? 'on' : ''}`}
						onClick={() => toggleSwitch('autoSyncDevices')}
						type="button"
						aria-pressed={switches.autoSyncDevices}
					>
						<span className="ai-switch-thumb" />
					</button>
					<span className="ai-switch-label">Auto-sync devices</span>
				</label>
			</PreviewBlock>

			<div className="sub-heading">Disabled States</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
			>
				<label className="ai-switch" style={{ opacity: 0.4 }}>
					<button className="ai-switch-track" style={{ cursor: 'not-allowed' }} disabled type="button">
						<span className="ai-switch-thumb" />
					</button>
					<span className="ai-switch-label">Disabled - off</span>
				</label>

				<label className="ai-switch" style={{ opacity: 0.4 }}>
					<button className="ai-switch-track on" style={{ cursor: 'not-allowed' }} disabled type="button">
						<span className="ai-switch-thumb" />
					</button>
					<span className="ai-switch-label">Disabled - on</span>
				</label>
			</PreviewBlock>

			<div className="sub-heading">Label Before Switch</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
			>
				<label className="ai-switch">
					<span className="ai-switch-label">Maintenance mode</span>
					<button
						className={`ai-switch-track ${switches.emailNotifications ? 'on' : ''}`}
						onClick={() => toggleSwitch('emailNotifications')}
						type="button"
						aria-pressed={switches.emailNotifications}
					>
						<span className="ai-switch-thumb" />
					</button>
				</label>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Applies to</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-switch</code></td><td><code>label</code></td><td>Flex row wrapper (10px gap) around the track and its label.</td></tr>
						<tr><td><code>ai-switch-track</code></td><td><code>button</code></td><td>40x22px pill track, border-radius 20px, border-color background at rest.</td></tr>
						<tr><td><code>on</code></td><td><code>.ai-switch-track.on</code></td><td>Accent-colored track; slides the thumb 18px to the right.</td></tr>
						<tr><td><code>disabled</code> (attr)</td><td><code>.ai-switch-track:disabled</code></td><td>No dedicated scss rule - pages dim the wrapper via inline opacity and set <code>cursor: not-allowed</code>.</td></tr>
						<tr><td><code>ai-switch-thumb</code></td><td><code>span</code></td><td>16px circular knob, absolutely positioned, animates its transform on toggle.</td></tr>
						<tr><td><code>ai-switch-label</code></td><td><code>span</code></td><td>14px label text; can be placed before or after the track since layout is flex.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
