import { AsyncStorage } from 'react-native'
import { setLoading, setFailed, setSuccess } from './processor'
import { SAVE_SESSION_PERSISTANCE } from '../constants'
import { API_SERVER_USER } from '../env'

export const login = (email, password) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/auth/user`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email, password})
			})
			const data = await response.json()
			if (data.code === 401 && data.name === 'error') {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			} else {
				await dispatch(fetchUserWithEmail(email, password, data.tokens.accessToken, data.tokens.users_id, data.tokens.avatar_url, data.tokens.first_name))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			}
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			dispatch(setFailed(false, 'FAILED_PROCESS_LOGIN'))
		}
	}
}

const saveSession = data => {
	return () => {
		AsyncStorage.setItem('session', JSON.stringify(data))
	}
}

export const saveSessionPersistance = data => {
	return{
		type: SAVE_SESSION_PERSISTANCE,
		payload: data
	}
}