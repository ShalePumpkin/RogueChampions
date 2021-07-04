export function randomItem (items : any[]) : any {
	return items[Math.floor(Math.random() * items.length)]
}

export function randomItemType<T> (items : T[]) : T {
	return items[Math.floor(Math.random() * items.length)]
}

export function randomItemClone<T> (items : T[]) : T {
	const item = items[Math.floor(Math.random() * items.length)]
	return {...item}
}

export function getRandomInt (min : number, max : number, rnd: () => number = Math.random) : number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(rnd() * (max - min + 1)) + min;
}

export function randomChance (percentChance : number) : boolean {
	return getRandomInt(1, 100) <= percentChance
}

export function shuffle (a : any, rnd: () => number = Math.random) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(rnd() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

export function randomItemsExcluding<T extends number | string> (
	num : number,
	possible : T[],
	excluding : T[],
	deprioritize : T[] = [],
	rnd: () => number = Math.random
) : T[] {
	let dpIndex = 0
	let noLoop = 0
	const excludeClone = [...excluding]
	while (deprioritize[dpIndex] && possible.length - excludeClone.length > num) {
		excludeClone.push(deprioritize[dpIndex])
		dpIndex++
		noLoop++
		if (noLoop > 10000) {
			break
		}
	}

	const picked : T[] = []
	const clonePossible : T[] = possible.map((item) => {
		return item
	}).filter((poss) => {
		return excludeClone.indexOf(poss) === -1
	})
	const numToGrab = Math.min(clonePossible.length, num)
	for (var i = 1; i <= numToGrab; i++) {
		let index : number
		let dontInfinite = 1
		let item : T
		do {
			index = getRandomInt(0, clonePossible.length - 1)
			item = clonePossible[index]
			dontInfinite++
		} while (excludeClone.indexOf(item) !== -1 && dontInfinite <= 10000)
		picked.push(item)
		clonePossible.splice(index, 1)
	}
	return picked
}

export const percentChance = (percent: number) : boolean  => {
	return getRandomInt(0, 100) <= percent
}
