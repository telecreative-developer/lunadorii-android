import { RECEIVE_EDIT_PASSWORD, RECEIVE_EDIT_EMAIL, RECEIVE_EDIT_NAME } from '../constants'

export const editname = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_EDIT_NAME:
			return action.payload
		default:
			return state
	}
}

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