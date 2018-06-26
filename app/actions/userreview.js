import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_USER_REVIEW } from '../constants'
import { API_SERVER_USER } from '../env'

export const fetchUserReview = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_REVIEW'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-reviews/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveUserReview(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_USER_REVIEW'))
      		await dispatch(setLoading(false, 'LOADING_USER_REVIEW'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_USER_REVIEW', e))
			dispatch(setLoading(false, 'LOADING_USER_REVIEW'))
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

const receiveUserReview = data => {
	return{
		type: RECEIVE_USER_REVIEW,
		payload: data
	}
}