import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_WISHLIST } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchwishlist = (accessToken, id) => {
    console.log("wistlist action:" , accessToken , id)
	return async dispatch => {
		console.log('accestoken: ', accessToken)
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
			console.log('dataProducts: ', data.data)
			await dispatch(receiveWishlist(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_WISHLIST'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_WISHLIST'))
		} catch (e) {
			console.log('error action :' ,e )
			dispatch(setFailed(true, 'FAILED_FETCH_WISHLIST', e))
			dispatch(setLoading(false, 'LOADING_FETCH_WISHLIST'))
		}
	}
}

export const addWishlist = (accessToken, idUser, idProduct) => {
    console.log("wistlist action:" , accessToken , id)
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_ADD_WISHLIST'))
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
			console.log('dataProducts: ', data.data)
			await dispatch(receiveWishlist(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_WISHLIST'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_WISHLIST'))
		} catch (e) {
			console.log('error action :' ,e )
			dispatch(setFailed(true, 'FAILED_FETCH_WISHLIST', e))
			dispatch(setLoading(false, 'LOADING_FETCH_WISHLIST'))
		}
	}
}

const receiveWishlist = data => {
	return{
		type: RECEIVE_WISHLIST,
		payload: data
	}
}
