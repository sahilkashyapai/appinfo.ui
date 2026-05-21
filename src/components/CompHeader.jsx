/**
 * CompHeader – Reusable component header
 * Standardized header for all component showcases
 */

export default function CompHeader({ title, lead, badge = 'COMPONENT' }) {
	return (
		<div className="comp-header">
			<div>
				<div className="comp-title">{title}</div>
				<p className="comp-lead">{lead}</p>
			</div>
			<span className="comp-badge">{badge}</span>
		</div>
	);
}
