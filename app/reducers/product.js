import { 
		RECEIVE_PRODUCT, 
		RECEIVE_SEARCH_PRODUCT, 
		RECEIVE_PRODCUT_WITHOUT_ID,
		RECEIVE_SINGLE_PRODUCT_WITH_ID,
		RECEIVE_RELATED_PRODUCT,
		RECEIVE_SINGLE_RELATED_PRODUCT,
		RECEIVE_PRODUCT_WITH_CATEGORY
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

export const receiveProductWithoutId = ( state = [], action) => {
	console.log('data jancok :', action.payload)
	switch (action.type) {
		case RECEIVE_PRODCUT_WITHOUT_ID:
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

export const receiveProductWithCategory = (state = [], action ) => {
	console.log('reducer:', action.payload)
	switch (action.type) {
		case RECEIVE_PRODUCT_WITH_CATEGORY:
			return action.payload
		default:
			return state
	}
}

