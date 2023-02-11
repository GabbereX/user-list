import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import getTokenThunk from './authThunk'
import { getCookie, setCookie } from '../../../utils/cookie.utils'
import { Cookies } from '@consts/paths.consts'
import { IAuthStoreInitialState } from '@store/slices/authStore/authStore.types'

export const initialState: IAuthStoreInitialState = {
	isAuthorized: !!getCookie(Cookies.TOKEN),
	isLoading: false,
	authError: ''
}

const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setAuthError(state, action: PayloadAction<string>) {
			state.authError = action.payload
		}
	},
	extraReducers: {
		[getTokenThunk.pending.type]: state => {
			state.isLoading = true
		},
		[getTokenThunk.fulfilled.type]: (state, action: PayloadAction<string>) => {
			state.isAuthorized = !!action.payload
			state.isLoading = false
			state.authError = ''

			setCookie(Cookies.TOKEN, action.payload)
		},
		[getTokenThunk.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.authError = action.payload
		}
	}
})

export const authActions = authSlice.actions

export const authState = (state: RootState) => state.authSlice

export default authSlice.reducer
