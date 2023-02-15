import { FC, ReactNode } from 'react'

import styles from '../user.module.scss'
import { Button } from '@components/ui/Button'
import { deleteCookie } from '@utils/cookie.utils'
import { Cookies, LocalStorage } from '@consts/storage.consts'
import { useAppDispatch } from '@hooks/redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { PathsRoute } from '@consts/paths.consts'
import useLocalStorage from '@hooks/useLocalStorage'
import useResizeWidth from '@hooks/useResizeWidth'
import { BackButtonIcon } from '@components/ui/icons/BackButtonIcon'
import { ExitButtonIcon } from '@components/ui/icons/ExitButtonIcon'
import { ButtonTheme } from '@components/ui/Button/Button.consts'

interface IProps {
	children: ReactNode
}

export const UserHead: FC<IProps> = ({ children }) => {
	const matchesSize = useResizeWidth(1024)
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const { setIsAuthorized } = useAppDispatch()

	const [ lastUserListPath ] =
		useLocalStorage('', LocalStorage.LAST_USERLIST_PATH)

	const isUserCurrentPage = pathname.includes(PathsRoute.USER)

	const handleClickToExit = (): void => {
		deleteCookie(Cookies.TOKEN)
		setIsAuthorized(false)
		navigate(PathsRoute.LOGIN)
	}

	const handleClickToBack = (): void => {
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
						theme={ matchesSize ? ButtonTheme.ICON : ButtonTheme.WHITE }
						onClick={ handleClickToBack }
					>
						{
							matchesSize
								? <BackButtonIcon />
								: 'Назад'
						}
					</Button>
				}
				<Button
					theme={ matchesSize ? ButtonTheme.ICON : ButtonTheme.WHITE }
					classes={ styles.exit_button }
					onClick={ handleClickToExit }
				>
					{
						matchesSize
							? <ExitButtonIcon />
							: 'Выход'
					}
				</Button>
			</div>
			{ children }
		</div>
	)
}
