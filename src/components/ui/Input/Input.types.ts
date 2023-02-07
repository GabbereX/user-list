import { Register } from '../../modules/auth/auth.consts'

type TInputType = 'text' | 'password' | 'email'

export interface IAuthInput {
	name: Register,
	label: string,
	type: TInputType,
	placeholder?: string
}
