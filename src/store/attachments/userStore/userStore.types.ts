import { Nullable } from '../../../types/global.types'

export interface IUsersData {
	page: number
	per_page: number
	total: number
	total_pages: number
	data: Array<IUser>
}

export interface IUserCurrentData {
	data: IUser
	support: {
		url: string
		text: string
	}
}

export interface IUser {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export interface IUsersDataParams {
	page: number
	per_page: number
}

export interface IUserStoreInitialState {
	page: number
	total_pages: Nullable<number>
	userList: {
		isUserListLoading: boolean
		userListError: string
		userListData: Array<IUser>
	}
	userCurrent: {
		isUserCurrentLoading: boolean
		userCurrentError: string
		userCurrentData: Nullable<IUser & {
			text: string
		}>
	}
}
