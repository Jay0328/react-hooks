import React from 'react';

export interface LifeCycle {
	didMount?: () => void;
	willUnmount?: () => void;
}

export default function useLifeCycle(lifeCycle: LifeCycle) {
	React.useEffect(
		() => {
			if (lifeCycle.didMount) {
				lifeCycle.didMount();
			}

			if (lifeCycle.willUnmount) {
				return lifeCycle.willUnmount;
			}

			return undefined;
		},
		[]
	);
}
