import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_COURIER } from '../constants'
import { API_SERVER } from '../env'

//<---- GET COURIER ---->
export const fetchCourier = (weight_gram, province_id) => {
	console.log('bla bla ' ,weight_gram, province_id)
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_COURIER'))
		try {
			const response = await fetch(`${API_SERVER}/general/ongkir`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({					
                  province_id:province_id,
                  weight_gram:weight_gram
                })
			})
			const data = await response.json()
			console.log('action get Shipping',data)
			await dispatch(receiveCourier(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_CREATE_SHIPPING'))
      await dispatch(setLoading(false, 'LOADING_CREATE_SHIPPING'))
		} catch (e) {
			console.log('action add error',e)
			dispatch(setFailed(true, 'FAILED_CREATE_SHIPPING', e))
			dispatch(setLoading(false, 'LOADING_CREATE_SHIPPING'))
		}
	}
}

const receiveCourier = data => {
	return{
		type: RECEIVE_COURIER,
		payload: data
	}
}