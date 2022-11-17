import { useEffect, useState } from 'react';
import './bookHotel.scss';
import AOS from 'aos';
import "aos/dist/aos.css"
import { bookHotel, deleteHotelFeedback, getHotelFeedback } from '../../../services/hotelsServ';
import { useParams } from 'react-router-dom'
import BookForm from '../../Shared/BookForm/BookForm';
import { useSelector } from 'react-redux';
import ImgSlider from '../../Shared/Slider/ImgSlider';
import HotelDetails from '../../Shared/hotelDetails/HotelDetails';
import { format } from 'date-fns'
import PostFeedback from '../../Shared/PostFeedback/PostFeedback';

const BookHotel = () => {

  // hotel id
  const { id } = useParams()

  const [feedback, setFeedback]= useState([])

  // const userId = useSelector((({ signReducer }) => signReducer.data.id))
  // console.log(userId);
  // let user = (userId) ? userId : null

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
    Tourist: `636ee72d8507294529847953`,
    // Guide: `${user}`
  };

  const handleDelete=(id)=> {
    console.log(id)
    deleteHotelFeedback(id)
  }

  useEffect(() => {
    AOS.init();
console.log(id);
    getHotelFeedback(id).then(res=> setFeedback(res))
    console.log(feedback);
  }, [])

  console.log(feedback);



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
        <BookForm initialValues={initialValues} id={id} bookHotel={bookHotel} />
      </section>
      <section className="formCard center" data-aos="fade-up" data-aos-delay="200">

<h2>Hotel Feedbacks</h2>
{
  (feedback)&&(
    feedback.map((item,i)=> (
      <div className='feedback-card fw-semibold' key={i}>
        <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>delete</button>
      {/* <h4>{item.Tourist.username}</h4> */}
      <p className='text-secondary '>{item.Description}</p>
     <p className='text-end fst-italic'><span >{format(new Date(item.createdAt),  'dd/mm/yyyy')}</span></p> 
      </div>
    ))
  )
}
      </section>

      <section className="formCard center" data-aos="fade-up" data-aos-delay="200">

<h2>Give Us Feedback</h2>

<PostFeedback hotelId={id} userId="636ee72d8507294529847953"
// userId={user} 
/>


      </section>


    </div>
  );
};

export default BookHotel;