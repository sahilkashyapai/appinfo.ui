import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Skeleton() {
	return (
		<div className="comp-panel" id="p-skeleton">
			<CompHeader
				title="Skeleton"
				lead="Animated shimmer placeholder shapes that represent loading content structure - text lines, titles, circular avatars, and button blocks - composable into realistic loading states for cards and lists."
			/>
			<div className="sub-heading">Composite Layouts</div>
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

			<div className="sub-heading">Individual Shapes</div>
			<PreviewBlock
				label="Text, Title, Circle, Button"
				canvasClassName="ai-d-flex ai-flex-wrap ai-align-center ai-gap-4"
			>
				<div className="ai-skel ai-skel-text ai-w-100" style={{ width: '140px' }} />
				<div className="ai-skel ai-skel-title" style={{ width: '160px' }} />
				<div className="ai-skel ai-skel-circle" style={{ width: '44px', height: '44px' }} />
				<div className="ai-skel ai-skel-btn" />
			</PreviewBlock>

			<div className="sub-heading">Loading Card (Realistic Composite)</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-d-grid ai-gap-4"
			>
				<div className="ai-card" style={{ width: '260px' }}>
					<div className="ai-card-img">
						<div className="ai-skel" style={{ width: '100%', height: '100%', borderRadius: 0 }} />
					</div>
					<div className="ai-card-body">
						<div className="ai-skel ai-skel-title ai-w-75" />
						<div className="ai-skel ai-skel-text ai-w-100" />
						<div className="ai-skel ai-skel-text ai-w-50" />
					</div>
					<div className="ai-card-footer">
						<div className="ai-skel ai-skel-btn" />
					</div>
				</div>
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
						<tr><td><code>ai-skel</code></td><td>Base class - required on every skeleton shape. Applies the shimmer gradient animation.</td></tr>
						<tr><td><code>ai-skel-text</code></td><td>A single 14px text line, useful for paragraph placeholders.</td></tr>
						<tr><td><code>ai-skel-title</code></td><td>A 22px heading-sized line, 60% width by default.</td></tr>
						<tr><td><code>ai-skel-circle</code></td><td>Forces <code>border-radius: 50%</code> - combine with inline <code>width</code>/<code>height</code> for avatars.</td></tr>
						<tr><td><code>ai-skel-btn</code></td><td>A 36×110px button-shaped placeholder block.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
