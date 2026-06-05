import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import cleanFormData from '@/commons/utils/cleanFormData'
import { notifyError } from '@/commons/utils/toaster'

const deleteDaily = (data = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();

  return axios.delete(`${environment.rootApi}/call/daily/delete`, {
    params: { token },
    data: cleanFormData(data),
    headers: {
      'Authorization': token,
    }
  }).catch((error) => {
    console.error(error);
    notifyError(error.response?.data?.message || error.message || "Gagal menghapus daily");
    throw error;
  });
}

export default deleteDaily
