import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const MAX_WIDTHS = [
	{ bp: 'xs (<576px)', width: '100%' },
	{ bp: 'sm (≥576px)', width: '540px' },
	{ bp: 'md (≥768px)', width: '720px' },
	{ bp: 'lg (≥992px)', width: '960px' },
	{ bp: 'xl (≥1200px)', width: '1140px' },
	{ bp: 'xxl (≥1400px)', width: '1320px' },
	{ bp: '3xl (≥1600px)', width: '1440px' },
	{ bp: '4xl (≥1920px)', width: '1728px' },
];

export default function Containers() {
	return (
		<div className="comp-panel" id="p-containers">
			<CompHeader
				title="Containers"
				lead="Containers center your content and constrain its max-width at each breakpoint. Use .ai-container for a fixed, responsive max-width, or .ai-container-fluid for a full-width container."
				badge="LAYOUT"
			/>

			<p className="ai-fs-7 ai-text-muted">
				Both classes are identical <code>display: flex</code> boxes with <code>12px</code> of horizontal padding and auto side margins — the only difference is <code>max-width</code>. <code>.ai-container</code> snaps to a fixed max-width at each breakpoint (see the table below), which keeps line lengths readable and layouts stable as the viewport grows. <code>.ai-container-fluid</code> never gets a max-width, so it always fills <code>100%</code> of its parent — reach for it when you want edge-to-edge content (toolbars, full-bleed heroes, dashboards) rather than a centered reading column. Because a container is itself a flex box, you'll almost always place an <code>.ai-row</code> directly inside one — the row supplies its own negative margins to cancel out the container's padding, so columns line up flush with the container edge. See the <strong>Grid</strong> page for that combination in action.
			</p>

			<PreviewBlock label=".ai-container" canvasClassName="ai-p-0">
				<div className="ai-container ai-bg-light ai-border ai-p-3">
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
						Fixed max-width, centered
					</div>
				</div>
			</PreviewBlock>

			<PreviewBlock label=".ai-container-fluid" canvasClassName="ai-p-0">
				<div className="ai-container-fluid ai-bg-light ai-border ai-p-3">
					<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">
						Always 100% width
					</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Breakpoint</th>
							<th>.ai-container max-width</th>
						</tr>
					</thead>
					<tbody>
						{MAX_WIDTHS.map((row) => (
							<tr key={row.bp}>
								<td>{row.bp}</td>
								<td>{row.width}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="ai-fs-7 ai-text-muted">
				Because <code>.ai-container</code>'s max-width only ever <em>constrains</em> the box, it can't be demonstrated meaningfully inside this fixed-width preview pane — the table above is the source of truth for how it behaves at real browser widths. <code>.ai-container-fluid</code> has no such breakpoint table since it has no max-width at any size.
			</p>
		</div>
	);
}
