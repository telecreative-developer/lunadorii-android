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
		RECEIVE_PRODUCT_WITH_CATEGORY,
		RECEIVE_PRODUCT_WITH_BANNER,
		RECEIVE_SINGLE_HISTORY,
		RECEIVE_SINGLE_RECENT
	} from '../constants'
import { API_SERVER } from '../env'


//  <---- FETCH PRODUCT ----> //
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

// < ----- FETCH PRODUCT WITHOUT ID ----- >
export const fetchProductWithoutId = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/products/new-arrivals`, {
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
			const response = await fetch(`${API_SERVER}/products/best-seller`, {
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
export const fetchProductRecent = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_RECENT'))
		try {
			const response = await fetch(`${API_SERVER}/order/recent/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveProductRecent(data.data))
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
export const fetchProductHistory = (id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/order/history/${id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
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
export const fetchSearchProduct = (search,subcategories,brand,maxPrice,minPrice) => {
    if(subcategories.length == 0){
      subcategories = ''
    }else{
      subcategories = `[${subcategories}]`
    }
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SEARCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/search?payload=${search}&subcategories=${subcategories}&productBrand=${brand}&maxPrice=${maxPrice}&minPrice=${minPrice}`, {
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
	return {
		type: RECEIVE_PRODUCT_WITH_CATEGORY,
		payload: data
	}
}

// <----- FETCH PRODUCT5 WITH BRAND -----> //
export const fetchProductWithBrand = (brand_id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		try {
			const response = await fetch(`${API_SERVER}/products/brand/${brand_id}`,{
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type' :'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveProductWithBrand(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT_WITH_CATEGORY'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		}catch (e){
			await dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITH_CATEGORY'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		}
	}
}

const receiveProductWithBrand = data => {
	return {
		type: RECEIVE_PRODUCT_WITH_BRAND,
		payload: data
	}
}

// <----- FETCH PRODUCT5 WITH BANNER -----> //
export const fetchProductWithBanner = (banner_id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		try {
			const response = await fetch(`${API_SERVER}/product-banners/${banner_id}`,{
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type' :'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveProductWithBanner(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT_WITH_CATEGORY'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		}catch (e){
			await dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITH_CATEGORY'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITH_CATEGORY'))
		}
	}
}

const receiveProductWithBanner = data => {
	return {
		type: RECEIVE_PRODUCT_WITH_BANNER,
		payload: data
	}
}

//  <---- FETCH SINGLE PRODUCT HISTORY ----> //
export const fetchSingleProductHistory = (product_id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SINGLE_HISTORY'))
		try {
			const response = await fetch(`${API_SERVER}/order/history/single/${product_id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveSingleProductHistory(data.data[0]))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SINGLE_HISTORY'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_HISTORY'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_SINGLE_HISTORY', e))
			dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_HISTORY'))
		}
	}
}

const receiveSingleProductHistory = data => {
	return{
		type: RECEIVE_SINGLE_HISTORY,
		payload: data
	}
}

//  <---- FETCH SINGLE PRODUCT RECENT ----> //
export const fetchSingleProductRecent = (product_id, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SINGLE_RECENT'))
		try {
			const response = await fetch(`${API_SERVER}/order/recent/single/${product_id}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(receiveSingleProductRecent(data.data[0]))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SINGLE_RECENT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_RECENT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_SINGLE_RECENT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_SINGLE_RECENT'))
		}
	}
}

const receiveSingleProductRecent = data => {
	return{
		type: RECEIVE_SINGLE_RECENT,
		payload: data
	}
}

//function Accept Order
export const acceptOrder = (billing_code, accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_ACCEPT_ORDER'))
		try {
			const response = await fetch(`${API_SERVER}/order/status/delivered/${billing_code}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
				}
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_ACCEPT_ORDER'))
      await dispatch(setLoading(false, 'LOADING_ACCEPT_ORDER'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_ACCEPT_ORDER', e))
			dispatch(setLoading(false, 'LOADING_ACCEPT_ORDER'))
		}
	}
}