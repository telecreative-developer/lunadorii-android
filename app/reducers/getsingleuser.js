import { RECEIVE_SINGLE_USER } from '../constants'

export const getsingleuser = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_SINGLE_USER:
			return action.payload
		default:
			return state
	}
}