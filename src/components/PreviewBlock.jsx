/**
 * PreviewBlock – Reusable preview section with code snippet
 * Combines preview canvas, code block, copy button, and syntax highlighter
 */

import { useMemo, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SyntaxHL from '../utils/syntaxHL';
import CopyButton from './CopyButton';
import { useClipboard } from '../utils/useClipboard';

const VOID_TAGS = new Set([
	'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
	'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

// Lightweight HTML pretty-printer
function formatHtml(html) {
	if (!html) return '';
	const tokens = [];
	let i = 0;
	while (i < html.length) {
		if (html[i] === '<') {
			const end = html.indexOf('>', i);
			if (end === -1) {
				tokens.push({ type: 'text', value: html.slice(i) });
				break;
			}
			tokens.push({ type: 'tag', value: html.slice(i, end + 1) });
			i = end + 1;
		} else {
			const next = html.indexOf('<', i);
			const value = html.slice(i, next === -1 ? html.length : next);
			if (value.trim()) tokens.push({ type: 'text', value: value });
			i = next === -1 ? html.length : next;
		}
	}

	let depth = 0;
	const lines = [];
	const indent = () => '\t'.repeat(Math.max(0, depth));

	for (let t = 0; t < tokens.length; t++) {
		const tok = tokens[t];
		if (tok.type === 'text') {
			const trimmed = tok.value.trim();
			if (trimmed) lines.push(indent() + trimmed);
			continue;
		}
		const raw = tok.value;
		const isClosing = raw.startsWith('</');
		const isSelfClosing = raw.endsWith('/>') || /^<([a-zA-Z][\w-]*)/.exec(raw)
			&& VOID_TAGS.has(/^<([a-zA-Z][\w-]*)/.exec(raw)[1].toLowerCase());

		if (isClosing) {
			depth = Math.max(0, depth - 1);
			lines.push(indent() + raw);
		} else {
			// Inline case: <tag>text</tag> on one line
			const next = tokens[t + 1];
			const after = tokens[t + 2];
			if (
				next && next.type === 'text' &&
				after && after.type === 'tag' && after.value.startsWith('</')
			) {
				lines.push(indent() + raw + next.value.trim() + after.value);
				t += 2;
				continue;
			}
			lines.push(indent() + raw);
			if (!isSelfClosing) depth += 1;
		}
	}
	return lines.join('\n');
}

export default function PreviewBlock({ label = 'Preview', code, children, canvasStyle = {} }) {
	const { copy } = useClipboard();
	const [activeTab, setActiveTab] = useState('preview');

	const generatedCode = useMemo(() => {
		if (code) return code;
		try {
			return formatHtml(renderToStaticMarkup(children));
		} catch {
			return '';
		}
	}, [code, children]);

	const handleCopy = async () => {
		await copy(generatedCode);
	};

	return (
		<div className="preview-block">
			<div className="preview-label">
				<span className="preview-label-text">{label}</span>
				<div className="preview-tabs" role="tablist" aria-label="Preview or code">
					<button
						type="button"
						role="tab"
						aria-selected={activeTab === 'preview'}
						className={`preview-tab${activeTab === 'preview' ? ' is-active' : ''}`}
						onClick={() => setActiveTab('preview')}
					>
						UI
					</button>
					<button
						type="button"
						role="tab"
						aria-selected={activeTab === 'code'}
						className={`preview-tab${activeTab === 'code' ? ' is-active' : ''}`}
						onClick={() => setActiveTab('code')}
					>
						Code
					</button>
				</div>
			</div>

			{activeTab === 'preview' ? (
				<div className="preview-canvas" style={canvasStyle}>
					{children}
				</div>
			) : (
				<div className="code-block">
					<CopyButton onClick={handleCopy} type="button" />
					<pre><SyntaxHL code={generatedCode} /></pre>
				</div>
			)}
		</div>
	);
}
