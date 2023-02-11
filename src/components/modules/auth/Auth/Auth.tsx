import { FC } from 'react'

import styles from '../auth.module.scss'

import { AuthForm } from '../AuthForm'
import { AuthPath } from '@components/modules/auth/auth.consts'
import { Link } from 'react-router-dom'

interface IProps {
	path: AuthPath
}

export const Auth: FC<IProps> = ({ path }) => {
	const isLogin = path === AuthPath.LOGIN

	return (
		<div className={ styles.root }>
			<div className={ styles.root_form }>
				<h2>
					{
						path === AuthPath.LOGIN
							? 'Авторизация'
							: 'Регистрация'
					}
				</h2>
				<AuthForm isLogin={ isLogin } />
				<Link
					to={ isLogin ? AuthPath.REGISTER : AuthPath.LOGIN }
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
