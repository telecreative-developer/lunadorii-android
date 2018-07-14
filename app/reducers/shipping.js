import { RECEIVE_COURIER } from '../constants'

export const receiveCourier = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_COURIER:
			return action.payload
		default:
			return state
	}
}
