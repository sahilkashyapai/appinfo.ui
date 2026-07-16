import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const DEMO_PHOTO =
	'data:image/svg+xml;utf8,' +
	encodeURIComponent(
		'<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">' +
			'<rect width="120" height="120" fill="#2878a3"/>' +
			'<circle cx="60" cy="46" r="26" fill="#ffe8cf"/>' +
			'<ellipse cx="60" cy="118" rx="42" ry="34" fill="#ffe8cf"/>' +
			'</svg>'
	);

export default function Avatar() {
	return (
		<div className="comp-panel" id="p-avatar">
			<CompHeader
				title="Avatar"
				lead="User and entity representation - sizes, initials, images, and stacked groups. Base .ai-avatar renders as an inline-flex circle with a gradient fill and bold initials; pair it with a size modifier, or swap in an .ai-avatar-img for a real photo. Multiple avatars can be overlapped with .ai-avatar-stack to summarize a group of people or devices."
			/>

			<div className="sub-heading">Sizes</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ alignItems: 'center' }}
			>
				<span className="ai-avatar ai-avatar-sm">SM</span>
				<span className="ai-avatar ai-avatar-md">MD</span>
				<span className="ai-avatar ai-avatar-lg">LG</span>
				<span className="ai-avatar ai-avatar-xl">XL</span>
			</PreviewBlock>

			<div className="sub-heading">Colors</div>
			<PreviewBlock
				label="Custom background via inline style"
				canvasStyle={{ alignItems: 'center' }}
			>
				<span className="ai-avatar ai-avatar-md">JD</span>
				<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-success),var(--c-success-light))' }}>KR</span>
				<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-danger),var(--c-danger-dark))' }}>ML</span>
				<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-warning),var(--c-warning-dark))' }}>PT</span>
				<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-info),var(--c-info-dark))' }}>QS</span>
				<span className="ai-avatar ai-avatar-md" style={{ background: '#e2e8f0', color: '#64748b' }}>+5</span>
			</PreviewBlock>

			<div className="sub-heading">Image Avatar</div>
			<PreviewBlock
				label="ai-avatar-img - real photo fallback with a bordered circle crop"
				canvasStyle={{ alignItems: 'center' }}
			>
				<img className="ai-avatar-img" src={DEMO_PHOTO} alt="Jordan Diaz" style={{ width: '32px', height: '32px' }} />
				<img className="ai-avatar-img" src={DEMO_PHOTO} alt="Jordan Diaz" style={{ width: '42px', height: '42px' }} />
				<img className="ai-avatar-img" src={DEMO_PHOTO} alt="Jordan Diaz" style={{ width: '56px', height: '56px' }} />
				<img className="ai-avatar-img" src={DEMO_PHOTO} alt="Jordan Diaz" style={{ width: '72px', height: '72px' }} />
			</PreviewBlock>

			<div className="sub-heading">Stacked Group</div>
			<PreviewBlock
				label="Preview"
			>
				<div className="ai-avatar-stack">
					<span className="ai-avatar ai-avatar-md" style={{ background: 'var(--hero-grad)' }}>JD</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-success),var(--c-success-light))' }}>KR</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-accent),var(--c-accent2))' }}>ML</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: '#e2e8f0', color: '#64748b', fontSize: '13px' }}>+5</span>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Stacked Group - Image Avatars</div>
			<PreviewBlock
				label="ai-avatar-stack also overlaps .ai-avatar-img elements with a surface-colored border"
			>
				<div className="ai-avatar-stack">
					<img className="ai-avatar-img" src={DEMO_PHOTO} alt="" style={{ width: '42px', height: '42px' }} />
					<img className="ai-avatar-img" src={DEMO_PHOTO} alt="" style={{ width: '42px', height: '42px' }} />
					<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,var(--c-accent),var(--c-accent2))' }}>ML</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: '#e2e8f0', color: '#64748b', fontSize: '13px' }}>+12</span>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Effect</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>ai-avatar</code></td>
							<td>Base circle badge</td>
							<td>Inline-flex, centered content, bold text, white text color, gradient background by default (<code>var(--hero-grad)</code>).</td>
						</tr>
						<tr>
							<td><code>ai-avatar-sm</code></td>
							<td>32 x 32px, 13px font</td>
							<td>Compact - table rows, chips.</td>
						</tr>
						<tr>
							<td><code>ai-avatar-md</code></td>
							<td>42 x 42px, 16px font</td>
							<td>Default conversational / list size.</td>
						</tr>
						<tr>
							<td><code>ai-avatar-lg</code></td>
							<td>56 x 56px, 20px font</td>
							<td>Profile summaries, cards.</td>
						</tr>
						<tr>
							<td><code>ai-avatar-xl</code></td>
							<td>72 x 72px, 26px font</td>
							<td>Profile headers.</td>
						</tr>
						<tr>
							<td><code>ai-avatar-img</code></td>
							<td>Image variant</td>
							<td>Applies to an <code>&lt;img&gt;</code>: circular crop (<code>object-fit: cover</code>) with a 2px border matching <code>var(--c-border)</code>. Size is set via width/height (no dedicated size modifiers).</td>
						</tr>
						<tr>
							<td><code>ai-avatar-stack</code></td>
							<td>Group container</td>
							<td>Overlaps children by <code>-10px</code> margin with a 2px <code>var(--c-surface)</code> border so overlapping edges read cleanly; first child keeps its full width.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
