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
									onClick={() => handleToggle(idx)}
									type="button"
								>
									{iconLeft && iconEl}
									<span className="ai-acc-title">{item.title}</span>
									{!iconLeft && iconEl}
								</button>
								<div className={`ai-acc-body ${isOpen ? 'open' : ''}`}>{item.body}</div>
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
				lead="Collapsible content sections - perfect for FAQs, settings panels, and expandable details."
			/>

			<AccordionSection title="Only One Open at a Time" variant="single" items={items} />

			<AccordionSection title="All Open at Once (Multiple)" variant="multiple" items={items} />

			<AccordionSection title="First Item Open by Default" variant="first-open" items={items} />

			<AccordionSection title="All Items Open by Default" variant="all-open" items={items} />

			<AccordionSection
				title="Borderless — Arrow Icon Right"
				variant="single"
				accordionClass="ai-accordion--borderless"
				icon="expand_more"
				items={items}
			/>

			<AccordionSection
				title="Borderless — Arrow Icon Left"
				variant="single"
				accordionClass="ai-accordion--borderless"
				icon="expand_more"
				iconLeft
				items={items}
			/>
		</div>
	);
}
