import { useEffect, useState } from 'react'

const useResizeWidth = (maxWidth: number) => {
	const mediaQuery = window.matchMedia(`(max-width: ${ maxWidth }px)`).matches

	const [ matchesSize, setMatchesSize ] = useState<boolean>(mediaQuery)

	const handleResize = () => {
		return window.innerWidth <= maxWidth
			? setMatchesSize(true)
			: setMatchesSize(false)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return matchesSize
}

export default useResizeWidth
