import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthorized } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default GuardedRoute;
