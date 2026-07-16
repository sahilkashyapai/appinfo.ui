import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Toast() {
	const [visible, setVisible] = useState(true);

	return (
		<div className="comp-panel" id="p-toast">
			<CompHeader
				title="Toast"
				lead="Non-blocking notification messages that appear at screen edges. Each toast pairs an icon with a title/message body and an optional dismiss button, and slides in with a short fade + translate animation. Semantic meaning (success, danger, warning, info) is applied via a colored left border and matching icon rather than a dedicated modifier class."
			/>
			<div className="sub-heading">Semantic Variants</div>
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

				<div className="ai-toast" style={{ borderLeft: '3px solid var(--c-danger)' }}>
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

				<div className="ai-toast" style={{ borderLeft: '3px solid var(--c-warning)' }}>
					<span className="t-icon">
						<span className="material-symbols-outlined" aria-hidden="true">error</span>
					</span>
					<div className="t-body">
						<div className="t-title">Comms degraded</div>
						<div className="t-msg">Retrying connection to Addison-Airport.</div>
					</div>
					<button className="t-close" type="button" aria-label="Dismiss toast">
						<span className="material-symbols-outlined" aria-hidden="true">close</span>
					</button>
				</div>

				<div className="ai-toast" style={{ borderLeft: '3px solid var(--c-info)' }}>
					<span className="t-icon">
						<span className="material-symbols-outlined" aria-hidden="true">info</span>
					</span>
					<div className="t-body">
						<div className="t-title">Firmware available</div>
						<div className="t-msg">Version 4.2.1 is ready to install.</div>
					</div>
					<button className="t-close" type="button" aria-label="Dismiss toast">
						<span className="material-symbols-outlined" aria-hidden="true">close</span>
					</button>
				</div>

				<div className="ai-toast">
					<span className="t-icon">
						<span className="material-symbols-outlined" aria-hidden="true">notifications</span>
					</span>
					<div className="t-body">
						<div className="t-title">No close button</div>
						<div className="t-msg">Toasts can omit the dismiss control for auto-timed messages.</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Interactive Trigger &amp; Dismiss</div>
			<PreviewBlock
				label="Click to trigger, click × to dismiss"
				canvasStyle={{ gap: '12px', minHeight: '110px', alignItems: 'flex-start' }}
			>
				<button
					className="ai-btn ai-btn-primary"
					type="button"
					onClick={() => setVisible(true)}
				>
					Show Toast
				</button>
				{visible && (
					<div className="ai-toast" style={{ borderLeft: '3px solid var(--c-success)' }}>
						<span className="t-icon">
							<span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
						</span>
						<div className="t-body">
							<div className="t-title">Config saved</div>
							<div className="t-msg">Zone A - North settings applied.</div>
						</div>
						<button
							className="t-close"
							type="button"
							aria-label="Dismiss toast"
							onClick={() => setVisible(false)}
						>
							<span className="material-symbols-outlined" aria-hidden="true">close</span>
						</button>
					</div>
				)}
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Applies to</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-toast</code></td>
							<td>Wrapper</td>
							<td>Card container - icon + body + close button, 0.3s slide-in animation.</td>
						</tr>
						<tr>
							<td><code>t-icon</code></td>
							<td>Leading icon</td>
							<td>18px icon slot, flex-shrink disabled.</td>
						</tr>
						<tr>
							<td><code>t-body</code></td>
							<td>Content wrapper</td>
							<td>Stacks title and message vertically.</td>
						</tr>
						<tr>
							<td><code>t-title</code></td>
							<td>Title line</td>
							<td>Bold 13.5px heading text.</td>
						</tr>
						<tr>
							<td><code>t-msg</code></td>
							<td>Message line</td>
							<td>12.5px muted supporting text.</td>
						</tr>
						<tr>
							<td><code>t-close</code></td>
							<td>Dismiss button</td>
							<td>Borderless icon button, pushed to the right edge.</td>
						</tr>
						<tr>
							<td><code>ai-toast-area</code></td>
							<td>Outer positioning container</td>
							<td>Sets <code>position: relative; height: 120px</code> so an <code>.ai-toast</code> can anchor itself with <code>position: absolute; bottom: 0; right: 0</code> in real page layouts (inside this docs preview canvas, toasts render statically so multiple can stack).</td>
						</tr>
						<tr>
							<td>inline <code>borderLeft</code></td>
							<td><code>.ai-toast</code></td>
							<td>Semantic accent color - pair with <code>var(--c-success)</code>, <code>var(--c-danger)</code>, <code>var(--c-warning)</code>, or <code>var(--c-info)</code> and a matching icon glyph.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
