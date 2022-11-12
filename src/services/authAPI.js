import axios from 'axios';
import { toast } from 'react-toastify';

export const instance = axios.create({
  baseURL: 'http://localhost:8080/',
});

// register
// export function registerUser(userDate) {
//   return instance({
//     url: `auth/signup`,
//     method: 'POST',
//     data: userDate,
//   })
//     .then(({ data }) => {
//       toast.success(`${data.message}`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       return data;
//     })
//     .catch(({ response }) => {
//       toast.error(`${JSON.stringify(response.data.message)}`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     });
// }

// export function signIn(credentials) {
//   return instance({
//     url: `auth/signin`,
//     method: 'POST',
//     data: credentials,
//   })
//     .then(({ data }) => data)
//     .catch(({ response }) => {
//       toast.error(`${response.data.message}`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     });
// }

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
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
export default new AuthService();

export function updateUser(userDate) {
  return instance({
    url: `auth/updateUser`,
    method: 'PUT',
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

