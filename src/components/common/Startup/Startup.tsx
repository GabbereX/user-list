import { FC, Fragment, ReactNode, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Auth } from '@components/modules/auth/Auth'
import { PageNotFound } from '@components/common/PageNotFound'
import { PathsRoute } from '@consts/paths.consts'
import { useAppSelector } from '@hooks/redux'
import { authState } from '@store/slices/authStore/authSlice'

export const Startup: FC = () => {
	const navigate = useNavigate()

	const { isAuthorized } = useAppSelector(authState)

	useEffect(() => {
		navigate(
			isAuthorized ? PathsRoute.USERS : PathsRoute.LOGIN
		)
	}, [ isAuthorized ])

	const getPagesAuthRole = (): ReactNode => (
		<Fragment>
			<Route
				path={ PathsRoute.REGISTER }
				element={ <Auth path={ PathsRoute.REGISTER } /> }
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
		<Routes>
			{
				isAuthorized
					? getPagesAuthRole()
					: getPagesNotAuthRole()
			}

			<Route
				path='*'
				element={ <PageNotFound isAuthorized={ isAuthorized } /> }
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
	)
}
