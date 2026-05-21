import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Skeleton() {
	return (
		<div className="comp-panel" id="p-skeleton">
			<CompHeader
				title="Skeleton"
				lead="Animated placeholder shapes that represent loading content structure."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
					<div className="ai-skel ai-skel-title" style={{ width: '55%' }} />
					<div className="ai-skel ai-skel-text" style={{ width: '100%' }} />
					<div className="ai-skel ai-skel-text" style={{ width: '80%' }} />
					<div className="ai-skel ai-skel-text" style={{ width: '65%' }} />
					<div className="ai-skel ai-skel-btn" style={{ marginTop: '6px' }} />
				</div>
				<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
					<div className="ai-skel ai-skel-circle" style={{ width: '52px', height: '52px', flexShrink: 0 }} />
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<div className="ai-skel ai-skel-text" style={{ width: '70%', height: '16px' }} />
						<div className="ai-skel ai-skel-text" style={{ width: '50%' }} />
						<div className="ai-skel ai-skel-text" style={{ width: '85%' }} />
					</div>
				</div>
			</PreviewBlock>
		</div>
	);
}
