import { FC } from 'react'

import styles from './PageNotFount.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from '@components/ui/Button'
import { ButtonTheme } from '@components/ui/Button/Button.consts'
import { AuthPath } from '@components/modules/auth/auth.consts'

interface IProps {
	token?: string
}

export const PageNotFound: FC<IProps> = ({ token }) => {
	const navigate = useNavigate()
	const backButtonPath = token ? '/users' : AuthPath.LOGIN
	const backButtonText = token
		? 'Перейти в список пользователей'
		: 'Перейти к авторизации'

	return (
		<div className={ styles.root }>
			<span>
				Данная страница не доступна
			</span>
			<Button
				theme={ ButtonTheme.VIOLET }
				onClick={ () => navigate(backButtonPath) }
				classes={ styles.button }
			>
				{ backButtonText }
			</Button>
		</div>
	)
}
