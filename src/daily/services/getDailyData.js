import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getDailyData = (params = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();
  const body = { ...params, token };

  return axios.post(`${environment.rootApi}/call/daily/detail`, body, {
    headers: {
      'Authorization': token,
    }
  }).catch((error) => {
    console.error(error);
    notifyError(error.response?.data?.message || error.message || "Gagal mengambil data daily");
    throw error;
  });
}

export default getDailyData
