import { useState, useEffect } from 'react';

export interface WindowSize {
	width: number;
	height: number;
}

export function useWindowSize({ width = Infinity, height = Infinity } = {}) {
	const isClient = typeof window === 'object';
	const [state, setState] = useState<WindowSize>(() => ({
		width: isClient ? window.innerWidth : width,
		height: isClient ? window.innerHeight : height,
	}));

	useEffect(() => {
		if (!isClient) {
			return;
		}

		function onResize() {
			setState({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', onResize);

		return () => window.removeEventListener('resize', onResize);
	}, []);

	return state;
}
