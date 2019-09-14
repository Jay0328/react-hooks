import { renderHook } from '@testing-library/react-hooks';
import { useDidUpdate } from '../useDidUpdate';

describe('useDidUpdate', () => {
	it('should be defined', () => {
		expect(useDidUpdate).toBeDefined();
	});

	it('should not be called on did mount and won\'t be called on unmount', () => {
		const fn = jest.fn();
		const { unmount } = renderHook(() => useDidUpdate(fn));

		expect(fn).toBeCalledTimes(0);

		unmount();
		expect(fn).toBeCalledTimes(0);
	});

	it('w/o deps', () => {
		const fn = jest.fn();
		const { rerender } = renderHook(() => useDidUpdate(fn));

		expect(fn).toBeCalledTimes(0);

		for (let i = 1; i < 3; i++) {
			rerender();
			expect(fn).toBeCalledTimes(i);
		}
	});

	it('w/ deps', () => {
		interface TestProps {
			count: number;
		}

		const fn = jest.fn();
		const { rerender } = renderHook<TestProps, void>(
			props => useDidUpdate(fn, [props.count]),
			{ initialProps: { count: 1 } }
		);

		expect(fn).toBeCalledTimes(0);

		/**
		 * deps not changed.
		 */
		rerender({ count: 1 });
		expect(fn).toBeCalledTimes(0);
		rerender({ count: 1 });
		expect(fn).toBeCalledTimes(0);

		/**
		 * deps changed.
		 */
		rerender({ count: 2 });
		expect(fn).toBeCalledTimes(1);
		rerender({ count: 2 });
		expect(fn).toBeCalledTimes(1);
		rerender({ count: 3 });
		expect(fn).toBeCalledTimes(2);
	});
});
