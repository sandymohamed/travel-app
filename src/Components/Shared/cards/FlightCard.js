import './flightcard.scss';
import dummyImg from '../../../Assets/card/dummy-image.jpg';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
function FlightCard() {
  useEffect(() => {
    AOS.init();
  }, []);

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
              src={dummyImg}
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
                    <span className="data_from">Egypt</span>
                    <span className="data_to">Usa</span>
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
                    <span className="data_from">10/11/2022</span>
                    <span className="data_to">15/11/2022</span>
                  </div>
                </div>
              </div>
              <button className="primaryBtn"> Booking</button>
              <button className="secondaryBtn"> Details</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default FlightCard;
