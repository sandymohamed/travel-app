import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import travEasyLogo from '../../Assets/logoWhite.png';
import './navbar.scss';
import { AuthContext } from '../../context/AuthContext';
import RootGuard from '../../Guard/RootGuard';

function NavbarComponant() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  const { isAuthorized, loggin } = useContext(AuthContext);
  const handleLoggin = () => {
    console.log(isAuthorized);
    loggin();
  };
  return (
    <RootGuard>
      <nav className="nav">
        <Link
          className="nav__logo"
          to="/Home">
          <img
            src={travEasyLogo}
            alt="img"
          />
        </Link>

        <ul className={active}>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/hotels">
              Hotels{' '}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/flight">
              Flight
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/TourGuiding">
              Tour Guiding
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link "
              to="/holidays">
              Holidays
            </Link>
          </li>
          <li className="nav__item">
            <ul>
              <li>
                <Link
                  className="nav__link "
                  to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Link>
              </li>
              <li>
                <Link
                  className="nav__link "
                  to="/register">
                  <i className="fa-solid fa-user-plus"></i>
                  Register
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-md text-white pt-1"
                  onClick={handleLoggin}>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> ToggleLogg
                </button>
              </li>
            </ul>
          </li>
        </ul>

        <div
          onClick={navToggle}
          className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </RootGuard>
  );
}

export default NavbarComponant;
