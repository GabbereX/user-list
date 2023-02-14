import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@components/ui/Button'

import { ButtonTheme } from '@components/ui/Button/Button.consts'
import { PathsRoute } from '@consts/paths.consts'

import styles from './PageNotFount.module.scss'
import { useAppSelector } from '@hooks/redux'
import { authState } from '@store/attachments/authStore/authStore.slice'

interface IProps {
	isUserCurrentNotFound?: boolean
	errorMessage?: string
	onClick?: (id: string) => void
	id?: string
}

export const PageNotFound: FC<IProps> = ({
	isUserCurrentNotFound,
	errorMessage,
	onClick,
	id
}) => {
	const { isAuthorized } = useAppSelector(authState)
	const navigate = useNavigate()
	const backButtonPath = isAuthorized
		? PathsRoute.USERS
		: PathsRoute.LOGIN
	const backButtonText = isAuthorized
		? 'Перейти в список пользователей'
		: 'Перейти к авторизации'

	const getErrorMessage = (): string => {
		if (isUserCurrentNotFound) {
			return 'Пользователь не найден'
		}

		if (errorMessage) {
			return errorMessage
		}

		return 'Данная страница не доступна'
	}

	return (
		<div className={ styles.root }>
			<span>
				{ getErrorMessage() }
			</span>
			<div className={ styles.buttons_group }>
				<Button
					theme={ ButtonTheme.VIOLET }
					onClick={ () => navigate(backButtonPath) }
					isSmallButton
				>
					{ backButtonText }
				</Button>
				{
					errorMessage &&
					<Button
						theme={ ButtonTheme.VIOLET }
						onClick={ () => id && onClick?.(id) }
						isSmallButton
					>
						Загрузить пользователя еще раз
					</Button>
				}
			</div>
		</div>
	)
}
