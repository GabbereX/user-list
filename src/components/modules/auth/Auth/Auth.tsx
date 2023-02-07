import { FC } from 'react'

import styles from '../auth.module.scss'

import { RegisterForm } from '../LoginForm'

export const Auth: FC = () => {

	return (
		<div className={ styles.root }>
			<div className={ styles.root_form }>
				<h2>Регистрация</h2>
				<RegisterForm />
			</div>
		</div>
	)
}
