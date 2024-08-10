export function throttle<T>(func: Function, delay: number) {
	let lastCall = 0;
	return function (...args: T[]) {
		const now = new Date().getTime();
		if (now - lastCall >= delay) {
			func(...args);
			lastCall = now;
		}
	};
}

export function debounce<T>(func: Function, delay: number) {
	let timeoutId: number;
	return function (...args: T[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
}
