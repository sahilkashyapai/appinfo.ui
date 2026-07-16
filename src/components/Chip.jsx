import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TOGGLE_CHIPS = [
	{ id: 'critical', icon: 'error', label: 'Critical' },
	{ id: 'sensors', icon: 'sensors', label: 'Sensors' },
	{ id: 'zone-a', icon: 'map', label: 'Zone A' },
	{ id: 'controllers', icon: 'tune', label: 'Controllers' },
];

const REMOVABLE_CHIPS = [
	{ id: 'firmware', label: 'Firmware' },
	{ id: 'online-only', label: 'Online only' },
];

const STATIC_CHIPS = [
	{ id: 'read-only', label: 'Read only' },
	{ id: 'v3', label: 'v3.x' },
	{ id: 'north-cluster', label: 'North cluster' },
];

export default function Chip() {
	const [activeChips, setActiveChips] = useState(['critical']);
	const [removableChips, setRemovableChips] = useState(REMOVABLE_CHIPS);

	const toggleChip = (chipId) => {
		setActiveChips((prev) => (
			prev.includes(chipId)
				? prev.filter((id) => id !== chipId)
				: [...prev, chipId]
		));
	};

	const removeChip = (chipId) => {
		setRemovableChips((prev) => prev.filter((chip) => chip.id !== chipId));
	};

	return (
		<div className="comp-panel" id="p-chip">
			<CompHeader
				title="Chip"
				lead="Compact, pill-shaped filter elements (.ai-chip). Toggle state is driven by the .active class, dismissal by an inner .chip-x control, and disabled chips use the native disabled attribute on their control - there are no separate size or color modifier classes, styling is state-driven only."
			/>

			<div className="sub-heading">Toggle Chips</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				{TOGGLE_CHIPS.map((chip) => (
					<span
						className={`ai-chip ${activeChips.includes(chip.id) ? 'active' : ''}`}
						key={chip.id}
						onClick={() => toggleChip(chip.id)}
						role="button"
						tabIndex={0}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								event.preventDefault();
								toggleChip(chip.id);
							}
						}}
					>
						<span className="material-symbols-outlined" aria-hidden="true">{chip.icon}</span>
						{' '}
						{chip.label}
					</span>
				))}
			</PreviewBlock>

			<div className="sub-heading">Removable Chips</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				{removableChips.length === 0 ? (
					<span className="ai-chip" style={{ cursor: 'default' }}>All filters cleared</span>
				) : removableChips.map((chip) => (
					<span className="ai-chip" key={chip.id}>
						{chip.label}
						{' '}
						<span
							className="chip-x"
							onClick={() => removeChip(chip.id)}
							role="button"
							tabIndex={0}
							onKeyDown={(event) => {
								if (event.key === 'Enter' || event.key === ' ') {
									event.preventDefault();
									removeChip(chip.id);
								}
							}}
						>
							✕
						</span>
					</span>
				))}
			</PreviewBlock>

			<div className="sub-heading">Static (Non-interactive) Chips</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				{STATIC_CHIPS.map((chip) => (
					<span className="ai-chip" key={chip.id} style={{ cursor: 'default' }}>{chip.label}</span>
				))}
			</PreviewBlock>

			<div className="sub-heading">Disabled Chip</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				<span className="ai-chip" style={{ opacity: 0.4, cursor: 'not-allowed' }} aria-disabled="true">
					<span className="material-symbols-outlined" aria-hidden="true">lock</span>
					{' '}
					Locked filter
				</span>
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
						<tr><td><code>ai-chip</code></td><td><code>span</code></td><td>Base pill: inline-flex, 20px radius, surface2 background, muted text.</td></tr>
						<tr><td>(hover)</td><td><code>span.ai-chip:hover</code></td><td>Tinted background/border/text using the button accent color.</td></tr>
						<tr><td><code>active</code></td><td><code>span.ai-chip.active</code></td><td>Same tinted treatment as hover, persisted as a "selected" filter state.</td></tr>
						<tr><td><code>chip-x</code></td><td><code>span</code> inside <code>.ai-chip</code></td><td>Small dismiss control (✕); 50% opacity at rest, full opacity on hover.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
