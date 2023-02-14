import { FC, useRef } from 'react'
import { Button } from '@components/ui/Button'
import { ButtonTheme } from '@components/ui/Button/Button.consts'
import styles from '../user.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { userState } from '@store/attachments/userStore/userStore.slice'
import useParams from '@hooks/useParams'
import { Nullable } from '../../../../types/global.types'

export const UserPagination: FC = () => {
	const [ _, setSearchParams ] = useSearchParams()
	const { getUsersThunk } = useAppDispatch()

	const params = useParams()

	const paginationRef = useRef<Nullable<HTMLDivElement>>(null)

	const { total_pages, page } = useAppSelector(userState)

	const handleClick = async(index: number): Promise<void> => {
		const page = index + 1

		await setSearchParams({ 'page': `${ page }` })
		await getUsersThunk({ ...params, page })

		paginationRef.current?.scrollIntoView()
	}

	return (
		<div
			ref={ paginationRef }
			className={ styles.pagination }
		>
			{
				Array(total_pages).fill(null).map((_, index) =>
					<Button
						key={ index }
						theme={ ButtonTheme.VIOLET }
						disabled={ index + 1 === page }
						onClick={ () => handleClick(index) }
					>
						{ `${ index + 1 }` }
					</Button>
				)
			}
		</div>
	)
}
