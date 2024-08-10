import { getNumToPercent, getPercentToNum } from '..';

const numToPer = getNumToPercent(100, 1000);
const perToNum = getPercentToNum(10, 1000);

describe('Type Check', () => {
	it('Should be return number - 1', () => {
		expect(typeof numToPer).toBe('number');
	});
	it('Should be return number - 2', () => {
		expect(typeof perToNum).toBe('number');
	});
});
describe('Value Check', () => {
	it('Should be return 10%', () => {
		expect(numToPer).toBe(10);
	});
	it('Should be return 100', () => {
		expect(perToNum).toBe(100);
	});
});
