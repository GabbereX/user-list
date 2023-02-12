import { ICookieOptions } from '../types/global.types'
import { Cookies } from '@consts/storage.consts'

export const getCookie = (name: Cookies) => {
	const matches = document.cookie.match(new RegExp(
		'(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)'
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

export const setCookie = (name: Cookies, value: string, options: ICookieOptions = {}) => {
	options = {
		path: '/',
		expires: 'Tue, 19 Jan 2038 03:14:07 GMT',
		...options
	}

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString()
	}

	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

	for (const optionKey in options) {
		updatedCookie += '; ' + optionKey

		const optionValue = options[optionKey]

		if (optionValue !== true) {
			updatedCookie += '=' + optionValue
		}
	}

	document.cookie = updatedCookie
}

export const deleteCookie = (name: Cookies) => {
	setCookie(name, '', {
		maxAge: -1
	})
}
