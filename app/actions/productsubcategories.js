import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_PRODUCT_SUBCATEGORIES } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchProductSubcategories = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_PRODUCT_SUBCATEGORIES'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/product-subcategories?with_products=true`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveProductSubcategories(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_PRODUCT_SUBCATEGORIES'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_SUBCATEGORIES'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_PRODUCT_SUBCATEGORIES', e))
			dispatch(setLoading(false, 'LOADING_FETCH_PRODUCT_SUBCATEGORIES'))
		}
	}
}

const receiveProductSubcategories = data => {
	return{
		type: RECEIVE_PRODUCT_SUBCATEGORIES,
		payload: data
	}
}
