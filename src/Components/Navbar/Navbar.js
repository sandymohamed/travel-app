import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import travEasyLogo from '../../Assets/logoWhite.png';
import './navbar.scss';
import { DarkModeContext } from '../../context/DarkMode';
import RootGuard from '../../Guard/RootGuard';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import AuthService from '../../services/authAPI';

function NavbarComponant() {
  const dispatch = useDispatch();

  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  // local storage
  // const currentUser = AuthService.getCurrentUser();
  // console.log('currentUser', currentUser);

  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  let { isLoggedIn, user } = useSelector(({ AuthReducer }) => AuthReducer);

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    console.log(darkMode);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <RootGuard>
      <nav className={`nav  ${darkMode ? 'bg-dark ' : ''}`}>
        <Link
          className="nav__logo"
          to="/home">
          <img
            src={travEasyLogo}
            alt="img"
          />
        </Link>

        <ul className={`${active} pt-3`}>
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
              to="/payment">
              Payment
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
              to="/tourguide">
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
                  className={`nav__link ${isLoggedIn ? 'd-none' : ''}`}
                  to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i> Login
                </Link>
              </li>
              <li>
                <Link
                  className={`nav__link ${isLoggedIn ? 'd-none' : ''}`}
                  to="/register">
                  <i className="fa-solid fa-user-plus"></i>
                  Register
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className={`btn btn-md text-white pt-1 ${!isLoggedIn ? 'd-none' : ''}`}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </button>
              </li>
              <li className="pt-1">
                <Link
                  className={`${!isLoggedIn ? 'd-none' : ''}`}
                  to="/user/profile">
                  <i class="fa-regular fa-user"></i> Profile
                </Link>
              </li>
              <li className="ms-5 pt-1">
                <span className={` text-white pt-1 ${!isLoggedIn ? 'd-none' : ''}`}>
                  Welcome <span>{user?.firstName}</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>

        <div className="form-check form-switch">
          <input
            className="form-check-input pb-3"
            type="checkbox"
            id="darkModeToggler"
            checked={`${darkMode ? 'checked' : ''}`}
            onChange={(e) => handleToggleDarkMode()}
          />
        </div>
      </nav>
    </RootGuard>
  );
}

export default NavbarComponant;
