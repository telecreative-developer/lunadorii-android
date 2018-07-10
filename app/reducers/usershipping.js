import { RECEIVE_USER_SHIPPING, RECEIVE_PROVINCE } from '../constants'

export const usershipping = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_USER_SHIPPING:
			return action.payload
		default:
			return state
	}
}

export const province = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PROVINCE:
			return action.payload
		default:
			return state
	}
}