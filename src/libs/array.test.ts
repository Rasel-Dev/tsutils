import { removeArrItem, removeObjectOfArrItem, shuffle } from '..';

const arry = [1, 2, 3, 4, 5];
const objArr = [
	{ id: 1, name: 'Html' },
	{ id: 2, name: 'Css' },
	{ id: 3, name: 'Javascript' },
];
describe('Array shuffle', () => {
	const arr = shuffle(arry);

	it('Should be return Array length 5', () => {
		expect(arr.length).toBe(5);
	});
	it('Should be return shuffled Array', () => {
		expect(arr.join() !== arry.join()).toBeTruthy();
	});
});
describe('Array removeArrItem', () => {
	const remArrItm = removeArrItem(arry, 2);
	it('Should be return Array length 4', () => {
		expect(remArrItm.length).toBe(4);
	});
	it('Item should be removed', () => {
		expect(remArrItm.indexOf(2)).toBe(-1);
	});
});
describe('Array removeArrItem', () => {
	const remArrItm = removeObjectOfArrItem(objArr, { id: 2 });
	it('Should be return Array length 2', () => {
		expect(remArrItm.length).toBe(2);
	});
	it('Item should be removed', () => {
		expect(remArrItm.findIndex((a) => a.id === 2)).toBe(-1);
	});
});
