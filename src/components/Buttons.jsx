import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Buttons() {
	return (
		<div className="comp-panel" id="p-button">
			<CompHeader
				title="Button"
				lead="The core action element. Multiple variants, sizes, states, and group compositions."
			/>

			<div className="sub-heading">Variants</div>
			<PreviewBlock
				label="Preview"
			>
				<button className="ai-btn ai-btn-primary" type="button">
					{' '}
					Primary
				</button>
				<button className="ai-btn ai-btn-primary-light" type="button">
					{' '}
					Light
				</button>
				<button className="ai-btn ai-btn-outline" type="button">
					{' '}
					Outline
				</button>
				<button className="ai-btn ai-btn-secondary" type="button">
					{' '}
					Secondary
				</button>
				<button className="ai-btn ai-btn-dark" type="button">
					{' '}
					Dark
				</button>
				<button className="ai-btn ai-btn-ghost" type="button">
					{' '}
					Ghost
				</button>
				<button className="ai-btn ai-btn-warning" type="button">
					{' '}
					Warning
				</button>
				<button className="ai-btn ai-btn-danger" type="button">
					{' '}
					Danger
				</button>
				<button className="ai-btn ai-btn-success" type="button">
					{' '}
					Success
				</button>
				<button className="ai-btn ai-btn-link" type="button">
					{' '}
					Link
				</button>
				<button className="ai-btn ai-btn-primary" disabled type="button">
					{' '}
					Disabled
				</button>
			</PreviewBlock>

			<div className="sub-heading">Buttons With Icons</div>
			<PreviewBlock
				label="Preview"
			>
				<button className="ai-btn ai-btn-primary ai-ps-3 ai-gap-1" type="button">
					{' '}
					<span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>Back
				</button>
				<button className="ai-btn ai-btn-primary-light" type="button">
					{' '}
					New Window <span className="material-symbols-outlined">launch</span>
				</button>
			
				<button className="ai-btn ai-btn-secondary" type="button">
					{' '}
					Close <span className="material-symbols-outlined">close</span>
				</button>
				<button className="ai-btn ai-btn-dark ai-pe-3 ai-gap-1" type="button">
					{' '}
					Next <span className="material-symbols-outlined">chevron_right</span>
				</button>
				
				<button className="ai-btn ai-btn-warning" type="button">
					{' '}
					Copy <span className="material-symbols-outlined">content_copy</span>
				</button>
				<button className="ai-btn ai-btn-danger" type="button">
					{' '}
					Delete <span className="material-symbols-outlined">delete</span>
				</button>
				
			</PreviewBlock>

			<div className="sub-heading">Sizes</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ alignItems: 'center' }}
			>
				<button className="ai-btn ai-btn-primary ai-btn-sm" type="button">
					{' '}
					Small
				</button>
				<button className="ai-btn ai-btn-primary" type="button">
					{' '}
					Default
				</button>
				<button className="ai-btn ai-btn-primary ai-btn-lg" type="button">
					{' '}
					Large
				</button>
			</PreviewBlock>

			<div className="sub-heading">Button Groups</div>
			<PreviewBlock
				label="Preview"
			>
				<div className="ai-btn-group">
					<button className="ai-btn ai-btn-primary" type="button"><span className="material-symbols-outlined" aria-hidden="true">chevron_left</span> Left</button>
					<button className="ai-btn ai-btn-primary" type="button">Middle</button>
					<button className="ai-btn ai-btn-primary" type="button">Right <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span></button>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Icon-Only Buttons</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ alignItems: 'center' }}
			>
				<button className="ai-btn ai-btn-primary ai-icon-btn" type="button" aria-label="Search">
					<span className="material-symbols-outlined" aria-hidden="true">search</span>
				</button>
				<button className="ai-btn ai-btn-ghost ai-icon-btn" type="button" aria-label="Notifications">
					<span className="material-symbols-outlined" aria-hidden="true">notifications</span>
				</button>
				<button className="ai-btn ai-btn-outline ai-icon-btn" type="button" aria-label="Settings">
					<span className="material-symbols-outlined" aria-hidden="true">settings</span>
				</button>
				<button className="ai-btn ai-btn-ghost ai-btn-sm ai-icon-btn" type="button" aria-label="Edit">
					<span className="material-symbols-outlined" aria-hidden="true">edit</span>
				</button>
				<button className="ai-btn ai-btn-danger ai-icon-btn" type="button" aria-label="Delete" disabled>
					<span className="material-symbols-outlined" aria-hidden="true">delete</span>
				</button>
			</PreviewBlock>
		</div>
	);
}
