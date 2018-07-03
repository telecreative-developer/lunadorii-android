import { API_SERVER } from '../env'
import { RNS3 } from 'react-native-aws3'
import { setLoading, setFailed, setSuccess } from './processor'
import { login } from './login'
import axios from 'axios'

export const saveUpdateImage = (id, email, password, items) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_SAVE_UPDATE_IMAGE'))
		
		try {
			console.log('items: ', items)
			const fd = new FormData()
			const uri = items.avatar_url
			fd.append({
				uri
			  });

			axios({
				method: 'POST',
				url: `${API_SERVER}/upload-avatar/${id}`,
				data: fd,
				body: fd,
				config: { 
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			}).then(function (response) {
					//handle success
					console.log('response success: ', response);
				})
				.catch(function (response) {
					//handle error
					console.log('response failed: ', response);
				});
			
			
			
			await dispatch(login(email, password))
            await dispatch(setSuccess(true, 'SUCCESS_SAVE_UPDATE_IMAGE'))
            await dispatch(setLoading(false, 'LOADING_SAVE_UPDATE_IMAGE'))
		} catch (e) {
			console.log('error: ',e)
			await dispatch(setFailed(true, 'FAILED_SAVE_UPDATE_IMAGE', e))
			await dispatch(setLoading(false, 'LOADING_SAVE_UPDATE_IMAGE'))
		}
	}
}
