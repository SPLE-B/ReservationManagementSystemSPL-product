import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getdaily = (params = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();
  const paramsGet = { ...params, token };

  return axios.get(`${environment.rootApi}/call/daily/list`, {
    params: paramsGet,
    headers: {
      'Authorization': token,
    }
  }).catch((error) => {
    console.error(error);
    notifyError(error.response?.data?.message || error.message || "Gagal mengambil list daily");
    throw error;
  });
}

export default getdaily
