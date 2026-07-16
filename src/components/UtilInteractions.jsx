import CompHeader from './CompHeader';
import PreviewBlock from './PreviewBlock';

const CURSORS = ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed', 'help', 'progress'];

export default function UtilInteractions() {
	return (
		<div className="comp-panel" id="p-interactions">
			<CompHeader
				title="Interactions"
				lead="Control pointer behavior with .ai-cursor-* (which icon the mouse shows), .ai-pointer-events-* (whether the element can be a click/hover target at all), and text-selection with .ai-user-select-*. Hover each swatch below to see its cursor."
				badge="UTILITIES"
			/>

			<PreviewBlock label="Cursor (.ai-cursor-*) — hover each box">
				{CURSORS.map((c) => (
					<div key={c} className={`ai-cursor-${c} ai-bg-secondary ai-text-white ai-rounded-2 ai-p-3 ai-text-center`}>
						{c}
					</div>
				))}
			</PreviewBlock>

			<PreviewBlock label="Pointer events (.ai-pointer-events-none disables clicks)">
				<button className="ai-btn ai-btn-primary ai-pointer-events-none" type="button">Disabled via pointer-events</button>
				<button className="ai-btn ai-btn-primary ai-pointer-events-auto" type="button">Normal (pointer-events-auto)</button>
			</PreviewBlock>

			<PreviewBlock label="User select (.ai-user-select-none prevents text selection)">
				<p className="ai-user-select-none ai-bg-light ai-rounded-2 ai-p-3">Try selecting this text — you can't.</p>
				<p className="ai-user-select-all ai-bg-light ai-rounded-2 ai-p-3">Click once here and everything gets selected.</p>
				<p className="ai-user-select-text ai-bg-light ai-rounded-2 ai-p-3">Selectable normally (.ai-user-select-text).</p>
			</PreviewBlock>

			<div className="ai-table-wrap">
				<table className="ai-table">
					<thead>
						<tr>
							<th>Class</th>
							<th>Effect</th>
						</tr>
					</thead>
					<tbody>
						<tr><td><code>ai-cursor-auto / -default</code></td><td>Browser-decided cursor / the plain arrow cursor</td></tr>
						<tr><td><code>ai-cursor-pointer</code></td><td>Hand cursor, for clickable elements</td></tr>
						<tr><td><code>ai-cursor-wait / -progress</code></td><td>Busy indicator (wait blocks interaction, progress doesn't)</td></tr>
						<tr><td><code>ai-cursor-text</code></td><td>Text-caret cursor, for editable/selectable text</td></tr>
						<tr><td><code>ai-cursor-move</code></td><td>Move/drag cursor</td></tr>
						<tr><td><code>ai-cursor-not-allowed</code></td><td>Disabled/blocked cursor</td></tr>
						<tr><td><code>ai-cursor-help</code></td><td>Question-mark help cursor</td></tr>
						<tr><td><code>ai-pointer-events-none</code></td><td>Element (and its children) become untargetable — clicks/hovers pass through to whatever is behind it</td></tr>
						<tr><td><code>ai-pointer-events-auto</code></td><td>Restores normal pointer targeting, useful to re-enable a child inside a `-none` ancestor</td></tr>
						<tr><td><code>ai-user-select-none</code></td><td>Text cannot be selected by dragging/double-click</td></tr>
						<tr><td><code>ai-user-select-text</code></td><td>Normal, selectable text (the default)</td></tr>
						<tr><td><code>ai-user-select-all</code></td><td>A single click/focus selects the entire element's text</td></tr>
						<tr><td><code>ai-user-select-auto</code></td><td>Browser-default selection behavior</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
