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
				lead="Contextual feedback messages for user actions - info, success, warning, and danger variants, each with a tinted background, matching left border accent, and an icon. Alerts are dismissible by default via a built-in close button that removes the alert from the DOM, but the close button and icon are both optional - omit either for a persistent, plain-text banner."
			/>

			<div className="sub-heading">Dismissible, With Icon (click the X to remove)</div>
			{alerts.map((alert) => (
				<PreviewBlock
					key={alert.id}
					label={`Alert - ${alert.id.charAt(0).toUpperCase() + alert.id.slice(1)}`}
				>
					<div className={`ai-alert ${alert.cls}`}>
						<div className="al-content">
							<span className="al-icon material-symbols-outlined" aria-hidden="true">{alert.icon}</span>
							<div>
								<strong>{alert.title}</strong>
								{' '}
								{alert.message}
							</div>
						</div>
						<button className="al-close" onClick={() => removeAlert(alert.id)} type="button" aria-label="Close alert">
							<span className="material-symbols-outlined" aria-hidden="true">close</span>
						</button>
					</div>
				</PreviewBlock>
			))}

			<div className="sub-heading">Persistent (No Close Button)</div>
			<PreviewBlock label="Alert - Info, non-dismissible">
				<div className="ai-alert ai-alert-info">
					<div className="al-content">
						<span className="al-icon material-symbols-outlined" aria-hidden="true">info</span>
						<div>
							<strong>Heads up:</strong>
							{' '}
							Scheduled maintenance runs nightly from 2:00–2:30 AM. Simply omit the .al-close button to make an alert permanent.
						</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Without Icon</div>
			<PreviewBlock label="Alert - Warning, text only">
				<div className="ai-alert ai-alert-warning">
					<div className="al-content">
						<div>
							<strong>Warning:</strong>
							{' '}
							The icon span is optional - an alert works fine with just the message content.
						</div>
					</div>
					<button className="al-close" type="button" aria-label="Close alert">
						<span className="material-symbols-outlined" aria-hidden="true">close</span>
					</button>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-alert</code></td><td>Base class - rounded corners, padding, and the left/right layout between content and close button.</td></tr>
						<tr><td><code>ai-alert-info</code></td><td>Tinted with <code>var(--c-btn)</code> at 10% - theme brand color, so it recolors per-theme.</td></tr>
						<tr><td><code>ai-alert-success</code></td><td>Fixed green background/border/text (<code>--c-success*</code>) - same in every theme.</td></tr>
						<tr><td><code>ai-alert-warning</code></td><td>Fixed amber background/border/text (<code>--c-warning*</code>).</td></tr>
						<tr><td><code>ai-alert-danger</code></td><td>Fixed red background/border/text (<code>--c-danger*</code>).</td></tr>
						<tr><td><code>al-content</code></td><td>Wraps the icon + message so they align and the close button can be pushed to the far right.</td></tr>
						<tr><td><code>al-icon</code></td><td>Optional leading icon, 20px, slightly nudged down to align with the first line of text.</td></tr>
						<tr><td><code>al-close</code></td><td>Optional dismiss button - 50% opacity at rest, full opacity on hover. Omit it for a persistent alert.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
