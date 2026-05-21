import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Typography() {
	return (
		<div className="comp-panel" id="p-typography">
			<CompHeader
				title="Typography"
				lead="Heading scale, body text, lead, mono, blockquote - the full text system."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: '14px' }}
			>
				<div className="ai-h1">Heading 1 - Dashboard</div>
				<div className="ai-h2">Heading 2 - Device List</div>
				<div className="ai-h3">Heading 3 - Zone Summary</div>
				<div className="ai-h4">Heading 4 - Configuration</div>
				<p className="ai-lead">Lead paragraph - A larger intro text style used below page titles for summaries and subheadings.</p>
				<p className="ai-body">Body text - Regular content size used throughout interface paragraphs. Optimized for readability at 14.5px with 1.7 line height.</p>
				<p className="ai-small">Small / caption text - Used for metadata, timestamps, and secondary information.</p>
				<div><span className="ai-mono">GET /api/v1/devices</span></div>
				<blockquote className="ai-blockquote">"Reliable, consistent UI is the foundation of every good monitoring tool."</blockquote>
				<p>Inline <a className="ai-link" href="#">link style</a> for body text.</p>
			</PreviewBlock>
		</div>
	);
}
