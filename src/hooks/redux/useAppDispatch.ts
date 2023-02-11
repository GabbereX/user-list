import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionsRoot, AppDispatch } from '@store/store'

export const useAppDispatch = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators(actionsRoot, dispatch)
}
