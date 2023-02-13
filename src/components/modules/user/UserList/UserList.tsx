import { FC, Fragment, useEffect } from 'react'
import { UserHead } from '../UserHead'
import { headDescription } from '../user.consts'

import styles from '../user.module.scss'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { userState } from '@store/attachments/userStore/userStore.slice'
import { UserItem } from '@components/modules/user/UserItem'
import useLocalStorage from '@hooks/useLocalStorage'
import { LocalStorage } from '@consts/storage.consts'
import { useSearchParams } from 'react-router-dom'
import { UserPagination } from '@components/modules/user/UserPagination'

let firstEnty: boolean = false

export const UserList: FC = () => {
	const [ storageLikes, setStorageLikes ] =
		useLocalStorage({}, LocalStorage.LIKES)

	// const [ searchParams ] = useSearchParams()
	const { getUsersThunk, setPage } = useAppDispatch()

	const { userList } = useAppSelector(userState)
	const { userListData } = userList

	useEffect(() => {
		if (firstEnty) {
			(async() => {
				// const page = searchParams.get('page') ?? 1

				// const params = {
				// 	page: +page,
				// 	per_page: 8
				// }

				setPage(+page)
				await getUsersThunk(params)

				const pagination = window.document.getElementById('userPagination')
				pagination?.scrollIntoView()
			})()
		} else firstEnty = true

		// return () => {
		// 	firstEnty = false
		// }
	}, [ searchParams ])

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
