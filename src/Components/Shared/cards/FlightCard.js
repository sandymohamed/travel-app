import './flightcard.scss';
import dummyImg from '../../../assets/card/dummy-image.jpg';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { bookedFlight } from '../../../services/FlightService';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function FlightCard({ Flightobj, setIsBook }) {
  useEffect(() => {
    AOS.init();
  }, []);

  let DepartureDate = new Date(Flightobj.DepartureDate);
  let ReturnDate = new Date(Flightobj.ReturnDate);
  /* Date format you have */
  let DepartureDateMDY = `${DepartureDate.getDate()}-${DepartureDate.getMonth() + 1
    }-${DepartureDate.getFullYear()}`;
  let ReturnDateMDY = `${ReturnDate.getDate()}-${ReturnDate.getMonth() + 1}-${ReturnDate.getFullYear()}`;
  /* Date converted to MM-DD-YYYY format */

  let { isLoggedIn, user } = useSelector(({ AuthReducer }) => AuthReducer);

  // Function Booking
  const FunctionBooking = () => {
    if (!isLoggedIn) return alert('Login is requrid');

    try {
      bookedFlight(user.id, Flightobj._id).then((res) => res);
      setIsBook(true);
      toast.success(`booking confirmed`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
      <section
        id="flightCard"
        data-aos="fade-up"
        data-aos-delay="100">

        <ToastContainer />
        <div className="cardBody">
          <div
            className="cardBody_img col-md-4 "
            data-aos="fade-up"
            data-aos-delay="150">
            <img
              src="https://w7.pngwing.com/pngs/901/129/png-transparent-hurghada-international-airport-cairo-borg-el-arab-airport-egyptair-airbus-a330-others-text-egypt-logo-thumbnail.png" //{dummyImg}
              alt="Item_Name"></img>
          </div>
          <article
            className="cardBody_details col-md-7 col-sm-12"
            data-aos="zoom-out"
            data-aos-delay="150">
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

              

              <button
                className={Flightobj.NumberTickets > 0 ? "primaryBtn" : "orangeBtn"}
                disabled={Flightobj.NumberTickets > 0 ? false : true}
                onClick={() => {
                  FunctionBooking();
                }}>
                {' '}
                Booking
              </button>
              <Button className="secondaryBtn" variant="primary" onClick={handleShow}>
                Details
                </Button>
            </div>
          </article>
        </div>
      </section>

     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>     </Modal.Title>
        </Modal.Header>
        <Modal.Body>

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
                    <p className="data_from"> FlyingFrom :  {Flightobj.FlyingFrom} </p>
                    <p className="data_to"> FlyingTo : {Flightobj.FlyingTo} </p>
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
                    <p className="data_from"> DepartureDate :  {DepartureDateMDY} </p>
                    <p className="data_to"> ReturnDate :  {ReturnDateMDY} </p>
                  </div>
                </div>

              </div>
              <div className="container">
                <span className="line">
                  {' '}
                  - - - - - - -
                  {' '}
                  - - - - - - -
                </span>
                <div className="container_data">
                  <div className="data">
                    <p className="data_to"> NumberTickets : {Flightobj.NumberTickets}</p>
                    <p className="data_to"> CabinClass : {Flightobj.CabinClass}</p>
                    <p className="data_to"> Price : {Flightobj.Price}</p>
                  </div>
                </div>
              </div>
              

              <button
                className={Flightobj.NumberTickets > 0 ? "primaryBtn" : "orangeBtn"}
                disabled={Flightobj.NumberTickets > 0 ? false : true}
                onClick={() => {
                  FunctionBooking();
                }}>
                {' '}
                Booking
              </button>
             
            </div>
          
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      
    </>
  );
}
export default FlightCard;
