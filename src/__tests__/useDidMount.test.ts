import { renderHook } from '@testing-library/react-hooks';
import { useDidMount } from '../useDidMount';

describe('useDidMount', () => {
	it('should be defined', () => {
		expect(useDidMount).toBeDefined();
	});

	it('should be called on did mount and won\'t be called on unmount', () => {
		const fn = jest.fn();
		const { rerender, unmount } = renderHook(() => useDidMount(fn));

		expect(fn).toBeCalled();
		expect(fn).toBeCalledTimes(1);

		rerender();
		expect(fn).toBeCalledTimes(1);

		unmount();
		expect(fn).toBeCalledTimes(1);
	});
});
