import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_BANNERS } from '../constants'
import { API_SERVER } from '../env'

export const fetchBanners = () => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_FETCH_BANNERS'))
		try {
			const response = await fetch(`${API_SERVER}/banners`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				}
			})
			const data = await response.json()
			await dispatch(receiveBanners(data.data))
			await dispatch(setSuccess(true, 'SUCCESS_FETCH_BANNERS'))
      		await dispatch(setLoading(false, 'LOADING_FETCH_BANNERS'))
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_FETCH_BANNERS', e))
			dispatch(setLoading(false, 'LOADING_FETCH_BANNERS'))
		}
	}
}

const receiveBanners = data => {
	return{
		type: RECEIVE_BANNERS,
		payload: data
	}
}
