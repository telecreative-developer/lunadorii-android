import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_SINGLE_USER } from '../constants'
import { API_SERVER_USER } from '../env'

export const fetchSingleUser = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SINGLE_USER'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user/${id}`, {
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
