import CompHeader from './CompHeader';

const SEMANTIC = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
const NEUTRAL = ['white', 'black'];

export default function UtilColors() {
	return (
		<div className="comp-panel" id="p-utility-colors">
			<CompHeader
				title="Colors"
				lead="Semantic color utility classes shared across text (.ai-text-*), background (.ai-bg-*) and border (.ai-border-*). Every name below resolves through a CSS custom property with a hard-coded fallback - e.g. .ai-bg-primary uses background-color: var(--c-primary, #007bff). primary, secondary, light and dark are theme-aware aliases (--c-primary / --c-light etc. are redefined per theme file, so primary tracks the active theme's brand/button color and light tracks its light surface color); success, danger, warning and info are fixed, theme-independent colors by design, so status meaning (green = success, red = danger, etc.) never changes when the theme changes."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Theme-aware &amp; fixed semantics</div>
			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Text (.ai-text-*)</th>
							<th>Background (.ai-bg-*)</th>
							<th>Border (.ai-border-*)</th>
						</tr>
					</thead>
					<tbody>
						{SEMANTIC.map((name) => (
							<tr key={name}>
								<td>{name}</td>
								<td className={`ai-text-${name} ai-fw-semibold`}>Aa</td>
								<td>
									<div className={`ai-bg-${name} ai-rounded-1`} style={{ width: '32px', height: '20px' }} />
								</td>
								<td>
									<div className={`ai-border ai-border-3 ai-border-${name} ai-rounded-1`} style={{ width: '32px', height: '20px' }} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="sub-heading">Neutral &amp; muted</div>
			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Text (.ai-text-*)</th>
							<th>Background (.ai-bg-*)</th>
							<th>Border (.ai-border-*)</th>
						</tr>
					</thead>
					<tbody>
						{NEUTRAL.map((name) => (
							<tr key={name}>
								<td>{name}</td>
								<td className={`ai-text-${name} ai-fw-semibold`}>
									<span className={name === 'white' ? 'ai-bg-dark ai-p-1 ai-rounded-1' : ''}>Aa</span>
								</td>
								<td>
									<div className={`ai-bg-${name} ai-border ai-rounded-1`} style={{ width: '32px', height: '20px' }} />
								</td>
								<td>
									<div className={`ai-border ai-border-3 ai-border-${name} ai-rounded-1`} style={{ width: '32px', height: '20px' }} />
								</td>
							</tr>
						))}
						<tr>
							<td>muted</td>
							<td className="ai-text-muted ai-fw-semibold">Aa</td>
							<td className="ai-text-muted">- (no .ai-bg-muted class)</td>
							<td className="ai-text-muted">- (no .ai-border-muted class)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
