import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function UtilDisplay() {
	return (
		<div className="comp-panel" id="p-display">
			<CompHeader
				title="Display"
				lead="Set an element's display value with .ai-d-{value}. Every value has responsive variants: .ai-d-{value}-{breakpoint}."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Inline vs block</div>
			<PreviewBlock label="ai-d-inline vs ai-d-inline-block vs ai-d-block">
				<div>
					<span className="ai-d-inline ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2">inline</span>
					<span className="ai-d-inline-block ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2" style={{ width: '80px' }}>inline-block</span>
					<div className="ai-d-block ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2">block</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Flex &amp; grid</div>
			<PreviewBlock label="ai-d-flex / ai-d-inline-flex">
				<div className="ai-d-flex ai-gap-2" style={{ width: '100%' }}>
					<div className="ai-bg-primary ai-text-white ai-rounded-1 ai-p-2">flex item</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-1 ai-p-2">flex item</div>
					<span className="ai-d-inline-flex ai-bg-secondary ai-text-white ai-rounded-1 ai-p-2">inline-flex</span>
				</div>
			</PreviewBlock>

			<PreviewBlock label="ai-d-grid (paired here with an inline grid-template-columns)">
				<div className="ai-d-grid ai-gap-2" style={{ width: '100%', gridTemplateColumns: 'repeat(3, 1fr)' }}>
					<div className="ai-bg-primary ai-text-white ai-rounded-1 ai-p-2 ai-text-center">1</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-1 ai-p-2 ai-text-center">2</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-1 ai-p-2 ai-text-center">3</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Table display</div>
			<PreviewBlock label="ai-d-table / ai-d-table-row / ai-d-table-cell (plain divs made to behave like a table)">
				<div className="ai-d-table ai-border" style={{ width: '100%' }}>
					<div className="ai-d-table-row">
						<div className="ai-d-table-cell ai-border ai-p-2">Row 1, Cell A</div>
						<div className="ai-d-table-cell ai-border ai-p-2">Row 1, Cell B</div>
					</div>
					<div className="ai-d-table-row">
						<div className="ai-d-table-cell ai-border ai-p-2">Row 2, Cell A</div>
						<div className="ai-d-table-cell ai-border ai-p-2">Row 2, Cell B</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>CSS value</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-d-none</code></td><td>none</td></tr>
						<tr><td><code>ai-d-inline</code></td><td>inline</td></tr>
						<tr><td><code>ai-d-inline-block</code></td><td>inline-block</td></tr>
						<tr><td><code>ai-d-block</code></td><td>block</td></tr>
						<tr><td><code>ai-d-flex / ai-d-inline-flex</code></td><td>flex / inline-flex</td></tr>
						<tr><td><code>ai-d-grid / ai-d-inline-grid</code></td><td>grid / inline-grid</td></tr>
						<tr><td><code>ai-d-table / ai-d-table-row / ai-d-table-cell</code></td><td>table / table-row / table-cell</td></tr>
						<tr><td><code>ai-d-contents</code></td><td>contents (element's own box disappears; its children behave as if they were direct children of its parent)</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
