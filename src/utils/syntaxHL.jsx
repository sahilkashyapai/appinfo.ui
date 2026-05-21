/**
 * SyntaxHL – lightweight HTML syntax highlighter for code blocks.
 * Wraps tags, attributes, values, and comments with coloured <span>s.
 *   .cm  → comment          <!-- ... -->
 *   .kw  → tag keyword      <div  </div>  >  />
 *   .at  → attribute name   class  type  href
 *   .vl  → attribute value  "foo"  'bar'
 */
export default function SyntaxHL({ code }) {
	const parts = [];
	let pos = 0;
	let key = 0;

	while (pos < code.length) {
		// HTML comment
		if (code.startsWith('<!--', pos)) {
			const end = code.indexOf('-->', pos);
			if (end !== -1) {
				// eslint-disable-next-line no-plusplus
				parts.push(<span key={key++} className="cm">{code.slice(pos, end + 3)}</span>);
				pos = end + 3;
				continue;
			}
		}

		// HTML tag
		if (code[pos] === '<') {
			const isClose = code[pos + 1] === '/';
			const nameStart = pos + (isClose ? 2 : 1);
			let nameEnd = nameStart;
			while (nameEnd < code.length && /[-\w.]/.test(code[nameEnd])) nameEnd++;

			if (nameEnd > nameStart) {
				// Emit: <tagname  or  </tagname
				// eslint-disable-next-line no-plusplus
				parts.push(<span key={key++} className="kw">{code.slice(pos, nameEnd)}</span>);
				pos = nameEnd;

				if (!isClose) {
					// Parse attributes until > or />
					while (
						pos < code.length
						&& code[pos] !== '>'
						&& !(code[pos] === '/' && code[pos + 1] === '>')
					) {
						// Whitespace
						if (/\s/.test(code[pos])) {
							let wsEnd = pos;
							while (wsEnd < code.length && /\s/.test(code[wsEnd])) wsEnd++;
							parts.push(code.slice(pos, wsEnd));
							pos = wsEnd;
							continue;
						}

						// Attribute name
						let attrEnd = pos;
						while (attrEnd < code.length && /[-\w:.]/.test(code[attrEnd])) attrEnd++;

						if (attrEnd > pos) {
							// eslint-disable-next-line no-plusplus
							parts.push(<span key={key++} className="at">{code.slice(pos, attrEnd)}</span>);
							pos = attrEnd;
						} else {
							parts.push(code[pos]);
							pos += 1;
							continue;
						}

						// Attribute value
						if (pos < code.length && code[pos] === '=') {
							parts.push('=');
							pos += 1;
							const q = code[pos];
							if (q === '"' || q === "'") {
								const valEnd = code.indexOf(q, pos + 1) + 1;
								if (valEnd > 0) {
									// eslint-disable-next-line no-plusplus
									parts.push(<span key={key++} className="vl">{code.slice(pos, valEnd)}</span>);
									pos = valEnd;
								}
							}
						}
					}
				}

				// Closing bracket
				if (code.startsWith('/>', pos)) {
					// eslint-disable-next-line no-plusplus
					parts.push(<span key={key++} className="kw">{'/>'}</span>);
					pos += 2;
				} else if (pos < code.length && code[pos] === '>') {
					// eslint-disable-next-line no-plusplus
					parts.push(<span key={key++} className="kw">{'>'}</span>);
					pos += 1;
				}
				continue;
			}
		}

		// Plain text content
		const nextTag = code.indexOf('<', pos);
		const textEnd = nextTag === -1 ? code.length : nextTag;
		if (textEnd > pos) {
			parts.push(code.slice(pos, textEnd));
		}
		pos = textEnd === pos ? pos + 1 : textEnd;
	}

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{parts}</>;
}
