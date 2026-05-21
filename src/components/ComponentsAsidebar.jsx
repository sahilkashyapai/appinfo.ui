export default function ComponentsAsidebar({
	search = '',
	onSearchChange,
	activePanel = 'accordion',
	panels = [],
}) {
	const groupedPanels = panels.reduce((acc, panel) => {
		const letter = panel.label.charAt(0).toUpperCase();
		if (!acc[letter]) acc[letter] = [];
		acc[letter].push(panel);
		return acc;
	}, {});

	const sortedLetters = Object.keys(groupedPanels).sort();

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
				{sortedLetters.map((letter) => (
					<div className="alpha-group" data-group={letter} key={letter}>
						<span className="alpha-label">{letter}</span>
						{groupedPanels[letter].map((panel) => (
							<a
								className={`sb-link ${activePanel === panel.id ? 'active' : ''}`}
								href={`/components/${panel.id}`}
								key={panel.id}
							>
								{panel.label}
								{panel.id === 'button' ? <span className="new-pill">HOT</span> : null}
							</a>
						))}
					</div>
				))}
			</div>
		</aside>
	);
}
