import authSlice, { authActions } from './authStore/authStore.slice'
import getTokenThunk from './authStore/authStore.thunk'

import userSlice, { userActions } from './userStore/userStore.slice'
import { getUsersThunk } from './userStore/userStore.thunk'

export {
	authSlice,
	authActions,
	getTokenThunk,

	userSlice,
	userActions,
	getUsersThunk
}
