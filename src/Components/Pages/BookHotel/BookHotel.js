import { useEffect } from 'react';
import './bookHotel.scss';
import AOS from 'aos';
import "aos/dist/aos.css"
import { bookHotel } from '../../../services/hotelsServ';
import { useParams } from 'react-router-dom'
import BookForm from '../../Shared/BookForm/BookForm';
import { useSelector } from 'react-redux';
import ImgSlider from '../../Shared/Slider/ImgSlider';
import HotelDetails from '../../Shared/hotelDetails/HotelDetails';

const BookHotel = () => {

  const { id } = useParams()

  const userId = useSelector((({ signReducer }) => signReducer.data.id))
  console.log(userId);
  let user = (userId) ? userId : null

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
    Hotels: `${id}`,
    Tourist: `${user}`,
    Guide: `${user}`
  };



  useEffect(() => {
    AOS.init();
  }, [])


  return (


    <div className='d-block'>
      <section className='slider'>
        <ImgSlider hotelId={id} />
      </section>

      <section className="formCard" data-aos="fade-up" data-aos-delay="200">
        <HotelDetails hotelId={id} />
      </section>

      <br />
      <section className="formCard" data-aos="fade-up" data-aos-delay="200">
        <BookForm initialValues={initialValues} id={id} bookHotel={bookHotel} />
      </section>
    </div>
  );
};

export default BookHotel;