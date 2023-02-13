import { FC } from 'react'
import { HeartIcon } from '@components/ui/icons/HeartIcon'
import { IUser } from '@store/attachments/userStore/userStore.types'
import styles from '..//user.module.scss'

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

	const likeClasses = `
    ${ styles.item_like }
    ${ storageLikes[id] && styles.item_like_active }
  `

	const handleClick = (): void => {
		console.log(storageLikes)
		setStorageLikes({ ...storageLikes, [id]: !storageLikes[id] ?? true })
	}

	return (
		<li className={ styles.item }>
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
