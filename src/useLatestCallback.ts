import { useCallback } from 'react';
import { useLatest } from './useLatest';

export interface UseLatestCallbackOptions {
	async?: boolean;
}

export function useLatestCallback<F extends (...args: any[]) => any>(
	fn: F,
	options: UseLatestCallbackOptions = {}
): (...args: Parameters<F>) => ReturnType<F> {
	const callback = useLatest(fn);
	return useCallback(
		options.async ?
			async (...args) => await callback.current.apply(null, args) :
			(...args) => callback.current.apply(null, args),
		[options.async]
	);
}
