import { API_SERVER_AUTH } from '../env'
import { setLoading, setFailed, setSuccess } from './processor'

const toLower = str => {
  return str.replace(/\s/g, '').toLowerCase()
}

export const register = item => {
  return async dispatch => {
    await dispatch(setLoading(true, 'LOADING_REGISTER'))
    console.log(item)
    try {
      const response = await fetch(`${API_SERVER_AUTH}/api/v1/user/register`, {
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
      console.log("item: ",item)
      console.log("data: ",data)
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