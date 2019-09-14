import { renderHook, act } from '@testing-library/react-hooks';
import { useForceUpdate } from '../useForceUpdate';

describe('useForceUpdate', () => {
	it('should be defined', () => {
		expect(useForceUpdate).toBeDefined();
	});

	it('should init update function', () => {
		const { result } = renderHook(() => useForceUpdate());
		const update = result.current;

		expect(update).toBeInstanceOf(Function);
	});

	it('should forces a re-render every time update function is called', () => {
		let renderCount = 0;
		const { result } = renderHook(() => {
			renderCount++;
			return useForceUpdate();
		});
		const update = result.current;

		expect(renderCount).toBe(1);

		act(() => update());
		expect(renderCount).toBe(2);

		act(() => update());
		expect(renderCount).toBe(3);
	});
});
