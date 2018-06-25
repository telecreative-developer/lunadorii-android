import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_EDIT_PASSWORD } from '../constants'
import { API_SERVER_USER } from '../env'

export const editName = (id, first_name, last_name, accessToken) => {
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_EDIT_NAME'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
                    first_name,
                    last_name
                })
			})
			const data = await response.json()
			console.log('editName: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_NAME'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_NAME'))
		} catch (e) {
            console.log('error editName: ', e)
			dispatch(setFailed(true, 'FAILED_EDIT_NAME', e))
			dispatch(setLoading(false, 'LOADING_EDIT_NAME'))
		}
	}
}

export const editEmail = (id, data, accessToken) => {
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_EDIT_EMAIL'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user/change-email/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
                    email: data.email
                })
			})
			const data = await response.json()
			console.log('editEmail: ', data)
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_EMAIL'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_EMAIL'))
		} catch (e) {
            console.log('error editEmail: ', e)
			dispatch(setFailed(true, 'FAILED_EDIT_EMAIL', e))
			dispatch(setLoading(false, 'LOADING_EDIT_EMAIL'))
		}
	}
}

export const editPassword = (id, old_password, new_password, accessToken) => {
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_EDIT_PASSWORD'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user/change-password/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
                    old_password,
                    new_password
                })
			})
			const data = await response.json()
			console.log('editPassword: ', data)
			await dispatch(receiveResultPassword(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_PASSWORD'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_PASSWORD'))
		} catch (e) {
            console.log('error editPassword: ', e)
			dispatch(setFailed(true, 'FAILED_EDIT_PASSWORD', e))
			dispatch(setLoading(false, 'LOADING_EDIT_PASSWORD'))
		}
	}
}

const receiveResultPassword = data => {
	return{
		type: RECEIVE_EDIT_PASSWORD,
		payload: data
	}
}
