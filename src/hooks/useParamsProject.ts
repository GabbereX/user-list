import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IUsersDataParams } from '@store/attachments/userStore/userStore.types'
import { useAppDispatch } from '@hooks/redux'

const useParamsProject = () => {
	const { setPage } = useAppDispatch()
	const [ searchParams ] = useSearchParams()

	const getPage = (): number => {
		const page = searchParams.get('page') ?? 1

		return +page
	}

	const [ params ] = useState<IUsersDataParams>({
		page: getPage(),
		per_page: 8
	})

	useEffect(() => {
		setPage(getPage())
	}, [ searchParams ])

	return params
}

export default useParamsProject
