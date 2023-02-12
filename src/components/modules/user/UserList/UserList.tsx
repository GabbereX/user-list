import { FC } from 'react'
import { UserHead } from '../UserHead'
import { headDescription } from '../user.consts'

import styles from '../user.module.scss'

export const UserList: FC = () => {
	return (
		<div>
			<UserHead>
				<div className={ styles.head_content }>
					<h1>Наша Команда</h1>
					<p>{ headDescription }</p>
				</div>
			</UserHead>
			<ul>
				list
			</ul>
		</div>
	)
}
