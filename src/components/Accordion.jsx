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

function AccordionSection({ title, items, openState, onToggle }) {
	return (
		<>
			<div className="sub-heading">{title}</div>
			<PreviewBlock
				label="Preview"
				canvasClassName="ai-p-6 ai-gap-0"
			>
				<div className="ai-accordion">
					{items.map((item, idx) => {
						const isOpen = typeof openState === 'object' ? openState[idx] : openState === idx;
						return (
							<div className="ai-acc-item" key={item.title}>
								<button
									className={`ai-acc-btn ${isOpen ? 'open' : ''}`}
									onClick={() => onToggle(idx)}
									type="button"
								>
									{item.title} <span className="ai-acc-icon material-symbols-outlined" aria-hidden="true">expand_more</span>
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
	const [openIndex, setOpenIndex] = useState(-1);
	const [openMultiple, setOpenMultiple] = useState({ 0: false, 1: false, 2: false });
	const [openFirstDefault, setOpenFirstDefault] = useState(0);
	const [openAllDefault, setOpenAllDefault] = useState({ 0: true, 1: true, 2: true });

	return (
		<div className="comp-panel" id="p-accordion">
			<CompHeader
				title="Accordion"
				lead="Collapsible content sections - perfect for FAQs, settings panels, and expandable details."
			/>

			<AccordionSection
				title="Only One Open at a Time"
				items={items}
				openState={openIndex}
				onToggle={(idx) => setOpenIndex((current) => (current === idx ? -1 : idx))}
			/>

			<AccordionSection
				title="All Open at Once (Multiple)"
				items={items}
				openState={openMultiple}
				onToggle={(idx) => setOpenMultiple((prev) => ({ ...prev, [idx]: !prev[idx] }))}
			/>

			<AccordionSection
				title="First Item Open by Default"
				items={items}
				openState={openFirstDefault}
				onToggle={(idx) => setOpenFirstDefault((current) => (current === idx ? -1 : idx))}
			/>

			<AccordionSection
				title="All Items Open by Default"
				items={items}
				openState={openAllDefault}
				onToggle={(idx) => setOpenAllDefault((prev) => ({ ...prev, [idx]: !prev[idx] }))}
			/>
		</div>
	);
}
