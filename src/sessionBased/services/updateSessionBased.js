import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const updateSessionBased = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	console.log(body)
	return axios.put(`${environment.rootApi}/call/sessionbased/update`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default updateSessionBased
