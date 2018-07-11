import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_USER_SHIPPING, RECEIVE_PROVINCE } from '../constants'
import { API_SERVER } from '../env'

export const fetchUserShipping = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_SHIPPING'))
		try {
			const response = await fetch(`${API_SERVER}/user-addresses/${id}`, {
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
			const response = await fetch(`${API_SERVER}/user-address/${id}`, {
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
			const response = await fetch(`${API_SERVER}/user-address/set-default/${id_addres}`, {
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
			const response = await fetch(`${API_SERVER}/user-address/${id}`, {
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

export const createAddress = (id, items, accessToken) => {
	console.log(items)
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CREATE_SHIPPING'))
		// console.log('items action: ', items)
		try {
			const response = await fetch(`${API_SERVER}/user-address`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
									...items,
									recepient:items.name,
									phone: items.phone,
									label: items.label,
									postal_code: items.postal_code,
									detail_address: items.detail_address,
									province_id: items.province_id,
									city_id: items.city_id,
									id:id,
                })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_CREATE_SHIPPING'))
      		await dispatch(setLoading(false, 'LOADING_CREATE_SHIPPING'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_CREATE_SHIPPING', e))
			dispatch(setLoading(false, 'LOADING_CREATE_SHIPPING'))
		}
	}
}

const receiveUserShipping = data => {
	return{
		type: RECEIVE_USER_SHIPPING,
		payload: data
	}
}

// URL Provinsi /general/places


// <--- FETCH PROVINCE --->
export const fetchProvince = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PROVINCE'))
		try {
			const response = await fetch(`${API_SERVER}/general/places`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                  'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			console.log('data action :', data)
			await dispatch(receiveProvince(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PROVINCE'))
      await dispatch(setLoading(false, 'LOADING_FETCH_PROVINCE'))
		} catch (e) {
			console.log('data action error:', e)
			dispatch(setFailed(true, 'FAILED_FETCH_PROVINCE', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PROVINCE'))
		}
	}
}

const receiveProvince = data => {
	return{
		type: RECEIVE_PROVINCE,
		payload: data
	}
}

// <--- FETCH CITIES --->

