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

	const configModalCode = `<button class="ai-btn ai-btn-primary" data-modal-open="m1" type="button" aria-controls="m1" aria-expanded="false">Open Modal</button>

<!-- Modal: Device Configuration -->
<div class="ai-modal-backdrop" id="m1" aria-hidden="true">
	<div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-device">
		<div class="ai-modal-header">
			<span class="ai-modal-title" id="modal-title-device">Device Configuration</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>Update the configuration settings for device <strong>SNSR-042</strong>. Changes will apply after next sync cycle.</p>
			<div class="ai-input-group ai-mt-4">
				<label class="ai-label">Poll Interval</label>
				<select class="ai-select">
					<option>30 seconds</option>
					<option>60 seconds</option>
					<option>5 minutes</option>
				</select>
			</div>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Cancel</button>
			<button class="ai-btn ai-btn-primary ai-btn-sm" type="button">Save Changes</button>
		</div>
	</div>
</div>`;

	const deleteModalCode = `<button class="ai-btn ai-btn-danger" data-modal-open="m2" type="button" aria-controls="m2" aria-expanded="false">Confirm Delete</button>

<!-- Modal: Confirm Delete -->
<div class="ai-modal-backdrop" id="m2" aria-hidden="true">
	<div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-delete">
		<div class="ai-modal-header">
			<span class="ai-modal-title" id="modal-title-delete">
				<span class="material-symbols-outlined">warning</span> Confirm Delete
			</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>Are you sure you want to delete device <strong>SNSR-042</strong>? This action cannot be undone and all historical data will be permanently removed.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Cancel</button>
			<button class="ai-btn ai-btn-danger ai-btn-sm" type="button">Yes, Delete</button>
		</div>
	</div>
</div>`;

	const largeModalCode = `<button class="ai-btn ai-btn-primary" data-modal-open="m3" type="button" aria-controls="m3" aria-expanded="false">Large Modal</button>

<div class="ai-modal-backdrop" id="m3" aria-hidden="true">
	<div class="ai-modal ai-modal-lg" role="dialog" aria-modal="true" aria-labelledby="modal-title-large">
		<div class="ai-modal-header">
			<span class="ai-modal-title" id="modal-title-large">Large Modal</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>This is a large modal with more width for displaying detailed content, tables, or forms.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Close</button>
		</div>
	</div>
</div>`;

	const smallModalCode = `<button class="ai-btn ai-btn-primary" data-modal-open="m4" type="button" aria-controls="m4" aria-expanded="false">Small Modal</button>

<div class="ai-modal-backdrop" id="m4" aria-hidden="true">
	<div class="ai-modal ai-modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title-small">
		<div class="ai-modal-header">
			<span class="ai-modal-title" id="modal-title-small">Small Modal</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>Compact modal for simple confirmations or quick actions.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-primary ai-btn-sm" data-modal-close type="button">OK</button>
		</div>
	</div>
</div>`;

	const alertModalCode = `<button class="ai-btn ai-btn-danger" data-modal-open="m5" type="button" aria-controls="m5" aria-expanded="false">Alert Modal</button>

<div class="ai-modal-backdrop" id="m5" aria-hidden="true">
	<div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-alert">
		<div class="ai-modal-header ai-bg-danger-light">
			<span class="ai-modal-title" id="modal-title-alert">
				<span class="material-symbols-outlined" aria-hidden="true">error</span> Alert
			</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p><strong>Warning:</strong> This action requires your confirmation. Please review before proceeding.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Cancel</button>
			<button class="ai-btn ai-btn-danger ai-btn-sm" type="button">Proceed</button>
		</div>
	</div>
</div>`;

	const successModalCode = `<button class="ai-btn ai-btn-success" data-modal-open="m6" type="button" aria-controls="m6" aria-expanded="false">Success Modal</button>

<div class="ai-modal-backdrop" id="m6" aria-hidden="true">
	<div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-success">
		<div class="ai-modal-header ai-bg-success-light">
			<span class="ai-modal-title" id="modal-title-success">
				<span class="material-symbols-outlined" aria-hidden="true">check_circle</span> Success
			</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>Operation completed successfully! Your changes have been saved.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-primary ai-btn-sm" data-modal-close type="button">Done</button>
		</div>
	</div>
</div>`;

	const formModalCode = `<button class="ai-btn ai-btn-primary" data-modal-open="m7" type="button" aria-controls="m7" aria-expanded="false">Form Modal</button>

<div class="ai-modal-backdrop" id="m7" aria-hidden="true">
	<div class="ai-modal ai-modal-lg" role="dialog" aria-modal="true" aria-labelledby="modal-title-form">
		<div class="ai-modal-header">
			<span class="ai-modal-title" id="modal-title-form">User Registration</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<div class="ai-input-group ai-mb-3">
				<label class="ai-label">Full Name</label>
				<input class="ai-input" type="text" placeholder="Enter your name">
			</div>
			<div class="ai-input-group ai-mb-3">
				<label class="ai-label">Email Address</label>
				<input class="ai-input" type="email" placeholder="Enter your email">
			</div>
			<div class="ai-input-group">
				<label class="ai-label">Message</label>
				<textarea class="ai-textarea" rows="4" placeholder="Your message here"></textarea>
			</div>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Cancel</button>
			<button class="ai-btn ai-btn-primary ai-btn-sm" type="button">Submit</button>
		</div>
	</div>
</div>`;

	return (
		<>
			<div className="comp-panel" id="p-modal">
				<CompHeader
					title="Modal"
					lead="Focused overlay dialogs for confirmations, forms, and detail views."
				/>
				<PreviewBlock
					label="Device Configuration"
					canvasClassName="ai-d-flex ai-gap-3"
					code={configModalCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m1')} type="button">Open Modal</button>
				</PreviewBlock>

				<PreviewBlock
					label="Confirm Delete"
					canvasClassName="ai-d-flex ai-gap-3"
					code={deleteModalCode}
				>
					<button className="ai-btn ai-btn-danger" onClick={() => openModal('m2')} type="button">Confirm Delete</button>
				</PreviewBlock>

				<PreviewBlock
					label="Large Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={largeModalCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m3')} type="button">Large Modal</button>
				</PreviewBlock>

				<PreviewBlock
					label="Small Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={smallModalCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m4')} type="button">Small Modal</button>
				</PreviewBlock>

				<PreviewBlock
					label="Alert Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={alertModalCode}
				>
					<button className="ai-btn ai-btn-danger" onClick={() => openModal('m5')} type="button">Alert Modal</button>
				</PreviewBlock>

				<PreviewBlock
					label="Success Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={successModalCode}
				>
					<button className="ai-btn ai-btn-success" onClick={() => openModal('m6')} type="button">Success Modal</button>
				</PreviewBlock>

				<PreviewBlock
					label="Form Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={formModalCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m7')} type="button">Form Modal</button>
				</PreviewBlock>
			</div>

			{/* Basic Modal 1 - Device Configuration */}
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
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
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

			{/* Basic Modal 2 - Confirm Delete */}
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

			{/* Large Modal - Bootstrap Style */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm3' ? 'open' : ''}`}
				id="m3"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-lg" role="dialog" aria-modal="true" aria-labelledby="modal-title-large">
					<div className="ai-modal-header">
						<span className="ai-modal-title" id="modal-title-large">Large Modal Example</span>
			<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<p>This is a large modal with more width for displaying detailed content, tables, or complex forms. Perfect for Bootstrap-style layouts.</p>
						<table className="ai-table ai-mt-4">
							<thead>
								<tr>
									<th>Device ID</th>
									<th>Status</th>
									<th>Last Sync</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>SNSR-001</td>
									<td><span className="ai-badge ai-badge-success">Active</span></td>
									<td>2 mins ago</td>
								</tr>
								<tr>
									<td>SNSR-002</td>
									<td><span className="ai-badge ai-badge-warning">Pending</span></td>
									<td>5 mins ago</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Close</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" type="button">Apply Changes</button>
					</div>
				</div>
			</div>

			{/* Small Modal */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm4' ? 'open' : ''}`}
				id="m4"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title-small">
					<div className="ai-modal-header">
						<span className="ai-modal-title" id="modal-title-small">Confirm Action</span>
			<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<p>Compact modal for simple confirmations or quick actions.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" type="button">OK</button>
					</div>
				</div>
			</div>

			{/* Alert Modal - Danger */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm5' ? 'open' : ''}`}
				id="m5"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-alert">
					<div className="ai-modal-header ai-bg-danger-light">
						<span className="ai-modal-title" id="modal-title-alert">
							<span className="material-symbols-outlined" aria-hidden="true">error</span> Alert
						</span>
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<p><strong>Warning:</strong> This action requires your confirmation. Please review the consequences before proceeding.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-danger ai-btn-sm" type="button">Proceed with Caution</button>
					</div>
				</div>
			</div>

			{/* Success Modal */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm6' ? 'open' : ''}`}
				id="m6"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-success">
					<div className="ai-modal-header ai-bg-success-light">
						<span className="ai-modal-title" id="modal-title-success">
							<span className="material-symbols-outlined" aria-hidden="true">check_circle</span> Success
						</span>
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<p>Operation completed successfully! Your changes have been saved and will take effect immediately.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-primary ai-btn-sm" onClick={closeModal} type="button">Done</button>
					</div>
				</div>
			</div>

			{/* Form Modal - Bootstrap Style */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm7' ? 'open' : ''}`}
				id="m7"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-lg" role="dialog" aria-modal="true" aria-labelledby="modal-title-form">
					<div className="ai-modal-header">
						<span className="ai-modal-title" id="modal-title-form">User Registration Form</span>
			<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<div className="ai-input-group ai-mb-3">
							<label className="ai-label">Full Name</label>
							<input className="ai-input" type="text" placeholder="Enter your full name" />
						</div>
						<div className="ai-input-group ai-mb-3">
							<label className="ai-label">Email Address</label>
							<input className="ai-input" type="email" placeholder="Enter your email" />
						</div>
						<div className="ai-input-group ai-mb-3">
							<label className="ai-label">Phone Number</label>
							<input className="ai-input" type="tel" placeholder="Enter your phone" />
						</div>
						<div className="ai-input-group">
							<label className="ai-label">Message</label>
							<textarea className="ai-textarea" rows="4" placeholder="Your message or inquiry"></textarea>
						</div>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" type="button">Submit Registration</button>
					</div>
				</div>
			</div>
		</>
	);
}
