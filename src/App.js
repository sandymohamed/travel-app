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

import { AuthProvider } from './context/AuthContext';
import RootGuard from './Guard/RootGuard';
import GuardedRoute from './Guard/RouteGuard';

import React, { useEffect, useContext } from 'react';

import UserDetails from './Components/Pages/UserDetails/UserDetails';



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
            <GuardedRoute
              path={'/hotels'}
              component={Hotels}
            />
            <GuardedRoute
              path={'/TourGuiding'}
              component={TourGuiding}
            />
            <GuardedRoute
              path={'/flight'}
              component={Flight}
            />
            <GuardedRoute
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
            <GuardedRoute
              path={'/book'}
              component={BookForm}
            />
            <Route
              path={'/hotel/:id'}
              component={BookHotel}
            />
             <Route
            path={'/UserDetails'}
            exact
            component={UserDetails}></Route>
            <Route
              path={'*'}
              component={NotFound}
            />
          </Switch>
        </RootGuard>
      </AuthProvider>
    </BrowserRouter>
      

  );
}

export default App;
