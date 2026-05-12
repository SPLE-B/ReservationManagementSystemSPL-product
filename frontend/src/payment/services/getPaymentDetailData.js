import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getPaymentDetailData = (params = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();
	let body = Object.assign(params, {token});
	print(body);
	return axios.post(`${environment.rootApi}/call/payment/detail`, body, {
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getPaymentDetailData
