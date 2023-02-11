import { FC, Fragment, ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth } from '@components/modules/auth/Auth'
import { AuthPath } from '@components/modules/auth/auth.consts'
import { getCookie } from '../../../utils/cookie.utils'
import { PageNotFound } from '@components/common/PageNotFound'

export const Startup: FC = () => {
	const token = getCookie('token')

	const getPagesAuthRole = (): ReactNode => (
		<Fragment>
			<Route
				path={ AuthPath.REGISTER }
				element={ <Auth path={ AuthPath.REGISTER } /> }
			/>
		</Fragment>
	)

	const getPagesNotAuthRole = (): ReactNode => (
		<Fragment>
			<Route
				path={ AuthPath.REGISTER }
				element={ <Auth path={ AuthPath.REGISTER } /> }
			/>
			<Route
				path={ AuthPath.LOGIN }
				element={ <Auth path={ AuthPath.LOGIN } /> }
			/>
		</Fragment>
	)

	return (
		<Routes>
			{
				token
					? getPagesAuthRole()
					: getPagesNotAuthRole()
			}

			<Route
				path='*'
				element={ <PageNotFound token={ token } /> }
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
