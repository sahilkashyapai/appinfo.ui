import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

export default function Breadcrumb() {
	return (
		<div className="comp-panel" id="p-breadcrumb">
			<CompHeader
				title="Breadcrumb"
				lead="Navigation trail showing hierarchy and current page location."
			/>

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
		</div>
	);
}
