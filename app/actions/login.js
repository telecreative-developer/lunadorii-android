import { AsyncStorage } from 'react-native'
import { setLoading, setFailed, setSuccess } from './processor'
import { SAVE_SESSION_PERSISTANCE } from '../constants'
import { API_SERVER_USER, API_SERVER_AUTH } from '../env'

export const login = (email, password) => {
	return async dispatch => {
		console.log('email: ', email, 'password: ', password)
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${API_SERVER_AUTH}/api/v1/auth/user`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email, password})
			})
			const data = await response.json()
			console.log("data action:" , data)
			if (data.status === 400 && data.name === 'error') {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			} else {
				await dispatch(fetchUserWithId(data.email, data.password, data.accessToken, data.id))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			}
		} catch (e) {
			 console.log('error: ', e)
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
		}
	}
}

export const fetchUserWithId = (email, password, accessToken, users_id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_USER_WITH_ID'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user/${users_id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
            const data = await response.json()
            console.log('ini data session' , data.data)
			await dispatch(saveSession({...data.data[0], accessToken}))
			await dispatch(saveSessionPersistance({...data.data[0], accessToken	}))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_USER_WITH_ID'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_USER_WITH_ID'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_USER_WITH_ID', e))
			dispatch(setLoading(false, 'LOADING_FETCH_USER_WITH_ID'))
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