import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CATEGORY_PRODUCT } from '../constants'
import { API_SERVER } from '../env'

export const fetchCategoryProduct = (accessToken) => {
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_FETCH_CATEGORY_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/api/v1/product-categories?with_subcategories=true`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			console.log('datacategory: ', data.data[0].subcategories)
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
