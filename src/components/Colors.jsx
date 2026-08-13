import { useState } from 'react';
import CompHeader from './CompHeader';

const THEMES = {
	glance: {
		name: 'GLANCE',
		description: 'Steel blue',
		colors: {
			'Dark': '#1c5380',
			'Mid': '#2878a3',
			'Fade': '#296789',
			'Button': '#2878a3',
			'Button Hover': '#279fd6',
			'Accent': '#279fd6',
			'Accent 2': '#56c8f0',
			'Page BG': '#f0f6fb',
			'Surface': '#ffffff',
			'Surface 2': '#e4eef7',
			'Border': '#c5daea',
			'Text': '#0d2b40',
			'Text Sub': '#3a6480',
			'Text Muted': '#7aa3bf',
		},
	},
	mainelink: {
		name: 'MAINELINK',
		description: 'Navy + Amber',
		colors: {
			'Dark': '#0f3754',
			'Mid': '#204d6c',
			'Fade': '#143e60',
			'Button': '#e8a713',
			'Button Hover': '#f7ce00',
			'Accent': '#e8a713',
			'Accent 2': '#f7ce00',
			'Page BG': '#f0f5fa',
			'Surface': '#ffffff',
			'Surface 2': '#e0ecf5',
			'Border': '#b8cfe0',
			'Text': '#08202e',
			'Text Sub': '#1a4060',
			'Text Muted': '#6090b0',
		},
	},
	mcomms: {
		name: 'MCOMMS',
		description: 'Ocean + Green',
		colors: {
			'Dark': '#1c5696',
			'Mid': '#097bb7',
			'Fade': '#0b699b',
			'Button': '#48aa40',
			'Button Hover': '#54d34e',
			'Accent': '#48aa40',
			'Accent 2': '#54d34e',
			'Page BG': '#f0f7f5',
			'Surface': '#ffffff',
			'Surface 2': '#dff0e8',
			'Border': '#b8dcc8',
			'Text': '#0a2a1e',
			'Text Sub': '#1f5c44',
			'Text Muted': '#6aaa88',
		},
	},
	rattler: {
		name: 'RATTLER',
		description: 'Tan + Gold',
		colors: {
			'Dark': '#2f2f2f',
			'Mid': '#595040',
			'Fade': '#797163',
			'Button': '#d69d3a',
			'Button Hover': '#c09142',
			'Accent': '#d69d3a',
			'Accent 2': '#f0b84a',
			'Page BG': '#faf7f2',
			'Surface': '#ffffff',
			'Surface 2': '#f0ebe0',
			'Border': '#ddd4c0',
			'Text': '#1a1612',
			'Text Sub': '#4a3f2e',
			'Text Muted': '#9a8a70',
		},
	},
	wwe: {
		name: 'WWE',
		description: 'Indigo + Cyan',
		colors: {
			'Dark': '#21336b',
			'Mid': '#3a4d87',
			'Fade': '#283c7c',
			'Button': '#008fbe',
			'Button Hover': '#007ea8',
			'Accent': '#008fbe',
			'Accent 2': '#00b8f0',
			'Page BG': '#f0f2fb',
			'Surface': '#ffffff',
			'Surface 2': '#e0e6f8',
			'Border': '#bac4e8',
			'Text': '#0d1433',
			'Text Sub': '#2d3f7a',
			'Text Muted': '#7080bb',
		},
	},
};

function ColorSwatch({ label, hex }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(hex);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="color-item">
			<div
				className="color-swatch"
				style={{ backgroundColor: hex }}
				onClick={handleCopy}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') handleCopy();
				}}
				aria-label={`Copy ${hex}`}
			/>
			<div className="color-info">
				<div className="color-label">{label}</div>
				<div className="color-value">{hex.toUpperCase()}</div>
				{copied && <div className="color-copied">Copied!</div>}
			</div>
		</div>
	);
}

