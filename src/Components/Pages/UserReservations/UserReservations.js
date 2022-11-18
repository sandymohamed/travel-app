import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { bookedHolidayByUser } from '../../../services/holidaysServ';
import { bookedHotelByUser } from '../../../services/hotelsServ';
import { format } from 'date-fns'
import calenderIcon from "../../../Assets/calender.png"
import cloud1 from "../../../Assets/cloud.png"
import cloud2 from "../../../Assets/cloud2.png"
import hotelIcon from "../../../Assets/hotelIcon.png"
import dummyHotel from "../../../Assets/card/dummyhotel.jpg"

import './userReservations.scss';

const UserReservations = () => {

    const [hotelReservations, setHReservations] = useState([])

    const userId = useSelector((({ AuthReducer }) => AuthReducer.user.id))

  let user = (userId) ? userId : null
    useEffect(()=>{
        bookedHotelByUser(user).then(res =>setHReservations(res) )
        console.log(hotelReservations);


    }, [])
    return (
        <>

            <section className='userReservations'>
                <div className='container'>
                    <div className='userReservations_Img'>
                        <span className='cloud'></span>
                        <img src={calenderIcon}></img>
                        <h2 className='text-center'>Hotels Reservations</h2>
                    </div>
                    <div className='userReservations_data'>
                        <div className='container'>
                            <div className='row'>
                                <div className='data_adv col-md-2'>

                                </div>
                                <div className='data_card col-md-8'>
                                    <div className='reservation-card'>
                                        <div className='row'>
                                            <div className='cardImg col-md-3'>
                                                <img src={dummyHotel}></img>
                                            </div>

                                            {/* /////// */}
                                            <div className='cardData col-md-9'>
                                                <span className='cardData_name'>Sheraton Grand Tokyo</span>

                                                <div className='cardData_container'>
                                                    <div className='cardInformation'>
                                                        <div className='confirmation'>
                                                            <span className='title'>Acceptance</span>
                                                            <span className='data pending'>Pending</span>
                                                            <span className='data confirmed'>Confirmed</span>
                                                            <span className='data canceled'>Confirmed</span>

                                                        </div>
                                                        <div className='period'>
                                                            <span className='title'>Period</span>
                                                            <span className='data'></span>
                                                        </div>
                                                        <div className='roomCount'>
                                                            <span className='title'>RoomCount</span>
                                                            <span className='data'>2</span>
                                                        </div>
                                                        {/* <p className='text-end'>createdAt:</p> */}
                                                        {/* <p className='text-end'>updatedAt:</p> */}
                                                    </div>
                                                    <div className='cardDate'>
                                                        <div className='checkIn'>
                                                            <span className='type'>Check in</span>
                                                            <span className='day'>28 </span>
                                                            <span className='month'>October</span>
                                                            <span className='year'>2022</span>
                                                        </div>
                                                        <div className='checkOut'>

                                                            <span className='type'>Check Out</span>
                                                            <span className='day'>30</span>
                                                            <span className='month'>October</span>
                                                            <span className='year'>2022</span>
                                                        </div>

                                                    </div>
                                                </div>



                                            </div>

                                        </div>





                                    </div>

                                </div>
                                <div className='data_adv col-md-2'>

                                    <span> advertisement</span>
                                    <span> advertisement</span>
                                    <span> advertisement</span>
                                    <span> advertisement</span>
                                    <span> advertisement</span>
                                    <span> advertisement</span>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>


            <section className="formCard " >
                {/* {
                (hotelReservations) && (
                    hotelReservations.map((item, i) => (

                        <div className='reservation-card fs-6'>
                            <p className='text-end'>createdAt: {format(new Date(item.createdAt), 'dd/mm/yyyy')}</p>
                            <p>Hotel Name: {item.Hotels.HotelName}</p>
                            <p>Confirmation of Acceptance: {String(item.IsApprove)}</p>
                            <p>Period: {item.Period}</p>
                            <p>RoomCount: {item.RoomCount}</p>
                            <p>startDate: {item.startDate}</p>
                            <p>endDate: {item.endDate}</p>
                            <p className='text-end'>updatedAt: {format(new Date(item.updatedAt), 'dd/mm/yyyy')}</p>



                        </div>
                    ))

                )
            } */}



            </section>


        </>
    );
};

export default UserReservations;