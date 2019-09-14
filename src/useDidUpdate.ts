import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Async callback is acceptable.
 * 
 * Use layout effect since fired in the same phase as `componentDidUpdate`.
 * 
 * The reason of not using isMounted hook provided by this project is since
 * the effect of isMounted must invoked before the layout effect of useDidUpdate.
 * So event if just on the did mount phase, the isMounted.current will always be true.
 */
export function useDidUpdate(didUpdate: () => void, deps?: ReadonlyArray<any>) {
	const isMounted = useRef(false);

	useIsomorphicLayoutEffect(
		() => {
			if (isMounted.current) {
				didUpdate();
			} else {
				isMounted.current = true;
			}
		},
		deps
	);
}
