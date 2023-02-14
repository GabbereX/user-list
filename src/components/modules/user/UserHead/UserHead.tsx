import { FC, ReactNode } from 'react'

import styles from '../user.module.scss'
import { Button } from '@components/ui/Button'
import { deleteCookie } from '@utils/cookie.utils'
import { Cookies, LocalStorage } from '@consts/storage.consts'
import { useAppDispatch } from '@hooks/redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { PathsRoute } from '@consts/paths.consts'
import useLocalStorage from '@hooks/useLocalStorage'

interface IProps {
	children: ReactNode
}

export const UserHead: FC<IProps> = ({ children }) => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { setIsAuthorized } = useAppDispatch()

	const [ lastUserListPath ] =
		useLocalStorage('', LocalStorage.LAST_USERLIST_PATH)

	const isUserCurrentPage = pathname.includes(PathsRoute.USER)

	const handleClickToExit = (): void => {
		deleteCookie(Cookies.TOKEN)
		setIsAuthorized(false)
	}

	const handleClickToBack = () => {
		console.log(lastUserListPath.length)
		lastUserListPath
			? navigate(-1)
			: navigate(PathsRoute.USERS)
	}

	return (
		<div className={ styles.head }>
			<div className={ styles.head_container }>
				{
					isUserCurrentPage &&
					<Button
						onClick={ handleClickToBack }
					>
						Назад
					</Button>
				}
				<Button
					classes={ styles.exit_button }
					onClick={ handleClickToExit }
				>
					Выход
				</Button>
			</div>
			{ children }
		</div>
	)
}
