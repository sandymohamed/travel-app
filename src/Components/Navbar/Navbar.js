import React, { useState, useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
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
  const [show, setShow] = useState(false);
  // comment
  const currentUser = AuthService.getCurrentUser();

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
  let firstName = user?.firstName;
  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <RootGuard>
      <nav className={`nav  ${darkMode ? 'bg-dark ' : ''}`}>
        <Link
          className="nav__logo"
          to="/Home">
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
              Hotels
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
              to="/holiday">
              Holidays
            </Link>
          </li>

          <li className="nav__item">
            <ul>
              <li
                className={`userInfo ${!isLoggedIn ? 'd-none' : ''}`}
                style={{ cursor: 'pointer' }}>
                <i class="fa-solid fa-user"></i>
                <span onClick={setShow}>{firstName}</span>
                <ul className={`${show ? 'd-none' : ''}  `}>
                  <li>
                    <span className="userInfo_icon">
                      <i class="fa-regular fa-id-badge"></i>
                    </span>
                    <NavLink
                      to="/user/profile"
                      className="userInfo_link">
                      <span className="userInfo_title">Profile Page</span>
                    </NavLink>
                  </li>
                  <li>
                    <span className="userInfo_icon">
                      <i class="fa-solid fa-list"></i>
                    </span>
                    <NavLink
                      to="/reservation"
                      className="userInfo_link">
                      <span className="userInfo_title">My Reservation</span>
                    </NavLink>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="userInfo_link">
                    <span className="userInfo_icon">
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </span>
                    <span className="userInfo_title">Logout</span>
                  </li>
                </ul>
              </li>
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
