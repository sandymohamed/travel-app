import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUser } from '../../../redux/actions/user';
import { ToastContainer } from 'react-toastify';
//import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  //const navigate = useNavigate();

  let { data: userInfo, loading } = useSelector(({ signReducer }) => signReducer);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    usernameErr: null,
    passwordErr: null,
  });

  const regex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{3}');
  const changeDetails = (e) => {
    if (e.target.name === 'username') {
      setUserData({
        ...userData,
        username: e.target.value,
      });

      setErrors({
        ...errors,
        // usernameErr: regex.test(e.target.value) ? null : 'invalid username',
        
      });
    } else if (e.target.name === 'password') {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length < 5 ? '*password must containes 8 characters at least' : null,
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!errors.usernameErr && !errors.passwordErr) {
      dispatch(signUser(userData));
      //navigate('/', { replace: true });
    }
  };

  return (
    <div className="container w-50">
      <ToastContainer />

      <form onSubmit={(e) => submitData(e)}>
        <div className="mb-3">
          <label
            htmlFor="username"
            className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${errors.usernameErr && 'border-danger'}`}
            name="username"
            value={userData.username}
            onChange={(e) => changeDetails(e)}
          />

          <p className="text-danger"> {errors.usernameErr} </p>
        </div>

        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.passwordErr && 'border-danger'} `}
            name="password"
            value={userData.password}
            onChange={(e) => changeDetails(e)}
          />

          <p className="text-danger"> {errors.passwordErr} </p>
        </div>

        <button
          disabled={errors.usernameErr || errors.passwordErr}
          type="submit"
          className="btn btn-primary mx-5">
          Login
        </button>
        <Link to="/register">Creat an account</Link>
      </form>
    </div>
  );
}

export default SignIn;
