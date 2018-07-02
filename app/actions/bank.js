import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_BANK_USER } from '../constants'
import { API_SERVER_USER } from '../env'

export const fetchUserBank = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_USER_BANK'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user-banks/${id}`, {
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