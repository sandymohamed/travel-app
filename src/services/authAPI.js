import axios from 'axios';

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
    .then((response) => response)
    .catch((err) => alert(err));
}

export function signIn(credentials) {
  console.log(credentials);
  return instance({
    url: `auth/signin`,
    method: 'POST',
    data: credentials,
  })
    .then((response) => response)
    .catch((err) => alert(err));
}

