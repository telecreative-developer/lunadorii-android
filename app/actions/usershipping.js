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

export const updateReview = (id, items, accessToken) => {
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_UPDATE_REVIEW'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-review/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
					comment: items.comment,
					rate: items.star
                })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_UPDATE_REVIEW'))
      		await dispatch(setLoading(false, 'LOADING_UPDATE_REVIEW'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_UPDATE_REVIEW', e))
			dispatch(setLoading(false, 'LOADING_UPDATE_REVIEW'))
		}
	}
}

const receiveUserShipping = data => {
	return{
		type: RECEIVE_USER_SHIPPING,
		payload: data
	}
}