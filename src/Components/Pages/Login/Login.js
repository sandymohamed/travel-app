import "./Login.scss"
import loginImg from "../../../assets/login.jpg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUser } from '../../../redux/actions/user';
import { ToastContainer } from 'react-toastify';
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
        usernameErr: regex.test(e.target.value) ? null : 'invalid username',
      });
    } else if (e.target.name === 'password') {
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
    e.preventDefault();
    if (!errors.usernameErr && !errors.passwordErr) {
      dispatch(signUser(userData));
      //navigate('/', { replace: true });
    }
  };

  return (
    <section id='login'>
      <div className="container">
        <div className='loginImg '>
          <img src={loginImg} className=''></img>
        </div>
        {/* <ToastContainer /> */}

      <form  onSubmit={(e) => submitData(e)}>
        <div className='loginGorm_title'>
        <span> Welcome To TravEasy</span>
        <h3> Sign In</h3>

        </div>
        <div >
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

        <div>
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
          <div className="d-flex flex-column align-items-center">
          <button
          disabled={errors.usernameErr || errors.passwordErr}
          type="submit"
          className="primaryBtn">
          Login
        </button>
        <Link to="/register">Create an account</Link>
          </div>
      
        </div>

     
      </form>
    </div>
    </section>
    
  );
}

export default SignIn;
