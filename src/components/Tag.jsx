import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const TAG_ITEMS = [
	{ id: 'v3.1.2', className: 'ai-tag-primary', label: 'v3.1.2' },
	{ id: 'deprecated', className: 'ai-tag-gray', label: 'deprecated' },
	{ id: 'stable', className: 'ai-tag-green', label: 'stable' },
	{ id: 'beta', className: 'ai-tag-yellow', label: 'beta' },
	{ id: 'breaking', className: 'ai-tag-red', label: 'breaking' },
	{ id: 'iot', className: 'ai-tag-primary', label: 'IoT' },
	{ id: 'traffic', className: 'ai-tag-gray', label: 'traffic' },
];

export default function Tag() {
	return (
		<div className="comp-panel" id="p-tag">
			<CompHeader
				title="Tag"
				lead="Compact mono-font labels for categories, versions, and code references."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ flexWrap: 'wrap' }}
			>
				{TAG_ITEMS.map((tag) => (
					<span className={`ai-tag ${tag.className}`} key={tag.id}>{tag.label}</span>
				))}
			</PreviewBlock>
		</div>
	);
}
