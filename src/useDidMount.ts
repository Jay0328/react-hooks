import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useDidMount(didMount: () => void) {
	useIsomorphicLayoutEffect(() => {
		didMount();
	}, []);
}
