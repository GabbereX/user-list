import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice, getTokenThunk } from './slices'
import { authActions } from '@store/slices/authStore/authSlice'

export const actionsRoot = {
	getTokenThunk,
	...authActions
}

export const reducers = {
	authSlice
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
