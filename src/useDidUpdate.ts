import React from 'react';

export default function useDidUpdate(didUpdate: () => void, deps?: ReadonlyArray<any>) {
	const isMounted = React.useRef(false);

	React.useEffect(
		() => {
			isMounted.current = true;
			return () => {
				isMounted.current = false;
			};
		},
		[]
	);

	React.useEffect(
		() => {
			if (isMounted.current) {
				didUpdate();
			}
		},
		deps
	);
}
