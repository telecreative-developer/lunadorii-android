import { RECEIVE_BRANDS_PRODUCT } from '../constants'

export const brandsproduct = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_BRANDS_PRODUCT:
			return action.payload
		default:
			return state
	}
}