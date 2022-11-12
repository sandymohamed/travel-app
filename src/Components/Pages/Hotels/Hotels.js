import HeaderComponent from '../../Shared/header/HeaderComponent';
import './hotels.scss';
//// Header Data ////

import headerimg from '../../../assets/header/hotelHeader.png';
import Vcart from '../../Shared/cards/Vcard';
import {
  getHotels,
  getHotelsByRate,
  getCities,
  getHotelsByCityName,
  getHotelByName,
  getHotelByPrice,
} from '../../../services/hotelsServ';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import ServiceSection from '../../Shared/serviceSection/ServiceSection';
import SlideBar from '../../Shared/slideBar/Slidebar';
import StarRating from '../../Shared/Stars/Stars';

const headerTitle = <>Select Your Home </>;
const headerParagraph = <> Ana B7b bety Gdan , msh hadar aseebo laaaaaaaaaaa</>;

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState(null);
  const [rate, setRate] = useState(null);

  const handleSelect = (e) => {
    // setCity(e)
    filterHotels('city');
  };

  const serviceSection = (
    <>
      <div className="hotelDetails">
        <div className="hotelDetails_hotel">
          <input
            type="search"
            name="hotel"
            placeholder="Find Your Hotel"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => filterHotels('name')}> find</button>
        </div>

        <select
          className=" bg-warning m-2 p-2 border border-0 rounded city-option"
          id="dropdown-basic"
          defaultValue={city}
          onClick={() => filterHotels('city')}
          onChange={(e) => {
            setCity(e.target.value);
          }}>
          {cities &&
            cities.map((city, i) => (
              <option
                className="bg-white "
                key={i}
                value={city.City_Name}>
                {city.City_Name}
              </option>
            ))}
        </select>
      </div>
    </>
  );

  const filterHotels = (filter) => {
    switch (filter) {
      case 'getHotelsByRate':
        getHotelsByRate(rate).then((res) => setHotels(res));
        console.log(rate);
        break;

      case 'city':
        getHotelsByCityName(city).then((res) => setHotels(res));
        console.log('in fil' + city);
        break;
      case 'name':
        getHotelByName(search).then((res) => setHotels(res));
        break;
      case 'price':
        getHotelByPrice(price).then((res) => setHotels(res));
        console.log(price);
        break;

      default:
        getHotels().then((res) => setHotels(res));

        break;
    }
  };

  useEffect(() => {
    getCities().then((res) => setCities(res));

    getHotels().then((res) => setHotels(res));
    console.log(price);
  }, []);

  return (
    <>
      <HeaderComponent
        img={headerimg}
        title={headerTitle}
        paragraph={headerParagraph}
      />
      <ServiceSection serviceSection={serviceSection} />

      <section className="hotelcomponent">
        <div className="row">
          <section
            className=" col-md-3 "
            style={{ width: '30%' }}>
            <SlideBar
              serviceFilter={
                <StarRating
                  filterHotels={filterHotels}
                  setRate={setRate}
                />
              }
              setPrice={setPrice}
              filterHotels={filterHotels}
            />
          </section>
          <section
            className="cardsArea col-md-8 d-flex "
            style={{ width: '65%' }}>
            <div className="cards-container ">
              {hotels &&
                hotels.map((hotel, i) => (
                  <Vcart
                    key={i}
                    title={hotel.HotelName}
                    city={hotel.City.City_Name}
                    Evaluation={hotel.Evaluation}
                    Price={hotel.Price}
                    description={hotel.Description}
                    hotelId={hotel._id}
                  />
                ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hotels;
