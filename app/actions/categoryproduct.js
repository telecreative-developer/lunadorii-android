import { AsyncStorage } from 'react-native'
import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CATEGORY_PRODUCT } from '../constants'
import { API_SERVER } from '../env'

export const fetchCategoryProduct = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_CATEGORY_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/product-subcategories`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveCategoryProduct(data.data))
			await dispatch(saveCategories(data.data))
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

const saveCategories = data => {
	return () => {
		AsyncStorage.setItem('categories', JSON.stringify(data))
	}
}