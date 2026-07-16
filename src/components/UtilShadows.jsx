import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const SIZES = ['sm', '', 'lg', 'xl', '2xl'];
const COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

export default function UtilShadows() {
	return (
		<div className="comp-panel" id="p-shadows">
			<CompHeader
				title="Shadows"
				lead="Box-shadow scale (.ai-shadow-{sm,'',lg,xl,2xl}), semantic color shadows (.ai-shadow-{color}), inset shadows, and text-shadow utilities. All of these are built with color-mix() against a theme CSS variable (falling back to a Bootstrap-style default), so every shadow automatically adapts when the color theme or dark mode changes — no separate dark-mode override needed."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Size scale</div>
			<PreviewBlock label="Size scale">
				{SIZES.map((size) => (
					<div key={size || 'base'} className={`ai-shadow${size ? `-${size}` : ''} ai-bg-white ai-rounded-2 ai-p-3 ai-text-center`} style={{ width: '90px' }}>
						{size || 'base'}
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Color shadows</div>
			<PreviewBlock label="Color shadows (.ai-shadow-{color})">
				{COLORS.map((name) => (
					<div key={name} className={`ai-shadow-${name} ai-bg-white ai-rounded-2 ai-p-3 ai-text-center`} style={{ width: '90px' }}>
						{name}
					</div>
				))}
			</PreviewBlock>

			<div className="sub-heading">Inset shadows</div>
			<PreviewBlock label="ai-shadow-inset / ai-shadow-inset-lg">
				<div className="ai-shadow-inset ai-bg-light ai-rounded-2 ai-p-3 ai-text-center" style={{ width: '110px' }}>inset</div>
				<div className="ai-shadow-inset-lg ai-bg-light ai-rounded-2 ai-p-3 ai-text-center" style={{ width: '110px' }}>inset-lg</div>
			</PreviewBlock>

			<div className="sub-heading">Text shadows</div>
			<PreviewBlock label="ai-text-shadow-sm / ai-text-shadow / ai-text-shadow-lg">
				<span className="ai-text-shadow-sm ai-fs-4 ai-fw-bold">Shadow sm</span>
				<span className="ai-text-shadow ai-fs-4 ai-fw-bold">Shadow base</span>
				<span className="ai-text-shadow-lg ai-fs-4 ai-fw-bold">Shadow lg</span>
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
						<tr><td><code>ai-shadow-none</code></td><td>Remove any shadow</td></tr>
						<tr><td><code>ai-shadow-sm / '' / -lg / -xl / -2xl</code></td><td>Neutral box-shadow scale, increasing blur/spread</td></tr>
						<tr><td><code>ai-shadow-{`{color}`}</code></td><td>Colored box-shadow using the theme color at 30% mix (primary, secondary, success, danger, warning, info, dark, light)</td></tr>
						<tr><td><code>ai-shadow-inset / -inset-lg</code></td><td>Inner shadow, for pressed/recessed surfaces (e.g. input wells)</td></tr>
						<tr><td><code>ai-text-shadow-sm / '' / -lg / -none</code></td><td>text-shadow scale, for legibility over busy or colored backgrounds</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
