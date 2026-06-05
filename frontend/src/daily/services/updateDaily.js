import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import { notifyError } from '@/commons/utils/toaster'

const updateDaily = (data = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();

  // PENTING: WinVMJ handle update via POST, BUKAN PUT
  return axios.post(`${environment.rootApi}/call/daily/update`, data, {
    params: { token },
    headers: {
      'Authorization': token,
    }
  }).catch((error) => {
    console.error(error);
    notifyError(error.response?.data?.message || error.message || "Gagal update daily");
    throw error;
  });
}

export default updateDaily
