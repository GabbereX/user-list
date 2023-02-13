import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import { IUsersData, IUserStoreInitialState } from './userStore.types'
import { getUsersThunk } from './userStore.thunk'

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
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload
		}
	},
	extraReducers: {
		[getUsersThunk.pending.type]: state => {
			state.userList.isUserListLoading = true
		},
		[getUsersThunk.fulfilled.type]: (state, action: PayloadAction<IUsersData>) => {
			state.total_pages = action.payload.total_pages

			state.userList.userListData = action.payload.data
			state.userList.isUserListLoading = false
			state.userList.userListError = ''
		},
		[getUsersThunk.rejected.type]: (state, action: PayloadAction<string>) => {
			state.userList.isUserListLoading = false
			state.userList.userListError = action.payload
		}
	}
})

export const userActions = userStoreSlice.actions

export const userState = (state: RootState) => state.userSlice

export default userStoreSlice.reducer
