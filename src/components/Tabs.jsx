import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TAB_ITEMS = [
	{ id: 'ti1', label: 'Overview', icon: 'sensors', content: 'Device overview - uptime 99.4%, last sync 2 min ago, firmware current.' },
	{ id: 'ti2', label: 'Metrics', icon: 'monitoring', content: 'Metrics - 1,240 events in last 24h, peak at 14:30, avg response 12ms.' },
	{ id: 'ti3', label: 'Alerts', icon: 'notifications', content: 'No active alerts. Last alert: threshold breach 3 days ago (resolved).' },
	{ id: 'ti4', label: 'History', icon: 'history', content: 'Configuration history - 3 changes in last 30 days. All by Admin.' },
];

export default function Tabs() {
	const [activeTabId, setActiveTabId] = useState('ti1');

	return (
		<div className="comp-panel" id="p-tabs">
			<CompHeader
				title="Tabs"
				lead="Horizontal tab navigation for switching between related content panes. Built from a lightweight .ai-tabs / .ai-tab-list / .ai-tab-btn / .ai-tab-content structure — the active button gets a colored underline (var(--c-btn)) and the matching panel is the only one shown. Tab buttons can carry a leading icon alongside the label, and the native disabled attribute removes a tab from the interaction flow without any extra markup."
			/>
			<div className="sub-heading">Icons + Content Panels</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ padding: '24px', gap: 0 }}
			>
				<div className="ai-tabs" data-tabs>
					<div className="ai-tab-list">
						{TAB_ITEMS.map((tab) => (
							<button
								className={`ai-tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
								data-tab-target={tab.id}
								role="tab"
								aria-controls={tab.id}
								aria-selected={activeTabId === tab.id}
								onClick={() => setActiveTabId(tab.id)}
								type="button"
								key={tab.id}
							>
								<span className="material-symbols-outlined" aria-hidden="true">{tab.icon}</span>
								{' '}
								{tab.label}
							</button>
						))}
					</div>

					{TAB_ITEMS.map((tab) => (
						<div
							className={`ai-tab-content ${activeTabId === tab.id ? 'active' : ''}`}
							id={tab.id}
							role="tabpanel"
							hidden={activeTabId !== tab.id}
							key={tab.id}
						>
							<span className="material-symbols-outlined" aria-hidden="true">{tab.icon}</span>
							{' '}
							{tab.content}
						</div>
					))}
				</div>
			</PreviewBlock>

			<div className="sub-heading">Disabled Tab</div>
			<PreviewBlock
				label="Preview - last tab is disabled"
				canvasStyle={{ padding: '24px', gap: 0 }}
			>
				<div className="ai-tabs" data-tabs>
					<div className="ai-tab-list">
						<button className="ai-tab-btn active" role="tab" aria-selected="true" type="button">Overview</button>
						<button className="ai-tab-btn" role="tab" aria-selected="false" type="button">Metrics</button>
						<button className="ai-tab-btn" role="tab" aria-selected="false" disabled type="button">Archived (disabled)</button>
					</div>
					<div className="ai-tab-content active" role="tabpanel">
						Standard tab list with a disabled trailing tab — it cannot be focused or clicked, useful for gating content behind a permission or plan tier.
					</div>
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
						<tr><td><code>ai-tabs</code></td><td>Wrapper — draws the bottom border the tab list sits on.</td></tr>
						<tr><td><code>ai-tab-list</code></td><td>Flex row of tab trigger buttons, no gap between items.</td></tr>
						<tr><td><code>ai-tab-btn</code></td><td>Individual tab trigger — muted text, transparent 2px bottom border by default.</td></tr>
						<tr><td><code>ai-tab-btn.active</code></td><td>Selected state — text and bottom border switch to <code>var(--c-btn)</code>.</td></tr>
						<tr><td><code>ai-tab-btn[disabled]</code></td><td>Native disabled attribute — removes the tab from tab order and click handling.</td></tr>
						<tr><td><code>ai-tab-content</code></td><td>Panel for a tab's content — hidden (<code>display: none</code>) unless it carries <code>.active</code>.</td></tr>
						<tr><td><code>ai-tab-content.active</code></td><td>The one visible panel matching the selected tab.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
