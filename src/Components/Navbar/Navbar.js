import React, { useState } from "react";

import { Link } from "react-router-dom"
import travEasyLogo from "../../Assets/logoWhite.png"
import "./navbar.scss"
function NavbarComponant() {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    return (
        <>
       <nav className="nav">
                    <Link class="nav__logo" to="/Home">
                        <img src={travEasyLogo} />
                    </Link>

                <ul className={active}>
                    <li className="nav__item">
                        <Link class="nav__link" to="/hotels">Hotels </Link>
                    </li>
                    <li className="nav__item">
                        <Link class="nav__link" to="/flight">Flight</Link>

                    </li>
                    <li className="nav__item">
                        <Link class="nav__link" to="/TourGuiding">Tour Guiding</Link>

                    </li>
                    <li className="nav__item">
                        <Link class="nav__link " to="/holidays">Holidays</Link>
                    </li>
             
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>

  {/* <div className="Container">
                <div class="row">
                    <div class="col">
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
            </div> */}
        </>
    )
}

export default NavbarComponant