//Sources:
//https://de.wikipedia.org/wiki/Sechseck
//https://www.redblobgames.com/grids/hexagons/

const translations = []

function round(n: number): number {
	return Math.round(n * 100) / 100
}

const a = 1,
	sv = 1.5 * a,
	sh = 1.732 * a,
	xOffsetOddRows = sh / 2,
	cv = 20,
	ch = 74

let y = 0
for (let row = 0; row < cv; row++) {
	let x = row % 2 ? xOffsetOddRows : 0
	for (let column = 0; column < ch; column++) {
		x += sh
		translations.push(round(x) + ',' + round(y))
	}
	y += sv
}

export default translations
