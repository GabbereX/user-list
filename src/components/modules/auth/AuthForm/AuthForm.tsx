import { FC, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { Input } from '@components/ui/Input'
import { Button } from '@components/ui/Button'

import {
	LoginFields,
	loginFormOptions,
	RegisterFields,
	registerFormOptions
} from '@components/modules/auth/auth.consts'
import { ButtonTheme } from '@components/ui/Button/Button.consts'
import { pathsAPI } from '@consts/paths.consts'

import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { authState } from '@store/attachments/authStore/authStore.slice'
import { TAuthData } from '@components/modules/auth/auth.types'

import styles from '../auth.module.scss'

interface IProps {
	isLogin: boolean
}

export const AuthForm: FC<IProps> = ({ isLogin }) => {
	const { authError } = useAppSelector(authState)
	const { getTokenThunk, setAuthError } = useAppDispatch()

	const { pathname } = useLocation()

	const form = useForm<TAuthData>()
	const { handleSubmit } = form

	const inputs = isLogin
		? loginFormOptions
		: registerFormOptions

	const onSubmit = (data: TAuthData) => {
		const fetchPath = isLogin
			? pathsAPI.login
			: pathsAPI.register

		const fetchData = {
			email:
				data[RegisterFields.EMAIL]
				|| data[LoginFields.EMAIL],
			password:
				data[RegisterFields.PASSWORD]
				|| data[LoginFields.PASSWORD]
		}

		setAuthError('')

		getTokenThunk({
			path: fetchPath,
			data: fetchData
		})
	}

	useEffect(() => {
		setAuthError('')
	}, [ pathname ])

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

			{
				authError &&
				<div
					className={ styles.error }
				>
					{ authError }
				</div>
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
