
import { RECEIVE_BANK_USER } from '../constants'

export const userbank = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BANK_USER:
			return action.payload
		default:
			return state
	}
}
