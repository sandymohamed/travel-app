import React, { useState } from "react";

import { Link } from "react-router-dom"
import travEasyLogo from "../../assets/logoWhite.png"
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
                    <Link className="nav__logo" to="/Home">
                        <img src={travEasyLogo} />
                    </Link>

                <ul className={active}>
                    <li className="nav__item">
                        <Link className="nav__link" to="/hotels">Hotels </Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/flight">Flight</Link>

                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/TourGuiding">Tour Guiding</Link>

                    </li>
                    <li className="nav__item">
                        <Link className="nav__link " to="/holidays">Holidays</Link>
                    </li>
                    <li className="nav__item">
                        <ul>
                            <li>
                                <Link class="nav__link " to="/login">
                                    <i class="fa-solid fa-right-to-bracket"></i> Login
                                </Link>
                            </li>
                            <li>
                                <Link class="nav__link " to="/register">
                                    <i class="fa-solid fa-user-plus"></i>
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
              
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>


        </>
    )
}

export default NavbarComponant