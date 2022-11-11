import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
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
import UserDetails from './Components/Pages/UserDetails/UserDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponant />

        <Switch>
          <Route
            path={'/'}
            exact
            component={Home}></Route>
          <Route
            path={'/Home'}
            exact
            component={Home}></Route>
          <Route
            path={'/hotels'}
            exact
            component={Hotels}></Route>
          <Route
            path={'/TourGuiding'}
            exact
            component={TourGuiding}></Route>
          <Route
            path={'/flight'}
            exact
            component={Flight}></Route>
          <Route
            path={'/holidays'}
            exact
            component={Holidays}></Route>
          <Route
            path={'/vcart'}
            exact
            component={Vcart}></Route>
          <Route
            path={'/login'}
            exact
            component={Login}></Route>
          <Route
            path={'/register'}
            exact
            component={Registeration}></Route>
                  <Route
            path={'/book'}
            exact
            component={BookForm}></Route>
          <Route
            path={'/hotel/:id'}
            exact
            component={BookHotel}></Route>
             <Route
            path={'/UserDetails'}
            exact
            component={UserDetails}></Route>
          <Route
            path={'*'}
            exact
            component={NotFound}></Route>
           
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
