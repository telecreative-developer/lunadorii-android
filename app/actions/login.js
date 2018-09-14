import { AsyncStorage } from 'react-native'
import FBSDK from 'react-native-fbsdk';
const { LoginButton, LoginManager, AccessToken } = FBSDK;

import { setLoading, setFailed, setSuccess, setLogged } from './processor'
import { SAVE_SESSION_PERSISTANCE } from '../constants'
import { API_SERVER } from '../env'

//Function Login
export const login = (email, password) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${API_SERVER}/auth/user`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email, password})
			})
			const data = await response.json()
			console.log('data login :', data)
			if (data.status === 400 && data.name === 'error') {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_LOGIN'))
			} else {
				await dispatch(fetchUserWithId(data.accessToken, data.id))
				await dispatch(setLogged(true))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			}
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
		}
	}
}

//Authentication Using Facebook
export const loginFB = () => {
	return async dispatch => {
		AccessToken.getCurrentAccessToken()
		.then((data) => {
			if (data !== null) {
				console.log("loginfb", data)
				dispatch(initUser(data.accessToken));
			} else {
				dispatch(loginFBWithPermission());
			}
		})
		.catch(err => {
			console.log(err);
		});
	}
}

const loginFBWithPermission = () => {
	return async dispatch => {
		LoginManager.logInWithReadPermissions(["public_profile", "email"])
		.then(
			function (result) {
				if (result.isCancelled) {
					console.log('Login cancelled', result)
				} else {
					console.log('Login success with permissions: ' + result.grantedPermissions.toString())
					console.log('Login hahaha', result)
					AccessToken.getCurrentAccessToken().then((data) => {
						dispatch(initUser(data.accessToken));
						console.log("fb with permission",data)
					}).catch(err => {
						console.log(err)
					})
				}
			},
			function (error) {
				console.log('Login fail with error: ' + error)
				Alert.alert('Error', 'Login fail with error: ' + error);
			}
		)
		.catch((err) => console.log(err));
	}
}

const initUser = (token1) => {
	return async dispatch => {
		fetch('https://graph.facebook.com/v3.1/me?fields=id,first_name,last_name,email,picture{url}&access_token=' + token1) //--> parameter graph bisa diganti sesuai keinginan mengacu pada graph API Facebook
		.then((response) => response.json())
		.then((data) => {
			console.log("initUser", data);
			dispatch(authFB(data.id, data.first_name, data.last_name, data.picture.data.url, data.email, token1))
		})
		.catch((err) => console.log(err));
	}
}

//send id, email & accessToken to server (authentication at server)
const authFB = (id, first_name, last_name, avatar_url, email, accessToken) => {
	return async dispatch => {
		console.log("hahaha", first_name, last_name, avatar_url, email, accessToken)
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${API_SERVER}/auth/user/facebook`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({id, first_name, last_name, avatar_url, email, accessToken})
			})
			const data = await response.json()
			await console.log('data login fb hahah :', data)
			if (data.status === 400 && data.name === 'error') {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_LOGIN'))
			} else {
				await dispatch(fetchUserWithId(data.accessToken, data.id))
				await dispatch(setLogged(true))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			}
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
		}
	}
}

export const loginGoogle = (first_name, last_name, avatar_url, email) => {
	return async dispatch => {
		console.log("hahaha", first_name, last_name, avatar_url, email)
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${API_SERVER}/auth/user/google`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({first_name, last_name, avatar_url, email})
			})
			const data = await response.json()
			await console.log('data login google hahah :', data)
			if (data.status === 400 && data.name === 'error') {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_LOGIN'))
			} else {
				await dispatch(fetchUserWithId(data.accessToken, data.id))
				await dispatch(setLogged(true))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			}
		} catch (e) {
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
		}
	}
}

const fetchUserWithId = (accessToken, users_id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_USER_WITH_ID'))
		try {
			const response = await fetch(`${API_SERVER}/user/${users_id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
			const data = await response.json()
			{console.log("isi action", data)}
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