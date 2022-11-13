import './flightcard.scss';
import dummyImg from '../../../assets/card/dummy-image.jpg';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { bookedFlight } from '../../../services/FlightService';
import { useSelector } from 'react-redux';

function FlightCard({ Flightobj , setIsBook }) {
  useEffect(() => {
    AOS.init();
  }, []);

  let DepartureDate = new Date(Flightobj.DepartureDate);
  let ReturnDate = new Date(Flightobj.ReturnDate);
  /* Date format you have */
  let DepartureDateMDY = `${DepartureDate.getDate()}-${DepartureDate.getMonth() + 1}-${DepartureDate.getFullYear()}`;
  let ReturnDateMDY = `${ReturnDate.getDate()}-${ReturnDate.getMonth() + 1}-${ReturnDate.getFullYear()}`;
  /* Date converted to MM-DD-YYYY format */

  let { isLoggedIn, user } = useSelector(({ AuthReducer }) => AuthReducer);
  
  // Function Booking 
  const FunctionBooking = () => {
    if(!isLoggedIn)
     return alert("Login is requrid")
    
     try {
      bookedFlight(user.id,Flightobj._id).then((res) => res)
      setIsBook(true)
     } catch (error) {
      alert(error)
     }
   
  }

  return (
    <>
      <section
        id="flightCard"
        data-aos="fade-up"
        data-aos-delay="200">
        <div className="cardBody">
          <div
            className="cardBody_img col-md-4 "
            data-aos="fade-up"
            data-aos-delay="300">
            <img
              src='https://w7.pngwing.com/pngs/901/129/png-transparent-hurghada-international-airport-cairo-borg-el-arab-airport-egyptair-airbus-a330-others-text-egypt-logo-thumbnail.png'//{dummyImg}
              alt="Item_Name"></img>
          </div>
          <article
            className="cardBody_details col-md-7 col-sm-12"
            data-aos="zoom-out"
            data-aos-delay="200">
            <div className="cardBody_details_data">
              <div class="spacer"></div>
              <div className="container">
                <span className="line">
                  {' '}
                  - - - - - - -
                  <span>
                    {' '}
                    <FontAwesomeIcon
                      className="fs-3"
                      icon={faPlane}
                    />{' '}
                  </span>{' '}
                  - - - - - - -
                </span>
                <div className="container_data">
                  <div class="spacer"></div>
                  <div className="data">
                    <span className="data_from">{Flightobj.FlyingFrom}</span>
                    <span className="data_to">{Flightobj.FlyingTo}</span>
                  </div>
                </div>
              </div>

              <div className="container">
                <span className="line">
                  {' '}
                  - - - - - - -
                  <span>
                    <i class="fa-solid fa-calendar-days"></i>
                  </span>{' '}
                  - - - - - - -
                </span>
                <div className="container_data">
                  <div className="data">
                    <span className="data_from">{DepartureDateMDY}</span>
                    <span className="data_to">{ReturnDateMDY}</span>
                  </div>
                </div>
              </div>
              <button className="primaryBtn" onClick={() => { FunctionBooking() }}> Booking</button>
              <button className="secondaryBtn"> Details</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default FlightCard;
