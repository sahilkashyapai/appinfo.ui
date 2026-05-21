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
				canvasStyle={{ display: 'flex', flexDirection: 'column' }}
			>
				<p style={{ fontSize: '13.5px', color: 'var(--c-text-sub)' }}>Content above the divider</p>
				<hr className="ai-divider" />
				<p style={{ fontSize: '13.5px', color: 'var(--c-text-sub)' }}>Default divider above</p>
				<hr className="ai-divider ai-divider-thick" style={{ margin: '8px 0' }} />
				<p style={{ fontSize: '13.5px', color: 'var(--c-text-sub)' }}>Thick accent divider above</p>
				<div className="ai-divider-text" style={{ margin: '12px 0' }}>OR</div>
				<p style={{ fontSize: '13.5px', color: 'var(--c-text-sub)' }}>Text divider above</p>
			</PreviewBlock>
		</div>
	);
}
