import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { pathsAPI } from '@consts/paths.consts'
import { IUsersData, IUsersDataParams } from './userStore.types'
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
