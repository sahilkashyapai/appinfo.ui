import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const Z_LEVELS = [0, 1, 10, 20, 30, 40, 50, 100, 1000, 1020, 1030, 1040, 1050];

export default function Zindex() {
	return (
		<div className="comp-panel" id="p-zindex">
			<CompHeader
				title="Z-index"
				lead="A shared stacking-order scale so overlapping elements (dropdowns, modals, toasts, sticky headers) layer predictably instead of every component inventing its own arbitrary z-index number. Apply with .ai-z-{level}. Note that z-index only has an effect on a positioned element — one with .ai-position-relative, -absolute, -fixed, or -sticky (position: static, the default, ignores z-index entirely)."
				badge="LAYOUT"
			/>

			<PreviewBlock label="Stacking order" canvasStyle={{ position: 'relative', height: '140px' }}>
				<div
					className="ai-position-absolute ai-z-10 ai-bg-primary ai-text-white ai-rounded-2 ai-p-4"
					style={{ top: '10px', left: '10px' }}
				>
					ai-z-10
				</div>
				<div
					className="ai-position-absolute ai-z-30 ai-bg-secondary ai-text-white ai-rounded-2 ai-p-4"
					style={{ top: '35px', left: '70px' }}
				>
					ai-z-30
				</div>
				<div
					className="ai-position-absolute ai-z-50 ai-bg-success ai-text-white ai-rounded-2 ai-p-4"
					style={{ top: '60px', left: '130px' }}
				>
					ai-z-50
				</div>
			</PreviewBlock>

			<PreviewBlock label="Reordering the same three boxes with a higher level on the bottom-most one" canvasStyle={{ position: 'relative', height: '140px' }}>
				<div
					className="ai-position-absolute ai-z-1000 ai-bg-primary ai-text-white ai-rounded-2 ai-p-4"
					style={{ top: '10px', left: '10px' }}
				>
					ai-z-1000 (now on top)
				</div>
				<div
					className="ai-position-absolute ai-z-30 ai-bg-secondary ai-text-white ai-rounded-2 ai-p-4"
					style={{ top: '35px', left: '70px' }}
				>
					ai-z-30
				</div>
				<div
					className="ai-position-absolute ai-z-1 ai-bg-success ai-text-white ai-rounded-2 ai-p-4"
					style={{ top: '60px', left: '130px' }}
				>
					ai-z-1 (now behind)
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Level</th>
							<th>Class</th>
							<th>Typical use</th>
						</tr>
					</thead>
					<tbody>
						{Z_LEVELS.map((level) => (
							<tr key={level}>
								<td>{level}</td>
								<td><code>{`ai-z-${level}`}</code></td>
								<td>
									{level >= 1020 ? 'Overlays: modal, toast, dropdown, tooltip' : level >= 100 ? 'Sticky / fixed headers' : 'Local stacking within a component'}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="ai-fs-7 ai-text-muted">
				Every level also has responsive variants, e.g. <code>ai-z-md-1000</code>, in case an element should only jump to the front from a given breakpoint upward.
			</p>
		</div>
	);
}
