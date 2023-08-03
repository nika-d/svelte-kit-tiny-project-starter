export function getArrayIntersection<T>(array1: Array<T>, array2: Array<T>): Array<T> {
	return array1.filter((el) => array2.includes(el))
}

export function getArrayDiff(array1: Array<unknown>, array2: Array<unknown>): Array<unknown> {
	return array1
		.filter((a1) => !array2.find((a2) => a2 === a1))
		.concat(array2.filter((a2) => !array1.find((a1) => a1 === a2)))
}

export function sameMembers(arr1, arr2) {
	const set1 = new Set(arr1)
	const set2 = new Set(arr2)
	return arr1.every((item) => set2.has(item)) && arr2.every((item) => set1.has(item))
}
