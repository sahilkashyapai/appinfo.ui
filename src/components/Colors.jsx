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
				lead="Semantic color palettes for each theme. Click any swatch to copy the hex value."
			/>

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
