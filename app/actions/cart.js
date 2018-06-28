import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CART_USER } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchCartUser = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CART_USER'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/user-reviews/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveCartUser(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_CART_USER'))
      		await dispatch(setLoading(false, 'LOADING_CART_USER'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_CART_USER', e))
			dispatch(setLoading(false, 'LOADING_CART_USER'))
		}
	}
}

const receiveCartUser = data => {
	return{
		type: RECEIVE_CART_USER,
		payload: data
	}
}