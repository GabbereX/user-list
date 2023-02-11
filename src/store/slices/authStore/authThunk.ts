import { createAsyncThunk } from '@reduxjs/toolkit'
import { IToken, ITokenThunkParameters } from './authStore.types'
import axios from 'axios'

const getTokenThunk = createAsyncThunk(
	'post/getTokenThunk',
	async({ path, data }: ITokenThunkParameters, { rejectWithValue }) => {
		try {
			const response =
				await axios.post<IToken>(path, {
					...data,
					email: 'eve.holt@reqres.in'
				})

			return response.data.token
		} catch (err) {
			return rejectWithValue('Что-то пошло не так, попробуйте позже...')
		}
	}
)

export default getTokenThunk
