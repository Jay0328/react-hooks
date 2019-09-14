import { useLatest } from './useLatest';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useUnmount(callback: () => void) {
	const unmount = useLatest(callback);

	useIsomorphicLayoutEffect(() => () => {
		if (unmount.current) {
			unmount.current();
		}
	}, []);
}
