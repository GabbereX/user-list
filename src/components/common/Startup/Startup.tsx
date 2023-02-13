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

export const Startup: FC = () => {
	const { isAuthLoading } = useAppSelector(authState)
	const { userList: { isUserListLoading } } =
		useAppSelector(userState)

	const { search } = useLocation()
	const navigate = useNavigate()

	const { isAuthorized } = useAppSelector(authState)

	useEffect(() => {
		navigate(
			isAuthorized ? PathsRoute.USERS + search : PathsRoute.LOGIN
		)
	}, [ isAuthorized ])

	const getPagesAuthRole = (): ReactNode => (
		<Fragment>
			<Route
				path={ PathsRoute.USERS }
				element={ <UserList /> }
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


				{/*{*/ }
				{/*	[ '/login', 'register' ].map(path =>*/ }
				{/*		<Route*/ }
				{/*			key={ path }*/ }
				{/*			path={ path }*/ }
				{/*			element={ <Auth /> }*/ }
				{/*		/>*/ }
				{/*	)*/ }
				{/*}*/ }
			</Routes>
		</Fragment>
	)
}
