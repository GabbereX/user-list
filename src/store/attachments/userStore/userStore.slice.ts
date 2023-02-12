import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import { IUserStoreInitialState } from '@store/attachments/userStore/userStore.types'

const initialState: IUserStoreInitialState = {
	page: 1,
	total_pages: null,
	userList: {
		isUserListLoading: false,
		userListError: '',
		userListData: []
	},
	userCurrent: {
		isUserCurrentLoading: false,
		userCurrentError: '',
		userCurrentData: null
	}
}

const userStoreSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {},
	extraReducers: {}
})

export const userActions = userStoreSlice.actions

export const userState = (state: RootState) => state.userSlice

export default userStoreSlice.reducer
