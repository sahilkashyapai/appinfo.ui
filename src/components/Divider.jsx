import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Divider() {
	return (
		<div className="comp-panel" id="p-divider">
			<CompHeader
				title="Divider"
				lead="Horizontal rules for separating content — a default hairline, a thick brand-accent variant, and a centered text-label variant for 'or' style breaks between sections."
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

			<div className="sub-heading">In Context</div>
			<PreviewBlock
				label="Card Sections & Auth Form Break"
				canvasClassName="ai-d-grid ai-gap-4"
			>
				<div className="ai-card" style={{ width: '260px' }}>
					<div className="ai-card-body">
						<div className="ai-card-title">Account</div>
						<p className="ai-card-text">Basic profile details</p>
						<hr className="ai-divider ai-my-3" />
						<p className="ai-card-text">Security settings</p>
					</div>
				</div>
				<div className="ai-d-flex ai-flex-column ai-gap-2" style={{ width: '220px' }}>
					<button className="ai-btn ai-btn-outline" type="button">Sign in with Email</button>
					<div className="ai-divider-text ai-my-2">OR CONTINUE WITH</div>
					<button className="ai-btn ai-btn-ghost" type="button">Sign in with SSO</button>
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
						<tr><td><code>ai-divider</code></td><td>Base horizontal rule — 1px solid border, no default margin, full width. Apply to an <code>&lt;hr&gt;</code>.</td></tr>
						<tr><td><code>ai-divider-thick</code></td><td>Modifier — thickens the line to 2px and colors it with the brand accent.</td></tr>
						<tr><td><code>ai-divider-text</code></td><td>Standalone flex element (not an <code>&lt;hr&gt;</code>) that renders its text content centered between two rule segments — e.g. "OR".</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
