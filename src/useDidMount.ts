import React from 'react';

export function useDidMount(didMount: () => void) {
	React.useLayoutEffect(
		() => {
			didMount();
		},
		[]
	);
}
