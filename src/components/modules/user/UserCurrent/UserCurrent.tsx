import { FC, useEffect } from 'react'
import styles from '../user.module.scss'
import { UserHead } from '../UserHead'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { useParams } from 'react-router-dom'
import { userState } from '@store/attachments/userStore/userStore.slice'
import { TelephoneIcon } from '@components/ui/icons/TelephoneIcon'
import { MailIcon } from '@components/ui/icons/MailIcon'
import { generatePhoneNumber } from '@utils/common.utils'
import { PageNotFound } from '@components/common/PageNotFound'

export const UserCurrent: FC = () => {

	const { id } = useParams()
	const { getUserCurrentThunk, clearUserCurrent } = useAppDispatch()
	const {
		userCurrent: {
			userCurrentData,
			userCurrentError,
			isUserCurrentLoading
		}
	} = useAppSelector(userState)

	let ignoreRequest = false

	useEffect(() => {
		id && !ignoreRequest && getUserCurrentThunk(id)

		return () => {
			clearUserCurrent()
			ignoreRequest = true
		}
	}, [])

	if (!userCurrentData) {
		if (!isUserCurrentLoading) {
			return (
				(userCurrentError === '404')
					? <PageNotFound isUserCurrentNotFound />
					: <PageNotFound
						errorMessage={ userCurrentError }
						onClick={ getUserCurrentThunk }
						id={ id }
					/>
			)
		} else return null
	}

	const {
		email,
		first_name,
		last_name,
		avatar,
		text
	} = userCurrentData

	const phoneNumber = generatePhoneNumber()

	return (
		<div>
			<UserHead>
				<div className={ styles.head_content_user }>
					<img
						src={ avatar }
						alt={ `Фото ${ first_name } ${ last_name }` }
					/>
					<div>
						<h1>{ `${ first_name } ${ last_name }` }</h1>
						<p>Партнер</p>
					</div>
				</div>
			</UserHead>

			<div className={ styles.current_user }>
				<p>
					{ text }
				</p>
				<div className={ styles.current_user_contacts }>
					<div>
						<TelephoneIcon />
						<a href={ `tel:${ phoneNumber }` }>{ phoneNumber }</a>
					</div>
					<div>
						<MailIcon />
						<a href={ `mailto:${ email }` }>{ email }</a>
					</div>
				</div>
			</div>
		</div>
	)
}
