import { useState } from "react"
import { Link } from "react-router-dom";


function Registration() {

    const [userData, setUserData] = useState({

        name: "",
        email: "",
        userName: "",
        password: "",

    })

    const [error, setError] = useState({

        nameErr: null,
        emailErr: null,
        userNameErr: null,
        passwordErr: null,
    })
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{3}');
    const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/);


    const submit = (e) => {
    
        if (e.target.name == "name") {
            setUserData({
                ...userData,
                name: e.target.value
            })

            setError({
                ...error,
                nameErr: e.target.value.length === 0 ? "This Field is Required" : e.target.value.length < 3 ? "please insert valid name" : null
            })
        } else if (e.target.name == "email") {
            setUserData({
                ...userData,
                email: e.target.value
            })
            setError({
                ...error,
                emailErr: e.target.value.length === 0 ? "This Field is Required" : emailRegex.test(e.target.value) ? null : "email format must be xxx@xxxx.com"
            })
        } else if (e.target.name == "userName") {
            setUserData({
                ...userData,
                userName: e.target.value
            })
            setError({
                ...error,
                userNameErr: e.target.value.length === 0 ? "This Field is Required" : e.target.value.length < 3 ? "please insert valid user name" : null
            })
        } else if (e.target.name == "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })
            setError({
                ...error,
                passwordErr: e.target.value.length === 0 ? "This Field is Required" : passwordRegex.test(e.target.value) ? null : "password length not less than 8 characters contains at least one lowercase , one uppercase , at least one digit and special character [ example : *@%$#] "
            })
        } 
       
    }

    const submitData = (e) => {
        
        if(!error.nameErr && !error.emailErr && !error.passwordErr&& !error.userNameErr){
            e.preventDefault()
            console.log(e)
        }

    }


        return (
            <>

              
                <form onSubmit={(e) => submitData(e)}>
                    <h1>Form</h1>

                    <div class="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={userData.name} onChange={(e) => submit(e)} />
                        <p className="text-danger">{error.nameErr}</p>
                    </div>

                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={userData.email} onChange={(e) => submit(e)} />
                        <p className="text-danger">{error.emailErr}</p>
                    </div>

                    
                        <div class="mb-3">
                            <label htmlFor="name" className="form-label">User Name</label>
                            <input type="text" className="form-control" name="userName" value={userData.userName} onChange={(e) => submit(e)} />
                            <p className="text-danger">{error.userNameErr}</p>
                        </div>


                    
                    <div class="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={userData.password} onChange={(e) => submit(e)} />
                        <p className="text-danger">{error.passwordErr}</p>
                    </div>










                    <button type="submit" className="btn btn-primary" disabled={error.nameErr || error.passwordErr || error.emailErr || error.userNameErr}>Submit</button>
                    <Link to="/Login">Have an account</Link>
                    </form>
            </>
        )
    }

export default Registration