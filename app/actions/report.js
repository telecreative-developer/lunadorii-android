import { setLoading, setFailed, setSuccess } from './processor'
import { RECEIVE_SEND_REPORT } from '../constants'
import { API_SERVER } from '../env'

export const report = (name, email, subject, content) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_SEND_REPORT'))
		try {
			const response = await fetch(`${API_SERVER}/report`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
					"name":name,
					"email":email,
					"subject":subject,
					"content":content
				})
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