/**
 * useClipboard – Custom hook for clipboard operations
 * Handles copying text to clipboard with error handling
 * @param {number} [resetMs] – if provided, sets `copied` back to false after this many ms
 */

import { useState, useRef } from 'react';

export function useClipboard(resetMs) {
	const [copied, setCopied] = useState(false);
	const timerRef = useRef(null);

	const copy = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			if (resetMs) {
				setCopied(true);
				clearTimeout(timerRef.current);
				timerRef.current = setTimeout(() => setCopied(false), resetMs);
			}
			return true;
		} catch {
			// Silently ignore clipboard errors in unsupported contexts
			return false;
		}
	};

	return { copy, copied };
}
