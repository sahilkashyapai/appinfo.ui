import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Tooltip() {
	return (
		<div className="comp-panel" id="p-tooltip">
			<CompHeader
				title="Tooltip"
				lead="CSS-only hover tooltips for contextual help and label augmentation."
			/>
			<PreviewBlock
				label="Preview - hover each button"
				canvasStyle={{ gap: '24px' }}
			>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-primary" type="button">Sync Now</button>
					<span className="ai-tooltip">Force sync all devices</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-ghost" type="button" aria-label="Search devices">
						<span className="material-symbols-outlined" aria-hidden="true">search</span>
					</button>
					<span className="ai-tooltip">Search devices</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-outline" type="button">Export</button>
					<span className="ai-tooltip">Download as CSV</span>
				</div>
				<div className="ai-tooltip-wrap">
					<button className="ai-btn ai-btn-danger" disabled type="button">Delete</button>
					<span className="ai-tooltip">Select items first</span>
				</div>
			</PreviewBlock>
		</div>
	);
}
