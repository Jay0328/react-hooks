import React from 'react';

export default function useDidMount(didMount: () => void) {
	React.useEffect(
		() => {
			didMount();
		},
		[]
	);
}
