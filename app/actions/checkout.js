import { setLoading, setFailed, setSuccess } from './processor'
// import { RECEIVE_WISHLIST } from '../constants'
import { API_SERVER } from '../env'

export const postCheckout = (dataUser, accessToken) => {
	// const { data } = dataUser
	// console.log(dataUser)
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_CHECKOUT'))
		try {
			const response = await fetch(`http://ec2-52-77-224-133.ap-southeast-1.compute.amazonaws.com/api/v1/order/checkout`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: accessToken
        },
        body: JSON.stringify({
					"delivery_service": "JNE",
					"delivery_price": 30000,
					"paid_method": dataUser.paid_method,
					"bank": "BCA",
					"address": dataUser.detail_address,
					"city_id": dataUser.city_id,
					"province_id": dataUser.province_id,
					"id": dataUser.id,
					"data": dataUser.data
				})
			})
			const data = await response.json()
			console.log(data)
			await dispatch(setSuccess(true, 'SUCCESS_CHECKOUT'))
    	await dispatch(setLoading(false, 'LOADING_CHECKOUT'))
		} catch (e) {
			console.log(e)
			dispatch(setFailed(true, 'FAILED_CHECKOUT', e))
			dispatch(setLoading(false, 'LOADING_CHECKOUT'))
		}
	}
}

