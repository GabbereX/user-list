import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'
import { ButtonTheme } from '@components/ui/Button/Button.consts'

interface IProps {
	children: ReactNode
	theme?: ButtonTheme
	classes?: string
	onClick?: () => void
	disabled?: boolean
	isSmallButton?: boolean
}

export const Button: FC<IProps> = ({
	children,
	classes,
	theme = ButtonTheme.WHITE,
	onClick,
	disabled,
	isSmallButton
}) => {
	const className = `
    ${ styles.button } ${ classes ?? '' } 
    ${ theme === ButtonTheme.WHITE ? styles.white : styles.violet }
    ${ isSmallButton ? styles.small : '' }
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
