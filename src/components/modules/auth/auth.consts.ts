import { IAuthInput } from '@components/ui/Input/Input.types'

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

export const registerFormOptions: IAuthInput[] = [
	{
		name: Register.NAME,
		label: 'Имя',
		type: 'text',
		placeholder: 'Артур'
	},
	{
		name: Register.EMAIL,
		label: 'Электронная почта',
		type: 'email',
		placeholder: 'example@mail.ru'
	},
	{
		name: Register.PASSWORD,
		label: 'Пароль',
		type: 'password'
	},
	{
		name: Register.REPEAT_PASSWORD,
		label: 'Повторите пароль',
		type: 'password'
	}
]
