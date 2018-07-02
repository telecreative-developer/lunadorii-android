import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_USER_SHIPPING } from '../constants'
import { API_SERVER_USER } from '../env'

export const fetchUserShipping = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_SHIPPING'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-addressess/${id}`, {
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
		// console.log('items action: ', items)
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-address/${id}`, {
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

export const updateSetdefault = (id_user, id_addres, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_UPDATE_SETDEFAULT'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-address/set-default/${id_addres}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					id: id_user
                })
			})
			const data = await response.json()
			// console.log('response: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_UPDATE_SETDEFAULT'))
      		await dispatch(setLoading(false, 'LOADING_UPDATE_SETDEFAULT'))
		} catch (e) {
			// console.log('error: ', e)
			dispatch(setFailed(true, 'FAILED_UPDATE_SETDEFAULT', e))
			dispatch(setLoading(false, 'LOADING_UPDATE_SETDEFAULT'))
		}
	}
}

export const deleteShipping = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DELETE_SHIPPING'))
		// console.log('items action: ', id)
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-address/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                }
			})
			const data = await response.json()
			// console.log('response: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_DELETE_SHIPPING'))
      		await dispatch(setLoading(false, 'LOADING_DELETE_SHIPPING'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DELETE_SHIPPING', e))
			dispatch(setLoading(false, 'LOADING_DELETE_SHIPPING'))
		}
	}
}
const receiveUserShipping = data => {
	return{
		type: RECEIVE_USER_SHIPPING,
		payload: data
	}
}