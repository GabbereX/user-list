import { FC, useState } from 'react'

import { UseFormReturn } from 'react-hook-form'
import { IAuthInput, TInputType } from '@components/ui/Input/Input.types'

import { HideShowPasswordIcon } from '@components/ui/icons/HideShowPasswordIcon'
import { Register } from '@components/modules/auth/auth.consts'

import styles from './Input.module.scss'

interface IProps {
	options: IAuthInput
	useForm: UseFormReturn<Record<Register, string>>
}

export const Input: FC<IProps> = ({ options, useForm }) => {
	const { name, label, type, placeholder } = options
	const { register, setFocus, watch } = useForm

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

		console.log(watch(Register.REPEAT_PASSWORD))
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
					minLength: {
						value: 5,
						message: 'Минимум 5 символов'
					},
					pattern: '/[A-Za-z]{3}/'
				}) }
			/>
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
