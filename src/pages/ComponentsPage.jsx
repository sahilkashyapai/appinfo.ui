import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComponentsAsidebar from '../components/ComponentsAsidebar';
import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Breadcrumb from '../components/Breadcrumb';
import Buttons from '../components/Buttons';
import Card from '../components/Card';
import Chip from '../components/Chip';
import Divider from '../components/Divider';
import Dropdown from '../components/Dropdown';
import Inputs from '../components/Inputs';
import List from '../components/List';
import Modal from '../components/Modal';
import NavbarDemo from '../components/Navbar';
import Pagination from '../components/Pagination';
import Progress from '../components/Progress';
import Range from '../components/Range';
import Sidebars from '../components/Sidebars';
import Skeleton from '../components/Skeleton';
import Spinner from '../components/Spinner';
import Switch from '../components/Switch';
import Table from '../components/Table';
import Tabs from '../components/Tabs';
import Tag from '../components/Tag';
import Icons from '../components/Icons';
import Toast from '../components/Toast';
import Tooltip from '../components/Tooltip';
import Typography from '../components/Typography';
import '../styles/main.scss'

const PANEL_META = [
	{ id: 'accordion', label: 'Accordion' },
	{ id: 'alert', label: 'Alert' },
	{ id: 'avatar', label: 'Avatar' },
	{ id: 'badge', label: 'Badge' },
	{ id: 'breadcrumb', label: 'Breadcrumb' },
	{ id: 'button', label: 'Button' },
	{ id: 'card', label: 'Card' },
	{ id: 'checkbox', label: 'Checkbox & Radio' },
	{ id: 'chip', label: 'Chip' },
	{ id: 'divider', label: 'Divider' },
	{ id: 'dropdown', label: 'Dropdown' },
	{ id: 'icons', label: 'Icons' },
	{ id: 'input', label: 'Input & Form' },
	{ id: 'listgroup', label: 'List Group' },
	{ id: 'modal', label: 'Modal' },
	{ id: 'navbar', label: 'Navbar' },
	{ id: 'pagination', label: 'Pagination' },
	{ id: 'progress', label: 'Progress' },
	{ id: 'range', label: 'Range Slider' },
	{ id: 'external-aside', label: 'Sidebars' },
	{ id: 'skeleton', label: 'Skeleton' },
	{ id: 'spinner', label: 'Spinner' },
	{ id: 'switch', label: 'Switch / Toggle' },
	{ id: 'table', label: 'Table' },
	{ id: 'tabs', label: 'Tabs' },
	{ id: 'tag', label: 'Tag' },
	{ id: 'toast', label: 'Toast' },
	{ id: 'tooltip', label: 'Tooltip' },
	{ id: 'typography', label: 'Typography' },
];

const PANEL_COMPONENTS = {
	accordion: Accordion,
	alert: Alert,
	avatar: Avatar,
	badge: Badge,
	breadcrumb: Breadcrumb,
	button: Buttons,
	card: Card,
	checkbox: Inputs,
	chip: Chip,
	divider: Divider,
	dropdown: Dropdown,
	icons: Icons,
	input: Inputs,
	listgroup: List,
	modal: Modal,
	navbar: NavbarDemo,
	pagination: Pagination,
	progress: Progress,
	range: Range,
	'external-aside': Sidebars,
	skeleton: Skeleton,
	spinner: Spinner,
	switch: Switch,
	table: Table,
	tabs: Tabs,
	tag: Tag,
	toast: Toast,
	tooltip: Tooltip,
	typography: Typography,
};

export default function ComponentsPage({ theme = 'glance' }) {
	const [search, setSearch] = useState('');
	const { panel } = useParams();
	const routePanel = panel || 'accordion';
	const activePanel = PANEL_COMPONENTS[routePanel] ? routePanel : 'accordion';
	const ActiveComponent = PANEL_COMPONENTS[activePanel] || Accordion;

	const visiblePanels = useMemo(() => {
		const value = search.trim().toLowerCase();
		if (!value) return PANEL_META;
		return PANEL_META.filter((item) => item.label.toLowerCase().includes(value));
	}, [search]);

	return (
		<div className="shell">
			<ComponentsAsidebar
				search={search}
				onSearchChange={setSearch}
				activePanel={activePanel}
				panels={visiblePanels}
			/>

			<main className="main" id="main">
				<ActiveComponent theme={theme} />
			</main>
		</div>
	);
}
