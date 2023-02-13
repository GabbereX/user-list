import { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonTheme } from '@components/ui/Button/Button.consts'

interface IProps {
	children: string
	theme?: ButtonTheme
	classes?: string
	onClick?: () => void
	disabled?: boolean
}

export const Button: FC<IProps> = ({
	children,
	classes,
	theme = ButtonTheme.WHITE,
	onClick,
	disabled
}) => {
	const className = `
    ${ styles.button } ${ classes ?? '' }
    ${ theme === ButtonTheme.WHITE ? styles.white : styles.violet }
  `

	return (
		<button
			disabled={ disabled }
			onClick={ onClick }
			className={ className }
		>
			{ children }
		</button>
	)
}
