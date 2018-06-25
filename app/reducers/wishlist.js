import { RECEIVE_WISHLIST } from '../constants'

export const wishlist = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_WISHLIST:
			return action.payload
		default:
			return state
	}
}