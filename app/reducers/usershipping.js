import { RECEIVE_USER_SHIPPING } from '../constants'

export const usershipping = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_USER_SHIPPING:
			return action.payload
		default:
			return state
	}
}
