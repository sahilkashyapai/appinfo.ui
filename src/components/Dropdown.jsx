import { useEffect, useRef, useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Dropdown() {
	const [openDropdown, setOpenDropdown] = useState('');
	const rootRef = useRef(null);

	const toggleDropdown = (id) => {
		setOpenDropdown((prev) => (prev === id ? '' : id));
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (rootRef.current && !rootRef.current.contains(event.target)) {
				setOpenDropdown('');
			}
		};

		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				setOpenDropdown('');
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, []);

	return (
		<div className="comp-panel" id="p-dropdown" ref={rootRef}>
			<CompHeader
				title="Dropdown"
				lead="Contextual action menus with smooth open/close animation and keyboard support (click-outside and Escape both close the menu). A .ai-dropdown wraps a trigger button and an .ai-dropdown-menu; adding the .open class on the wrapper fades and slides the menu into view. Menus can mix icons, a divider (.ai-dropdown-sep), and a destructive item (.ai-dropdown-item.danger)."
			/>
			<div className="sub-heading">Basic Menus</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ alignItems: 'flex-start', gap: '16px' }}
			>
				<div className={`ai-dropdown ${openDropdown === 'dd1' ? 'open' : ''}`} id="dd1">
					<button
						className="ai-btn ai-btn-primary"
						data-dropdown-toggle="dd1"
						onClick={() => toggleDropdown('dd1')}
						type="button"
						aria-expanded={openDropdown === 'dd1'}
					>
						Actions ▾
					</button>
					<div className="ai-dropdown-menu">
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">edit</span> Edit Device</div>
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">content_copy</span> Clone Config</div>
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">upload</span> Export Data</div>
						<div className="ai-dropdown-sep" />
						<div className="ai-dropdown-item danger"><span className="material-symbols-outlined" aria-hidden="true">delete</span> Delete</div>
					</div>
				</div>

				<div className={`ai-dropdown ${openDropdown === 'dd2' ? 'open' : ''}`} id="dd2">
					<button
						className="ai-btn ai-btn-outline"
						data-dropdown-toggle="dd2"
						onClick={() => toggleDropdown('dd2')}
						type="button"
						aria-expanded={openDropdown === 'dd2'}
					>
						Zones ▾
					</button>
					<div className="ai-dropdown-menu">
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">trip_origin</span> Zone A - North</div>
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">trip_origin</span> Zone B - South</div>
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">trip_origin</span> Zone C - East</div>
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">trip_origin</span> Zone D - West</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Icon Trigger &amp; Plain Text Menu</div>
			<PreviewBlock
				label="Preview - a compact icon-only trigger, and a menu with no icons"
				canvasStyle={{ alignItems: 'flex-start', gap: '16px' }}
			>
				<div className={`ai-dropdown ${openDropdown === 'dd3' ? 'open' : ''}`} id="dd3">
					<button
						className="ai-btn ai-btn-ghost ai-btn-icon"
						data-dropdown-toggle="dd3"
						onClick={() => toggleDropdown('dd3')}
						type="button"
						aria-label="More options"
						aria-expanded={openDropdown === 'dd3'}
					>
						<span className="material-symbols-outlined" aria-hidden="true">more_vert</span>
					</button>
					<div className="ai-dropdown-menu">
						<div className="ai-dropdown-item">View Details</div>
						<div className="ai-dropdown-item">Assign Owner</div>
						<div className="ai-dropdown-item">Mute Alerts</div>
						<div className="ai-dropdown-sep" />
						<div className="ai-dropdown-item danger">Remove Device</div>
					</div>
				</div>

				<div className={`ai-dropdown ${openDropdown === 'dd4' ? 'open' : ''}`} id="dd4">
					<button
						className="ai-btn ai-btn-secondary"
						data-dropdown-toggle="dd4"
						onClick={() => toggleDropdown('dd4')}
						type="button"
						aria-expanded={openDropdown === 'dd4'}
					>
						Sort By ▾
					</button>
					<div className="ai-dropdown-menu">
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">arrow_upward</span> Name (A-Z)</div>
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">arrow_downward</span> Name (Z-A)</div>
						<div className="ai-dropdown-sep" />
						<div className="ai-dropdown-item"><span className="material-symbols-outlined" aria-hidden="true">schedule</span> Last Updated</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Applies to</th>
							<th>Behavior</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-dropdown</code></td>
							<td>Wrapper</td>
							<td><code>position: relative; display: inline-block</code> around a trigger + menu pair.</td>
						</tr>
						<tr>
							<td><code>ai-dropdown.open</code></td>
							<td>Wrapper (state)</td>
							<td>Reveals the menu: opacity 0→1, translateY(-6px)→0, pointer-events enabled.</td>
						</tr>
						<tr>
							<td><code>ai-dropdown-menu</code></td>
							<td>Panel</td>
							<td>Absolutely positioned 6px below the trigger, min-width 180px, elevated card with shadow; hidden/faded by default.</td>
						</tr>
						<tr>
							<td><code>ai-dropdown-item</code></td>
							<td>Row</td>
							<td>Flex row with icon gap, rounded hover background (<code>var(--c-surface2)</code>).</td>
						</tr>
						<tr>
							<td><code>ai-dropdown-item.danger</code></td>
							<td>Row modifier</td>
							<td>Hover state switches to <code>var(--c-danger-light)</code> background / <code>var(--c-danger-dark)</code> text for destructive actions.</td>
						</tr>
						<tr>
							<td><code>ai-dropdown-sep</code></td>
							<td>Divider</td>
							<td>1px full-width line (<code>var(--c-border)</code>) with 5px vertical margin to group menu sections.</td>
						</tr>
						<tr>
							<td><code>data-dropdown-toggle</code></td>
							<td>Trigger button</td>
							<td>Attribute pairing a trigger to its menu id; this demo drives it with React state, click-outside, and Escape-to-close.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
