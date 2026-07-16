import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

function Box({ children }) {
	return <div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">{children}</div>;
}

export default function UtilFlex() {
	return (
		<div className="comp-panel" id="p-flex">
			<CompHeader
				title="Flex"
				lead="Flex container and item utilities: direction, wrap, justify-content, align-items/self/content, grow/shrink/basis, the flex shorthand, and gap."
				badge="UTILITIES"
			/>

			<div className="sub-heading">Justify &amp; align</div>
			<PreviewBlock label="ai-d-flex ai-justify-between">
				<div className="ai-d-flex ai-justify-between ai-gap-2" style={{ width: '100%' }}>
					<Box>A</Box>
					<Box>B</Box>
					<Box>C</Box>
				</div>
			</PreviewBlock>

			<PreviewBlock label="ai-flex-column ai-align-center">
				<div className="ai-d-flex ai-flex-column ai-align-center ai-gap-2" style={{ width: '100%' }}>
					<Box>A</Box>
					<Box>B</Box>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Direction</div>
			<PreviewBlock label="ai-flex-row (default) vs ai-flex-row-reverse">
				<div style={{ width: '100%' }}>
					<div className="ai-d-flex ai-flex-row ai-gap-2" style={{ marginBottom: '8px' }}>
						<Box>A</Box>
						<Box>B</Box>
						<Box>C</Box>
					</div>
					<div className="ai-d-flex ai-flex-row-reverse ai-gap-2">
						<Box>A</Box>
						<Box>B</Box>
						<Box>C</Box>
					</div>
				</div>
			</PreviewBlock>

			<PreviewBlock label="ai-flex-column vs ai-flex-column-reverse">
				<div className="ai-d-flex ai-gap-3" style={{ width: '100%' }}>
					<div className="ai-d-flex ai-flex-column ai-gap-2" style={{ flex: 1 }}>
						<Box>A</Box>
						<Box>B</Box>
						<Box>C</Box>
					</div>
					<div className="ai-d-flex ai-flex-column-reverse ai-gap-2" style={{ flex: 1 }}>
						<Box>A</Box>
						<Box>B</Box>
						<Box>C</Box>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Wrap</div>
			<PreviewBlock label="ai-flex-nowrap (items shrink/overflow the row) vs ai-flex-wrap (items flow to a new line)">
				<div style={{ width: '100%' }}>
					<div className="ai-d-flex ai-flex-nowrap ai-gap-2" style={{ width: '260px', overflow: 'auto', marginBottom: '8px' }}>
						<Box>1</Box>
						<Box>2</Box>
						<Box>3</Box>
						<Box>4</Box>
						<Box>5</Box>
					</div>
					<div className="ai-d-flex ai-flex-wrap ai-gap-2" style={{ width: '260px' }}>
						<Box>1</Box>
						<Box>2</Box>
						<Box>3</Box>
						<Box>4</Box>
						<Box>5</Box>
					</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Align self</div>
			<PreviewBlock label="ai-align-self-start / -center / -end / -stretch (container is ai-align-start by default)">
				<div className="ai-d-flex ai-align-start ai-gap-2" style={{ width: '100%', height: '110px' }}>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-2 ai-align-self-start">start</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-2 ai-align-self-center">center</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-2 ai-align-self-end">end</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-2 ai-align-self-stretch">stretch</div>
				</div>
			</PreviewBlock>

			<div className="sub-heading">Grow / shrink</div>
			<PreviewBlock label="ai-flex-grow-1 (one item fills remaining space)">
				<div className="ai-d-flex ai-gap-2" style={{ width: '100%' }}>
					<div className="ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center">fixed</div>
					<div className="ai-bg-primary ai-text-white ai-rounded-2 ai-p-3 ai-text-center ai-flex-grow-1">ai-flex-grow-1</div>
				</div>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Group</th>
							<th>Classes</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>Direction</td><td><code>ai-flex-row / -row-reverse / -column / -column-reverse</code></td></tr>
						<tr><td>Wrap</td><td><code>ai-flex-wrap / -nowrap / -wrap-reverse</code></td></tr>
						<tr><td>Justify content</td><td><code>ai-justify-start / -end / -center / -between / -around / -evenly</code></td></tr>
						<tr><td>Align items</td><td><code>ai-align-start / -end / -center / -baseline / -stretch</code></td></tr>
						<tr><td>Align self</td><td><code>ai-align-self-auto / -start / -end / -center / -baseline / -stretch</code></td></tr>
						<tr><td>Align content</td><td><code>ai-align-content-start / -end / -center / -between / -around / -stretch</code></td></tr>
						<tr><td>Grow / shrink</td><td><code>ai-flex-grow-0 / -1, ai-flex-shrink-0 / -1</code></td></tr>
						<tr><td>Basis</td><td><code>ai-flex-basis-auto / ai-flex-basis-0</code></td></tr>
						<tr><td>Shorthand</td><td><code>ai-flex-1 (1 1 auto), ai-flex-auto, ai-flex-none</code></td></tr>
						<tr><td>Gap</td><td><code>ai-gap-{`{size}`} / ai-gap-x-{`{size}`} / ai-gap-y-{`{size}`}</code></td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
