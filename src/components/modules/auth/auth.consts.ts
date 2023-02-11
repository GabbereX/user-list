import { IAuthInput } from '@components/ui/Input/Input.types'
import { getMinOrMaxLength } from '@components/modules/auth/auth.utils'

export const enum AuthPath {
	REGISTER = '/register',
	LOGIN = '/login'
}

export const enum Register {
	NAME = 'register_field_name',
	EMAIL = 'register_field_email',
	PASSWORD = 'register_field_password',
	REPEAT_PASSWORD = 'register_field_repeat_password'
}

export const enum Login {
	EMAIL = 'login_field_email',
	PASSWORD = 'login_field_password'
}

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

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
				message: 'Неверный формат электронной почты'
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

export const loginFormOptions: IAuthInput[] = [
	{
		name: Login.EMAIL,
		label: 'Электронная почта',
		type: 'email',
		placeholder: 'example@mail.ru',
		validate: {
			pattern: {
				value: emailRegExp,
				message: 'Неверный формат электронной почты'
			}
		}
	},
	{
		name: Login.PASSWORD,
		label: 'Пароль',
		type: 'password',
		validate: {
			minLength: getMinOrMaxLength(6),
			maxLength: getMinOrMaxLength(64, true)
		}
	}
]
