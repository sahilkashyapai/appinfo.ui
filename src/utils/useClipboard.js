/**
 * useClipboard – Custom hook for clipboard operations
 * Handles copying text to clipboard with error handling
 */

export function useClipboard() {
	const copy = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			// Silently ignore clipboard errors in unsupported contexts
			return false;
		}
	};

	return { copy };
}
