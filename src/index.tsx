import '@styles/styles.global.scss'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Auth } from '@components/modules/auth/Auth'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={ <Auth /> }
				/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
