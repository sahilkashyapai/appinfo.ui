import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const INITIAL_ALERTS = [
	{
		id: 'info',
		cls: 'ai-alert-info',
		icon: 'info',
		title: 'Info:',
		message: 'Configuration changes take effect after next device sync.',
	},
	{
		id: 'success',
		cls: 'ai-alert-success',
		icon: 'check_circle',
		title: 'Success:',
		message: 'All 14 devices updated to firmware v3.1.2 successfully.',
	},
	{
		id: 'warning',
		cls: 'ai-alert-warning',
		icon: 'warning',
		title: 'Warning:',
		message: 'Device SNSR-042 has not reported in 30 minutes.',
	},
	{
		id: 'danger',
		cls: 'ai-alert-danger',
		icon: 'emergency',
		title: 'Critical:',
		message: 'Threshold breach on Zone 3. Immediate attention required.',
	},
];

export default function Alert() {
	const [alerts, setAlerts] = useState(INITIAL_ALERTS);

	const removeAlert = (id) => {
		setAlerts((prev) => prev.filter((a) => a.id !== id));
	};

	return (
		<div className="comp-panel" id="p-alert">
			<CompHeader
				title="Alert"
				lead="Contextual feedback messages for user actions - info, success, warning, and danger variants."
			/>

			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column', gap: 10 }}
			>
				{alerts.map((alert) => (
					<div key={alert.id} className={`ai-alert ${alert.cls}`}>
						<div className="al-content">
							<span className="al-icon material-symbols-outlined" aria-hidden="true">{alert.icon}</span>
							<div>
								<strong>{alert.title}</strong> {alert.message}
							</div>
						</div>
						<button className="al-close" onClick={() => removeAlert(alert.id)} type="button" aria-label="Close alert">
							<span className="material-symbols-outlined" aria-hidden="true">close</span>
						</button>
					</div>
				))}
			</PreviewBlock>
		</div>
	);
}
