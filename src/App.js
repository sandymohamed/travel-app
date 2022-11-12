import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComponant from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Hotels from './Components/Pages/Hotels/Hotels';
import TourGuiding from './Components/Pages/TourGuiding/TourGuiding';
import Flight from './Components/Pages/Flight/Flight';
import Holidays from './Components/Pages/Holidays/Holidays';
import NotFound from './Components/Pages/Not-found/NotFound';
import Vcart from './Components/Shared/cards/Vcard';

import Registeration from './Components/Pages/Registration/Registration';
import Login from './Components/Pages/Login/Login';
import BookHotel from './Components/Pages/BookHotel/BookHotel';
import BookForm from './Components/Shared/BookForm/BookForm';
import { DarkModeProvider } from './context/DarkMode';
import RootGuard from './Guard/RootGuard';
import GuardedRoute from './Guard/RouteGuard';

import React from 'react';

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
              path={'/Home'}
              component={Home}
            />
            <Route
              path={'/hotels'}
              component={Hotels}
            />
            <Route
              path={'/TourGuiding'}
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
              path={'/vcart'}
              component={Vcart}
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
              path={'/book'}
              component={BookForm}
            />
            <GuardedRoute
              path={'/hotel/:id'}
              component={BookHotel}
            />
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
