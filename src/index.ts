export function emptyArray(len: number) {
	return Array.from({ length: len });
}

export function numberArray(len: number) {
	return emptyArray(len).map((_, i) => i + 1);
}
