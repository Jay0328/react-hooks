import React from 'react';
import useDidMount from './useDidMount';

export default function useUpdate(update: () => void, deps?: ReadonlyArray<any>) {
	const isMounted = React.useRef(false);

	useDidMount(() => {
		isMounted.current = true;
	});

	React.useEffect(
		() => {
			if (isMounted.current) {
				update();
			}
		},
		deps
	);
}
