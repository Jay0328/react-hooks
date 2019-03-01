import React from 'react';

export type SetStateCallback = () => void;

export type SetStateWithCallback<T> = (
	newValue: React.SetStateAction<T>,
	callback?: SetStateCallback
) => void;

const useStateWithCallback = <T>(value: T | (() => T)): [T, SetStateWithCallback<T>] => {
	const [state, setState] = React.useState(value);
	const callbackRef = React.useRef<SetStateCallback | null>(null);
	const setStateWithCallback = React.useCallback<SetStateWithCallback<T>>(
		(newValue, callback) => {
			callbackRef.current = callback || null;
			setState(newValue);
		},
		[]
	);

	React.useEffect(() => {
		if (callbackRef.current) {
			callbackRef.current();
			callbackRef.current = null;
		}
	});

	return [state, setStateWithCallback];
};

export default useStateWithCallback;
