import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Divider() {
	return (
		<div className="comp-panel" id="p-divider">
			<CompHeader
				title="Divider"
				lead="Horizontal rules for separating content - default, thick, and text-label variants."
			/>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-flex ai-flex-column"
			>
				<p className="ai-fs-7 ai-text-muted">Content above the divider</p>
				<hr className="ai-divider" />
				<p className="ai-fs-7 ai-text-muted">Default divider above</p>
				<hr className="ai-divider ai-divider-thick ai-my-2" />
				<p className="ai-fs-7 ai-text-muted">Thick accent divider above</p>
				<div className="ai-divider-text ai-my-3">OR</div>
				<p className="ai-fs-7 ai-text-muted">Text divider above</p>
			</PreviewBlock>
		</div>
	);
}
