import { 
		RECEIVE_PRODUCT, 
		RECEIVE_SEARCH_PRODUCT, 
		RECEIVE_PRODCUT_WITHOU_ID,
		RECEIVE_SINGLE_PRODUCT_WITH_ID,
		RECEIVE_RELATED_PRODUCT,
		RECEIVE_SINGLE_RELATED_PRODUCT,
		RECEIVE_PRODUCT_WITH_CATEGROY
	} from '../constants'

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

export const receiveSingleProductWithId = ( state = [] , action ) => {
	switch (action.type) {
		case RECEIVE_SINGLE_PRODUCT_WITH_ID:
			return action.payload
		default:
			return state
	}
}

export const relatedProduct = ( state = [], action ) => {
	switch (action.type) {
		case RECEIVE_RELATED_PRODUCT:
			return action.payload
		default:
			return state
	}
}

export const singleRelatedProdct = ( state = [], action ) => {
	switch (action.type) {
		case RECEIVE_SINGLE_RELATED_PRODUCT:
			return action.payload
		default:
			return state
	}
}

export const receiveProductWithCategory = ( state = [], action ) => {
	switch (action.type){
		case RECEIVE_SINGLE_RELATED_PRODUCT:
			return action.payload
		default:
			return state
	}
}