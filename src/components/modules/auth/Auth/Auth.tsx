import { FC } from 'react'
import { Link } from 'react-router-dom'

import { AuthForm } from '../AuthForm'

import { PathsRoute } from '@consts/paths.consts'

import styles from '../auth.module.scss'

interface IProps {
	path: PathsRoute
}

export const Auth: FC<IProps> = ({ path }) => {
	const isLogin = path === PathsRoute.LOGIN

	return (
		<div className={ styles.root }>
			<div className={ styles.root_form }>
				<h2>
					{
						path === PathsRoute.LOGIN
							? 'Авторизация'
							: 'Регистрация'
					}
				</h2>
				<AuthForm isLogin={ isLogin } />
				<Link
					to={ isLogin ? PathsRoute.REGISTER : PathsRoute.LOGIN }
					className={ styles.link }
				>
					{
						isLogin
							? 'Перейти в регистрацию'
							: 'Перейти в авторизацию'
					}
				</Link>
			</div>
		</div>
	)
}
