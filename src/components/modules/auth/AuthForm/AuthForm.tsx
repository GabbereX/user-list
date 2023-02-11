import { FC } from 'react'

import { useForm } from 'react-hook-form'

import { Input } from '@components/ui/Input'
import { Button } from '@components/ui/Button'

import { Login, loginFormOptions, Register, registerFormOptions } from '@components/modules/auth/auth.consts'
import { ButtonTheme } from '@components/ui/Button/Button.consts'
import { TAuthData } from '@components/modules/auth/auth.types'
import { getToken } from '../../../../service'
import { paths } from '../../../../service/service.consts'

interface IProps {
	isLogin: boolean
}

export const AuthForm: FC<IProps> = ({ isLogin }) => {
	const form = useForm<TAuthData>()
	const { handleSubmit } = form

	const inputs = isLogin
		? loginFormOptions
		: registerFormOptions

	const onSubmit = (data: TAuthData) => {
		const fetchData = {
			// 'username': data[Register.NAME],
			'email': data[Register.EMAIL] || data[Login.EMAIL],
			'password': data[Register.PASSWORD] || data[Login.PASSWORD]
		}

		getToken(paths.register, fetchData)
			.then((token) => console.log(token))
		console.log(data)

		// setCookie('token', '00000000')
	}

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			{
				inputs.map((options, index) =>
					<Input
						key={ index }
						options={ options }
						useForm={ form }
					/>
				)
			}

			<Button
				theme={ ButtonTheme.VIOLET }
			>
				{
					isLogin
						? 'Авторизироваться'
						: 'Зарегистрироваться'
				}
			</Button>
		</form>
	)
}
