import { FC } from 'react'

import styles from './PageNotFount.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from '@components/ui/Button'
import { ButtonTheme } from '@components/ui/Button/Button.consts'
import { PathsRoute } from '@consts/paths.consts'

interface IProps {
	isAuthorized: boolean
}

export const PageNotFound: FC<IProps> = ({ isAuthorized }) => {
	const navigate = useNavigate()
	const backButtonPath = isAuthorized ? '/users' : PathsRoute.LOGIN
	const backButtonText = isAuthorized
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
