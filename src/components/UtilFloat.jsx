import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function UtilFloat() {
	return (
		<div className="comp-panel" id="p-float">
			<CompHeader
				title="Float"
				lead="Float an element left or right of surrounding content with .ai-float-{start,end,none}, and clear floats with .ai-clear-*. Clearing matters whenever a floated box is taller than the content next to it — without a clearing element after it, a container's height collapses to the height of its non-floated content and the float visually spills out past the container's border."
				badge="UTILITIES"
			/>

			<PreviewBlock label="ai-float-start / ai-float-end">
				<div style={{ width: '100%', overflow: 'auto' }}>
					<div className="ai-float-start ai-bg-primary ai-text-white ai-rounded-2 ai-p-3" style={{ marginRight: '8px' }}>
						ai-float-start
					</div>
					<div className="ai-float-end ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3">
						ai-float-end
					</div>
					<p className="ai-fs-7 ai-text-muted">
						Surrounding text wraps around the floated boxes above it, the same way image captions do in a document.
					</p>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Clearfix</div>
			<PreviewBlock label="Without vs with a ai-clear-both element after the float">
				<div className="ai-d-flex ai-gap-3" style={{ width: '100%' }}>
					<div style={{ flex: 1 }}>
						<p className="ai-fs-8 ai-text-muted">No clearfix</p>
						<div className="ai-border ai-border-dashed ai-border-2 ai-rounded-2 ai-p-2">
							<div
								className="ai-float-start ai-bg-primary ai-text-white ai-rounded-2 ai-p-2 ai-text-center"
								style={{ width: '60px', height: '60px' }}
							>
								float
							</div>
							<p className="ai-fs-7">short text</p>
						</div>
						<p className="ai-fs-8 ai-text-muted">Dashed border collapses to the text's height, cutting through the float.</p>
					</div>
					<div style={{ flex: 1 }}>
						<p className="ai-fs-8 ai-text-muted">With ai-clear-both</p>
						<div className="ai-border ai-border-dashed ai-border-2 ai-rounded-2 ai-p-2">
							<div
								className="ai-float-start ai-bg-primary ai-text-white ai-rounded-2 ai-p-2 ai-text-center"
								style={{ width: '60px', height: '60px' }}
							>
								float
							</div>
							<p className="ai-fs-7">short text</p>
							<div className="ai-clear-both" />
						</div>
						<p className="ai-fs-8 ai-text-muted">The clearing element pushes the dashed border below the float.</p>
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Effect</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-float-start</code></td><td>float: left</td></tr>
						<tr><td><code>ai-float-end</code></td><td>float: right</td></tr>
						<tr><td><code>ai-float-none</code></td><td>float: none</td></tr>
						<tr><td><code>ai-clear-start / -end / -both / -none</code></td><td>clear: left / right / both / none</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
