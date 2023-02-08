export const getMinOrMaxLength = (
	value: number,
	isMinLenghth: boolean = true
): {
	value: number,
	message: string
} => (
	{
		value,
		message: `
			Поле не может содержать 
			${ isMinLenghth ? 'менее' : 'более' } 
			${ value } символов
		`
	}
)
