import { RECEIVE_USER_REVIEW } from '../constants'

export const userreview = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_USER_REVIEW:
			return action.payload
		default:
			return state
	}
}
