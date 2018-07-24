
import { RECEIVE_CREDIT_USER, RECEIVE_CREDIT_MANIPULATE } from '../constants'

export const usercredit = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_CREDIT_USER:
			return action.payload
		default:
			return state
	}
}

export const manipulatecredit = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_CREDIT_MANIPULATE:
			return action.payload
		default:
			return state
	}
}