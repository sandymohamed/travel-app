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

export function tokenTest() {
  return instance({
    url: `test/user`,
    method: 'GET',
  })
    .then((data) => console.log('resolve', data))
    .catch(({ response }) => {
      toast.error(`${response.data.message}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
}
class AuthService {
  signIn(credentials) {
    return instance({
      url: `auth/signin`,
      method: 'POST',
      data: credentials,
    })
      .then(({ data }) => {
        if (data.accessToken) {
          console.log('Data => ', data);

          console.log('data.accessToken => ', data.accessToken);
          localStorage.setItem('user', JSON.stringify(data));
        }
        return data;
      })
      .catch(({ response }) => {
        toast.error(`${response.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  registerUser(userDate) {
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
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
export default new AuthService();
