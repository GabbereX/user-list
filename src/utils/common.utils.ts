export const generateNumber = (countNumber: number): string =>
	Math.random().toString().slice(-countNumber)

export const generatePhoneNumber = (): string => {
	const randomNumber = generateNumber(9)

	const num = (start: number, end: number): string =>
		randomNumber.substring(start, end)

	return `+7 (9${ num(0, 2) }) ${ num(2, 5) }-${ num(5, 7) }-${ num(7, 9) }`
}
