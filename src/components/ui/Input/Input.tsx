import { FC, useState } from 'react'

import { UseFormReturn } from 'react-hook-form'
import { IAuthInput, TInputType } from '@components/ui/Input/Input.types'

import { HideShowPasswordIcon } from '@components/ui/icons/HideShowPasswordIcon'
import { RegisterFields } from '@components/modules/auth/auth.consts'

import styles from './Input.module.scss'
import { TAuthData } from '@components/modules/auth/auth.types'

interface IProps {
	options: IAuthInput
	useForm: UseFormReturn<TAuthData>
}

export const Input: FC<IProps> = ({ options, useForm }) => {
	const { name, label, type, placeholder, validate } = options
	const { register, setFocus, watch, formState: { errors } } = useForm

	const [ isHidePassword, setIsHidePassword ] = useState<boolean>(true)

	const isPassword = type === 'password'

	const getType = (): TInputType => {
		if (isPassword)
			return isHidePassword ? 'password' : 'text'

		return type
	}

	const handleClickHidePasswordButton = async(): Promise<void> => {
		await setIsHidePassword(!isHidePassword)

		setFocus(name)
	}

	return (
		<label
			className={ styles.label }
		>
			<span>{ label }</span>
			<input
				className={ styles.input }
				type={ getType() }
				placeholder={ placeholder }
				{ ...register(name, {
					required: 'Поле обязательно к заполнению',
					...validate,
					validate: (value: string) => {
						if (
							name === RegisterFields.REPEAT_PASSWORD
							&& value !== watch(RegisterFields.PASSWORD)
						) return 'Пароли не совпадают'
					}
				}) }
				style={ { borderColor: errors[name]?.message && 'var(--red)' } }
			/>
			{
				errors[name] &&
				<span className={ styles.error }>
					{ errors[name]?.message || 'Ошибка' }
				</span>
			}
			{
				isPassword &&
				<button
					className={ styles.hide_password_button }
					type='button'
					onClick={ () => handleClickHidePasswordButton() }
				>
					<HideShowPasswordIcon />
				</button>
			}
		</label>
	)
}
