import React from 'react';
import ReactDOM from 'react-dom';

type ElementRefType = React.RefObject<React.ReactInstance>;

export type ElementType =
	| React.ReactInstance
	| ElementRefType;

function isElementAsRef(element: ElementType): element is ElementRefType {
	return (element as ElementRefType).current !== undefined;
}

function getElement(element: ElementType): Element | null {
	if (!element) {
		return null;
	} else if (element instanceof Element) {
		return element;
	} else if (typeof element !== 'object') {
		return null;
	}

	if (isElementAsRef(element)) {
		return element.current ? (ReactDOM.findDOMNode(element.current) as Element) : null;
	}

	return ReactDOM.findDOMNode(element) as Element;
}

export default function useElement(element: ElementType): Element | null {
	const [el, setElement] = React.useState<Element | null>(getElement(element));
	React.useEffect(
		() => setElement(getElement(element)),
		isElementAsRef(element) ? [element.current] : [element]
	);
	return el;
}
