import { renderHook } from '@testing-library/react-hooks';
import { useLatestCallback } from '../useLatestCallback';

interface TestProps {
	calculator: (num: number) => number;
}

describe('useLatestCallback', () => {
	it('However the callback passed to it changed, the result of useLatestCallback won\'t changed', () => {
		const { result, rerender } = renderHook<TestProps, TestProps['calculator']>(
			props => useLatestCallback(props.calculator),
			{ initialProps: { calculator: num => num + 1 } }
		);
		const firstCallback = result.current;

		rerender({ calculator: num => num + 2 });
		expect(result.current).toBe(firstCallback);
		rerender({ calculator: num => num + 3 });
		expect(result.current).toBe(firstCallback);
	});

	it('Keep the behavior of the result of useLatestCallback be the same as the latest passed callback', () => {
		const addOne = jest.fn(num => num + 1);
		const addTwo = jest.fn(num => num + 2);
		const { result, rerender } = renderHook<TestProps, TestProps['calculator']>(
			props => useLatestCallback(props.calculator),
			{ initialProps: { calculator: addOne } }
		);

		result.current(1);
		expect(addOne).toBeCalledTimes(1);
		expect(addOne).toHaveBeenLastCalledWith(1);
		expect(addOne).toHaveLastReturnedWith(2);

		result.current(2);
		expect(addOne).toBeCalledTimes(2);
		expect(addOne).toHaveBeenLastCalledWith(2);
		expect(addOne).toHaveLastReturnedWith(3);

		rerender({ calculator: addTwo });

		result.current(1);
		/**
		 * add one function won't be called anymore.
		 */
		expect(addOne).toBeCalledTimes(2);
		expect(addTwo).toBeCalledTimes(1);
		expect(addTwo).toHaveBeenLastCalledWith(1);
		expect(addTwo).toHaveLastReturnedWith(3);

		result.current(2);
		expect(addTwo).toBeCalledTimes(2);
		expect(addTwo).toHaveBeenLastCalledWith(2);
		expect(addTwo).toHaveLastReturnedWith(4);
	});

	it('should be async if async option is on.', async () => {
		const sleep = (ms: number) => new Promise(resolve => setTimeout(() => resolve(), ms));
		const test = async (num: number) => {
			await sleep(1000);
			return num;
		};
		const { result } = renderHook(() => useLatestCallback(test, { async: true }));

		expect(await result.current(1)).toBe(1);
		expect(await result.current(2)).toBe(2);
	});
});
