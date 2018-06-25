import { RECEIVE_WISTLIST } from '../constants'

export const wistlist = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_WISTLIST:
			return action.payload
		default:
			return state
	}
}