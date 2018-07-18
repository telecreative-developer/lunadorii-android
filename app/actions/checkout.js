import { setLoading, setFailed, setSuccess } from './processor'
// import { RECEIVE_WISHLIST } from '../constants'
import { API_SERVER } from '../env'

export const postCheckout = (accessToken, id) => {
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
          {
            address:dataUser.address,
            paid_method:dataUser.paid_method,
            id:dataUser.id,
            data: data.product.map(d => d)
          }
        })
			})
			const data = await response.json()
			await dispatch(setSuccess(true, 'SUCCESS_CHECKOUT'))
    	await dispatch(setLoading(false, 'LOADING_CHECKOUT'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_CHECKOUT', e))
			dispatch(setLoading(false, 'LOADING_CHECKOUT'))
		}
	}
}

