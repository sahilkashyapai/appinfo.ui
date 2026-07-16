import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const SCALE = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 25];
const PX = {
	0: '0px', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 7: '28px', 8: '32px',
	9: '36px', 10: '40px', 11: '44px', 12: '48px', 13: '52px', 14: '56px', 15: '60px', 16: '64px',
	17: '68px', 18: '72px', 19: '76px', 20: '80px', 21: '84px', 22: '88px', 23: '92px', 24: '96px', 25: '100px',
};

export default function UtilSpacing() {
	return (
		<div className="comp-panel" id="p-spacing">
			<CompHeader
				title="Spacing"
				lead="Padding (.ai-p-*) and margin (.ai-m-*) on a shared 0–100px scale, with per-side variants (t/e/b/s for top/end/bottom/start), per-axis variants (x, y), and responsive breakpoint prefixes (e.g. ai-p-md-4). Every step in the scale (0–25) is defined in 4px increments, so ai-p-4 is always 16px regardless of which side or axis it's applied to."
				badge="UTILITIES"
			/>

			<div className="sub-heading">All-sides padding</div>
			<PreviewBlock label="Padding (.ai-p-*)">
				{[1, 3, 5, 7].map((n) => (
					<div key={n} className={`ai-p-${n} ai-bg-light ai-border ai-rounded-1`}>
						<div className="ai-bg-primary ai-text-white ai-rounded-1 ai-p-1 ai-text-center ai-fs-8">ai-p-{n}</div>
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Per-axis padding</div>
			<PreviewBlock label="ai-px-4 (horizontal only) vs ai-py-4 (vertical only)">
				<div className="ai-px-4 ai-bg-light ai-border ai-rounded-1">
					<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-text-center ai-fs-8">ai-px-4</div>
				</div>
				<div className="ai-py-4 ai-bg-light ai-border ai-rounded-1">
					<div className="ai-bg-secondary ai-text-white ai-rounded-1 ai-text-center ai-fs-8">ai-py-4</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Single-side padding</div>
			<PreviewBlock label="ai-pt-4 / ai-pe-4 / ai-pb-4 / ai-ps-4">
				<div className="ai-pt-4 ai-bg-light ai-border ai-rounded-1">
					<div className="ai-bg-success ai-text-white ai-rounded-1 ai-text-center ai-fs-8">ai-pt-4</div>
				</div>
				<div className="ai-pe-4 ai-bg-light ai-border ai-rounded-1">
					<div className="ai-bg-success ai-text-white ai-rounded-1 ai-text-center ai-fs-8">ai-pe-4</div>
				</div>
				<div className="ai-pb-4 ai-bg-light ai-border ai-rounded-1">
					<div className="ai-bg-success ai-text-white ai-rounded-1 ai-text-center ai-fs-8">ai-pb-4</div>
				</div>
				<div className="ai-ps-4 ai-bg-light ai-border ai-rounded-1">
					<div className="ai-bg-success ai-text-white ai-rounded-1 ai-text-center ai-fs-8">ai-ps-4</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Scale</th>
							<th>Value</th>
							<th>Classes</th>
						</tr>
					</thead>
					<tbody>
						{SCALE.map((n) => (
							<tr key={n}>
								<td>{n}</td>
								<td>{PX[n]}</td>
								<td><code>{`ai-p-${n} / ai-pt-${n} / ai-pe-${n} / ai-pb-${n} / ai-ps-${n} / ai-px-${n} / ai-py-${n}`}</code></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="ai-fs-7 ai-text-muted">
				Margin follows the exact same scale and side suffixes as padding: <code>ai-m-*</code>, <code>ai-mt-*</code>, <code>ai-me-*</code>, <code>ai-mb-*</code>, <code>ai-ms-*</code>, <code>ai-mx-*</code>, <code>ai-my-*</code>, plus <code>ai-m-auto</code> / <code>ai-mx-auto</code> / <code>ai-my-auto</code> / <code>ai-mt-auto</code> / <code>ai-me-auto</code> / <code>ai-mb-auto</code> / <code>ai-ms-auto</code> for centering or pushing flex/grid items apart.
			</p>

			<p className="ai-fs-7 ai-text-muted">
				Every padding and margin class also has a responsive form: <code>ai-p-md-4</code>, <code>ai-mx-lg-auto</code>, etc. apply only from that breakpoint (sm/md/lg/xl/xxl) upward, letting you tighten spacing on mobile and open it up on larger screens.
			</p>
		</div>
	);
}
