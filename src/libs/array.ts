export function shuffle<T>(arr: T[]) {
	if (!Array.isArray(arr)) {
		throw new Error(`This isn't original array form!`);
	}
	const arrClone = [...arr];
	for (let i = arrClone.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let k = arrClone[i];
		arrClone[i] = arrClone[j];
		arrClone[j] = k;
	}
	return arrClone;
}
/**
 * Remove item from array
 * @param mainArray Main array where you perform
 * @param removableItem Which item should be removed
 * @param deleteCount Default 1 item delete
 * @returns modified array
 */
export function removeArrItem<T>(
	mainArray: T[],
	removableItem: T,
	deleteCount = 1
) {
	const indexToBeRemove = mainArray.indexOf(removableItem);
	mainArray.splice(indexToBeRemove, deleteCount);
	return mainArray;
}
/**
 * Remove item from object of array
 * @param mainArray Main Object of array
 * @param removableItem which item should be removed
 * @param deleteCount Default 1 item delete
 * @returns modified array
 */
export function removeObjectOfArrItem<T extends Record<string, unknown>>(
	mainArray: T[],
	removableItem: Partial<T>,
	deleteCount = 1
) {
	const indexToBeRemove = mainArray.findIndex((ma) => {
		let found = true;
		const keys = Object.keys(removableItem);
		keys.forEach((k) => {
			if (ma[k] !== removableItem[k]) found = false;
		});
		return found;
	});
	mainArray.splice(indexToBeRemove, deleteCount);
	return mainArray;
}
