import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_SEND_REPORT } from '../constants'
import { API_SERVER_REPORT } from '../env'

export const report = (data) => {
	return async dispatch => {
		console.log('data: ', data)
		await dispatch(setLoading(true, 'LOADING_SEND_REPORT'))
		try {
			const response = await fetch(`${API_SERVER_REPORT}/api/v1/report`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
			})
			const data = await response.json()
			console.log('SendReport: ', data)
			await dispatch(receiveResultReport(data))
			await dispatch(setSuccess(true, 'SUCCESS_SEND_REPORT'))
      		await dispatch(setLoading(false, 'LOADING_SEND_REPORT'))
		} catch (e) {
            console.log('error SendReport: ', e)
			dispatch(setFailed(true, 'FAILED_SEND_REPORT', e))
			dispatch(setLoading(false, 'LOADING_SEND_REPORT'))
		}
	}
}

const receiveResultReport = data => {
	return{
		type: RECEIVE_SEND_REPORT,
		payload: data
	}
}