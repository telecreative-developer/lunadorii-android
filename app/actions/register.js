import { API_SERVER_AUTH, API_SERVER_USER } from '../env'
import { setLoading, setFailed, setSuccess } from './processor'

const toLower = str => {
  return str.replace(/\s/g, '').toLowerCase()
}

export const register = item => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_REGISTER'))
    try {
      const response = await fetch(`${API_SERVER_USER}/api/v1/user/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...item,
          first_name: item.first_name,
          last_name: item.last_name,
          email: toLower(item.email),
          password: item.password,
        })
      })
      
      const data = await response.json()
      if (data.status === 401) {
        await dispatch(
          setFailed(true, 'FAILED_REGISTER', data.message)
        )
        await dispatch(
          setFailed(false, 'FAILED_REGISTER', data.message)
        )
        await dispatch(setLoading(false, 'LOADING_REGISTER'))
      } else {
        await dispatch(setSuccess(true, 'SUCCESS_REGISTER'))
        await dispatch(setSuccess(false, 'SUCCESS_REGISTER'))
        await dispatch(setLoading(false, 'LOADING_REGISTER'))
        
      }
    } catch (e) {
      await dispatch(
        setFailed(true, 'FAILED_REGISTER', 'Something Wrong!')
      )
      await dispatch(setLoading(false, 'LOADING_REGISTER'))
    }
  }
}

export const checkEmail = (email) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_CHECK_EMAIL'))
		try {
			const response = await fetch(`${API_SERVER_USER}/api/v1/user/check-email`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email})
			})
			const data = await response.json()
			if (data.status === 409 && data.name === 'error') {
        await dispatch(setFailed(true, 'FAILED_PROCESS_CHECK_EMAIL', data.message))
        await dispatch(setFailed(false, 'FAILED_PROCESS_CHECK_EMAIL'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_CHECK_EMAIL'))
			} else {
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_CHECK_EMAIL'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_CHECK_EMAIL'))
			}
		} catch (e) {
			dispatch(setFailed(true, 'FAILED_PROCESS_CHECK_EMAIL', e))
			dispatch(setLoading(false, 'LOADING_PROCESS_CHECK_EMAIL'))
		}
	}
}
