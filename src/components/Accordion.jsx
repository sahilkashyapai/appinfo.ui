import { useState } from 'react';
import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const items = [
	{
		title: 'What is AppInfo.UI?',
		body: 'AppInfo.UI is a multi-theme component library built for traffic management and IoT monitoring dashboards. It provides 40+ production-ready components across 5 brand themes.',
	},
	{
		title: 'How do I switch themes?',
		body: 'Add data-theme="glance" (or any theme name) to your root html element. All components update automatically via CSS custom properties.',
	},
	{
		title: 'Is JavaScript required?',
		body: 'Only for interactive components like accordions, modals, dropdowns and toasts. The full CSS library works with zero JS for static layouts.',
	},
];

// variant: 'single' | 'multiple' | 'first-open' | 'all-open'
function AccordionSection({ title, items, variant = 'single', accordionClass = '', iconLeft = false, icon = 'expand_more' }) {
	const initState = () => {
		const base = Object.fromEntries(items.map((_, i) => [i, false]));
		if (variant === 'first-open') return { ...base, 0: true };
		if (variant === 'all-open') return Object.fromEntries(items.map((_, i) => [i, true]));
		return base;
	};

	const [openState, setOpenState] = useState(initState);

	const handleToggle = (idx) => {
		if (variant === 'single' || variant === 'first-open') {
			setOpenState((prev) => {
				const alreadyOpen = prev[idx];
				const reset = Object.fromEntries(Object.keys(prev).map((k) => [k, false]));
				return alreadyOpen ? reset : { ...reset, [idx]: true };
			});
		} else {
			setOpenState((prev) => ({ ...prev, [idx]: !prev[idx] }));
		}
	};

	const fullClass = [
		'ai-accordion',
		`ai-accordion--${variant}`,
		accordionClass,
		iconLeft ? 'ai-accordion--icon-left' : '',
	].filter(Boolean).join(' ');
	const sectionId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

	return (
		<>
			<div className="sub-heading">{title}</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-p-6 ai-gap-0"
			>
				<div className={fullClass}>
					{items.map((item, idx) => {
						const isOpen = openState[idx];
						const iconEl = <span className="ai-acc-icon material-symbols-outlined" aria-hidden="true">{icon}</span>;
						return (
							<div className="ai-acc-item" key={item.title}>
								<button
									className={`ai-acc-btn ${isOpen ? 'open' : ''}`}
									data-accordion-toggle={`accordion-${sectionId}-${idx}`}
									aria-controls={`accordion-${sectionId}-${idx}`}
									aria-expanded={isOpen}
									onClick={() => handleToggle(idx)}
									type="button"
								>
									{iconLeft && iconEl}
									<span className="ai-acc-title">{item.title}</span>
									{!iconLeft && iconEl}
								</button>
								<div
									className={`ai-acc-body ${isOpen ? 'open' : ''}`}
									id={`accordion-${sectionId}-${idx}`}
									hidden={!isOpen}
								>
									{item.body}
								</div>
							</div>
						);
					})}
				</div>
			</PreviewBlock>
		</>
	);
}

export default function Accordion() {
	return (
		<div className="comp-panel" id="p-accordion">
			<CompHeader
				title="Accordion"
				lead="Collapsible content sections - perfect for FAQs, settings panels, and expandable details. Behavior is controlled entirely by JS state, not CSS: 'single' accordions close any other open item when one is opened (classic single-open-at-a-time), 'multiple' lets any number stay open simultaneously, and 'first-open' / 'all-open' just seed the initial state. The chevron icon rotates 180deg and turns the theme's button color whenever its item is open. A .ai-accordion--borderless modifier strips the card border/background for a flatter, list-like look, and .ai-accordion--icon-left moves the chevron to the front of the row instead of the end."
			/>

			<AccordionSection title="Only One Open at a Time" variant="single" items={items} />

			<AccordionSection title="All Open at Once (Multiple)" variant="multiple" items={items} />

			<AccordionSection title="First Item Open by Default" variant="first-open" items={items} />

			<AccordionSection title="All Items Open by Default" variant="all-open" items={items} />

			<AccordionSection
				title="Icon on the Left (Bordered)"
				variant="single"
				icon="expand_more"
				iconLeft
				items={items}
			/>

			<AccordionSection
				title="Borderless - Arrow Icon Right"
				variant="single"
				accordionClass="ai-accordion--borderless"
				icon="expand_more"
				items={items}
			/>

			<AccordionSection
				title="Borderless - Arrow Icon Left"
				variant="single"
				accordionClass="ai-accordion--borderless"
				icon="expand_more"
				iconLeft
				items={items}
			/>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Purpose</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-accordion</code></td><td>Base wrapper - bordered card with rounded corners, clips its children.</td></tr>
						<tr><td><code>ai-acc-item</code></td><td>One row: its trigger button + collapsible body. Bottom-bordered except the last item.</td></tr>
						<tr><td><code>ai-acc-btn</code></td><td>Full-width trigger. Title on the left, chevron icon on the right by default.</td></tr>
						<tr><td><code>ai-acc-btn.open</code></td><td>Applied when that item is expanded - text/icon switch to <code>var(--c-btn)</code> and the background tints slightly.</td></tr>
						<tr><td><code>ai-acc-icon</code></td><td>The chevron; rotates 180deg when its button carries <code>.open</code>.</td></tr>
						<tr><td><code>ai-acc-body</code></td><td>Collapsed via <code>max-height: 0</code>; <code>.open</code> reveals it up to a 200px cap with padding.</td></tr>
						<tr><td><code>ai-accordion--icon-left</code></td><td>Modifier on the accordion root - moves the chevron before the title instead of after.</td></tr>
						<tr><td><code>ai-accordion--borderless</code></td><td>Modifier on the accordion root - removes the outer border/radius and item dividers for a flush, list-style look.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
