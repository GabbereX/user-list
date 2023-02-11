interface IAuthData {
	email: string
	password: string
}

export interface ITokenThunkParameters {
	path: string
	data: IAuthData
}

export type IToken = {
	token: string
}

export interface IAuthStoreInitialState {
	isAuthorized: boolean
	isLoading: boolean
	authError: string
}
