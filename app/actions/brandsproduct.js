import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_BRANDS_PRODUCT } from '../constants'
import { API_SERVER } from '../env'

export const fetchBrandsProduct = (accessToken) => {
	return async dispatch => {
		console.log('accestoken: ', accessToken)
		await dispatch(setLoading(true, 'LOADING_FETCH_BRANDS_PRODUCT'))
		try {
			const response = await fetch(`${API_SERVER}/api/v1/product-brands`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			console.log('dataBrands: ', data.data)
			await dispatch(receiveBrandsProduct(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_BRANDS_PRODUCT'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_BRANDS_PRODUCT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_BRANDS_PRODUCT', e))
			dispatch(setLoading(false, 'LOADING_FETCH_BRANDS_PRODUCT'))
		}
	}
}

const receiveBrandsProduct = data => {
	return{
		type: RECEIVE_BRANDS_PRODUCT,
		payload: data
	}
}
