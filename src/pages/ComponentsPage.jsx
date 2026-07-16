import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import ComponentsAsidebar from '../components/ComponentsAsidebar';
import Breakpoints from '../components/Breakpoints';
import Containers from '../components/Containers';
import Grid from '../components/Grid';
import Columns from '../components/Columns';
import Gutters from '../components/Gutters';
import Zindex from '../components/Zindex';
import CssGrid from '../components/CssGrid';
import UtilBackground from '../components/UtilBackground';
import UtilBorders from '../components/UtilBorders';
import UtilColors from '../components/UtilColors';
import UtilDisplay from '../components/UtilDisplay';
import UtilFlex from '../components/UtilFlex';
import UtilFloat from '../components/UtilFloat';
import UtilInteractions from '../components/UtilInteractions';
import UtilLink from '../components/UtilLink';
import UtilObjectFit from '../components/UtilObjectFit';
import UtilOpacity from '../components/UtilOpacity';
import UtilOverflow from '../components/UtilOverflow';
import UtilPosition from '../components/UtilPosition';
import UtilShadows from '../components/UtilShadows';
import UtilSizing from '../components/UtilSizing';
import UtilSpacing from '../components/UtilSpacing';
import UtilText from '../components/UtilText';
import UtilVerticalAlign from '../components/UtilVerticalAlign';
import UtilVisibility from '../components/UtilVisibility';
import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Breadcrumb from '../components/Breadcrumb';
import Buttons from '../components/Buttons';
import Card from '../components/Card';
import Chip from '../components/Chip';
import Colors from '../components/Colors';
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
	{ id: 'breakpoints', label: 'Breakpoints', category: 'Layout' },
	{ id: 'containers', label: 'Containers', category: 'Layout' },
	{ id: 'grid', label: 'Grid', category: 'Layout' },
	{ id: 'columns', label: 'Columns', category: 'Layout' },
	{ id: 'gutters', label: 'Gutters', category: 'Layout' },
	{ id: 'cssgrid', label: 'CSS Grid', category: 'Layout' },
	{ id: 'bg', label: 'Background', category: 'Utilities' },
	{ id: 'borders', label: 'Borders', category: 'Utilities' },
	{ id: 'utility-colors', label: 'Colors', category: 'Utilities' },
	{ id: 'display', label: 'Display', category: 'Utilities' },
	{ id: 'flex', label: 'Flex', category: 'Utilities' },
	{ id: 'float', label: 'Float', category: 'Utilities' },
	{ id: 'interactions', label: 'Interactions', category: 'Utilities' },
	{ id: 'link', label: 'Link', category: 'Utilities' },
	{ id: 'object-fit', label: 'Object fit', category: 'Utilities' },
	{ id: 'opacity', label: 'Opacity', category: 'Utilities' },
	{ id: 'overflow', label: 'Overflow', category: 'Utilities' },
	{ id: 'position', label: 'Position', category: 'Utilities' },
	{ id: 'shadows', label: 'Shadows', category: 'Utilities' },
	{ id: 'sizing', label: 'Sizing', category: 'Utilities' },
	{ id: 'spacing', label: 'Spacing', category: 'Utilities' },
	{ id: 'text', label: 'Text', category: 'Utilities' },
	{ id: 'vertical-align', label: 'Vertical align', category: 'Utilities' },
	{ id: 'visibility', label: 'Visibility', category: 'Utilities' },
	{ id: 'zindex', label: 'Z-index', category: 'Utilities' },
	{ id: 'accordion', label: 'Accordion', category: 'Components' },
	{ id: 'alert', label: 'Alert' },
	{ id: 'avatar', label: 'Avatar' },
	{ id: 'badge', label: 'Badge' },
	{ id: 'breadcrumb', label: 'Breadcrumb' },
	{ id: 'button', label: 'Button' },
	{ id: 'card', label: 'Card' },
	{ id: 'chip', label: 'Chip' },
	{ id: 'colors', label: 'Colors' },
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
	breakpoints: Breakpoints,
	containers: Containers,
	grid: Grid,
	columns: Columns,
	gutters: Gutters,
	zindex: Zindex,
	cssgrid: CssGrid,
	bg: UtilBackground,
	borders: UtilBorders,
	'utility-colors': UtilColors,
	display: UtilDisplay,
	flex: UtilFlex,
	float: UtilFloat,
	interactions: UtilInteractions,
	link: UtilLink,
	'object-fit': UtilObjectFit,
	opacity: UtilOpacity,
	overflow: UtilOverflow,
	position: UtilPosition,
	shadows: UtilShadows,
	sizing: UtilSizing,
	spacing: UtilSpacing,
	text: UtilText,
	'vertical-align': UtilVerticalAlign,
	visibility: UtilVisibility,
	accordion: Accordion,
	alert: Alert,
	avatar: Avatar,
	badge: Badge,
	breadcrumb: Breadcrumb,
	button: Buttons,
	card: Card,
	checkbox: Inputs,
	chip: Chip,
	colors: Colors,
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
