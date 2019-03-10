import React from 'react';

export default function useUnmount(unmount: () => void) {
	React.useEffect(() => unmount, []);
}
