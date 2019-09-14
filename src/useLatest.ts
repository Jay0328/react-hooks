import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useLatest<T>(value: T): { readonly current: T } {
	const ref = useRef<T>(value);

	useIsomorphicLayoutEffect(() => {
		ref.current = value;
	});

	return ref;
}
