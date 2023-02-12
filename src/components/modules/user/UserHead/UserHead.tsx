import { FC, ReactNode } from 'react'

import styles from '../user.module.scss'
import { Button } from '@components/ui/Button'
import { deleteCookie } from '../../../../utils/cookie.utils'
import { Cookies } from '@consts/storage.consts'
import { useAppDispatch } from '@hooks/redux'

interface IProps {
	children: ReactNode
}

export const UserHead: FC<IProps> = ({ children }) => {
	const { setIsAuthorized } = useAppDispatch()

	const handleClick = (): void => {
		deleteCookie(Cookies.TOKEN)
		setIsAuthorized(false)
	}

	return (
		<div className={ styles.head }>
			<div>
				<Button
					classes={ styles.exit_button }
					onClick={ handleClick }
				>
					Выход
				</Button>
			</div>
			{ children }
		</div>
	)
}
