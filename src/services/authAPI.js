import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});
// register
export function registerUser(userDate) {
  return instance({
    url: `auth/signup`,
    method: 'POST',
    data: userDate,
  })
    .then(({ data }) => {
      toast.success(`${data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return data;
    })
    .catch(({ response }) => {
      toast.error(`${JSON.stringify(response.data.message)}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
}

export function signIn(credentials) {
  return instance({
    url: `auth/signin`,
    method: 'POST',
    data: credentials,
  })
    .then(({ data }) => data)
    .catch(({ response }) => {
      toast.error(`${response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
}
