import './Flight.scss';
import { useEffect, useState } from 'react';
import { getAllFlight } from '../../../services/FlightService';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import HeaderComponent from '../../Shared/header/HeaderComponent';
////// For Header //////
import headerImg from '../../../Assets/header/transportationHeader.png';
import FlightCard from '../../Shared/cards/FlightCard';
import ServiceSection from '../../Shared/serviceSection/ServiceSection';
import { setFormatDate } from '../../../services/DateformatService';
import { useSelector } from 'react-redux';

const headerTitle = <> Find your Tayara</>;
const headerParagraph = <> ana b7b masr gdn msh adaer asafr laaaa</>;

const BookFlight = () => {
  const [AirLineList, setAirLineList] = useState([]);
  const [countryTo, setcountryTo] = useState();
  const [countryFrom, setcountryFrom] = useState();
  const [dateTo, setdateTo] = useState();
  const [isBook, setIsBook] = useState();

  let { isLoggedIn, user } = useSelector(({ AuthReducer }) => AuthReducer);

  const FunctionSearch = (e) => {
    // Check Filter for countryTo
    switch (e.target.id) {
      case 'countryTo':
        setcountryTo(e.target.value);
        break;
      case 'countryFrom':
        setcountryFrom(e.target.value);
        break;
      case 'dateTo':
        setdateTo(setFormatDate(e.target.value));
        break;
      default:
    }
  };

  const serviceSection = (
    <>
      <div className="flightDetails">
        <div className="row">
          <div className="flightDetails_country">
            <div>
              <input
                list="country"
                name="country"
                placeholder="From"
                id="countryFrom"
              />
              <i className="fa-solid fa-map-location-dot"></i>
              <datalist id="country">
                <option value="Cairo" />
                <option value="Roma" />
                <option value="UAE" />
                <option value="USA" />
                <option value="Paris" />
              </datalist>
            </div>

            <div className="">
              <input
                list="country"
                name="country"
                placeholder="To"
                id="countryTo"
                onChange={(e) => {
                  FunctionSearch(e);
                }}
              />
              <i className="fa-solid fa-map-location"></i>
              <datalist id="country">
                <option value="Cairo" />
                <option value="Roma" />
                <option value="UAE" />
                <option value="USA" />
                <option value="Paris" />
              </datalist>
            </div>
          </div>
          <div className="">
            <div className="flightDetails_date">
              <input
                type={'date'}
                name="date"
                placeholder="From"
                id="dateFrom"
              />

              <input
                type={'date'}
                name="date"
                placeholder="To"
                id="dateTo"
                onChange={(e) => {
                  FunctionSearch(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Colling Database and Filter Data
  useEffect(() => {
    // getAllFlightByUser(countryTo, dateTo, user.name).then((res) => setAirLineList(res.data));
  }, [countryTo, dateTo]);

  return (
    <>
      <HeaderComponent
        title={headerTitle}
        paragraph={headerParagraph}
        img={headerImg}
      />
      <ServiceSection serviceSection={serviceSection} />

      {/* ////////////////////// */}
      <section className="flightcomponent">
        <div className="row">
          <section className="cardsArea col-md-12 ">
            {AirLineList.map((AirLine) => {
              return <FlightCard Flightobj={AirLine} />;
            })}
          </section>
        </div>
      </section>
    </>
  );
};

export default BookFlight;
