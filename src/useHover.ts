import {
	ReactElement,
	MouseEventHandler,
	cloneElement,
	useState,
	useCallback,
} from 'react';

export type HoverElement<P> = ((state: boolean) => ReactElement<P>) | ReactElement<P>;

export interface UseHoverElementProps {
	onMouseEnter?: MouseEventHandler;
	onMouseLeave?: MouseEventHandler;
}

export function useHover<P extends UseHoverElementProps>(
	originElment: HoverElement<P>
): [ReactElement<P>, boolean] {
	const [hover, setHover] = useState(false);
	const element = typeof originElment === 'function' ?
		originElment(hover) :
		originElment;
	const onMouseEnter = useCallback<MouseEventHandler>(event => {
		setHover(true);

		if (element.props.onMouseEnter) {
			element.props.onMouseEnter(event);
		}
	}, [element.props.onMouseEnter]);
	const onMouseLeave = useCallback<MouseEventHandler>(event => {
		setHover(false);

		if (element.props.onMouseLeave) {
			element.props.onMouseLeave(event);
		}
	}, [element.props.onMouseLeave]);
	const el = cloneElement(element, { onMouseEnter, onMouseLeave } as Partial<P>);

	return [el, hover];
}
