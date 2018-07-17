import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CART_USER } from '../constants'
import { API_SERVER } from '../env'

export const fetchCartUser = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CART_USER'))
		try {
			const response = await fetch(`${API_SERVER}/cart/${id}`, {
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

export const addToCart = (id, product_id, qty, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_ADD_TO_CART'))
		try {
			const response = await fetch(`${API_SERVER}/cart`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					product_id: product_id,
					id: id,
					qty: qty
				})
			})
			const data = await response.json()
			// console.log('repsonse: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_ADD_TO_CART'))
      		await dispatch(setLoading(false, 'LOADING_ADD_TO_CART'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_ADD_TO_CART', e))
			dispatch(setLoading(false, 'LOADING_ADD_TO_CART'))
		}
	}
}

export const editQty = (id, product_id, qty, cart_id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_ADD_TO_CART'))
		try {
			const response = await fetch(`${API_SERVER}/cart/${cart_id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					product_id: product_id,
					id: id,
					qty: qty
				})
			})
			const data = await response.json()
			// console.log('repsonse: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_ADD_TO_CART'))
      		await dispatch(setLoading(false, 'LOADING_ADD_TO_CART'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_ADD_TO_CART', e))
			dispatch(setLoading(false, 'LOADING_ADD_TO_CART'))
		}
	}
}

export const removeCart = (id, product_id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DELETE_CART'))
		console.log('actions remove: ', product_id)
		try {
			const response = await fetch(`${API_SERVER}/cart`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					id: id,
					product_id: product_id
				})
			})
			const data = await response.json()
			console.log('repsonse: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_DELETE_CART'))
      		await dispatch(setLoading(false, 'LOADING_DELETE_CART'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DELETE_CART', e))
			dispatch(setLoading(false, 'LOADING_DELETE_CART'))
		}
	}
}

const receiveCartUser = data => {
	return{
		type: RECEIVE_CART_USER,
		payload: data
	}
}