
import { RECEIVE_CHECKOUT_DATA} from '../constants'

export const receiveCheckout = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_CHECKOUT_DATA:
			return action.payload
		default:
			return state
	}
}