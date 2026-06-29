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
				lead="Horizontal tab navigation for switching between related content panes."
			/>
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
		</div>
	);
}
