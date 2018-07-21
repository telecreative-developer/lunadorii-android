import { SET_LOADING, SET_SUCCESS, SET_FAILED, SET_LOGGED } from '../constants'

export const setLoading = (condition, process_on) => ({
	type: SET_LOADING,
	condition,
	process_on
})

export const setSuccess = (condition, process_on) => ({
	type: SET_SUCCESS,
	condition,
	process_on
})

export const setFailed = (condition, process_on, message) => ({
	type: SET_FAILED,
	condition,
	process_on,
	message
})

export const setLogged = condition => {
	return {
		type: SET_LOGGED,
		condition
	}
}