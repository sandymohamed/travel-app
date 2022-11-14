import axios from 'axios';
import { toast } from 'react-toastify';
import authHeader from './auth-header';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});

class AuthService {
  login(credentials) {
    return instance({
      url: `auth/signin`,
      method: 'POST',
      data: credentials,
    })
      .then(({ data }) => {
        if (data.accessToken) {
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
  register(userData) {
    return instance({
      url: `auth/signup`,
      method: 'POST',
      data: userData,
    })
      .then(({ data }) => {
        console.log('data inside authAPI => ', data);

        toast.success(`${data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        return data;
      })
      .catch(({ response }) => {
        toast.error(`${response.data.message.toString()}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }
  update(userData, userId) {
    return instance({
      url: `/user/edit/${userId}`,
      method: 'PUT',
      data: userData,
      headers: authHeader(),
    })
      .then(({ data }) => {
        toast.success(`Updated Successfuly!`, {
          position: toast.POSITION.TOP_CENTER,
        });

        return data;
      })
      .catch(({ response }) => {
        toast.error(`${response.data.message.toString()}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
export default new AuthService();
