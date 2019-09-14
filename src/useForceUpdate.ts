import { useReducer } from 'react';

export function useForceUpdate() {
	return useReducer(s => s + 1, 0)[1] as () => void;
}
