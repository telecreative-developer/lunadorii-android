import { RECEIVE_SEND_REPORT } from '../constants'

export const getResultReport = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_SEND_REPORT:
			return action.payload
		default:
			return state
	}
}