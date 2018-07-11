import { setLoading, setFailed, setSuccess } from './processor'
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
		RECEIVE_PRODUCT_WITH_BRAND,
		RECEIVE_PRODUCT_WITH_CATEGORY
	} from '../constants'
import { API_SERVER } from '../env'


//  <---- FETCH PRODUCT WITH ID USER ----> //
export const fetchProduct = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/products/new-arrivals?id=${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT'))
		}
	}
}

const receiveProduct = data => {
	return{
		type: RECEIVE_PRODUCT,
		payload: data
	}
}

//  <---- FETCH PRODUCT WITHOUT ID USER ----> //
export const fetchProductWithoutId = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_WITHOUT_ID'))
		try {
			const response = await fetch(`${API_SERVER}/products`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveProductWithoutId(data.data))
			await dispatch(setSuccess(true, 'SUCESS_FETCH_PRODUCT_WITHOUT_ID'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITHOUT_ID'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITHOUT_ID', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITHOUT_ID'))
		}
	}
}

const receiveProductWithoutId = data => {
	return{
		type: RECEIVE_PRODUCT_WITHOUT_ID,
		payload: data
	}
}

//  <---- FETCH PRODUCT BEST SELLER ----> //
export const fetchProductBestSeller = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_BEST_SELLER'))
		try {
			const response = await fetch(`${API_SERVER}/products`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveProductBestSeller(data.data))
			await dispatch(setSuccess(true, 'SUCESS_FETCH_PRODUCT_BEST_SELLER'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_BEST_SELLER'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_BEST_SELLER', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_BEST_SELLER'))
		}
	}
}

const receiveProductBestSeller = data => {
	return{
		type: RECEIVE_PRODUCT_BEST_SELLER,
		payload: data
	}
}

//  <---- FETCH PRODUCT RECENT ----> //
export const fetchProductRecent = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_RECENT'))
		try {
			const response = await fetch(`https://api.backendless.com/F516E126-9D7D-8AB8-FFE8-6B20CAC17000/1E945276-30A8-7AAD-FFB7-2EF8CD024200/data/recent_order`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			console.log('action recent ', data)
			await dispatch(receiveProductRecent(data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT_RECENT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_RECENT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_RECENT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_RECENT'))
		}
	}
}

const receiveProductRecent = data => {
	return{
		type: RECEIVE_PRODUCT_RECENT,
		payload: data
	}
}

//  <---- FETCH PRODUCT HISTORY ----> //
export const fetchProductHistory = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/products/new-arrivals?id=${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveProductHistory(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT'))
		}
	}
}

const receiveProductHistory = data => {
	return{
		type: RECEIVE_PRODUCT_HISTORY,
		payload: data
	}
}

//  <---- SEARCH PRODUCT ----> //
export const fetchSearchProduct = (search) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SEARCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/search?payload=${search}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			console.log("hasil search action", data)
			await dispatch(receiveSearchProduct(data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SEARCH_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_SEARCH_PRODUCT'))
		} catch (e) {
			console.log("error search action", e)
			dispatch(setFailed(true, 'FAILED_FETCH_SEARCH_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_SEARCH_PRODUCT'))
		}
	}
}

const receiveSearchProduct = data => {
	return{
		type: RECEIVE_SEARCH_PRODUCT,
		payload: data
	}
}


//  <---- FETCH SINGLE PRODUCT WITH ID USER ----> //
export const fetchSingleProductWithId = (id, id_product) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_SINGLE_PRODUCR_WITH_ID'))
		try {
			const response = await fetch(`${API_SERVER}/product/${id_product}?id=${id}`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveSingleProductWithId(data.data))
			await dispatch(setLoading(false, 'LOADING_SINGLE_PRODUCR_WITH_ID'))
			await dispatch(setSuccess(true, 'SUCCESS_SINGLE_PRODUCR_WITH_ID'))
		} catch (e){
			dispatch(setLoading(false, 'LOADING_SINGLE_PRODUCR_WITH_ID'))
			dispatch(setFailed(true, 'FAILED_SINGLE_PRODUCR_WITH_ID', e))
		}

	}
}

const receiveSingleProductWithId = data => {
	return{
		type: RECEIVE_SINGLE_PRODUCT_WITH_ID,
		payload: data
	}
}
//api/v1/products/related-product
export const fetchRelatedProduct = (product_id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_RELATED_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/products/related/${product_id}`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveRelatedProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_RELATED_PRODUCT'))
			await dispatch(setLoading(false, 'LOADING_FETCH_RELATED_PRODUCT'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_RELATED_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_RELATED_PRODUCT'))
		}
	}
}

const receiveRelatedProduct = data => {
	return{
		type: RECEIVE_RELATED_PRODUCT,
		payload: data
	}
}

//  <---- FETCH RELATED PRODUCT  ----> //
export const fetchSingleRelatedProduct = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SINGLE_RELATED_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/product/related`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveSingleRelatedProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SINGLE_RELATED_PRODUCT'))
			await dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_RELATED_PRODUCT'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_SINGLE_RELATED_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_RELATED_PRODUCT'))
		}
	}	
}

const receiveSingleRelatedProduct = data => {
	return{
		type: RECEIVE_SINGLE_RELATED_PRODUCT,
		payload: data 
	}
}


//  <---- FETCH PRODUCT WITH CATEGORY ----> //
export const fetchProductWithCategory = (product_subcategoy_id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		try {
			const response = await fetch(`${API_SERVER}/products/subcategory/${product_subcategoy_id}`,{
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type' :'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveProductWithCategory(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT_WITH_CATEGORY'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		}catch (e){
			await dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITH_CATEGORY'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		}
	}
}

const receiveProductWithCategory = data => {
	console.log("ha" , data)
	return {
		type: RECEIVE_PRODUCT_WITH_CATEGORY,
		payload: data
	}
}

//  <---- FETCH PRODUCT WITH BRAND ----> //
export const fetchProductWithBrand = (id_brand) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_WITH_BRAND'))
		try {
			const response = await fetch(`${API_SERVER}/product/${id_brand}`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			// await dispatch(getProductWithCategory(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT_WITH_BRAND'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_BRAND'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITH_BRAND', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_BRAND'))
		}
	}
}

// const getProductWithCategory = data => {
// 	return{
// 		type: RECEIVE_PRODUCT_WITH_BRAND,
// 		payload: data
// 	}
// }