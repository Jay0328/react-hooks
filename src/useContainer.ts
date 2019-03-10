import React from 'react';
import ReactDOM from 'react-dom';

type ContainerRefType = React.RefObject<React.ReactInstance>;

export type ContainerType =
	| React.ReactInstance
	| ContainerRefType;

function isContainerAsRef(container: ContainerType): container is ContainerRefType {
	return (container as ContainerRefType).current !== undefined;
}

function getContainerElement(container: ContainerType): Element | null {
	if (!container) {
		return null;
	} else if (container instanceof Element) {
		return container;
	} else if (typeof container !== 'object') {
		return null;
	}

	if (isContainerAsRef(container)) {
		return container.current ? (ReactDOM.findDOMNode(container.current) as Element) : null;
	}

	return ReactDOM.findDOMNode(container) as Element;
}

export default function useContainer(container: ContainerType): Element | null {
	const [element, setElement] = React.useState<Element | null>(getContainerElement(container));
	React.useEffect(
		() => setElement(getContainerElement(container)),
		isContainerAsRef(container) ? [container.current] : [container]
	);
	return element;
}
