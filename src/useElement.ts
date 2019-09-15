import { RefObject, useState } from 'react';
import { useDidUpdate } from './useDidUpdate';

export type ElementRef = RefObject<HTMLElement>;
export type GetElement = () => HTMLElement;
export type ElementParameter =
	| HTMLElement
	| ElementRef
	| GetElement;

function isElementParameterAsRef(param: ElementParameter): param is ElementRef {
	return (param as ElementRef).hasOwnProperty('current');
}

function getElement(param: ElementParameter) {
	if (param instanceof HTMLElement) {
		return param;
	} else if (isElementParameterAsRef(param)) {
		return param.current;
	}

	return param();
}

export function useElement(param: ElementParameter) {
	const [element, setElement] = useState<HTMLElement | null>(() => getElement(param));

	useDidUpdate(() => {
		const newElement = getElement(param);

		if (element !== newElement) {
			setElement(newElement);
		}
	}, isElementParameterAsRef(param) ? [param.current] : [param]);

	return element;
}
