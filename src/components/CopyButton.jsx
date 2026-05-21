import { useEffect, useRef, useState } from 'react';

const RESET_DELAY_MS = 1600;

export default function CopyButton({ onClick, className = 'copy-btn', type = 'button', ...rest }) {
	const [state, setState] = useState('copy');
	const resetTimerRef = useRef(null);

	useEffect(() => () => {
		if (resetTimerRef.current) {
			clearTimeout(resetTimerRef.current);
		}
	}, []);

	const handleClick = async () => {
		if (state === 'copying') {
			return;
		}

		if (resetTimerRef.current) {
			clearTimeout(resetTimerRef.current);
		}

		setState('copying');

		try {
			if (onClick) {
				await onClick();
			}
			setState('copied');
		} catch {
			setState('copy');
			return;
		}

		resetTimerRef.current = setTimeout(() => {
			setState('copy');
			resetTimerRef.current = null;
		}, RESET_DELAY_MS);
	};

	const icon = state === 'copying' ? 'autorenew' : state === 'copied' ? 'task_alt' : 'content_copy';
	const label = state === 'copying' ? 'Copying' : state === 'copied' ? 'Copied' : 'Copy';

	return (
		<button
			{...rest}
			className={`${className} is-${state}`}
			onClick={handleClick}
			type={type}
			disabled={state === 'copying'}
		>
			<span className="material-symbols-outlined" aria-hidden="true">{icon}</span>
			<span>{label}</span>
		</button>
	);
}
