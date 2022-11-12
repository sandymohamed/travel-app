import { useEffect, useState } from 'react';
import './bookHoliday.scss';
import AOS from 'aos';
import "aos/dist/aos.css"
import { bookHotel, getHotelFeedback } from '../../../services/hotelsServ';
import { useParams } from 'react-router-dom'
import BookForm from '../../Shared/BookForm/BookForm';
import { useSelector } from 'react-redux';
import ImgSlider from '../../Shared/Slider/ImgSlider';
import HotelDetails from '../../Shared/hotelDetails/HotelDetails';
import { format } from 'date-fns'
import PostFeedback from '../../Shared/PostFeedback/PostFeedback';
import { getHolidayById } from '../../../services/holidaysServ';
import HolidayForm from '../../Shared/holidayForm/HolidayForm';

const BookHoliday = () => {

    // hotel id
    const { id } = useParams()

    const [holiday, setHoliday] = useState({})

    const userId = useSelector((({ signReducer }) => signReducer.data.id))
    console.log(userId);
    let user = (userId) ? userId : null

    const initialValues = {
        RoomCount: "",
        AdultCount: "",
        Child: "",
        Period: "",
        Transport: "",
        IsApprove: false,
        startDate: "",
        endDate: "",
        Holidays: `${id}`,
        Tourist: '636ee72d8507294529847953',
        // Guide: `${user}``
    };



    useEffect(() => {
        AOS.init();

        console.log(id);

        getHolidayById(id).then(res => setHoliday(res))
    }, [])

    console.log(holiday);
    return (


        <div className='d-block book-container'>
            <section className='slider m-0 p-0'>
                <ImgSlider hotelId={id} />
            </section>

            <section className="formCard center" data-aos="fade-up" data-aos-delay="100">
                <div className='det-container' data-aos="fade-out" data-aos-delay="400">
                    {(holiday) && (
                        <>
                            {(holiday.City) && (<h3>{holiday.City.City_Name}</h3>)}
                            <p>{holiday.Evaluation} stars holiday</p>
                            <p>{holiday.Period} days</p>
                            <p>{holiday.Description}</p>

                            <p>Price: {holiday.Price}$</p>
                        </>
                    )}
                </div>
            </section>

            <br />
            <section className="formCard center" data-aos="fade-up" data-aos-delay="200">
                <h2>Book Now</h2>
                <HolidayForm initialValues={initialValues} id={id} />
            </section>





        </div>
    );
};

export default BookHoliday;