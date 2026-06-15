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
				canvasClassName="ai-row ai-row-cols-2 ai-g-4"
			>
				<div className="ai-d-flex ai-flex-column ai-gap-3">
					<div className="ai-skel ai-skel-title ai-w-50" />
					<div className="ai-skel ai-skel-text ai-w-100" />
					<div className="ai-skel ai-skel-text ai-w-75" />
					<div className="ai-skel ai-skel-text ai-w-50" />
					<div className="ai-skel ai-skel-btn ai-mt-2" />
				</div>
				<div className="ai-d-flex ai-gap-3 ai-align-center">
					<div className="ai-skel ai-skel-circle" style={{ width: '52px', height: '52px', flexShrink: 0 }} />
					<div className="ai-flex-1 ai-d-flex ai-flex-column ai-gap-2">
						<div className="ai-skel ai-skel-text ai-w-75" />
						<div className="ai-skel ai-skel-text ai-w-50" />
						<div className="ai-skel ai-skel-text ai-w-100" />
					</div>
				</div>
			</PreviewBlock>
		</div>
	);
}
