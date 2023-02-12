import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authActions, authSlice, userActions, userSlice } from './attachments'
import { getTokenThunk } from './attachments/authStore/authStore.thunk'
import { getUsersThunk } from './attachments/userStore/userStore.thunk'

export const actionsRoot = {
	getTokenThunk,
	getUsersThunk,
	...authActions,
	...userActions
}

export const reducers = {
	authSlice,
	userSlice
}

const rootReducer = combineReducers(reducers)

const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const store = setupStore()
