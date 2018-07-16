import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_USER_REVIEW } from '../constants'
import { API_SERVER } from '../env'


// <----- Get Review ----->
export const fetchUserReview = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_REVIEW'))
		try {
			const response = await fetch(`${API_SERVER}/user-reviews/${id}`, {
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

const receiveUserReview = data => {
	return{
		type: RECEIVE_USER_REVIEW,
		payload: data
	}
}

// <----- Update Review ----->
export const updateReview = (id, items, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_UPDATE_REVIEW'))
		try {
			const response = await fetch(`${API_SERVER}/user-review/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({
									comment: items.comment,
									rate: items.star,
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

// <----- Delete Review ----->
export const deleteReview = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_DELETE_REVIEW'))
		try {
			const response = await fetch(`${API_SERVER}/user-review/${id}`, {
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_DELETE_REVIEW'))
      		await dispatch(setLoading(false, 'LOADING_DELETE_REVIEW'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_DELETE_REVIEW', e))
			dispatch(setLoading(false, 'LOADING_DELETE_REVIEW'))
		}
	}
}

//<----- Create Review ----->
export const createReview = (id, items, accessToken, product_id) => {
	console.log('woyy' ,items)
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CREATE_REVIEW'))
		try {
			const response = await fetch(`${API_SERVER}/user-review`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: accessToken
                },
                body: JSON.stringify({					
    							comment: items.review,
									rate: items.ratings,
									product_id: product_id,
									id: id
                })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_CREATE_REVIEW'))
      await dispatch(setLoading(false, 'LOADING_CREATE_REVIEW'))
		} catch (e) {
			console.log('action add error',e)
			dispatch(setFailed(true, 'FAILED_CREATE_REVIEW', e))
			dispatch(setLoading(false, 'LOADING_CREATE_REVIEW'))
		}
	}
}


