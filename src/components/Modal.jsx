import { useEffect, useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Modal() {
	const [activeModal, setActiveModal] = useState('');

	const openModal = (modalId) => setActiveModal(modalId);
	const closeModal = () => setActiveModal('');

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				closeModal();
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, []);

	return (
		<>
			<div className="comp-panel" id="p-modal">
				<CompHeader
					title="Modal"
					lead="Focused overlay dialogs for confirmations, forms, and detail views."
				/>
				<PreviewBlock
					label="Preview"
					canvasClassName="ai-d-flex ai-gap-3 ai-flex-wrap"
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m1')} type="button">Open Modal</button>
					<button className="ai-btn ai-btn-danger" onClick={() => openModal('m2')} type="button">Confirm Delete</button>
				</PreviewBlock>
			</div>

			<div
				className={`ai-modal-backdrop ${activeModal === 'm1' ? 'open' : ''}`}
				id="m1"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-device">
					<div className="ai-modal-header">
						<span className="ai-modal-title" id="modal-title-device">Device Configuration</span>
						<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog">×</button>
					</div>
					<div className="ai-modal-body">
						<p>Update the configuration settings for device <strong>SNSR-042</strong>. Changes will apply after next sync cycle.</p>
						<div className="ai-input-group ai-mt-4">
							<label className="ai-label">Poll Interval</label>
							<select className="ai-select">
								<option>30 seconds</option>
								<option>60 seconds</option>
								<option>5 minutes</option>
							</select>
						</div>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" type="button">Save Changes</button>
					</div>
				</div>
			</div>

			<div
				className={`ai-modal-backdrop ${activeModal === 'm2' ? 'open' : ''}`}
				id="m2"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-delete">
					<div className="ai-modal-header">
						<span className="ai-modal-title" id="modal-title-delete"><span className="material-symbols-outlined" aria-hidden="true">warning</span> Confirm Delete</span>
							<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog">
								<span className="material-symbols-outlined" aria-hidden="true">close</span>
							</button>
					</div>
					<div className="ai-modal-body">
						<p>Are you sure you want to delete device <strong>SNSR-042</strong>? This action cannot be undone and all historical data will be permanently removed.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-danger ai-btn-sm" type="button">Yes, Delete</button>
					</div>
				</div>
			</div>
		</>
	);
}
