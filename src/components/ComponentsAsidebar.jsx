import { Link } from 'react-router-dom';

const CATEGORY_ICONS = {
	Layout: 'grid_view',
	Utilities: 'tune',
	Components: 'widgets',
};

export default function ComponentsAsidebar({
	search = '',
	onSearchChange,
	activePanel = 'accordion',
	panels = [],
}) {
	const categoryOrder = [];
	const groupedByCategory = panels.reduce((acc, panel) => {
		const category = panel.category || 'Components';
		if (!acc[category]) {
			acc[category] = [];
			categoryOrder.push(category);
		}
		acc[category].push(panel);
		return acc;
	}, {});

	const groupAlphabetically = (categoryPanels) => {
		const grouped = categoryPanels.reduce((acc, panel) => {
			const letter = panel.label.charAt(0).toUpperCase();
			if (!acc[letter]) acc[letter] = [];
			acc[letter].push(panel);
			return acc;
		}, {});
		return Object.keys(grouped)
			.sort()
			.map((letter) => ({ letter, items: grouped[letter] }));
	};

	const handleClear = () => {
		onSearchChange && onSearchChange('');
	};

	return (
		<aside className="sidebar" id="sidebar">
			<div className="sb-search">
				<button
					className={`sb-search-icon ${search ? 'active' : ''}`}
					onClick={handleClear}
					type="button"
					aria-label={search ? 'Clear search' : 'Search'}
				>
					<span className="material-symbols-outlined" aria-hidden="true">
						{search ? 'close' : 'search'}
					</span>
				</button>
				<input
					type="text"
					placeholder="Search components..."
					id="sbSearch"
					value={search}
					onInput={(e) => onSearchChange && onSearchChange(e.target.value)}
				/>
			</div>

			<div id="sb-list">
				{categoryOrder.map((category) => (
					<div className="sb-category-group" key={category}>
						<div className="sb-category">
							<span className="material-symbols-outlined" aria-hidden="true">
								{CATEGORY_ICONS[category] || 'widgets'}
							</span>
							<span className="sb-category-label">{category}</span>
						</div>

						{category === 'Components' ? (
							groupAlphabetically(groupedByCategory[category]).map(({ letter, items }) => (
								<div className="alpha-group" data-group={letter} key={letter}>
									<span className="alpha-label">{letter}</span>
									{items.map((panel) => (
										<Link
											className={`sb-link ${activePanel === panel.id ? 'active' : ''}`}
											to={`/components/${panel.id}`}
											key={panel.id}
										>
											{panel.label}
											{panel.id === 'button' ? <span className="new-pill">HOT</span> : null}
										</Link>
									))}
								</div>
							))
						) : (
							groupedByCategory[category].map((panel) => (
								<Link
									className={`sb-link ${activePanel === panel.id ? 'active' : ''}`}
									to={`/components/${panel.id}`}
									key={panel.id}
								>
									{panel.label}
								</Link>
							))
						)}
					</div>
				))}
			</div>
		</aside>
	);
}
