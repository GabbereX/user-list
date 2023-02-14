import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { pathsAPI } from '@consts/paths.consts'
import { IUserCurrentData, IUsersData, IUsersDataParams } from './userStore.types'
import { errorResponse } from '@consts/errors.consts'

export const getUsersThunk = createAsyncThunk(
	'get/getUsersThunk',
	async(params: IUsersDataParams, { rejectWithValue }) => {
		try {
			const response =
				await axios.get<IUsersData>(pathsAPI.users, { params })

			return response.data
		} catch (err) {
			return rejectWithValue(errorResponse)
		}
	}
)

export const getUserCurrentThunk = createAsyncThunk(
	'get/getUserCurrentThunk',
	async(id: string, { rejectWithValue }) => {
		try {
			const response =
				await axios.get<IUserCurrentData>(pathsAPI.user + id)

			return response.data
		} catch (err) {
			return rejectWithValue(errorResponse)
		}
	}
)
