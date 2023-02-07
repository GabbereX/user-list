import { FC } from 'react'

import { IAuthInput } from '@components/ui/Input/Input.types'

import styles from './Input.module.scss'

interface IProps {
	options: IAuthInput
}

export const Input: FC<IProps> = ({ options }) => {
	const { name, label, type, placeholder } = options

	return (
		<label
			className={ styles.label }
		>
			<span>{ label }</span>
			<input
				className={ styles.input }
				type={ type }
				name={ name }
				placeholder={ placeholder }
			/>
		</label>
	)
}
