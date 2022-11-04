import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import { Switch } from 'react-router-dom';
import NavbarComponant from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Hotels from './Components/Pages/Hotels/Hotels';
import TourGuiding from './Components/Pages/TourGuiding/TourGuiding';
import Flight from './Components/Pages/Flight/Flight';
import Holidays from './Components/Pages/Holidays/Holidays';
import NotFound from './Components/Pages/Not-found/NotFound';


function App() {




  return (
  
    <>
<BrowserRouter>

<NavbarComponant/>

<Switch>

<Route path={"/"} exact component={Home}></Route>
<Route path={"/Home"} exact component={Home}></Route>
<Route path={"/hotels"} exact component={Hotels}></Route>
<Route path={"/TourGuiding"} exact component={TourGuiding}></Route>
<Route path={"/flight"} exact component={Flight}></Route>
<Route path={"/holidays"} exact component={Holidays}></Route>



<Route path={"*"} exact component={NotFound}></Route>

  </Switch>
  </BrowserRouter>

    </>

  );
}

export default App 