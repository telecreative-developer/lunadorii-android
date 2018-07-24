import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CREDIT_USER, RECEIVE_CREDIT_MANIPULATE } from '../constants'
import { API_SERVER } from '../env'

export const fetchUserCredit = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_CREDIT'))
		try {
			const response = await fetch(`${API_SERVER}/user-creditcard/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				}
			})
			const data = await response.json()
			console.log("action fetch", data)
			await dispatch(receiveUserCredit(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_USER_CREDIT'))
      		await dispatch(setLoading(false, 'LOADING_USER_CREDIT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_USER_CREDIT', e))
			dispatch(setLoading(false, 'LOADING_USER_CREDIT'))
		}
	}
}

const receiveUserCredit = data => {
	return{
		type: RECEIVE_CREDIT_USER,
		payload: data
	}
}

export const addUserCredit = (data, accessToken) => {
	return async dispatch => {
		const { card_number, mm, yyyy, country, card_name, postal_code, id, password } = data
		await dispatch(setLoading(true, 'LOADING_ADD_USER_CREDIT'))
		try {
			const response = await fetch(`${API_SERVER}/user-creditcard`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					card_number,
					mm,
					yyyy,
					country,
					card_name,
					postal_code,
					id,
					password
                })
			})
			const data = await response.json()
			await dispatch(receiveManipulateUserCredit(data))
			await dispatch(setSuccess(true, 'SUCCESS_ADD_USER_CREDIT'))
      		await dispatch(setLoading(false, 'LOADING_ADD_USER_CREDIT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_ADD_USER_CREDIT', e))
			dispatch(setLoading(false, 'LOADING_ADD_USER_CREDIT'))
		}
	}
}

export const editUserCredit = (dataBody, user_creditcard_id, accessToken) => {
	return async dispatch => {
		const { card_number, mm, yyyy, country, card_name, postal_code, id, password } = dataBody
		await dispatch(setLoading(true, 'LOADING_EDIT_USER_CREDIT'))
		try {
			const response = await fetch(`${API_SERVER}/user-creditcard/${user_creditcard_id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					card_number,
					mm,
					yyyy,
					country,
					card_name,
					postal_code,
					id,
					password
                })
			})
			const data = await response.json()
			console.log("action edit", data)
			await dispatch(receiveManipulateUserCredit(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_USER_CREDIT'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_USER_CREDIT'))
		} catch (e) {	
			console.log("action edit gagal", e)
			dispatch(setFailed(true, 'FAILED_EDIT_USER_CREDIT', e))
			dispatch(setLoading(false, 'LOADING_EDIT_USER_CREDIT'))
		}
	}
}

export const defaultUserCredit = (id, user_creditcard_id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DEFAULT_USER_CREDIT'))
		try {
			const response = await fetch(`${API_SERVER}/user-creditcard/set-default/${user_creditcard_id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					id
                })
			})
			const data = await response.json()
			await dispatch(receiveManipulateUserCredit(data))
			await dispatch(setSuccess(true, 'SUCCESS_DEFAULT_USER_CREDIT'))
      		await dispatch(setLoading(false, 'LOADING_DEFAULT_USER_CREDIT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DEFAULT_USER_CREDIT', e))
			dispatch(setLoading(false, 'LOADING_DEFAULT_USER_CREDIT'))
		}
	}
}

export const deleteUserCredit = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DELETE_USER_CREDIT'))
		try {
			const response = await fetch(`${API_SERVER}/user-creditcard/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                }
			})
			const data = await response.json()
			await dispatch(receiveManipulateUserCredit(data))
			await dispatch(setSuccess(true, 'SUCCESS_DELETE_USER_CREDIT'))
      		await dispatch(setLoading(false, 'LOADING_DELETE_USER_CREDIT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DELETE_USER_CREDIT', e))
			dispatch(setLoading(false, 'LOADING_DELETE_USER_CREDIT'))
		}
	}
}

const receiveManipulateUserCredit = data => {
	return{
		type: RECEIVE_CREDIT_MANIPULATE,
		payload: data
	}
}