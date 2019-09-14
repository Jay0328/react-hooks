import { renderHook } from '@testing-library/react-hooks';
import { useIsMounted } from '../useIsMounted';

describe('useIsMounted', () => {
	it('should be defined', () => {
		expect(useIsMounted).toBeDefined();
	});

	it('should be true after mounted and be false after unmounted', () => {
		const { result, rerender, unmount } = renderHook(() => useIsMounted());
		const isMounted = result.current;

		expect(isMounted).toEqual({ current: true });

		rerender();
		expect(isMounted).toEqual({ current: true });

		rerender();
		expect(isMounted).toEqual({ current: true });

		unmount();
		expect(isMounted).toEqual({ current: false });
	});
});
