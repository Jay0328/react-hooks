import { renderHook } from '@testing-library/react-hooks';
import { useLatest } from '../useLatest';

interface TestProps {
	count: number;
}

describe('useLatest', () => {
	it('should be defined', () => {
		expect(useLatest).toBeDefined();
	});

	it('The current property of result of hook should be the same as parameter', () => {
		const { result, rerender } = renderHook<TestProps, ReturnType<typeof useLatest>>(
			props => useLatest(props.count),
			{ initialProps: { count: -1 } }
		);
		const latest = result.current;

		expect(latest.current).toEqual(-1);

		for (let i = 0; i < 10; i++) {
			expect(latest.current).toEqual(i - 1);
			rerender({ count: i });
			expect(latest.current).toEqual(i);
		}
	});
});
