import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_SINGLE_USER } from '../constants'
import { API_SERVER } from '../env'

export const fetchSingleUser = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SINGLE_USER'))
		try {
			const response = await fetch(`${API_SERVER}/user/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveSingleUser(data.data[0]))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SINGLE_USER'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_USER'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_SINGLE_USER', e))
			dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_USER'))
		}
	}
}

const receiveSingleUser = data => {
	return{
		type: RECEIVE_SINGLE_USER,
		payload: data
	}
}

export const forgotpassword = (email) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FORGOT_PASSWORD'))
		try {
			const response = await fetch(`${API_SERVER}/request/user/forgot-password`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
				},
				body:JSON.stringify({email})
			})
			const data = await response.json()
			if (data.status === 400 && data.name === 'error') {
				await dispatch(setFailed(true, 'FAILED_FORGOT_PASSWORD', data.message))
				await dispatch(setLoading(false, 'LOADING_FORGOT_PASSWORD'))
				await dispatch(setFailed(false, 'FAILED_FORGOT_PASSWORD'))
			} else {
				await dispatch(setSuccess(true, 'SUCCESS_FORGOT_PASSWORD'))
				await dispatch(setLoading(false, 'LOADING_FORGOT_PASSWORD'))
			}
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FORGOT_PASSWORD', e))
			dispatch(setLoading(false, 'LOADING_FORGOT_PASSWORD'))
		}
	}
}