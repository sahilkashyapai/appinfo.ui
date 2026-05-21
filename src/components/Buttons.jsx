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
				<button className="ai-btn ai-btn-outline" type="button">
					{' '}
					Outline
				</button>
				<button className="ai-btn ai-btn-ghost" type="button">
					{' '}
					Ghost
				</button>
				<button className="ai-btn ai-btn-danger" type="button">
					{' '}
					Danger
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
		</div>
	);
}
