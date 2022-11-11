import { registerUser } from '../../../services/authAPI';
import React, {useState} from "react";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../network/axiosInstance";


function UserDetails() {
// //// Calling API

    // const [details, setDetails] = useState(null)

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/users/${userID}`)
    //     .then((res) => {
    //         setDetails(res.data.data)
    //     })
    //     .catch((erro)=>{
    //         console.error("User details not found ")
    //     })
    // }, [])


////////// 
const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    password: '',
    birthday: '',
  });

  const [error, setError] = useState({
    firstNameErr: null,
    lastNameErr: null,
    countryErr: null,
    emailErr: null,
    usernameErr: null,
    passwordErr: null,
    birthdayErr: null,
  });
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{3}');
  const passwordRegex = new RegExp(
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
  );
  const [checkIfErrExist, setCheckIfErrExist] = useState(false);
  const [response, setResponse] = useState({});


  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setUserData({
        ...userData,
        name: e.target.value,
      });

      setError({
        ...error,
        nameErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : e.target.value.length < 3
            ? 'please insert valid name'
            : null,
      });
    } else if (e.target.name === 'email') {
      setUserData({
        ...userData,
        email: e.target.value,
      });
      setError({
        ...error,
        emailErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : emailRegex.test(e.target.value)
            ? null
            : 'email format must be xxx@xxxx.com',
      });
    } else if (e.target.name === 'userName') {
      setUserData({
        ...userData,
        userName: e.target.value,
      });
      setError({
        ...error,
        userNameErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : e.target.value.length < 3
            ? 'please insert valid user name'
            : null,
      });
    } else if (e.target.name === 'password') {
      setUserData({
        ...userData,
        password: e.target.value,
      });
      setError({
        ...error,
        passwordErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : passwordRegex.test(e.target.value)
            ? null
            : 'password length not less than 8 characters contains at least one lowercase , one uppercase , at least one digit and special character [ example : *@%$#] ',
      });
    } else if (e.target.name === 'firstName') {
      setUserData({
        ...userData,
        firstName: e.target.value,
      });
      setError({
        ...error,
        firstNameErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : e.target.value.length > 3
            ? null
            : 'first name 3 characters ',
      });
    } else if (e.target.name === 'lastName') {
      setUserData({
        ...userData,
        lastName: e.target.value,
      });
      setError({
        ...error,
        lastNameErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : e.target.value.length > 3
            ? null
            : 'last name 3 characters ',
      });
    } else if (e.target.name === 'country') {
      setUserData({
        ...userData,
        country: e.target.value,
      });
      setError({
        ...error,
        countryErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : e.target.value.length > 3
            ? null
            : 'country not less than 3 characters ',
      });
    } else if (e.target.name === 'country') {
      setUserData({
        ...userData,
        birthday: e.target.value,
      });
      setError({
        ...error,
        birthdayErr:
          e.target.value.length === 0
            ? 'This Field is Required'
            : e.target.value.length > 3
            ? null
            : 'country not less than 3 characters ',
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(response);
    if (!checkIfErrExist) {
      registerUser(userData).then((res) => setResponse(res));
    }
  };
    return (
        <>



<div className="container w-50">
      <form onSubmit={(e) => submitData(e)}>
        <div className="mb-3">
          <label
            htmlFor="firstName"
            className="form-label">
            First Name: 
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={userData.firstName}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.firstNameErr}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="lastName"
            className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={userData.lastName}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.lastNameErr}</p>
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userData.email}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.emailErr}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="birthday"
            className="form-label">
            Birthday
          </label>
          <input
            min="1920-01-01"
            max="2010-12-31"
            type="date"
            className="form-control"
            name="birthday"
            value={userData.birthday}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.emailErr}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={userData.username}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.usernameErr}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="country"
            className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={userData.country}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.countryErr}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={userData.password}
            onChange={(e) => handleChange(e)}
          />
          <p className="text-danger">{error.passwordErr}</p>
        </div>

        <button
          type="submit"
          className="btn btn-primary me-5"
          disabled={checkIfErrExist}>
          Submit
        </button>
      
      </form>
    </div>


        </>
    )
}

export default UserDetails
