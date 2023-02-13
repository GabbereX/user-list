import { useEffect, useState } from 'react'

const useLocalStorage = (initialValue: any, key: string) => {
	const getValue = () => {
		const storage = localStorage.getItem(key)
		return storage ? JSON.parse(storage) : initialValue
	}

	const [ value, setValue ] = useState(getValue)

	useEffect(() => {
		console.log(value)
		localStorage.setItem(key, JSON.stringify(value))
	}, [ value ])

	return [ value, setValue ]
}

export default useLocalStorage
