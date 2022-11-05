import { useState } from "react"
import { Link } from "react-router-dom";





function Form() {


	const [userData, setUserData] = useState({
		Email: "",
		Password: "",



	})

	const [errors, setErrors] = useState({
		EmailErr: null,
		PasswordErr: null


	})

	const regex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{3}');
	const changeDetails = (e) => {

		if (e.target.name == "Email") {
			setUserData({
				...userData,
				Email: e.target.value
			})

			setErrors({
				...errors,
				EmailErr: regex.test(e.target.value) ? null : "email format must be xxx@xxxx.com"
			})


		} else if (e.target.name == "Password") {
			setUserData({
				...userData,
				Password: e.target.value
			})

			setErrors({
				...errors,
				PasswordErr: e.target.value.length < 8 ? "*password must containes 8 characters at least" : null
			})
					
			}
		else {
			setUserData({
				...userData,

			})
		}


		

	}

	const submitData = (e) => {

		if (!errors.EmailErr && !errors.PasswordErr) {

			e.preventDefault()
		}
	}

	return (
		<>
			<form onSubmit={(e) => submitData(e)}>
				<div class="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="text" className={`form-control ${errors.EmailErr && 'border-danger'}`}
						name="Email" value={userData.Email} onChange={(e) => changeDetails(e)} />

					<p className="text-danger"> {errors.EmailErr} </p>

				</div>


				<div class="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" className={`form-control ${errors.PasswordErr && 'border-danger'}`}
						name="Password" value={userData.Password} onChange={(e) => changeDetails(e)} />

					<p className="text-danger"> {errors.PasswordErr} </p>
				</div>

				
				<button disabled={! errors.EmailErr|| ! errors.PasswordErr} type="submit" className="btn btn-primary">Login</button>
			
				<Link to="/Registration">Creat an account</Link>
			
			
			</form>






		</>

	)
}





export default Form