export function getNumToPercent(partialNum: number, totalNum: number) {
	if (partialNum > totalNum) {
		throw new Error(`You can't get percentage of ${partialNum} > ${totalNum}`);
	}
	return +((100 * partialNum) / totalNum);
}

export function getPercentToNum(percentNum: number, totalNum: number) {
	// if (partialNum > totalNum) {
	// 	throw new Error(`You can't get percentage of ${partialNum} > ${totalNum}`);
	// }
	return +((totalNum / 100) * percentNum);
}

export function getRandInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
