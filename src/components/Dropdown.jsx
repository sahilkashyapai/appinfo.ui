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
				lead="Contextual action menus with smooth open/close animation and keyboard support."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ minHeight: '200px', alignItems: 'flex-start', gap: '16px' }}
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
		</div>
	);
}
