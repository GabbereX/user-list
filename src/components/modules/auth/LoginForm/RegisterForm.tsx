import { FC } from 'react'

import { useForm } from 'react-hook-form'

import { Input } from '@components/ui/Input'
import { Button } from '@components/ui/Button'

import { Register, registerFormOptions } from '@components/modules/auth/auth.consts'
import { ButtonTheme } from '@components/ui/Button/Button.consts'

export const RegisterForm: FC = () => {
	const form = useForm<Record<Register, string>>()
	const { handleSubmit } = form

	const onSubmit = (data: any) => {
		console.log(data)
	}

	return (
		<form onSubmit={ handleSubmit(onSubmit) }>
			{
				registerFormOptions.map((options, index) =>
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
				Зарегистрироваться
			</Button>
		</form>
	)
}
