import React from 'react';

export interface WindowSize {
	width: number;
	height: number;
}

export default function useWindowSize({ width = Infinity, height = Infinity } = {}) {
	const isClient = typeof window === 'object';
	const [state, setState] = React.useState<WindowSize>({
		width: isClient ? window.innerWidth : width,
		height: isClient ? window.innerHeight : height,
	});

	React.useEffect(
		() => {
			if (isClient) {
				const onResize = () => {
					setState({
						width: window.innerWidth,
						height: window.innerHeight,
					});
				};
				window.addEventListener('resize', onResize);
				return () => window.removeEventListener('resize', onResize);
			} else {
				return undefined;
			}
		},
		[]
	);

	return state;
}
