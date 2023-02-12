import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import getTokenThunk from './authStore.thunk'
import { getCookie, setCookie } from '../../../utils/cookie.utils'
import { Cookies } from '@consts/storage.consts'
import { IAuthStoreInitialState } from '@store/attachments/authStore/authStore.types'

const initialState: IAuthStoreInitialState = {
	isAuthorized: !!getCookie(Cookies.TOKEN),
	isAuthLoading: false,
	authError: ''
}

const authStoreSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setAuthError(state, action: PayloadAction<string>) {
			state.authError = action.payload
		},
		setIsAuthorizet(state, action: PayloadAction<boolean>) {
			state.isAuthorized = action.payload
		}
	},
	extraReducers: {
		[getTokenThunk.pending.type]: state => {
			state.isAuthLoading = true
		},
		[getTokenThunk.fulfilled.type]: (state, action: PayloadAction<string>) => {
			state.isAuthorized = !!action.payload
			state.isAuthLoading = false
			state.authError = ''

			setCookie(Cookies.TOKEN, action.payload)
		},
		[getTokenThunk.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isAuthLoading = false
			state.authError = action.payload
		}
	}
})

export const authActions = authStoreSlice.actions

export const authState = (state: RootState) => state.authSlice

export default authStoreSlice.reducer
