import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import { IUserCurrentData, IUsersData, IUserStoreInitialState } from './userStore.types'
import { getUserCurrentThunk, getUsersThunk } from './userStore.thunk'

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
		},
		clearUserCurrent(state) {
			state.userCurrent.userCurrentData = null
		}
	},
	extraReducers: {

		// users thunk

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
		},

		// userCurrent thunk

		[getUserCurrentThunk.pending.type]: state => {
			state.userCurrent.isUserCurrentLoading = true
		},
		[getUserCurrentThunk.fulfilled.type]: (state, action: PayloadAction<IUserCurrentData>) => {
			state.userCurrent.userCurrentData = {
				...action.payload.data,
				text: action.payload.support.text
			}
			state.userCurrent.isUserCurrentLoading = false
			state.userCurrent.userCurrentError = ''
		},
		[getUserCurrentThunk.rejected.type]: (state, action: PayloadAction<string>) => {
			state.userCurrent.isUserCurrentLoading = false
			state.userCurrent.userCurrentError = action.payload
		}
	}
})

export const userActions = userStoreSlice.actions

export const userState = (state: RootState) => state.userSlice

export default userStoreSlice.reducer
