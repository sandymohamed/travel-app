import React, { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';

const AuthGuard = ({ children }) => {
  //const { isAuthorized } = useContext(AuthContext);

  const history = useHistory();
  const location = useLocation();
  let { isLoggedIn } = useSelector(({ AuthReducer }) => AuthReducer);

  useEffect(() => {
    if (location.pathname === '/hotels' && isLoggedIn === false) {
      history.push('/login');
    } else if (location.pathname === '/TourGuiding' && isLoggedIn === false) {
      history.push('/login');
    } else if (location.pathname === '/flight' && isLoggedIn === false) {
      history.push('/login');
    } else if (location.pathname === '/holidays' && isLoggedIn === false) {
      history.push('/login');
    } else if (location.pathname === '/book' && isLoggedIn === false) {
      history.push('/login');
    }
  }, [location.pathname]);
  return children;
};

export default AuthGuard;
