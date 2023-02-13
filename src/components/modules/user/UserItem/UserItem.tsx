import { FC } from 'react'
import { HeartIcon } from '@components/ui/icons/HeartIcon'
import { IUser } from '@store/attachments/userStore/userStore.types'
import styles from '..//user.module.scss'
import { useNavigate } from 'react-router-dom'
import { PathsRoute } from '@consts/paths.consts'

type TLikes = Record<number, boolean>

interface IProps extends IUser {
	storageLikes: TLikes,
	setStorageLikes: (likes: TLikes) => void
}

export const UserItem: FC<IProps> = ({
	id,
	first_name,
	last_name,
	avatar,
	storageLikes,
	setStorageLikes
}) => {
	const navigate = useNavigate()

	const likeClasses = `
    ${ styles.item_like }
    ${ storageLikes[id] && styles.item_like_active }
  `

	const handleClick = (): void => (
		setStorageLikes({
			...storageLikes,
			[id]: !storageLikes[id] ?? true
		})
	)

	return (
		<li
			className={ styles.item }
			onClick={ () => navigate(PathsRoute.USER + id) }
		>
			<div className={ styles.item_content }>
				<img
					src={ avatar }
					alt={ `Фото ${ first_name } ${ last_name }` }
				/>
				<span>
          { `${ first_name } ${ last_name }` }
				</span>
				<button
					className={ likeClasses }
					onClick={ handleClick }
				>
					<HeartIcon />
				</button>
			</div>
		</li>
	)
}
