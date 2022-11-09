import { useEffect, useState } from 'react';
import './bookHotel.scss';
import dummyImg from "../../../assets/card/dummy-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import "aos/dist/aos.css"
import { bookHotel } from '../../../services/hotelsServ';
import Form from 'react-bootstrap/Form';
import {useParams} from 'react-router-dom'
import BookForm from '../../Shared/BookForm/BookForm';

const BookHotel = () => {

  const {id} = useParams()

  const initialValues = {
    RoomCount: "",
    AdultCount: "",
    Child: "",
    Period: "",
    Single: "",
    Double: "",
    IsApprove: false,
    startDate: "",
    endDate: "",
    Hotels:`${id}`,
    // *****************************************************************************************
    Tourist: "6361a092361936bf86c57460",
    Guide: "6361a092361936bf86c57460"
  };




  useEffect(() => {
    AOS.init();
  }, [])


  return (


    <>

      <section id="flightCard" data-aos="fade-up" data-aos-delay="200">
        <div className='cardBody'>
          <div className='cardBody_img col-md-4 ' data-aos="fade-up" data-aos-delay="300">
            <img src={dummyImg} alt="Item_Name"></img>
          </div>
          <article className='cardBody_details col-md-7 col-sm-12' data-aos="zoom-out" data-aos-delay="200">
            <div className="cardBody_details_data">
              <div className="spacer"></div>
              <div className="container">

                <span className="line">  - - - - - - -<span> <FontAwesomeIcon className="fs-3" icon={faPlane} />  </span> - - - - - - -</span>
                <div className="container_data">
                  <div className="spacer"></div>
                  <div className="data">
                    <span className="data_from">Egypt</span>
                    <span className="data_to">Usa</span>
                  </div>
                </div>

              </div>


           <BookForm initialValues={initialValues} id={id} />

            </div>

          </article>

        </div>
      </section>
    </>
  );
};

export default BookHotel;