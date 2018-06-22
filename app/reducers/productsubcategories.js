import { RECEIVE_PRODUCT_SUBCATEGORIES } from '../constants'

export const productsubcategories = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT_SUBCATEGORIES:
			return action.payload
		default:
			return state
	}
}