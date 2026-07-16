import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const BREAKPOINTS = [
	{ name: 'xs', width: '0px', note: 'Applies to all viewports (no media query)' },
	{ name: 'sm', width: '576px', note: 'Small devices (landscape phones)' },
	{ name: 'md', width: '768px', note: 'Medium devices (tablets)' },
	{ name: 'lg', width: '992px', note: 'Large devices (desktops)' },
	{ name: 'xl', width: '1200px', note: 'Extra large devices' },
	{ name: 'xxl', width: '1400px', note: 'Extra extra large devices' },
	{ name: '3xl', width: '1600px', note: 'Ultra-wide screens' },
	{ name: '4xl', width: '1920px', note: 'Full HD and larger screens' },
];

export default function Breakpoints() {
	return (
		<div className="comp-panel" id="p-breakpoints">
			<CompHeader
				title="Breakpoints"
				lead="Responsive breakpoint scale used by the grid and every responsive utility class (format: .ai-{utility}-{breakpoint}-{value})."
				badge="LAYOUT"
			/>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Breakpoint</th>
							<th>Min width</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{BREAKPOINTS.map((bp) => (
							<tr key={bp.name}>
								<td><code>{bp.name}</code></td>
								<td>{bp.width}</td>
								<td>{bp.note}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="ai-fs-7 ai-text-muted">
				The system is <strong>mobile-first</strong>: a class with no breakpoint suffix (e.g. <code>ai-p-3</code>) applies at every viewport width. Adding a suffix like <code>-md-</code> only overrides the value <em>at that width and wider</em> — it never affects anything narrower. That's why you stack unsuffixed → <code>sm</code> → <code>md</code> → <code>lg</code> classes together rather than repeating the same rule at every breakpoint: each suffixed class only needs to state what changes.
			</p>

			<div className="sub-heading">Cascading a single property</div>
			<PreviewBlock label="Padding grows at md and lg breakpoints" canvasClassName="ai-d-flex ai-flex-column">
				<div className="ai-p-3 ai-p-md-5 ai-p-lg-7 ai-bg-primary ai-text-white ai-rounded-2 ai-text-center">
					ai-p-3 ai-p-md-5 ai-p-lg-7
				</div>
			</PreviewBlock>

			<div className="sub-heading">Cascading column counts</div>
			<PreviewBlock label="1 column on mobile, 2 on sm+, 3 on lg+">
				<div className="ai-row ai-g-3" style={{ width: '100%' }}>
					<div className="ai-col-12 ai-col-sm-6 ai-col-lg-4">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
							ai-col-12 ai-col-sm-6 ai-col-lg-4
						</div>
					</div>
					<div className="ai-col-12 ai-col-sm-6 ai-col-lg-4">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
							ai-col-12 ai-col-sm-6 ai-col-lg-4
						</div>
					</div>
					<div className="ai-col-12 ai-col-sm-6 ai-col-lg-4">
						<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
							ai-col-12 ai-col-sm-6 ai-col-lg-4
						</div>
					</div>
				</div>
			</PreviewBlock>
			<p className="ai-fs-7 ai-text-muted">
				Resize the window (or shrink the browser) to see the same three columns go from a single stacked column, to a 2-up layout at <code>sm</code>, to a 3-up layout at <code>lg</code> — no JavaScript involved. See the <strong>Columns</strong> page for the full column-sizing and offset/order reference.
			</p>
		</div>
	);
}
