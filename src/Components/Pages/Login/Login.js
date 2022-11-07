import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../../services/authAPI';

function Form() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [userResponse, setUserResponse] = useState({});

  const [errors, setErrors] = useState({
    usernameErr: null,
    passwordErr: null,
  });

  const regex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{3}');
  const changeDetails = (e) => {
    if (e.target.name == 'username') {
      setUserData({
        ...userData,
        username: e.target.value,
      });

      setErrors({
        ...errors,
        usernameErr: regex.test(e.target.value) ? null : 'invalid username',
      });
    } else if (e.target.name == 'password') {
      setUserData({
        ...userData,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        passwordErr:
          e.target.value.length < 8 ? '*password must containes 8 characters at least' : null,
      });
    }
  };

  const submitData = (e) => {
    if (!errors.usernameErr && !errors.passwordErr) {
      signIn(userData).then(({ data }) => setUserResponse(data));
      e.preventDefault();
    }
  };
  return (
    <div className="container w-50">
      <form onSubmit={(e) => submitData(e)}>
        <div class="mb-3">
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

        <div class="mb-3">
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

export default Form;
