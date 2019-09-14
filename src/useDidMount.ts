import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Async callback is acceptable.
 * 
 * Use layout effect since fired in the same phase as `componentDidMount`.
 */
export function useDidMount(didMount: () => void) {
	useIsomorphicLayoutEffect(() => {
		didMount();
	}, []);
}
