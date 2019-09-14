import { useState, useCallback, Dispatch } from 'react';

export type SetPartialStateAction<T> = Partial<T> | ((prevState: T) => Partial<T>);

export function useSetState<T extends object>(
	initialState: T | (() => T)
): [T, Dispatch<SetPartialStateAction<T>>] {
	const [state, set] = useState(initialState);
	const setState = useCallback((action: SetPartialStateAction<T>) => set(prevState => ({
		...prevState,
		...(typeof action === 'function' ? action(prevState) : action),
	})), []);

	return [state, setState];
}
