import React, { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthGuard = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { isAuthorized } = useContext(AuthContext);
  const SAMPLE_PERMISSION = {
    //can be taken from any resource and stored using any of the best practice
    moneytransfer: true,
    list: false,
    isAuthorized,
  };
  useEffect(() => {
    if (location.pathname === '/hotels' && isAuthorized === false) {
      history.push('/login');
    } else if (location.pathname === '/TourGuiding' && isAuthorized === false) {
      history.push('/login');
    } else if (location.pathname === '/flight' && isAuthorized === false) {
      history.push('/login');
    } else if (location.pathname === '/holidays' && isAuthorized === false) {
      history.push('/login');
    } else if (location.pathname === '/book' && isAuthorized === false) {
      history.push('/login');
    }
  }, [location.pathname]);
  return children;
};

export default AuthGuard;
