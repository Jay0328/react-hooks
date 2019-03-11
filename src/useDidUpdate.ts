import React from 'react';
import useDidMount from './useDidMount';

export default function useDidUpdate(didUpdate: () => void, deps?: ReadonlyArray<any>) {
	const isMounted = React.useRef(false);

	useDidMount(() => {
		isMounted.current = true;
	});

	React.useEffect(
		() => {
			if (isMounted.current) {
				didUpdate();
			}
		},
		deps
	);
}
