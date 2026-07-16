import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Typography() {
	return (
		<div className="comp-panel" id="p-typography">
			<CompHeader
				title="Typography"
				lead="Heading scale, body text, lead, mono, blockquote - the full text system. Headings (.ai-h1-.ai-h4) use Work Sans at decreasing weight/size with tightened letter-spacing; body copy (.ai-lead, .ai-body, .ai-small) steps down in size and muted color for hierarchy; .ai-mono renders inline code in DM Mono with a bordered chip background; .ai-blockquote adds a colored left rule and tinted panel; .ai-link colors inline anchors and underlines on hover."
			/>
			<div className="sub-heading">Full Scale</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: '14px' }}
			>
				<div className="ai-w-100 ai-d-flex ai-flex-column ai-gap-8">
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
				</div>
			</PreviewBlock>

			<div className="sub-heading">Composed Page Header Pattern</div>
			<PreviewBlock
				label="A common composition: heading + lead + body, using only the classes above"
				canvasStyle={{ gap: '14px' }}
			>
				<div className="ai-w-100 ai-d-flex ai-flex-column ai-gap-8">
					<div className="ai-h2">Intersection Health</div>
					<p className="ai-lead">A live overview of every managed intersection across the Addison TX corridor.</p>
					<p className="ai-body">Data refreshes every 30 seconds. Devices reporting <span className="ai-mono">Comms Fail</span> for more than 5 minutes are automatically escalated to the on-call engineer.</p>
					<p className="ai-small">Last synced 2 minutes ago - see the <a className="ai-link" href="#">changelog</a> for recent updates.</p>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Size / Weight</th>
							<th>Color</th>
							<th>Use</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-h1</code></td>
							<td>36px / 800</td>
							<td><code>var(--c-text)</code></td>
							<td>Page-level title, -0.03em letter-spacing, 1.1 line-height.</td>
						</tr>
						<tr>
							<td><code>ai-h2</code></td>
							<td>28px / 700</td>
							<td><code>var(--c-text)</code></td>
							<td>Section title, -0.02em letter-spacing.</td>
						</tr>
						<tr>
							<td><code>ai-h3</code></td>
							<td>22px / 700</td>
							<td><code>var(--c-text)</code></td>
							<td>Sub-section title.</td>
						</tr>
						<tr>
							<td><code>ai-h4</code></td>
							<td>18px / 700</td>
							<td><code>var(--c-text)</code></td>
							<td>Card / block heading.</td>
						</tr>
						<tr>
							<td><code>ai-lead</code></td>
							<td>17px / 400</td>
							<td><code>var(--c-text-sub)</code></td>
							<td>Intro paragraph beneath a page title, 1.65 line-height.</td>
						</tr>
						<tr>
							<td><code>ai-body</code></td>
							<td>14.5px / 400</td>
							<td><code>var(--c-text-sub)</code></td>
							<td>Default paragraph copy, 1.7 line-height.</td>
						</tr>
						<tr>
							<td><code>ai-small</code></td>
							<td>12.5px / 400</td>
							<td><code>var(--c-text-muted)</code></td>
							<td>Captions, metadata, timestamps.</td>
						</tr>
						<tr>
							<td><code>ai-mono</code></td>
							<td>13px, DM Mono</td>
							<td><code>var(--c-btn)</code> on <code>var(--c-surface2)</code></td>
							<td>Inline code / values - bordered chip with 4px radius. For multi-line code blocks use the Code Block component instead.</td>
						</tr>
						<tr>
							<td><code>ai-blockquote</code></td>
							<td>14.5px, italic</td>
							<td><code>var(--c-text-sub)</code></td>
							<td>3px accent-colored left border, tinted background, 0 8px 8px 0 radius.</td>
						</tr>
						<tr>
							<td><code>ai-link</code></td>
							<td>inherit size / 500</td>
							<td><code>var(--c-btn)</code> → <code>var(--c-btn-hover)</code> on hover</td>
							<td>Inline anchors; underline appears only on hover.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
