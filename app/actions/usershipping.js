import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_USER_SHIPPING } from '../constants'
import { API_SERVER_USER } from '../env'

export const fetchUserShipping = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_SHIPPING'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-addresses/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveUserShipping(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_USER_SHIPPING'))
      		await dispatch(setLoading(false, 'LOADING_USER_SHIPPING'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_USER_SHIPPING', e))
			dispatch(setLoading(false, 'LOADING_USER_SHIPPING'))
		}
	}
}

export const updateShipping = (id, items, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_UPDATE_SHIPPING'))
		console.log('items action: ', items)
		try {
			const response = await fetch(`${API_SERVER_USER}api/v1/user-address/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
					name: item.recepient,
					phone: items.phone,
					detail_address: items.detail_address,
					province: items.province,
					city: items.city,
					district: items.district,
					postal_code: 14250
                })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_UPDATE_SHIPPING'))
      		await dispatch(setLoading(false, 'LOADING_UPDATE_SHIPPING'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_UPDATE_SHIPPING', e))
			dispatch(setLoading(false, 'LOADING_UPDATE_SHIPPING'))
		}
	}
}

const receiveUserShipping = data => {
	return{
		type: RECEIVE_USER_SHIPPING,
		payload: data
	}
}