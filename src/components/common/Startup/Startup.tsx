import { FC, Fragment, ReactNode, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { Auth } from '@components/modules/auth/Auth'
import { PageNotFound } from '@components/common/PageNotFound'

import { PathsRoute } from '@consts/paths.consts'

import { authState } from '@store/attachments/authStore/authStore.slice'

import { useAppSelector } from '@hooks/redux'
import { Spinner } from '@components/common/Spinner'
import { UserList } from '@components/modules/user/UserList'
import { userState } from '@store/attachments/userStore/userStore.slice'
import { UserCurrent } from '@components/modules/user/UserCurrent'
import { LocalStorage } from '@consts/storage.consts'

export const Startup: FC = () => {
	const { isAuthLoading } = useAppSelector(authState)
	const { isAuthorized } = useAppSelector(authState)
	const { userList: { isUserListLoading } } =
		useAppSelector(userState)

	const { pathname, search } = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const isAuthPath =
			[ PathsRoute.LOGIN, PathsRoute.REGISTER ]
				.includes(pathname as PathsRoute)

		if (isAuthPath && isAuthorized) {
			navigate(PathsRoute.USERS + search)
		} else if (!isAuthorized) {
			navigate(PathsRoute.LOGIN)
		}
	}, [ isAuthorized ])

	useEffect(() => {
		return () => {
			localStorage.removeItem(LocalStorage.LAST_USERLIST_PATH)
		}
	}, [])

	const getPagesAuthRole = (): ReactNode => (
		<Fragment>
			<Route
				path={ PathsRoute.USERS }
				element={ <UserList /> }
			/>
			<Route
				path={ PathsRoute.USER + ':id' }
				element={ <UserCurrent /> }
			/>
		</Fragment>
	)

	const getPagesNotAuthRole = (): ReactNode => (
		<Fragment>
			<Route
				path={ PathsRoute.REGISTER }
				element={ <Auth path={ PathsRoute.REGISTER } /> }
			/>
			<Route
				path={ PathsRoute.LOGIN }
				element={ <Auth path={ PathsRoute.LOGIN } /> }
			/>
		</Fragment>
	)

	return (
		<Fragment>
			{
				(isAuthLoading || isUserListLoading) &&
				<Spinner />
			}

			<Routes>
				{
					isAuthorized
						? getPagesAuthRole()
						: getPagesNotAuthRole()
				}

				<Route
					path='*'
					element={
						<PageNotFound isAuthorized={ isAuthorized } />
					}
				/>
			</Routes>
		</Fragment>
	)
}
