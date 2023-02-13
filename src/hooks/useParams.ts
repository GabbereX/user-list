import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IUsersDataParams } from '@store/attachments/userStore/userStore.types'
import { useAppDispatch } from '@hooks/redux'

const useParams = () => {
	const {setPage} = useAppDispatch()
	const [ searchParams ] = useSearchParams()

	const page = searchParams.get('page') ?? 1

	const [ params, setParams ] = useState<IUsersDataParams>({
		page: +page,
		per_page: 8
	})

	useEffect(() => {

	}, [searchParams])
}

export default useParams
