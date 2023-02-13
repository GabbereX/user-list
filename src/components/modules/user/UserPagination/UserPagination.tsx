import { FC } from 'react'
import { Button } from '@components/ui/Button'
import { ButtonTheme } from '@components/ui/Button/Button.consts'
import styles from '../user.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '@hooks/redux'
import { userState } from '@store/attachments/userStore/userStore.slice'

export const UserPagination: FC = () => {
	const [ _, setSearchParams ] = useSearchParams()
	const { total_pages, page } = useAppSelector(userState)

	const handleClick = (index: number): void => {
		setSearchParams({ 'page': `${ index + 1 }` })
		window.scrollTo({ top: 0 })
	}

	return (
		<div className={ styles.pagination }>
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
