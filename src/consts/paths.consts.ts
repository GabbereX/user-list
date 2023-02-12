const baseURL = 'https://reqres.in/api'

export const pathsAPI = (() => {
	const paths = {
		register: '/register',
		login: '/login',
		users: '/users'
	}

	for (const key in paths) {
		paths[key] = baseURL + paths[key]
	}

	return paths
})()

export const enum PathsRoute {
	REGISTER = '/register',
	LOGIN = '/login',
	USERS = '/users'
}
