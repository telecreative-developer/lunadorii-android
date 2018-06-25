import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CATEGORY_PRODUCT } from '../constants'
import { API_SERVER_PRODUCT } from '../env'

export const fetchCategoryProduct = (accessToken) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_CATEGORY_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER_PRODUCT}/api/v1/product-subcategories`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveCategoryProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_CATEGORY_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_CATEGORY_PRODUCT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_CATEGORY_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_CATEGORY_PRODUCT'))
		}
	}
}

const receiveCategoryProduct = data => {
	return{
		type: RECEIVE_CATEGORY_PRODUCT,
		payload: data
	}
}
