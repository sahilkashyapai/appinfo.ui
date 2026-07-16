import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function UtilBorders() {
	return (
		<div className="comp-panel" id="p-borders">
			<CompHeader
				title="Borders"
				lead="Border presence per side (.ai-border*), border width (.ai-border-{1-5}), border-style (.ai-border-{solid,dashed,dotted,double,none}), border-radius — both uniform (.ai-rounded-*) and per-corner (.ai-rounded-{top,end,bottom,start}-*) — and border color utilities (.ai-border-{color})."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Presence &amp; sides</div>
			<PreviewBlock label="ai-border-top / -right / -bottom / -left / -x / -y">
				<div className="ai-border-top ai-border-3 ai-border-primary ai-p-3 ai-text-center" style={{ width: '80px' }}>top</div>
				<div className="ai-border-right ai-border-3 ai-border-primary ai-p-3 ai-text-center" style={{ width: '80px' }}>right</div>
				<div className="ai-border-bottom ai-border-3 ai-border-primary ai-p-3 ai-text-center" style={{ width: '80px' }}>bottom</div>
				<div className="ai-border-left ai-border-3 ai-border-primary ai-p-3 ai-text-center" style={{ width: '80px' }}>left</div>
				<div className="ai-border-x ai-border-3 ai-border-primary ai-p-3 ai-text-center" style={{ width: '80px' }}>x (left+right)</div>
				<div className="ai-border-y ai-border-3 ai-border-primary ai-p-3 ai-text-center" style={{ width: '80px' }}>y (top+bottom)</div>
			</PreviewBlock>

			<div className="sub-heading">Width</div>
			<PreviewBlock label="ai-border-1 .. ai-border-5">
				{[1, 2, 3, 4, 5].map((n) => (
					<div key={n} className={`ai-border ai-border-${n} ai-border-primary ai-rounded-2 ai-p-3 ai-text-center`} style={{ width: '90px' }}>
						{n}
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Style</div>
			<PreviewBlock label="ai-border-solid / -dashed / -dotted / -double / -none">
				{['solid', 'dashed', 'dotted', 'double', 'none'].map((style) => (
					<div
						key={style}
						className={`ai-border ai-border-3 ai-border-${style} ai-border-secondary ai-rounded-2 ai-p-3 ai-text-center`}
						style={{ width: '90px' }}
					>
						{style}
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Radius</div>
			<PreviewBlock label="ai-rounded-0 .. ai-rounded-5, circle, pill">
				{[0, 1, 2, 3, 4, 5].map((n) => (
					<div key={n} className={`ai-bg-secondary ai-text-white ai-rounded-${n} ai-p-3 ai-text-center`} style={{ width: '90px' }}>
						{n}
					</div>
				))}
				<div className="ai-bg-secondary ai-text-white ai-rounded-circle ai-p-3 ai-text-center" style={{ width: '70px', height: '70px' }}>o</div>
				<div className="ai-bg-secondary ai-text-white ai-rounded-pill ai-p-3 ai-text-center" style={{ width: '110px' }}>pill</div>
			</PreviewBlock>

			<PreviewBlock label="Per-corner: ai-rounded-top-3 / -end-3 / -bottom-3 / -start-3">
				<div className="ai-bg-secondary ai-text-white ai-rounded-top-3 ai-p-3 ai-text-center" style={{ width: '90px' }}>top</div>
				<div className="ai-bg-secondary ai-text-white ai-rounded-end-3 ai-p-3 ai-text-center" style={{ width: '90px' }}>end</div>
				<div className="ai-bg-secondary ai-text-white ai-rounded-bottom-3 ai-p-3 ai-text-center" style={{ width: '90px' }}>bottom</div>
				<div className="ai-bg-secondary ai-text-white ai-rounded-start-3 ai-p-3 ai-text-center" style={{ width: '90px' }}>start</div>
			</PreviewBlock>

			<div className="sub-heading">Colors</div>
			<PreviewBlock label="ai-border-{color}">
				{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((name) => (
					<div key={name} className={`ai-border ai-border-3 ai-border-${name} ai-rounded-2 ai-p-3 ai-text-center`} style={{ width: '100px' }}>
						{name}
					</div>
				))}
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Effect</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-border / ai-border-top / -right / -bottom / -left / -x / -y</code></td><td>Add a 1px border on one or more sides</td></tr>
						<tr><td><code>ai-border-0</code></td><td>Remove all borders</td></tr>
						<tr><td><code>ai-border-1 .. ai-border-5</code></td><td>border-width, uniform on all sides</td></tr>
						<tr><td><code>ai-border-top-{`{0-5}`} / -right- / -bottom- / -left-</code></td><td>border-*-width, per side (0 also zeroes that side's border entirely)</td></tr>
						<tr><td><code>ai-border-solid / -dashed / -dotted / -double / -none</code></td><td>border-style</td></tr>
						<tr><td><code>ai-rounded-0 .. ai-rounded-5</code></td><td>border-radius, uniform on all 4 corners (0 / 4px / 8px / 12px / 16px / 20px)</td></tr>
						<tr><td><code>ai-rounded-circle / -pill</code></td><td>border-radius: 50% / 9999px</td></tr>
						<tr><td><code>ai-rounded-top/end/bottom/start-{`{0-5}`}</code></td><td>Round only the two corners on that logical side (top = top-left + top-right, end = top-right + bottom-right, etc.)</td></tr>
						<tr><td><code>ai-border-{`{color}`}</code></td><td>border-color: primary / secondary / success / danger / warning / info / dark / light / white / black</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
