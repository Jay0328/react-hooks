import React from 'react';

export default function useUnmount(unmount: () => void) {
	const unmountRef = React.useRef<() => void>();

	unmountRef.current = unmount;

	React.useEffect(
		() => () => {
			if (unmountRef.current) {
				unmountRef.current();
			}
		},
		[]
	);
}
