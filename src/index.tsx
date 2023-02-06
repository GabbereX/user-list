import './assets/styles/styles.global.scss'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<StrictMode>
		Hello World
	</StrictMode>
)
