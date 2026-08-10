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

	const warningModalCode = `<button class="ai-btn ai-btn-primary" data-modal-open="m8" type="button" aria-controls="m8" aria-expanded="false">Warning Modal</button>

<div class="ai-modal-backdrop" id="m8" aria-hidden="true">
	<div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-warning">
		<div class="ai-modal-header ai-bg-warning-light">
			<span class="ai-modal-title" id="modal-title-warning">
				<span class="material-symbols-outlined" aria-hidden="true">warning</span> Low Signal Strength
			</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>Device <strong>SNSR-042</strong> is reporting intermittent signal loss. Consider relocating the antenna or checking for interference.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Dismiss</button>
			<button class="ai-btn ai-btn-primary ai-btn-sm" type="button">Run Diagnostics</button>
		</div>
	</div>
</div>`;

	const infoModalCode = `<button class="ai-btn ai-btn-primary" data-modal-open="m9" type="button" aria-controls="m9" aria-expanded="false">Info Modal</button>

<div class="ai-modal-backdrop" id="m9" aria-hidden="true">
	<div class="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-info">
		<div class="ai-modal-header ai-bg-info-light">
			<span class="ai-modal-title" id="modal-title-info">
				<span class="material-symbols-outlined" aria-hidden="true">info</span> What's New
			</span>
			<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		</div>
		<div class="ai-modal-body">
			<p>Firmware v3.2.0 adds adaptive polling intervals and improved battery reporting for all sensor units.</p>
		</div>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-primary ai-btn-sm" data-modal-close type="button">Got It</button>
		</div>
	</div>
</div>`;

	const swalSuccessCode = `<button class="ai-btn ai-btn-success" data-modal-open="swal-success" type="button" aria-controls="swal-success" aria-expanded="false">Success Popup</button>

<!-- SweetAlert-style Popup: Success -->
<div class="ai-modal-backdrop" id="swal-success" aria-hidden="true">
	<div class="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-success">
		<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		<div class="ai-swal-icon ai-swal-icon--success" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" />
				<path class="ai-swal-check" d="M7 12.5l3.2 3.2L17 9" />
			</svg>
		</div>
		<h3 class="ai-swal-title" id="swal-title-success">Saved!</h3>
		<p class="ai-swal-text">Your changes have been saved successfully.</p>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-success ai-btn-sm" data-modal-close type="button">OK</button>
		</div>
	</div>
</div>`;

	const swalErrorCode = `<button class="ai-btn ai-btn-danger" data-modal-open="swal-error" type="button" aria-controls="swal-error" aria-expanded="false">Error Popup</button>

<!-- SweetAlert-style Popup: Error -->
<div class="ai-modal-backdrop" id="swal-error" aria-hidden="true">
	<div class="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-error">
		<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		<div class="ai-swal-icon ai-swal-icon--error" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" />
				<line class="ai-swal-x1" x1="8" y1="8" x2="16" y2="16" />
				<line class="ai-swal-x2" x1="16" y1="8" x2="8" y2="16" />
			</svg>
		</div>
		<h3 class="ai-swal-title" id="swal-title-error">Something went wrong</h3>
		<p class="ai-swal-text">We couldn't process your request. Please try again.</p>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-danger ai-btn-sm" data-modal-close type="button">Try Again</button>
		</div>
	</div>
</div>`;

	const swalWarningCode = `<button class="ai-btn ai-btn-primary" data-modal-open="swal-warning" type="button" aria-controls="swal-warning" aria-expanded="false">Warning Popup</button>

<!-- SweetAlert-style Popup: Warning -->
<div class="ai-modal-backdrop" id="swal-warning" aria-hidden="true">
	<div class="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-warning">
		<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		<div class="ai-swal-icon ai-swal-icon--warning" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" />
				<line class="ai-swal-bang" x1="12" y1="7" x2="12" y2="13" />
				<circle class="ai-swal-dot" cx="12" cy="17" r="1" />
			</svg>
		</div>
		<h3 class="ai-swal-title" id="swal-title-warning">Are you sure?</h3>
		<p class="ai-swal-text">This action can't be undone once confirmed.</p>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Cancel</button>
			<button class="ai-btn ai-btn-primary ai-btn-sm" type="button">Yes, Continue</button>
		</div>
	</div>
</div>`;

	const swalInfoCode = `<button class="ai-btn ai-btn-primary" data-modal-open="swal-info" type="button" aria-controls="swal-info" aria-expanded="false">Info Popup</button>

<!-- SweetAlert-style Popup: Info -->
<div class="ai-modal-backdrop" id="swal-info" aria-hidden="true">
	<div class="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-info">
		<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		<div class="ai-swal-icon ai-swal-icon--info" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" />
				<line class="ai-swal-i-line" x1="12" y1="11" x2="12" y2="16" />
				<circle class="ai-swal-dot" cx="12" cy="7.5" r="1" />
			</svg>
		</div>
		<h3 class="ai-swal-title" id="swal-title-info">Heads up</h3>
		<p class="ai-swal-text">Firmware v3.2.0 is available for this device.</p>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-primary ai-btn-sm" data-modal-close type="button">Got It</button>
		</div>
	</div>
</div>`;

	const swalQuestionCode = `<button class="ai-btn ai-btn-danger" data-modal-open="swal-question" type="button" aria-controls="swal-question" aria-expanded="false">Confirm Popup</button>

<!-- SweetAlert-style Popup: Question -->
<div class="ai-modal-backdrop" id="swal-question" aria-hidden="true">
	<div class="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-question">
		<button class="ai-modal-close" data-modal-close type="button" aria-label="Close dialog"><span class="material-symbols-outlined" aria-hidden="true">close</span></button>
		<div class="ai-swal-icon ai-swal-icon--question" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" />
				<path class="ai-swal-q" d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7" />
				<circle class="ai-swal-dot" cx="12" cy="17" r="1" />
			</svg>
		</div>
		<h3 class="ai-swal-title" id="swal-title-question">Delete this device?</h3>
		<p class="ai-swal-text">Device <strong>SNSR-042</strong> and its history will be permanently removed.</p>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Cancel</button>
			<button class="ai-btn ai-btn-danger ai-btn-sm" type="button">Delete</button>
		</div>
	</div>
</div>`;

	const swalLogoutCode = `<button class="ai-btn ai-btn-primary" data-modal-open="swal-logout" type="button" aria-controls="swal-logout" aria-expanded="false">Logout</button>

<!-- SweetAlert-style Popup: Logout confirmation -->
<div class="ai-modal-backdrop" id="swal-logout" aria-hidden="true">
	<div class="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-logout">
		<div class="ai-swal-icon ai-swal-icon--question" aria-hidden="true">
			<svg viewBox="0 0 24 24">
				<circle cx="12" cy="12" r="10" />
				<path class="ai-swal-q" d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7" />
				<circle class="ai-swal-dot" cx="12" cy="17" r="1" />
			</svg>
		</div>
		<p class="ai-swal-text" id="swal-title-logout">Are you sure you want to logout?</p>
		<div class="ai-modal-footer">
			<button class="ai-btn ai-btn-primary ai-btn-sm" type="button">Logout</button>
			<button class="ai-btn ai-btn-ghost ai-btn-sm" data-modal-close type="button">Back</button>
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
					lead="Focused overlay dialogs for confirmations, forms, and detail views. Modals are centered by a fixed, blurred backdrop and animate in with a scale + fade transition. Three widths are available (sm / default / lg), and the header can be tinted with a semantic .ai-bg-{state}-light class to signal danger, success, warning, or info at a glance. Dismiss by clicking the close icon, clicking the backdrop, or pressing Escape."
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

				<PreviewBlock
					label="Warning Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={warningModalCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m8')} type="button">Warning Modal</button>
				</PreviewBlock>

				<PreviewBlock
					label="Info Modal"
					canvasClassName="ai-d-flex ai-gap-3"
					code={infoModalCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('m9')} type="button">Info Modal</button>
				</PreviewBlock>

				<CompHeader
					title="Animated Popup (SweetAlert-style)"
					lead="A centered, icon-led popup variant for quick confirmations and status feedback — the .ai-modal-popup class swaps the header/footer layout for a bouncy scale-in and an animated icon that draws itself in (checkmark, X, exclamation, or question mark) once the popup lands. Built on the same .ai-modal-backdrop plumbing, so data-modal-open, backdrop click, and Escape all work unchanged."
				/>
				<PreviewBlock
					label="Success Popup"
					canvasClassName="ai-d-flex ai-gap-3"
					code={swalSuccessCode}
				>
					<button className="ai-btn ai-btn-success" onClick={() => openModal('swal-success')} type="button">Success Popup</button>
				</PreviewBlock>

				<PreviewBlock
					label="Error Popup"
					canvasClassName="ai-d-flex ai-gap-3"
					code={swalErrorCode}
				>
					<button className="ai-btn ai-btn-danger" onClick={() => openModal('swal-error')} type="button">Error Popup</button>
				</PreviewBlock>

				<PreviewBlock
					label="Warning Popup"
					canvasClassName="ai-d-flex ai-gap-3"
					code={swalWarningCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('swal-warning')} type="button">Warning Popup</button>
				</PreviewBlock>

				<PreviewBlock
					label="Info Popup"
					canvasClassName="ai-d-flex ai-gap-3"
					code={swalInfoCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('swal-info')} type="button">Info Popup</button>
				</PreviewBlock>

				<PreviewBlock
					label="Confirm Popup"
					canvasClassName="ai-d-flex ai-gap-3"
					code={swalQuestionCode}
				>
					<button className="ai-btn ai-btn-danger" onClick={() => openModal('swal-question')} type="button">Confirm Popup</button>
				</PreviewBlock>

				<PreviewBlock
					label="Logout Confirmation Popup"
					canvasClassName="ai-d-flex ai-gap-3"
					code={swalLogoutCode}
				>
					<button className="ai-btn ai-btn-primary" onClick={() => openModal('swal-logout')} type="button">Logout</button>
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
							<tr><td><code>ai-modal-backdrop</code></td><td>Fixed, full-viewport, blurred overlay. Add a <code>data-modal-open</code> attribute (matching this element&apos;s id) to any trigger button. Toggling the <code>.open</code> class shows it and animates the dialog in.</td></tr>
							<tr><td><code>ai-modal</code></td><td>The dialog card itself — surface background, rounded corners, shadow. Default width is <code>min(480px, 90vw)</code>.</td></tr>
							<tr><td><code>ai-modal-sm</code></td><td>Narrow width variant, <code>min(320px, 90vw)</code> — quick confirmations.</td></tr>
							<tr><td><code>ai-modal-lg</code></td><td>Wide width variant, <code>min(800px, 95vw)</code> — forms, tables, detail views.</td></tr>
							<tr><td><code>ai-modal-header</code></td><td>Title row with bottom border. Optionally tinted with a state class below.</td></tr>
							<tr><td><code>ai-bg-danger-light</code> / <code>ai-bg-success-light</code> / <code>ai-bg-warning-light</code> / <code>ai-bg-info-light</code></td><td>Header-only tint + matching title color, for alert/confirmation/success/info modals.</td></tr>
							<tr><td><code>ai-modal-body</code></td><td>Scrollable content area — paragraphs, forms, tables.</td></tr>
							<tr><td><code>ai-modal-footer</code></td><td>Right-aligned action row for Cancel/Confirm buttons.</td></tr>
							<tr><td><code>ai-modal-close</code></td><td>Icon-only dismiss button, usually paired with <code>data-modal-close</code>.</td></tr>
							<tr><td><code>data-modal-open</code> / <code>data-modal-close</code></td><td>Behavior hooks the framework-free JS listens for to open/close the backdrop matching the given id.</td></tr>
							<tr><td><code>ai-modal-popup</code></td><td>SweetAlert-style variant: centered text, no header/footer border, and a bouncier scale-in entrance animation.</td></tr>
							<tr><td><code>ai-swal-icon</code> + <code>--success</code> / <code>--error</code> / <code>--warning</code> / <code>--info</code> / <code>--question</code></td><td>Circular animated icon stage for the popup — scales in, then draws its checkmark/X/exclamation/question mark with an SVG stroke animation.</td></tr>
							<tr><td><code>ai-swal-title</code> / <code>ai-swal-text</code></td><td>Centered heading and supporting copy for the popup body.</td></tr>
						</tbody>
					</table>
				</div>
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

			{/* Warning Modal */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm8' ? 'open' : ''}`}
				id="m8"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-warning">
					<div className="ai-modal-header ai-bg-warning-light">
						<span className="ai-modal-title" id="modal-title-warning">
							<span className="material-symbols-outlined" aria-hidden="true">warning</span> Low Signal Strength
						</span>
						<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<p>Device <strong>SNSR-042</strong> is reporting intermittent signal loss. Consider relocating the antenna or checking for interference.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Dismiss</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" type="button">Run Diagnostics</button>
					</div>
				</div>
			</div>

			{/* Info Modal */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'm9' ? 'open' : ''}`}
				id="m9"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title-info">
					<div className="ai-modal-header ai-bg-info-light">
						<span className="ai-modal-title" id="modal-title-info">
							<span className="material-symbols-outlined" aria-hidden="true">info</span> What's New
						</span>
						<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					</div>
					<div className="ai-modal-body">
						<p>Firmware v3.2.0 adds adaptive polling intervals and improved battery reporting for all sensor units.</p>
					</div>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-primary ai-btn-sm" onClick={closeModal} type="button">Got It</button>
					</div>
				</div>
			</div>

			{/* SweetAlert-style Popup - Success */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'swal-success' ? 'open' : ''}`}
				id="swal-success"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-success">
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					<div className="ai-swal-icon ai-swal-icon--success" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10" />
							<path className="ai-swal-check" d="M7 12.5l3.2 3.2L17 9" />
						</svg>
					</div>
					<h3 className="ai-swal-title" id="swal-title-success">Saved!</h3>
					<p className="ai-swal-text">Your changes have been saved successfully.</p>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-success ai-btn-sm" onClick={closeModal} type="button">OK</button>
					</div>
				</div>
			</div>

			{/* SweetAlert-style Popup - Error */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'swal-error' ? 'open' : ''}`}
				id="swal-error"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-error">
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					<div className="ai-swal-icon ai-swal-icon--error" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10" />
							<line className="ai-swal-x1" x1="8" y1="8" x2="16" y2="16" />
							<line className="ai-swal-x2" x1="16" y1="8" x2="8" y2="16" />
						</svg>
					</div>
					<h3 className="ai-swal-title" id="swal-title-error">Something went wrong</h3>
					<p className="ai-swal-text">We couldn&apos;t process your request. Please try again.</p>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-danger ai-btn-sm" onClick={closeModal} type="button">Try Again</button>
					</div>
				</div>
			</div>

			{/* SweetAlert-style Popup - Warning */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'swal-warning' ? 'open' : ''}`}
				id="swal-warning"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-warning">
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					<div className="ai-swal-icon ai-swal-icon--warning" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10" />
							<line className="ai-swal-bang" x1="12" y1="7" x2="12" y2="13" />
							<circle className="ai-swal-dot" cx="12" cy="17" r="1" />
						</svg>
					</div>
					<h3 className="ai-swal-title" id="swal-title-warning">Are you sure?</h3>
					<p className="ai-swal-text">This action can&apos;t be undone once confirmed.</p>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-primary ai-btn-sm" onClick={closeModal} type="button">Yes, Continue</button>
					</div>
				</div>
			</div>

			{/* SweetAlert-style Popup - Info */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'swal-info' ? 'open' : ''}`}
				id="swal-info"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-info">
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					<div className="ai-swal-icon ai-swal-icon--info" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10" />
							<line className="ai-swal-i-line" x1="12" y1="11" x2="12" y2="16" />
							<circle className="ai-swal-dot" cx="12" cy="7.5" r="1" />
						</svg>
					</div>
					<h3 className="ai-swal-title" id="swal-title-info">Heads up</h3>
					<p className="ai-swal-text">Firmware v3.2.0 is available for this device.</p>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-primary ai-btn-sm" onClick={closeModal} type="button">Got It</button>
					</div>
				</div>
			</div>

			{/* SweetAlert-style Popup - Question */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'swal-question' ? 'open' : ''}`}
				id="swal-question"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-question">
					<button className="ai-modal-close" onClick={closeModal} type="button" aria-label="Close dialog"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
					<div className="ai-swal-icon ai-swal-icon--question" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10" />
							<path className="ai-swal-q" d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7" />
							<circle className="ai-swal-dot" cx="12" cy="17" r="1" />
						</svg>
					</div>
					<h3 className="ai-swal-title" id="swal-title-question">Delete this device?</h3>
					<p className="ai-swal-text">Device <strong>SNSR-042</strong> and its history will be permanently removed.</p>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Cancel</button>
						<button className="ai-btn ai-btn-danger ai-btn-sm" onClick={closeModal} type="button">Delete</button>
					</div>
				</div>
			</div>

			{/* SweetAlert-style Popup - Logout confirmation */}
			<div
				className={`ai-modal-backdrop ${activeModal === 'swal-logout' ? 'open' : ''}`}
				id="swal-logout"
				onClick={(event) => {
					if (event.target === event.currentTarget) {
						closeModal();
					}
				}}
			>
				<div className="ai-modal ai-modal-popup" role="dialog" aria-modal="true" aria-labelledby="swal-title-logout">
					<div className="ai-swal-icon ai-swal-icon--question" aria-hidden="true">
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="10" />
							<path className="ai-swal-q" d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7" />
							<circle className="ai-swal-dot" cx="12" cy="17" r="1" />
						</svg>
					</div>
					<p className="ai-swal-text" id="swal-title-logout">Are you sure you want to logout?</p>
					<div className="ai-modal-footer">
						<button className="ai-btn ai-btn-primary ai-btn-sm" onClick={closeModal} type="button">Logout</button>
						<button className="ai-btn ai-btn-ghost ai-btn-sm" onClick={closeModal} type="button">Back</button>
					</div>
				</div>
			</div>
		</>
	);
}
