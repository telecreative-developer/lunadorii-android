import { RECEIVE_EDIT_PASSWORD } from '../constants'

export const editpassword = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_EDIT_PASSWORD:
			return action.payload
		default:
			return state
	}
}