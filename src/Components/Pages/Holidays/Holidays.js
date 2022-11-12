import './holidays.scss';
import { useEffect, useState } from 'react';
import { getCities } from '../../../services/hotelsServ';
import {
  getHolidays,
  getHolidaysByRate,
  getHolidaysByCityName,
  getHolidayByPrice,
} from '../../../services/holidaysServ';
import Dropdown from 'react-bootstrap/Dropdown';
import headerimg from '../../../assets/header/tourGuidHeader.png';
import HeaderComponent from '../../Shared/header/HeaderComponent';
import Vcart from '../../Shared/cards/Vcard';
import ServiceSection from '../../Shared/serviceSection/ServiceSection';
const headerTitle = <>Select Your tooor </>;
const headerParagraph = <> Ana msh mn sharm , </>;
const Holidays = () => {
  const [holidays, setHotlidays] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [price, setPrice] = useState(null);

  const filterHolidays = (filter) => {
    switch (filter) {
      case 'getHotelsByRate':
        getHolidaysByRate(2).then((res) => setHotlidays(res));
        break;

      case 'city':
        getHolidaysByCityName(city).then((res) => setHotlidays(res));
        break;
      case 'price':
        getHolidayByPrice(price).then((res) => setHotlidays(res));
        break;
      default:
        getHolidays().then((res) => setHotlidays(res));

        break;
    }
  };

  useEffect(() => {
    getCities().then((res) => setCities(res));

    getHolidays().then((res) => setHotlidays(res));
  }, []);

  return (
    <>
      <HeaderComponent
        img={headerimg}
        title={headerTitle}
        paragraph={headerParagraph}
      />

      <ServiceSection />
      <div className="w-100">
        nav bar & select city & date & search
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={() => filterHolidays('price')}> find</button>
        <Dropdown
          onSelect={(e) => {
            setCity(e);
            console.log('c' + city);
            console.log(e);
          }}>
          <Dropdown.Toggle
            variant="warning m-2"
            id="dropdown-basic">
            Select City
          </Dropdown.Toggle>
          <button onClick={() => filterHolidays('city')}>search</button>

          <Dropdown.Menu>
            {cities &&
              cities.map((city, i) => (
                <Dropdown.Item
                  eventKey={city.City_Name}
                  key={i}
                  onSelect={(e) => {
                    setCity(e.target.value);
                  }}>
                  {' '}
                  {city.City_Name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <button onClick={(e) => filterHolidays('getHotelsByRate')}>search by rate more than 5</button>

      <div className="d-flex w-100">
        <div>
          right filters
          <div>price...................................................</div>
          <div>stars</div>
        </div>
        <div>
          left cards
          {/* {title,city ,description, Evaluation,Price} */}
          {holidays &&
            holidays.map((hotel, i) => (
              <Vcart
                key={i}
                title={hotel.HotelName}
                city={hotel.City.City_Name}
                Evaluation={hotel.Evaluation}
                Price={hotel.Price}
                description={hotel.Description}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Holidays;
