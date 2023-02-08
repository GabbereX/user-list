import { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonTheme } from '@components/ui/Button/Button.consts'

interface IProps {
	children: string
	theme?: ButtonTheme
	classes?: string

}

export const Button: FC<IProps> = ({ children, classes, theme = ButtonTheme.WHITE }) => {
	const className = `
    ${ styles.button } ${ classes }
    ${ theme === ButtonTheme.WHITE ? styles.white : styles.violet }
  `

	return (
		<button className={ className }>
			{ children }
		</button>
	)
}
