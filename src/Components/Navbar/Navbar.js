import React from "react"
import { Link } from "react-router-dom"
import "./navbar.scss"
function NavbarComponant() {


    return (
        <>
            <div className="Container">
                <div className="row">
                    <div className="col">
                        <h1>Traveasy</h1>
                    </div>
                    <div className="col-md-auto">
                        <button type="button" className="btn btn-primary">Register</button>
                    </div>
                    <div className="col col-lg-2">
                        <button type="button" className="btn btn-primary">Sign In</button>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/Home">Logo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/hotels">Hotels </Link>
                            <Link className="nav-item nav-link" to="/flight">Flight</Link>
                            <Link className="nav-item nav-link" to="/TourGuiding">Tour Guiding</Link>
                            <Link className="nav-item nav-link " to="/holidays">Holidays</Link>
                            <Link className="nav-item nav-link " to="/bookhotel">BookHotel</Link>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavbarComponant