import { FC } from 'react'

import styles from './Spinner.module.scss'

export const Spinner: FC = () => {
	return (
		<div className={ styles.root }>
			<svg
				fill='var(--violet)'
				width='80px'
				height='80px'
				viewBox='0 -0.5 1001 1001'
				xmlns='http://www.w3.org/2000/svg'>
				<path d='M497.571 0c-113.684 .267 -227.301 38.887 -319.725 115.892l.188 .188c172.901 -140.335 427.481 -130.06 588.398 30.857 133.878 133.876 163.485 332.604 88.85 495.173 -10.186 29.288 -5.523 50.219 11.974 67.716 20.709 20.709 60.696 23.151 83.847 0 2.643 -2.643 12.187 -14.411 14.694 -24.041 70.849 -180.224 33.479 -393.197 -112.171 -538.846 -98.281 -98.282 -227.211 -147.238 -356.052 -146.935zm-408.137 273.706c-14.532 .36 -29.101 5.592 -39.954 16.445 -2.643 2.644 -12.187 14.41 -14.694 24.041 -70.849 180.223 -33.479 393.197 112.171 538.846 185.003 185.003 478.607 195.322 675.778 31.044l-.188 -.188c-172.901 140.336 -427.481 130.06 -588.398 -30.857 -133.876 -133.878 -163.485 -332.603 -88.85 -495.173 10.186 -29.287 5.523 -50.219 -11.974 -67.716 -11.002 -11.002 -27.423 -16.852 -43.893 -16.445z' />
			</svg>
		</div>
	)
}