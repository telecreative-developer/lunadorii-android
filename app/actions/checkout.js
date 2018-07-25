import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_CHECKOUT_DATA } from '../constants'
import { API_SERVER } from '../env'

export const postCheckout = ( dataUser, accessToken ) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CHECKOUT'))
		try {
			const response = await fetch(`${API_SERVER}/order/checkout`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
        },
        body: JSON.stringify({
					"delivery_service": dataUser.service,
					"delivery_price": dataUser.delivery_price,
					"paid_method": dataUser.selectedMethod,
					"address": dataUser.detail_address,
					"city_id": dataUser.city_id,
					"province_id": dataUser.province_id,
					"id": dataUser.id,
					"data": dataUser.data,
					"user": dataUser.user,
					"payment_detail":payment_detail
				})
			})
			const data = await response.json()
			console.log('red check',data)
			await dispatch(receiveMessage(data))
			await dispatch(receiveCheckout(data.data.length && data.data[0]))
			await dispatch(setSuccess(true, 'SUCCESS_CHECKOUT'))
    	await dispatch(setLoading(false, 'LOADING_CHECKOUT'))
		} catch (e) {
			console.log(e)
			dispatch(setFailed(true, 'FAILED_CHECKOUT', e))
			dispatch(setLoading(false, 'LOADING_CHECKOUT'))
		}
	}
}

const receiveMessage = data =>{
	return{
		type: RECEIVE_CHECKOUT_DATA,
		payload: data
	}
}

const receiveCheckout = data => {
	return{
		type: RECEIVE_CHECKOUT_DATA,
		payload: data
	}
}