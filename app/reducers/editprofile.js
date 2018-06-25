import { RECEIVE_EDIT_PASSWORD, RECEIVE_EDIT_EMAIL } from '../constants'

export const editpassword = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_EDIT_PASSWORD:
			return action.payload
		default:
			return state
	}
}

export const editemail = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_EDIT_EMAIL:
			return action.payload
		default:
			return state
	}
}