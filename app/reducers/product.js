import { RECEIVE_PRODUCT, RECEIVE_SEARCH_PRODUCT, RECEIVE_PRODCUT_WITHOU_ID } from '../constants'

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

export const productwithoutid = ( state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODCUT_WITHOU_ID:
			return action.payload
		default:
			return state
	}
}