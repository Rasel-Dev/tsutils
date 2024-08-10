import { debounce, throttle } from '..';

jest.useFakeTimers();

describe('throttle', () => {
	it('should only call the function once within the delay period', () => {
		const func = jest.fn();
		const throttledFunc = throttle(func, 1000);

		throttledFunc();
		throttledFunc();
		throttledFunc();

		expect(func).toHaveBeenCalledTimes(1);

		// Fast-forward time
		jest.advanceTimersByTime(1000);

		throttledFunc();
		expect(func).toHaveBeenCalledTimes(2);
	});
});

describe('debounce', () => {
	it('should only call the function after the delay period', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func, 1000);

		debouncedFunc();
		expect(func).not.toHaveBeenCalled();

		// Fast-forward time just before the delay ends
		jest.advanceTimersByTime(900);
		expect(func).not.toHaveBeenCalled();

		// Fast-forward time to after the delay
		jest.advanceTimersByTime(100);
		expect(func).toHaveBeenCalledTimes(1);
	});

	it('should reset the delay if called again within the delay period', () => {
		const func = jest.fn();
		const debouncedFunc = debounce(func, 1000);

		debouncedFunc();
		jest.advanceTimersByTime(500);
		debouncedFunc();
		jest.advanceTimersByTime(500);
		debouncedFunc();

		jest.advanceTimersByTime(1000);
		expect(func).toHaveBeenCalledTimes(1);
	});
});
