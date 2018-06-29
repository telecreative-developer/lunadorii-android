import { API_SERVER_USER } from '../env'
import RNFetchBlob from 'react-native-fetch-blob'
import { setLoading, setFailed, setSuccess } from './processor'
import { login } from './login'

export const saveUpdateImage = (id, email, password, items) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_SAVE_UPDATE_IMAGE'))
		try {
			console.log('items: ', items)

			const responseImage = await RNFetchBlob.fetch(
				'POST',
				'https://api.cloudinary.com/v1_1/telecreativeid/image/upload?upload_preset=zgh23hbt',
				{
					'Content-Type': 'multipart/form-data'
				},
				[
					{
						name: 'file',
						filename: 'image-profile.jpg',
						data: RNFetchBlob.wrap(items.avatar_url)
					}
				]
			)
			const dataImage = await responseImage.json()
			console.log('cloudinary: ', dataImage)

			const response = await fetch(`${API_SERVER_USER}/api/v1/user/upload-avatar/${id}`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					avatar: dataImage.secure_url
				})
			})
			const data = await response.json()
			console.log('repsonse: ', data)
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
