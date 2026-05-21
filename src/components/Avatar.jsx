import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Avatar() {
	return (
		<div className="comp-panel" id="p-avatar">
			<CompHeader
				title="Avatar"
				lead="User and entity representation - sizes, initials, images, and stacked groups."
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

			<div className="sub-heading">Stacked Group</div>
			<PreviewBlock
				label="Preview"
			>
				<div className="ai-avatar-stack">
					<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,#1c5380,#279fd6)' }}>JD</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,#48aa40,#54d34e)' }}>KR</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: 'linear-gradient(135deg,#d69d3a,#f0b84a)' }}>ML</span>
					<span className="ai-avatar ai-avatar-md" style={{ background: '#e2e8f0', color: '#64748b', fontSize: '13px' }}>+5</span>
				</div>
			</PreviewBlock>
		</div>
	);
}
