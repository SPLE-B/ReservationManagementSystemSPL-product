import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const saveEmail = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	console.log(body)
	return axios.post(`${environment.rootApi}/call/email/save`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveEmail
