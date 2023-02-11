import { LoginFields, RegisterFields } from '../../modules/auth/auth.consts'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'

export type TInputType = 'text' | 'password' | 'email'

export interface IAuthInput {
	name: RegisterFields | LoginFields,
	label: string,
	type: TInputType,
	placeholder?: string
	validate?: RegisterOptions
}
