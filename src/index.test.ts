import { emptyArray, numberArray } from '.';

describe('Initial Check', () => {
	const eArr = emptyArray(10);
	it('Should be array instance', () => {
		expect(Array.isArray(eArr)).toBeTruthy();
	});

	it('Should be length of 10 items', () => {
		expect(eArr.length).toBe(10);
	});

	const nArr = numberArray(10);

	it('Should be array instance', () => {
		expect(Array.isArray(nArr)).toBeTruthy();
	});

	it('Should be length of 10 items', () => {
		expect(nArr.length).toBe(10);
	});

	it('Should be 1,,,,,10', () => {
		expect(nArr.join()).toBe('1,2,3,4,5,6,7,8,9,10');
	});
});
