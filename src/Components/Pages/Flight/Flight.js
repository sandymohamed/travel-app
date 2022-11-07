import './Flight.scss';

import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import HeaderComponent from '../../Shared/header/HeaderComponent';
////// For Header //////
import headerImg from '../../../assets/header/transportationHeader.png';
const headerTitle = <> Find your Tayara</>;
const headerParagraph = <> ana b7b masr gdn msh adaer asafr laaaa</>;

const Flight = () => {
  return (
    <>
      <HeaderComponent
        title={headerTitle}
        paragraph={headerParagraph}
        img={headerImg}
      />
      <section id="flight">
        <div className="flight_container">
          <section className="services">
            <div className="services_flights">
              <div className="icon">
                <i class="fa-solid fa-plane"></i>
              </div>
              <span>Flights</span>
            </div>

            <div className="services_hotels">
              <div className="icon">
                <i class="fa-solid fa-plane"></i>
              </div>
              <span>Hotels</span>
            </div>

            <div className="services_holiday">
              <div className="icon">
                <i class="fa-solid fa-plane"></i>
              </div>
              <span>Holiday</span>
            </div>

            <div className="services_tourGuide">
              <div className="icon">
                <i class="fa-solid fa-plane"></i>
              </div>
              <span>Tour Guide</span>
            </div>
          </section>
          <div className="flightDetails">
            <div className="flightDetails_country">
              <div>
                <input
                  list="country"
                  name="country"
                  placeholder="From"
                  id="countryFrom"
                />
                <i class="fa-solid fa-map-location-dot"></i>
                <datalist id="country">
                  <option value="Cairo" />
                  <option value="Roma" />
                  <option value="UAE" />
                  <option value="USA" />
                  <option value="Paris" />
                </datalist>
              </div>
              <span>
                - - - - -<i class="fa-solid fa-plane"></i>- - - - -
              </span>
              <div>
                <input
                  list="country"
                  name="country"
                  placeholder="To"
                  id="countryTo"
                />
                <i class="fa-solid fa-map-location"></i>
                <datalist id="country">
                  <option value="Cairo" />
                  <option value="Roma" />
                  <option value="UAE" />
                  <option value="USA" />
                  <option value="Paris" />
                </datalist>
              </div>
            </div>
          </div>
        </div>
        {/* <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                /> */}
      </section>
      <section>
        <div className="row">
          <section className="col-md-4"></section>
          <section className="col-md-8"></section>
        </div>
      </section>
    </>
  );
};

export default Flight;
