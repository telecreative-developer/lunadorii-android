import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_WISHLIST } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchwishlist = (accessToken, id) => {
    console.log("wistlist:" , accessToken , id)
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_FETCH_WISTLIST'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/wistlist`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			console.log('dataProducts: ', data.data)
			await dispatch(receiveProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_WISTLIST'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_WISTLIST'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_WISTLIST', e))
			dispatch(setLoading(false, 'LOADING_FETCH_WISTLIST'))
		}
	}
}

const receiveWistlist = data => {
	return{
		type: RECEIVE_WISHLIST,
		payload: data
	}
}
