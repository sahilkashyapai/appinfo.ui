import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const GUTTER_SCALE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20, 24, 25];
const GUTTER_PX = {
	0: '0px', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 7: '28px',
	8: '32px', 9: '36px', 10: '40px', 12: '48px', 16: '64px', 20: '80px', 24: '96px', 25: '100px',
};

export default function Gutters() {
	return (
		<div className="comp-panel" id="p-gutters">
			<CompHeader
				title="Gutters"
				lead="Control the spacing between columns with .ai-g-{size} (both axes), .ai-gx-{size} (horizontal only), or .ai-gy-{size} (vertical only, for wrapped rows). Each size overrides the default 12px .ai-row margin / .ai-col padding pair, and every size also has responsive .ai-g-{bp}-{size} / .ai-gx-{bp}-{size} / .ai-gy-{bp}-{size} variants."
				badge="LAYOUT"
			/>

			<div className="sub-heading">Both axes</div>
			<PreviewBlock label="ai-g-5 (both axes)">
				<div className="ai-row ai-g-5" style={{ width: '100%' }}>
					<div className="ai-col-6">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Horizontal only</div>
			<PreviewBlock label="ai-gx-5 (horizontal only, no vertical gap when wrapped)">
				<div className="ai-row ai-gx-5" style={{ width: '100%' }}>
					<div className="ai-col-6">
						<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-info ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Vertical only</div>
			<PreviewBlock label="ai-gy-5 (vertical only, wrapped columns)">
				<div className="ai-row ai-gy-5" style={{ width: '100%' }}>
					<div className="ai-col-6">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Responsive gutters</div>
			<PreviewBlock label="ai-g-2 ai-g-md-6 (tight on mobile, roomy on md+)">
				<div className="ai-row ai-g-2 ai-g-md-6" style={{ width: '100%' }}>
					<div className="ai-col-6">
						<div className="ai-bg-warning ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
					<div className="ai-col-6">
						<div className="ai-bg-warning ai-rounded-2 ai-p-3 ai-text-center">Column</div>
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Size</th>
							<th>Value</th>
							<th>Classes</th>
						</tr>
					</thead>
					<tbody>
						{GUTTER_SCALE.map((size) => (
							<tr key={size}>
								<td>{size}</td>
								<td>{GUTTER_PX[size]}</td>
								<td><code>{`ai-g-${size} / ai-gx-${size} / ai-gy-${size}`}</code></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="ai-fs-7 ai-text-muted">
				Every size in the table also accepts a breakpoint infix - <code>ai-g-md-6</code>, <code>ai-gx-lg-3</code>, <code>ai-gy-sm-2</code>, and so on - following the same mobile-first cascading rule described on the <strong>Breakpoints</strong> page.
			</p>
		</div>
	);
}
