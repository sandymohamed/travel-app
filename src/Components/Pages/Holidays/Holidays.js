import './holidays.scss';
import { useEffect, useState } from 'react';
import { getCities } from '../../../services/hotelsServ';
import {
  getHolidays,
  getHolidaysByRate,
  getHolidaysByCityName,
  getHolidayByPrice,
} from '../../../services/holidaysServ';
import headerimg from '../../../assets/header/tourGuidHeader.png';
import HeaderComponent from '../../Shared/header/HeaderComponent';
import Vcart from '../../Shared/cards/Vcard';
import SlideBar from '../../Shared/slideBar/Slidebar';
import StarRating from '../../Shared/Stars/Stars';

import ServiceSection from '../../Shared/serviceSection/ServiceSection';

const headerTitle = <> Holiday Hustle and Bustle </>;
const headerParagraph = <> Holidays can likewise be called as pressure busters for the people.<br />  The normal surge of life needs a few days to relax.The holidays are welcomed and waited for all.</>;
const Holidays = () => {
  const [holidays, setHotlidays] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [rate, setRate] = useState(null);

  const [price, setPrice] = useState(null);

  const serviceSection = (
    <>
      <div className="holidayDetails ">
        <select
          className="city-options"
          id="dropdown-basic"
          defaultValue={city}
          onClick={() => filterHolidays('city')}
          onChange={(e) => setCity(e.target.value)}>
          {cities &&
            cities.map((city, i) => (
              <option
                key={i}
                value={city.City_Name}>
                {city.City_Name}
              </option>
            ))}
        </select>
      </div>
    </>
  );

  const filterHolidays = (filter) => {
    switch (filter) {
      case 'getHotelsByRate':
        getHolidaysByRate(rate).then((res) => setHotlidays(res));
        break;
      case 'city':
        getHolidaysByCityName(city).then((res) => setHotlidays(res));
        console.log(city);
        break;
      case 'price':
        getHolidayByPrice(price).then((res) => setHotlidays(res));
        console.log(price, holidays);
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

      <ServiceSection serviceSection={serviceSection} />

      <section className="hotelcomponent ">
        <div className="hotel-container d-flex">
          <section
            className="slide-bar"
            style={{ width: '30%' }}>
            <SlideBar
              className="filter-bar"
              serviceFilter={
                <StarRating
                  filterHotels={filterHolidays}
                  setRate={setRate}
                />
              }
              setPrice={setPrice}
              filterHotels={filterHolidays}
            />
          </section>
          <section
            className="cardsArea  "
            style={{ width: '65%' }}>
            <div className="cards-container ">
              {holidays &&
                holidays.map((holiday, i) => (
                  <Vcart
                    key={i}
                    title={holiday.HotelName}
                    city={holiday.City.City_Name}
                    Evaluation={holiday.Evaluation}
                    Price={holiday.Price}
                    img={holiday.ImgURL[0]}
                    // description={holiday.Description}
                    link={`holidays/${holiday._id}`}
                  />
                ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Holidays;
