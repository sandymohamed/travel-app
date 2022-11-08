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
                        <h1>Traveasy</h1>
                    </div>
                    <div class="col-md-auto">
                        <button type="button" class="btn btn-primary">Register</button>
                    </div>
                    <div class="col col-lg-2">
                        <button type="button" class="btn btn-primary">Sign In</button>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="/Home">Logo</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-item nav-link active" to="/hotels">Hotels </Link>
                            <Link class="nav-item nav-link" to="/flight">Flight</Link>
                            <Link class="nav-item nav-link" to="/TourGuiding">Tour Guiding</Link>
                            <Link class="nav-item nav-link " to="/holidays">Holidays</Link>
                        </div>
                    </div>
                </nav>
            </div> */}
        </>
    )
}

export default NavbarComponant