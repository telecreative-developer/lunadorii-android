import { SET_LOADING, SET_SUCCESS, SET_FAILED, SET_LOGGED} from '../constants'

export const loading = (state = [], action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				condition: action.condition,
				process_on: action.process_on
			}
		default:
			return state
	}
}

export const success = (state = [], action) => {
	switch (action.type) {
		case SET_SUCCESS:
			return {
				condition: action.condition,
				process_on: action.process_on
			}
		default:
			return state
	}
}


export const failed = (state = [], action) => {
	switch (action.type) {
		case SET_FAILED:
			return {
				condition: action.condition,
				process_on: action.process_on,
				message: action.message
			}
		default:
			return state
	}
}

export const logged = (state = false, action) => {
	switch (action.type) {
		case SET_LOGGED:
			return action.condition
		default:
			return state
	}
}
