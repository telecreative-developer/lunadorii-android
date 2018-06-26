import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_PRODUCT } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchProduct = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/products`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT'))
		}
	}
}

const receiveProduct = data => {
	return{
		type: RECEIVE_PRODUCT,
		payload: data
	}
}
