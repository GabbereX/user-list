import { IAuthInput } from '@components/ui/Input/Input.types'
import { getMinOrMaxLength } from '@components/modules/auth/auth.utils'

export const enum Auth {
	REGISTER = 'register',
	LOGIN = 'login'
}

export const enum Register {
	NAME = 'register_form_name',
	EMAIL = 'register_form_email',
	PASSWORD = 'register_form_password',
	REPEAT_PASSWORD = 'register_form_repeat_password'
}

const emailRegExp = '/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/'

export const registerFormOptions: IAuthInput[] = [
	{
		name: Register.NAME,
		label: 'Имя',
		type: 'text',
		placeholder: 'Артур',
		validate: {
			minLength: getMinOrMaxLength(2),
			maxLength: getMinOrMaxLength(32, true)
		}
	},
	{
		name: Register.EMAIL,
		label: 'Электронная почта',
		type: 'email',
		placeholder: 'example@mail.ru',
		validate: {
			pattern: {
				value: emailRegExp,
				message: 'fsa'
			}
		}
	},
	{
		name: Register.PASSWORD,
		label: 'Пароль',
		type: 'password',
		validate: {
			minLength: getMinOrMaxLength(6),
			maxLength: getMinOrMaxLength(64, true)
		}
	},
	{
		name: Register.REPEAT_PASSWORD,
		label: 'Повторите пароль',
		type: 'password',
		validate: {
			minLength: getMinOrMaxLength(6),
			maxLength: getMinOrMaxLength(64, true)
		}
	}
]
