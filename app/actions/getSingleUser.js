import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_SINGLE_USER } from '../constants'
import { API_SERVER_USER } from '../env'

export const fetchSingleUser = (id, accessToken) => {
	return async dispatch => {
		console.log('accestoken: ',id, accessToken)
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
			console.log('fetch single user: ', data)
			await dispatch(receiveSingleUser(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SINGLE_USER'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_USER'))
		} catch (e) {
            console.log('error single user: ', e)
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
