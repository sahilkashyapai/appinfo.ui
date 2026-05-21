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
				lead="Compact, interactive filter elements. Toggle or removable state supported."
			/>

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

				{removableChips.map((chip) => (
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
		</div>
	);
}
