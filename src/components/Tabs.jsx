import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TAB_ITEMS = [
	{ id: 'ti1', label: 'Overview', icon: 'sensors', content: 'Device overview - uptime 99.4%, last sync 2 min ago, firmware current.' },
	{ id: 'ti2', label: 'Metrics', icon: 'monitoring', content: 'Metrics - 1,240 events in last 24h, peak at 14:30, avg response 12ms.' },
	{ id: 'ti3', label: 'Alerts', icon: 'notifications', content: 'No active alerts. Last alert: threshold breach 3 days ago (resolved).' },
	{ id: 'ti4', label: 'History', icon: 'history', content: 'Configuration history - 3 changes in last 30 days. All by Admin.' },
];

const SEGMENTED_ITEMS = [
	{ id: 'seg1', label: 'Details', content: 'Device Name, Business Name, Device Type, Timezone, and mode toggles for this unit.' },
	{ id: 'seg2', label: 'Modbus', content: 'Unit ID, Port Number, and the register map table for this device.' },
];

const PILL_ITEMS = [
	{ id: 'pl1', label: 'Overview' },
	{ id: 'pl2', label: 'Metrics' },
	{ id: 'pl3', label: 'Alerts' },
];

const BOXED_ITEMS = [
	{ id: 'bx1', label: 'General' },
	{ id: 'bx2', label: 'Advanced' },
	{ id: 'bx3', label: 'Logs' },
];