export default function Colors() {
	return (
		<div className="comp-panel" id="p-colors">
			<CompHeader
				title="Colors"
				lead="Each of the 5 brand themes (Glance, Mainelink, Mcomms, Rattler, WWE) defines the same fixed set of CSS custom properties - --c-dark, --c-mid, --c-btn, --c-surface, --c-border, --c-text, and so on - with different hex values. Every component in this library reads those variables instead of hardcoding colors, so swapping the data-theme attribute on the root <html> element (exactly what the theme selector in the navbar does) instantly re-skins buttons, headers, cards, borders, and text everywhere on the page, live, with no reload and no per-component styling. Click any swatch below to copy its hex value."
			/>

			<div className="sub-heading">How Theme Tokens Get Consumed</div>
			<p className="ai-text-muted ai-mb-4" style={{ fontSize: '13.5px', lineHeight: 1.7 }}>
				Each swatch below corresponds to one CSS variable that components reference directly - for example
				{' '}<code>.ai-btn-primary</code> reads <code>var(--c-btn)</code> for its background and <code>var(--c-btn-hover)</code> on hover,
				the navbar's top strip and secondary bar read <code>var(--c-dark)</code> and <code>var(--c-mid)</code>,
				and cards/modals/accordions read <code>var(--c-surface)</code> / <code>var(--c-border)</code> for their background and outline.
				A <code>--c-primary</code> alias (pointing at the same value as <code>--c-btn</code>) is also defined per theme so that the generic
				{' '}<code>.ai-bg-primary</code> / <code>.ai-text-primary</code> utility classes resolve to the active theme's real brand color rather than a
				generic fallback blue - see the <strong>Utilities → Colors</strong> page for the full list of semantic utility classes built on top of these tokens.
			</p>

			<div className="ai-table-wrap ai-mb-6">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Swatch Label</th>
							<th>CSS Variable</th>
							<th>Typically Used For</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>Dark</td><td><code>--c-dark</code></td><td>Header top strip background</td></tr>
						<tr><td>Mid</td><td><code>--c-mid</code></td><td>Secondary nav bar background</td></tr>
						<tr><td>Fade</td><td><code>--c-fade</code></td><td>Search box / hamburger toggler background, mobile menu overlay</td></tr>
						<tr><td>Button</td><td><code>--c-btn</code> (aliased as <code>--c-primary</code>)</td><td>Primary button fill, active tab underline, accordion active state, links</td></tr>
						<tr><td>Button Hover</td><td><code>--c-btn-hover</code></td><td>Hover state for primary buttons and interactive brand elements</td></tr>
						<tr><td>Accent</td><td><code>--c-accent</code></td><td>Secondary highlight, typically equal to Button Hover</td></tr>
						<tr><td>Accent 2</td><td><code>--c-accent2</code></td><td>Tertiary highlight - gradients, chart accents</td></tr>
						<tr><td>Page BG</td><td><code>--c-page-bg</code></td><td>App/page background behind cards and panels</td></tr>
						<tr><td>Surface</td><td><code>--c-surface</code></td><td>Card, modal, accordion, and dropdown panel backgrounds</td></tr>
						<tr><td>Surface 2</td><td><code>--c-surface2</code> (aliased as <code>--c-light</code>)</td><td>Secondary surface - hover backgrounds, subtle containers</td></tr>
						<tr><td>Border</td><td><code>--c-border</code></td><td>Default border color for inputs, cards, tables, dividers</td></tr>
						<tr><td>Text</td><td><code>--c-text</code></td><td>Primary heading and body text color</td></tr>
						<tr><td>Text Sub</td><td><code>--c-text-sub</code></td><td>Secondary/supporting text (descriptions, body copy)</td></tr>
						<tr><td>Text Muted</td><td><code>--c-text-muted</code></td><td>Placeholder, disabled, and low-emphasis text</td></tr>
					</tbody>
				</table>
			</div>

			<div className="sub-heading">Brand Palettes</div>
			<div className="colors-grid">
				{Object.entries(THEMES).map(([key, theme]) => (
					<div key={key} className="theme-section">
						<div className="theme-header">
							<h3>{theme.name}</h3>
							<p className="theme-description">{theme.description}</p>
						</div>
						<div className="colors-container">
							{Object.entries(theme.colors).map(([label, hex]) => (
								<ColorSwatch key={`${key}-${label}`} label={label} hex={hex} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
