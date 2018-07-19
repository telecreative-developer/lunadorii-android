import { setLoading, setFailed, setSuccess } from './processor'
// import { RECEIVE_WISHLIST } from '../constants'
import { API_SERVER } from '../env'

export const postCheckout = (dataUser, accessToken) => {
	console.log('dataaaaa:',dataUser)
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
						delivery_service:dataUser.service,
            paid_method:dataUser.selectedMethod,
						id:dataUser.id,
						address:dataUser.detail_address,
						delivery_price:dataUser.delivery_price,
						city_id: dataUser.city_id,
						province_id: dataUser.province_id,
						data: dataUser.data
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

