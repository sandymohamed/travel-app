import { useEffect, useState } from 'react';
import './bookHotel.scss';
import AOS from 'aos';
import "aos/dist/aos.css"
import { bookHotel, deleteHotelFeedback, getHotelById, getHotelFeedback } from '../../../services/hotelsServ';
import { useParams } from 'react-router-dom'
import BookForm from '../../Shared/BookForm/BookForm';
import { useSelector } from 'react-redux';
import ImgSlider from '../../Shared/Slider/ImgSlider';
import HotelDetails from '../../Shared/hotelDetails/HotelDetails';
import PostFeedback from '../../Shared/PostFeedback/PostFeedback';
import { setFormatDate } from '../../../services/DateformatService';

const BookHotel = () => {

  // hotel id
  const { id } = useParams()

  const [feedback, setFeedback] = useState([])
  const [price, setPrice] = useState(null)


  const userId = useSelector((({ AuthReducer }) => AuthReducer.user.id))
  const username = useSelector((({ AuthReducer }) => AuthReducer.user.username))

  let user = (userId) ? userId : null
  const userName = (username) ? username : null

  const initialValues = {
    RoomCount: "",
    AdultCount: "",
    Child: "",
    Period: "",
    Single: "",
    Double: "",
    IsApprove: false,
    Paid:false,
    startDate: "",
    endDate: "",
    Hotels: `${id}`,
    Tourist: `${user}`,
    // Guide: `${user}`
  };

  const handleDelete = (id, user) => {

    if (user === userName) {
      deleteHotelFeedback(id)
    }
    else {
      // ****************************************************************************************
      alert('cant')
    }


  }
  
  useEffect(() => {
    AOS.init();
    getHotelFeedback(id).then(res => setFeedback(res))
    getHotelById(`${id}`).then((res)=>setPrice(res.Price))

  }, [])


  return (


    <div className='d-block book-container'>
      <section className='slider m-0 p-0'>
        <ImgSlider hotelId={id} />
      </section>

      <section className="formCard center" data-aos="fade-up" data-aos-delay="100">
        <HotelDetails hotelId={id} />
      </section>

      <br />
      <section className="formCard center" data-aos="fade-up" data-aos-delay="200">
        <h2>Book Now</h2>
        <BookForm initialValues={initialValues} id={id} bookHotel={bookHotel} price={price} />
      </section>
      <section className="formCard center" data-aos="fade-up" data-aos-delay="200">

        <h2>Hotel Feedbacks</h2>
        {
          (feedback) && (
            feedback.map((item, i) => (
              <div className='feedback-card fw-semibold position-relative' key={i}>
                <button className='btn btn-danger position-absolute end-0 me-5' onClick={() => handleDelete(item._id, item.Tourist.username)}>delete</button>
                <h4>{item.Tourist.username}</h4>
                <p className='text-secondary '>{item.Description}</p>
                {/* <p className='text-end fst-italic'><span >{format(new Date(item.createdAt), 'dd/mm/yyyy')}</span></p> */}
                <p className='text-end fst-italic'><span >{setFormatDate(item.createdAt)}</span></p>

              </div>
            ))
          )
        }
      </section>

      <section className="formCard center" data-aos="fade-up" data-aos-delay="200">

        <h2>Give Us Feedback</h2>

        <PostFeedback
          hotelId={id}
          userId={user}
        />


      </section>


    </div>
  );
};

export default BookHotel;