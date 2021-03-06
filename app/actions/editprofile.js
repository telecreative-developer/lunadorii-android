import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_EDIT_PASSWORD, RECEIVE_EDIT_EMAIL, RECEIVE_EDIT_NAME, RECEIVE_EDIT_AVATAR } from '../constants'
import { API_SERVER } from '../env'

export const editName = (id, first_name, last_name, bod, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_EDIT_NAME'))
		try {
			const response = await fetch(`${API_SERVER}/user/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
                    first_name,
					last_name,
					bod
                })
			})
			const data = await response.json()
			await dispatch(receiveResultName(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_NAME'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_NAME'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_EDIT_NAME', e))
			dispatch(setLoading(false, 'LOADING_EDIT_NAME'))
		}
	}
}

const receiveResultName = data => {
	return{
		type: RECEIVE_EDIT_NAME,
		payload: data
	}
}

export const editEmail = (id, email, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_EDIT_EMAIL'))
		try {
			const response = await fetch(`${API_SERVER}/user/change-email/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
                    email
                })
			})
			const data = await response.json()
			await dispatch(receiveResultEmail(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_EMAIL'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_EMAIL'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_EDIT_EMAIL', e))
			dispatch(setLoading(false, 'LOADING_EDIT_EMAIL'))
		}
	}
}

const receiveResultEmail = data => {
	return{
		type: RECEIVE_EDIT_EMAIL,
		payload: data
	}
}

export const editPassword = (id, old_password, new_password, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_EDIT_PASSWORD'))
		try {
			const response = await fetch(`${API_SERVER}/user/change-password/${id}`, {
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
			await dispatch(receiveResultPassword(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_PASSWORD'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_PASSWORD'))
		} catch (e) {
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

export const editAvatar = (id, avatar, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_EDIT_AVATAR'))
		try {
			const response = await fetch(`${API_SERVER}/user/update-avatar/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
                },
                body: JSON.stringify({
                    avatar
                })
			})
			const data = await response.json()
			await dispatch(receiveResultAvatar(data))
			await dispatch(setSuccess(true, 'SUCCESS_EDIT_AVATAR'))
      		await dispatch(setLoading(false, 'LOADING_EDIT_AVATAR'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_EDIT_AVATAR', e))
			dispatch(setLoading(false, 'LOADING_EDIT_AVATAR'))
		}
	}
}

const receiveResultAvatar = data => {
	return{
		type: RECEIVE_EDIT_AVATAR,
		payload: data
	}
}