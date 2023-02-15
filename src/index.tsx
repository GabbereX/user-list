import '@styles/styles.global.scss'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import { Startup } from '@components/common/Startup'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<StrictMode>
		<BrowserRouter basename='/user-list'>
			<Provider store={ store }>
				<Startup />
			</Provider>
		</BrowserRouter>
	</StrictMode>
)
