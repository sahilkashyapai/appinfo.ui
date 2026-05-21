import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const LIST_ITEMS = [
	{
		id: 'snsr-042',
		label: 'SNSR-042 - Zone A',
		icon: 'sensors',
		badgeClass: 'ai-badge-success',
		badgeText: 'Online',
		active: true,
	},
	{
		id: 'snsr-071',
		label: 'SNSR-071 - Zone B',
		icon: 'sensors',
		badgeClass: 'ai-badge-success',
		badgeText: 'Online',
	},
	{
		id: 'ctrl-003',
		label: 'CTRL-003 - Main',
		icon: 'tune',
		badgeClass: 'ai-badge-warning',
		badgeText: 'Pending',
	},
	{
		id: 'pwr-011',
		label: 'PWR-011 - South',
		icon: 'battery_alert',
		badgeClass: 'ai-badge-danger',
		badgeText: 'Offline',
	},
];

export default function List() {
	return (
		<div className="comp-panel" id="p-listgroup">
			<CompHeader
				title="List Group"
				lead="Structured vertical lists with icons, metadata, and active state support."
			/>
			<PreviewBlock
				label="Preview"
				canvasStyle={{ gap: 0, padding: '24px' }}
			>
				<div className="ai-list">
					{LIST_ITEMS.map((item) => (
						<div className={`ai-list-item ${item.active ? 'active' : ''}`} key={item.id}>
							<span className="li-icon">
								<span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>
							</span>
							{item.label}
							<span className="li-meta"><span className={`ai-badge ${item.badgeClass}`}>{item.badgeText}</span></span>
						</div>
					))}
				</div>
			</PreviewBlock>
		</div>
	);
}
