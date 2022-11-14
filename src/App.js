import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComponant from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Hotels from './Components/Pages/Hotels/Hotels';
import TourGuiding from './Components/Pages/TourGuiding/TourGuiding';
import Flight from './Components/Pages/Flight/Flight';
import Holidays from './Components/Pages/Holidays/Holidays';
import NotFound from './Components/Pages/Not-found/NotFound';

import Registeration from './Components/Pages/Registration/Registration';
import Login from './Components/Pages/Login/Login';
import BookHotel from './Components/Pages/BookHotel/BookHotel';

import BookForm from './Components/Shared/BookForm/BookForm';
import { DarkModeProvider } from './context/DarkMode';
// import { AuthProvider } from './context/AuthContext';
import RootGuard from './Guard/RootGuard';
import GuardedRoute from './Guard/RouteGuard';
import UserDetails from './Components/Pages/UserDetails/UserDetails';
import BookHoliday from './Components/Pages/BookHoliday/BookHoliday';
import UserReservations from './Components/Pages/UserReservations/UserReservations';

import React from 'react';
import UserHolidayRes from './Components/Pages/UserReservations/UserHolidayRes';
import Payment from './Components/Payment/Payment';
import BookFlight from './Components/Pages/BookFlight/BookFlight';

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <RootGuard>
          <NavbarComponant />
          <Switch>
            <Route
              path={'/'}
              exact
              component={Home}
            />
            <Route
              path={'/home'}
              component={Home}
            />
            <Route
              path={'/hotels'}
              component={Hotels}
            />
            <Route
              path={'/tourguide'}
              component={TourGuiding}
            />
            <Route
              path={'/flight'}
              component={Flight}
            />

            <Route
              path={'/holidays'}
              component={Holidays}
            />

            <Route
              path={'/login'}
              component={Login}
            />
            <Route
              path={'/register'}
              component={Registeration}
            />
            <Route
              path={'/payment'}
              component={Payment}
            />
            <Route
              path={'/book'}
              component={BookForm}
            />

            <GuardedRoute
              path={'/hotels/:id'}
              component={BookHotel}
            />

            <GuardedRoute
              path={'/holidays/:id'}
              component={BookHoliday}
            />
            <Route
              path={'/reservation'}
              component={UserReservations}
            />
            <Route
              path={'/holiday/reservation'}
              component={UserHolidayRes}
            />

            <Route
              path={'/user/profile'}
              exact
              component={UserDetails}></Route>

            <Route
              path={'/user/BookFlight'}              
              component={BookFlight}></Route>

            <Route
              path={'*'}
              component={NotFound}
            />



          </Switch>
        </RootGuard>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
