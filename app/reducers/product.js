import { 
		RECEIVE_PRODUCT,
		RECEIVE_PRODUCT_BEST_SELLER,
		RECEIVE_PRODUCT_RECENT,
		RECEIVE_PRODUCT_HISTORY, 
		RECEIVE_SEARCH_PRODUCT, 
		RECEIVE_PRODUCT_WITHOUT_ID,
		RECEIVE_SINGLE_PRODUCT_WITH_ID,
		RECEIVE_RELATED_PRODUCT,
		RECEIVE_SINGLE_RELATED_PRODUCT,
		RECEIVE_PRODUCT_WITH_CATEGORY,
		RECEIVE_PRODUCT_WITH_BRAND
	} from '../constants'

export const product = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT:
			return action.payload
		default:
			return state
	}
}

export const productbestseller = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT_BEST_SELLER:
			return action.payload
		default:
			return state
	}
}

export const productrecent = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT_RECENT:
			return action.payload
		default:
			return state
	}
}
export const producthistory = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_PRODUCT_HISTORY:
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
	switch (action.type) {
		case RECEIVE_PRODUCT_WITH_CATEGORY:
			return action.payload
		default:
			return state
	}
}

export const receiveProductWithBrand = ( state = [], action ) => {
	switch (action.type) {
		case RECEIVE_PRODUCT_WITH_BRAND:
			return action.payload
		default:
			return state
	}
}
