import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_BANK_USER, RECEIVE_BANK, RECEIVE_BANK_MANIPULATE } from '../constants'
import { API_SERVER } from '../env'

export const fetchUserBank = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_BANK'))
		try {
			const response = await fetch(`${API_SERVER}/user-banks/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveUserBank(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_USER_BANK'))
      		await dispatch(setLoading(false, 'LOADING_USER_BANK'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_USER_BANK', e))
			dispatch(setLoading(false, 'LOADING_USER_BANK'))
		}
	}
}

const receiveUserBank = data => {
	return{
		type: RECEIVE_BANK_USER,
		payload: data
	}
}

export const addUserBank = (account_number, account_name, bank_id, id, password, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_ADD_USER_BANK'))
		try {
			const response = await fetch(`${API_SERVER}/user-bank`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					account_number,
					account_name,
					bank_id,
					id,
					password
                })
			})
			const data = await response.json()
			await dispatch(receiveManipulateUserBank(data))
			await dispatch(setSuccess(true, 'SUCCESS_ADD_USER_BANK'))
      		await dispatch(setLoading(false, 'LOADING_ADD_USER_BANK'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_ADD_USER_BANK', e))
			dispatch(setLoading(false, 'LOADING_ADD_USER_BANK'))
		}
	}
}

export const editUserBank = (user_bank_id, account_number, account_name, bank_id, id, password, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_EDIT_USER_BANK'))
		try {
			const response = await fetch(`${API_SERVER}/user-bank/${user_bank_id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					account_number,
					account_name,
					bank_id,
					id,
					password
                })
			})
			const data = await response.json()
			await dispatch(receiveManipulateUserBank(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_USER_BANK'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_USER_BANK'))
		} catch (e) {	
			dispatch(setFailed(true, 'FAILED_EDIT_USER_BANK', e))
			dispatch(setLoading(false, 'LOADING_EDIT_USER_BANK'))
		}
	}
}

export const defaultUserBank = (id, user_bank_id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DEFAULT_USER_BANK'))
		try {
			const response = await fetch(`${API_SERVER}/user-bank/set-default/${user_bank_id}`, {
				method: 'DELETE',
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
			await dispatch(receiveManipulateUserBank(data))
			await dispatch(setSuccess(true, 'SUCCESS_DEFAULT_USER_BANK'))
      		await dispatch(setLoading(false, 'LOADING_DEFAULT_USER_BANK'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DEFAULT_USER_BANK', e))
			dispatch(setLoading(false, 'LOADING_DEFAULT_USER_BANK'))
		}
	}
}

export const deleteUserBank = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DELETE_USER_BANK'))
		try {
			const response = await fetch(`${API_SERVER}/user-banks/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				},
				body: JSON.stringify({
					account_number,
					account_name,
					bank_id,
					id,
					password
                })
			})
			const data = await response.json()
			await dispatch(receiveManipulateUserBank(data))
			await dispatch(setSuccess(true, 'SUCCESS_DELETE_USER_BANK'))
      		await dispatch(setLoading(false, 'LOADING_DELETE_USER_BANK'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DELETE_USER_BANK', e))
			dispatch(setLoading(false, 'LOADING_DELETE_USER_BANK'))
		}
	}
}

const receiveManipulateUserBank = data => {
	return{
		type: RECEIVE_BANK_MANIPULATE,
		payload: data
	}
}

export const fetchDataBank = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_BANK'))
		try {
			const response = await fetch(`${API_SERVER}/general/banks`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveDataBank(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_BANK'))
      		await dispatch(setLoading(false, 'LOADING_BANK'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_BANK', e))
			dispatch(setLoading(false, 'LOADING_BANK'))
		}
	}
}

const receiveDataBank = data => {
	return{
		type: RECEIVE_BANK,
		payload: data
	}
}