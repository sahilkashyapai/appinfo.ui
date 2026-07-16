import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const VERSION_TAGS = [
	{ id: 'v3.1.2', className: 'ai-tag-primary', label: 'v3.1.2' },
	{ id: 'deprecated', className: 'ai-tag-gray', label: 'deprecated' },
	{ id: 'stable', className: 'ai-tag-green', label: 'stable' },
	{ id: 'beta', className: 'ai-tag-yellow', label: 'beta' },
	{ id: 'breaking', className: 'ai-tag-red', label: 'breaking' },
	{ id: 'iot', className: 'ai-tag-primary', label: 'IoT' },
	{ id: 'traffic', className: 'ai-tag-gray', label: 'traffic' },
];

const STATUS_TAGS = [
	{ id: 'passing', className: 'ai-tag-green', label: 'passing' },
	{ id: 'queued', className: 'ai-tag-gray', label: 'queued' },
	{ id: 'degraded', className: 'ai-tag-yellow', label: 'degraded' },
	{ id: 'failed', className: 'ai-tag-red', label: 'failed' },
	{ id: 'protected', className: 'ai-tag-primary', label: 'protected' },
];

export default function Tag() {
	return (
		<div className="comp-panel" id="p-tag">
			<CompHeader
				title="Tag"
				lead="Compact mono-font labels (.ai-tag) for categories, versions, and code references. Five color modifiers are available - primary, gray, red, green, and yellow - each pairing a tinted background with a matching border and text color. There are no size modifiers; all tags share one 12px scale."
			/>
			<div className="sub-heading">Color Variants</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				{VERSION_TAGS.map((tag) => (
					<span className={`ai-tag ${tag.className}`} key={tag.id}>{tag.label}</span>
				))}
			</PreviewBlock>

			<div className="sub-heading">Status Tags</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				{STATUS_TAGS.map((tag) => (
					<span className={`ai-tag ${tag.className}`} key={tag.id}>{tag.label}</span>
				))}
			</PreviewBlock>

			<div className="sub-heading">With Icon</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				<span className="ai-tag ai-tag-green">
					<span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '13px' }}>check_circle</span>
					{' '}
					verified
				</span>
				<span className="ai-tag ai-tag-red">
					<span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '13px' }}>error</span>
					{' '}
					vulnerable
				</span>
				<span className="ai-tag ai-tag-primary">
					<span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '13px' }}>bolt</span>
					{' '}
					fast-path
				</span>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-tag</code></td><td>Base pill: inline-flex, 5px radius, 12px bold mono text, letter-spaced.</td></tr>
						<tr><td><code>ai-tag-primary</code></td><td>Accent-tinted background/border using <code>--c-btn</code>.</td></tr>
						<tr><td><code>ai-tag-gray</code></td><td>Neutral surface2 background with a plain border.</td></tr>
						<tr><td><code>ai-tag-red</code></td><td>Danger-tinted background/border/text.</td></tr>
						<tr><td><code>ai-tag-green</code></td><td>Success-tinted background/border/text.</td></tr>
						<tr><td><code>ai-tag-yellow</code></td><td>Warning-tinted background/border/text.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
