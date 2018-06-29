import { RECEIVE_CART_USER } from '../constants'

export const cartuser = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_CART_USER:
			return action.payload
		default:
			return state
	}
}
