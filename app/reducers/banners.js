import { RECEIVE_BANNERS } from '../constants'

export const banners = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BANNERS:
			return action.payload
		default:
			return state
	}
}