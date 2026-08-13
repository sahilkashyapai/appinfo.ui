import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
const OPACITIES = [10, 25, 50, 75, 100];

export default function UtilLink() {
	return (
		<div className="comp-panel" id="p-link">
			<CompHeader
				title="Link"
				lead="Colored, underlined links with a darker hover state (.ai-link-{color}), and .ai-link-opacity-{value} to fade a link's own color while keeping its hover feedback intact. Each variant stores its base color in a --ai-link-color custom property on the element; on hover, the text color mixes 85% toward black and the underline switches from a 50%-faded tint of that color to a fully solid one (currentColor) - so the underline visibly sharpens on hover even though the underline was already there at rest."
				badge="UTILITIES"
			/>

			<PreviewBlock label="Colors (.ai-link-*) - hover a link to see it darken">
				{VARIANTS.map((name) => (
					<a key={name} className={`ai-link-${name}`} href="#void">{name} link</a>
				))}
			</PreviewBlock>

			<PreviewBlock label="In running text">
				<p>
					This sentence contains an <a className="ai-link-primary" href="#void">inline primary link</a> and a{' '}
					<a className="ai-link-danger" href="#void">danger link</a>, styled the same as body text apart from color and underline.
				</p>
			</PreviewBlock>

			<PreviewBlock label="Opacity (.ai-link-opacity-*) - fades the link color, not the underline's hover response">
				{OPACITIES.map((value) => (
					<a key={value} className={`ai-link-primary ai-link-opacity-${value}`} href="#void">{`opacity-${value}`}</a>
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
						<tr><td><code>ai-link-primary / -secondary / -success / -danger / -warning / -info / -dark</code></td><td>Sets the link's color, an underline tinted at 50% of that color, and a darkened hover color with a fully solid underline</td></tr>
						<tr><td><code>ai-link-opacity-10 / -25 / -50 / -75 / -100</code></td><td>Mixes the link's stored color toward transparent (10% = almost invisible, 100% = full color); combine with a color class on the same element</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
