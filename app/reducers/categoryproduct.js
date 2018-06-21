import { RECEIVE_CATEGORY_PRODUCT } from '../constants'

export const categoryproduct = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_CATEGORY_PRODUCT:
			return action.payload
		default:
			return state
	}
}