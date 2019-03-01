import React from 'react';
import ReactDOM from 'react-dom';

type ContainerRefType = React.RefObject<React.ReactInstance>;

export type ContainerType =
	| React.ReactInstance
	| ContainerRefType;

const isContainerAsRef = (container: ContainerType): container is ContainerRefType => (
	(container as ContainerRefType).current !== undefined
);

const getContainerElement = (container: ContainerType): Element | null => {
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
};

const useContainer = (container: ContainerType) => {
	const [element, setElement] = React.useState<Element | null>(getContainerElement(container));
	React.useEffect(
		() => setElement(getContainerElement(container)),
		isContainerAsRef(container) ? [container.current] : [container]
	);
	return element;
};

export default useContainer;
