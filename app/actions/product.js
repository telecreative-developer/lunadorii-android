import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_PRODUCT, RECEIVE_SEARCH_PRODUCT } from '../constants'
import { API_SERVER_PRODUCT, API_SERVER_SEARCH } from '../env'

export const fetchProduct = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/products?id=${id}`, {
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

export const fetchProductWithoutIs = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_WITHOUT_ID'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/products`, {
				method: 'GET',
				headers:{
					Accept: 'application/json',
					'content-Type': 'application/json'
				}
			})
			const data = await response.json()
			await dispatch(receiveProduct(data.data))
			await dispatch(setSuccess(true, 'SUCESS_FETCH_PRODUCT_WITHOUT_ID'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITHOUT_ID'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITHOUT_ID', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITHOUT_ID'))
		}
	}
}

const receiveProduct = data => {
	return{
		type: RECEIVE_PRODUCT,
		payload: data
	}
}

export const fetchSearchProduct = (search) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_SEARCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER_SEARCH}/api/v1/search?payload=${search}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			// console.log("hasil search action", data.data)
			await dispatch(receiveSearchProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_SEARCH_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_SEARCH_PRODUCT'))
		} catch (e) {
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
