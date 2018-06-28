import { RECEIVE_PRODUCT, RECEIVE_SEARCH_PRODUCT } from '../constants'

export const product = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT:
			return action.payload
		default:
			return state
	}
}

export const searchproduct = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_SEARCH_PRODUCT:
			return action.payload
		default:
			return state
	}
}