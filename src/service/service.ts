import { IAuthData } from './service.types'
import axios from 'axios'

export const getToken = (path: string, data: IAuthData) => {
	return axios.post(path, data)

	// eve.holt@reqres.in
}
