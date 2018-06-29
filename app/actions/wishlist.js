import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_WISHLIST } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchwishlist = (accessToken, id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_WISHLIST'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/wishlist/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveWishlist(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_WISHLIST'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_WISHLIST'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_WISHLIST', e))
			dispatch(setLoading(false, 'LOADING_FETCH_WISHLIST'))
		}
	}
}

export const addWishlist = (accessToken, id, idProduct) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_ADD_WISHLIST'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/wishlist/`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				},
				body:JSON.stringify({
					id:id,
					product_id: idProduct
				})
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_ADD_WISHLIST'))
      		await dispatch(setLoading(false, 'LOADING_ADD_WISHLIST'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_ADD_WISHLIST', e))
			dispatch(setLoading(false, 'LOADING_ADD_WISHLIST'))
		}
	}
}

const receiveWishlist = data => {
	return{
		type: RECEIVE_WISHLIST,
		payload: data
	}
}
