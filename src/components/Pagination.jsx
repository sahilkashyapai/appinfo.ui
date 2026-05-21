import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Pagination() {
	return (
		<div className="comp-panel" id="p-pagination">
			<CompHeader
				title="Pagination"
				lead="Page navigation controls for large data sets and multi-page content."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
			>
				<div className="ai-pagination">
					<button className="ai-page-btn" disabled type="button">‹</button>
					<button className="ai-page-btn active" type="button">1</button>
					<button className="ai-page-btn" type="button">2</button>
					<button className="ai-page-btn" type="button">3</button>
					<span className="ai-page-ellipsis">...</span>
					<button className="ai-page-btn" type="button">12</button>
					<button className="ai-page-btn" type="button">›</button>
				</div>
			</PreviewBlock>
		</div>
	);
}
