import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from './type';
import AuthService from '../../services/authAPI';

export const register = (userData) => (dispatch) => {
  return AuthService.register(userData).then(
    (response) => {
      console.warn('response =>', response);

      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message = JSON.stringify(error);
      console.warn('message =>', error);

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (credentials) => (dispatch) => {
  return AuthService.login(credentials).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.toString();
      console.warn('message =>', message);
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
