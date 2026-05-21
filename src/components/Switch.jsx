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
				lead="Binary on/off controls for settings and feature flags."
			/>
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

				<label className="ai-switch" style={{ opacity: 0.4 }}>
					<button className="ai-switch-track" style={{ cursor: 'not-allowed' }} disabled type="button">
						<span className="ai-switch-thumb" />
					</button>
					<span className="ai-switch-label">Disabled option</span>
				</label>
			</PreviewBlock>
		</div>
	);
}
