import { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonTheme } from '@components/ui/Button/Button.consts'

interface IProps {
	children: string
	theme?: ButtonTheme
	classes?: string
	onClick?: () => void
}

export const Button: FC<IProps> = ({
	children,
	classes,
	theme = ButtonTheme.WHITE,
	onClick
}) => {
	const className = `
    ${ styles.button } ${ classes }
    ${ theme === ButtonTheme.WHITE ? styles.white : styles.violet }
  `

	return (
		<button
			onClick={ onClick }
			className={ className }
		>
			{ children }
		</button>
	)
}
