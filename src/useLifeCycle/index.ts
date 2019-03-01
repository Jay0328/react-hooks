import React from 'react';

export interface LifeCycle {
	didMount?: () => void;
	willUnmount?: () => void;
}

const useLifeCycle = (lifeCycle: LifeCycle) => {
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
};

export default useLifeCycle;
