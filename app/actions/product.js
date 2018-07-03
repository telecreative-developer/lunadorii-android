import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_PRODUCT, RECEIVE_SEARCH_PRODUCT, RECEIVE_PRODUCT_WITHOUT_ID } from '../constants'
import { API_SERVER } from '../env'

export const fetchProduct = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/products?id=${id}`, {
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
			await dispatch(receiveProduct(data.data))
			await dispatch(setSuccess(true, 'SUCESS_FETCH_PRODUCT_WITHOUT_ID'))
			await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITHOUT_ID'))
		} catch (e){
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_WITHOUT_ID', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_WITHOUT_ID'))
		}
	}
}

const receiveProductWithoutID = data => {
	return{
		type: RECEIVE_PRODUCT_WITHOUT_ID,
		payload: data
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
			const response = await fetch(`${API_SERVER}/search?payload=${search}`, {
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
