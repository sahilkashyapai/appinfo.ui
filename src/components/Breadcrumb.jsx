import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Breadcrumb() {
	return (
		<div className="comp-panel" id="p-breadcrumb">
			<CompHeader
				title="Breadcrumb"
				lead="Navigation trail showing hierarchy and current page location. Built from a plain list (.ai-breadcrumb > li), auto-wraps on narrow screens, supports icons inside crumb links, and marks the current page with .active on the last item."
			/>

			<div className="sub-heading">Standard Path</div>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ display: 'flex', flexDirection: 'column' }}
			>
				<ul className="ai-breadcrumb">
					<li>
						<a href="#">Dashboard</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">Devices</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">Zone A</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li className="active">SNSR-042</li>
				</ul>

				<ul className="ai-breadcrumb" style={{ marginTop: '0.5rem' }}>
					<li>
						<a href="#">
							<span className="material-symbols-outlined" aria-hidden="true">home</span>
							{' '}
							Home
						</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">Settings</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li className="active">Notifications</li>
				</ul>
			</PreviewBlock>

			<div className="sub-heading">Short Path (2 crumbs)</div>
			<PreviewBlock label="Preview">
				<ul className="ai-breadcrumb">
					<li>
						<a href="#">Home</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li className="active">Devices</li>
				</ul>
			</PreviewBlock>

			<div className="sub-heading">Long / Deep Path (icons on every crumb)</div>
			<PreviewBlock label="Preview">
				<ul className="ai-breadcrumb">
					<li>
						<a href="#">
							<span className="material-symbols-outlined" aria-hidden="true">home</span>
							{' '}
							Home
						</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">
							<span className="material-symbols-outlined" aria-hidden="true">dns</span>
							{' '}
							Fleets
						</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">
							<span className="material-symbols-outlined" aria-hidden="true">map</span>
							{' '}
							Zone A
						</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">
							<span className="material-symbols-outlined" aria-hidden="true">sensors</span>
							{' '}
							Devices
						</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li>
						<a href="#">SNSR-042</a>
						<span className="sep" aria-hidden="true">
							<span className="material-symbols-outlined">chevron_right</span>
						</span>
					</li>
					<li className="active">Diagnostics</li>
				</ul>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Applies to</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-breadcrumb</code></td><td><code>ul</code></td><td>Flex container, wraps items with 6px gap; wraps to a new line on overflow.</td></tr>
						<tr><td>(default)</td><td><code>li</code></td><td>Muted trail item, 13.5px text; contains a link and a separator icon.</td></tr>
						<tr><td>(default)</td><td><code>li a</code></td><td>Link-colored crumb (<code>--c-btn</code>), can wrap an icon + text; hover switches to <code>--c-btn-hover</code>.</td></tr>
						<tr><td><code>active</code></td><td><code>li.active</code></td><td>Current page - bold, full-contrast text, not a link (last item in the trail).</td></tr>
						<tr><td><code>sep</code></td><td><code>span</code></td><td>Separator wrapper (holds the <code>chevron_right</code> icon) between crumbs.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
