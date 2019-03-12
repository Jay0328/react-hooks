import React from 'react';
import useWindowSize, { WindowSize } from './useWindowSize';

export default function useMediaQuery(handler: (windowSize: WindowSize) => void) {
	const windowSize = useWindowSize();
	React.useEffect(
		() => {
			handler(windowSize);
		},
		[windowSize.width, windowSize.height, handler]
	);
}
