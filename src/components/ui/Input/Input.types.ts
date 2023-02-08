import { Register } from '../../modules/auth/auth.consts'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

export type TInputType = 'text' | 'password' | 'email'

export interface IAuthInput {
	name: Register,
	label: string,
	type: TInputType,
	placeholder?: string
	validate?: RegisterOptions
}