export default function Tabs() {
	const [activeTabId, setActiveTabId] = useState('ti1');
	const [activeSegId, setActiveSegId] = useState('seg1');
	const [activePillId, setActivePillId] = useState('pl1');
	const [activeBoxId, setActiveBoxId] = useState('bx1');

	return (
		<div className="comp-panel" id="p-tabs">
			<CompHeader
				title="Tabs"
				lead="Horizontal tab navigation for switching between related content panes. Built from a lightweight .ai-tabs / .ai-tab-list / .ai-tab-btn / .ai-tab-content structure - the active button gets a colored underline (var(--c-btn)) and the matching panel is the only one shown. Tab buttons can carry a leading icon alongside the label, and the native disabled attribute removes a tab from the interaction flow without any extra markup. At 1080px and narrower, the button row hides and a native .ai-tab-select dropdown takes over - resize the window below 1080px to see it happen in any preview below."
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

					<select
						className="ai-select ai-tab-select"
						data-tab-select
						aria-label="Select tab"
						value={activeTabId}
						onChange={(event) => setActiveTabId(event.target.value)}
					>
						{TAB_ITEMS.map((tab) => (
							<option value={tab.id} key={tab.id}>{tab.label}</option>
						))}
					</select>

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
					<select className="ai-select ai-tab-select" data-tab-select aria-label="Select tab" defaultValue="Overview">
						<option>Overview</option>
						<option>Metrics</option>
						<option disabled>Archived (disabled)</option>
					</select>
					<div className="ai-tab-content active" role="tabpanel">
						Standard tab list with a disabled trailing tab - it cannot be focused or clicked, useful for gating content behind a permission or plan tier.
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Segmented</div>
			<PreviewBlock
				label="Preview - attached rectangular buttons, filled active state"
				canvasStyle={{ padding: '24px', gap: 0 }}
			>
				<div className="ai-tabs ai-tabs--segmented" data-tabs>
					<div className="ai-tab-list">
						{SEGMENTED_ITEMS.map((tab) => (
							<button
								className={`ai-tab-btn ${activeSegId === tab.id ? 'active' : ''}`}
								data-tab-target={tab.id}
								role="tab"
								aria-controls={tab.id}
								aria-selected={activeSegId === tab.id}
								onClick={() => setActiveSegId(tab.id)}
								type="button"
								key={tab.id}
							>
								{tab.label}
							</button>
						))}
					</div>

					<select
						className="ai-select ai-tab-select"
						data-tab-select
						aria-label="Select tab"
						value={activeSegId}
						onChange={(event) => setActiveSegId(event.target.value)}
					>
						{SEGMENTED_ITEMS.map((tab) => (
							<option value={tab.id} key={tab.id}>{tab.label}</option>
						))}
					</select>

					{SEGMENTED_ITEMS.map((tab) => (
						<div
							className={`ai-tab-content ${activeSegId === tab.id ? 'active' : ''}`}
							id={tab.id}
							role="tabpanel"
							hidden={activeSegId !== tab.id}
							key={tab.id}
						>
							{tab.content}
						</div>
					))}
				</div>
			</PreviewBlock>

			<div className="sub-heading">Pills</div>
			<PreviewBlock
				label="Preview - spaced, fully rounded, filled active state"
				canvasStyle={{ padding: '24px', gap: 0 }}
			>
				<div className="ai-tabs ai-tabs--pills" data-tabs>
					<div className="ai-tab-list">
						{PILL_ITEMS.map((tab) => (
							<button
								className={`ai-tab-btn ${activePillId === tab.id ? 'active' : ''}`}
								data-tab-target={tab.id}
								role="tab"
								aria-controls={tab.id}
								aria-selected={activePillId === tab.id}
								onClick={() => setActivePillId(tab.id)}
								type="button"
								key={tab.id}
							>
								{tab.label}
							</button>
						))}
					</div>

					<select
						className="ai-select ai-tab-select"
						data-tab-select
						aria-label="Select tab"
						value={activePillId}
						onChange={(event) => setActivePillId(event.target.value)}
					>
						{PILL_ITEMS.map((tab) => (
							<option value={tab.id} key={tab.id}>{tab.label}</option>
						))}
					</select>

					{PILL_ITEMS.map((tab) => (
						<div
							className={`ai-tab-content ${activePillId === tab.id ? 'active' : ''}`}
							id={tab.id}
							role="tabpanel"
							hidden={activePillId !== tab.id}
							key={tab.id}
						>
							{tab.label} panel content goes here.
						</div>
					))}
				</div>
			</PreviewBlock>

			<div className="sub-heading">Boxed</div>
			<PreviewBlock
				label="Preview - folder-style tabs that connect to the panel below"
				canvasStyle={{ padding: '24px', gap: 0 }}
			>
				<div className="ai-tabs ai-tabs--boxed" data-tabs>
					<div className="ai-tab-list">
						{BOXED_ITEMS.map((tab) => (
							<button
								className={`ai-tab-btn ${activeBoxId === tab.id ? 'active' : ''}`}
								data-tab-target={tab.id}
								role="tab"
								aria-controls={tab.id}
								aria-selected={activeBoxId === tab.id}
								onClick={() => setActiveBoxId(tab.id)}
								type="button"
								key={tab.id}
							>
								{tab.label}
							</button>
						))}
					</div>

					<select
						className="ai-select ai-tab-select"
						data-tab-select
						aria-label="Select tab"
						value={activeBoxId}
						onChange={(event) => setActiveBoxId(event.target.value)}
					>
						{BOXED_ITEMS.map((tab) => (
							<option value={tab.id} key={tab.id}>{tab.label}</option>
						))}
					</select>

					{BOXED_ITEMS.map((tab) => (
						<div
							className={`ai-tab-content ${activeBoxId === tab.id ? 'active' : ''}`}
							id={tab.id}
							role="tabpanel"
							hidden={activeBoxId !== tab.id}
							key={tab.id}
						>
							{tab.label} panel content goes here.
						</div>
					))}
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
						<tr><td><code>ai-tabs</code></td><td>Wrapper - draws the bottom border the tab list sits on.</td></tr>
						<tr><td><code>ai-tab-list</code></td><td>Flex row of tab trigger buttons, no gap between items.</td></tr>
						<tr><td><code>ai-tab-btn</code></td><td>Individual tab trigger - muted text, transparent 2px bottom border by default.</td></tr>
						<tr><td><code>ai-tab-btn.active</code></td><td>Selected state - text and bottom border switch to <code>var(--c-btn)</code>.</td></tr>
						<tr><td><code>ai-tab-btn[disabled]</code></td><td>Native disabled attribute - removes the tab from tab order and click handling.</td></tr>
						<tr><td><code>ai-tab-content</code></td><td>Panel for a tab's content - hidden (<code>display: none</code>) unless it carries <code>.active</code>.</td></tr>
						<tr><td><code>ai-tab-content.active</code></td><td>The one visible panel matching the selected tab.</td></tr>
						<tr><td><code>ai-tabs--segmented</code></td><td>Modifier on <code>.ai-tabs</code> - attached rectangular buttons; active tab fills with <code>var(--c-btn)</code>. Matches the Details / Modbus device-settings tab bar.</td></tr>
						<tr><td><code>ai-tabs--pills</code></td><td>Modifier on <code>.ai-tabs</code> - spaced, fully rounded buttons; active tab fills with <code>var(--c-btn)</code> and a soft shadow.</td></tr>
						<tr><td><code>ai-tabs--boxed</code></td><td>Modifier on <code>.ai-tabs</code> - bordered folder-style tabs; the active tab's bottom border matches the panel so it reads as connected.</td></tr>
						<tr><td><code>ai-tab-select</code></td><td>Native <code>&lt;select&gt;</code>, one <code>&lt;option&gt;</code> per tab (<code>value</code> matches its <code>data-tab-target</code>). Hidden above 1080px; below it, it replaces <code>.ai-tab-list</code> and changing it activates the matching tab.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
