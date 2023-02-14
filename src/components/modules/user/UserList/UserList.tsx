import { FC, Fragment, useEffect } from 'react'
import { UserHead } from '../UserHead'
import { headDescription } from '../user.consts'

import styles from '../user.module.scss'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { userState } from '@store/attachments/userStore/userStore.slice'
import { UserItem } from '@components/modules/user/UserItem'
import useLocalStorage from '@hooks/useLocalStorage'
import { LocalStorage } from '@consts/storage.consts'
import { UserPagination } from '../UserPagination'
import useParams from '@hooks/useParams'

export const UserList: FC = () => {
	const [ storageLikes, setStorageLikes ] =
		useLocalStorage({}, LocalStorage.LIKES)
	const params = useParams()

	const { getUsersThunk } = useAppDispatch()

	const { userList } = useAppSelector(userState)
	const { userListData } = userList

	let ignoreRequest = false

	useEffect(() => {
		!ignoreRequest && getUsersThunk(params)

		return () => {
			ignoreRequest = true
		}
	}, [])

	return (
		<div>
			<UserHead>
				<div className={ styles.head_content }>
					<h1>Наша Команда</h1>
					<p>{ headDescription }</p>
				</div>
			</UserHead>
			{
				userListData.length &&
				<Fragment>
					<ul className={ styles.list }>
						{
							userListData.map(user => (
								<UserItem
									key={ user.id }
									storageLikes={ storageLikes }
									setStorageLikes={ setStorageLikes }
									{ ...user }
								/>))
						}
					</ul>
					<UserPagination />
				</Fragment>
			}
		</div>
	)
}
