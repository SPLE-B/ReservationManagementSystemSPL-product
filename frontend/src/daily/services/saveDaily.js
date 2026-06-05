import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import { notifyError } from '@/commons/utils/toaster'

const saveDaily = (data = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();

  return axios.post(`${environment.rootApi}/call/daily/save`, data, {
    params: { token },
    headers: {
      'Authorization': token,
    }
  }).catch((error) => {
    console.error(error);
    notifyError(error.response?.data?.message || error.message || "Gagal menyimpan daily");
    throw error;
  });
}

export default saveDaily
