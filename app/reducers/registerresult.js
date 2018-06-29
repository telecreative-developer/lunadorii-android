import { RECEIVE_REGISTER_RESULT } from '../constants'

export const registerresult = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_REGISTER_RESULT:
			return action.payload
		default:
			return state
	}
}