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
import { setFormatDate } from '../../../services/DateformatService';

const UserReservations = () => {

    const [hotelReservations, setHReservations] = useState([])
    const [holidayReservations, setTReservations] = useState([])

    const userId = useSelector((({ AuthReducer }) => AuthReducer.user.id))
    let user = (userId) ? userId : null

    useEffect(() => {
        bookedHotelByUser(user).then(res => setHReservations(res))
        bookedHolidayByUser(user).then(res => setTReservations(res))


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
                  
                                <div className='data_card col-md-12'>
                                    {
                                        (hotelReservations) && (
                                            hotelReservations.map((item, i) => (
                                                <div className='reservation-card mb-1' key={i}>


                                                    <div className='row'>
                                                        <div className='cardImg col-md-3'>
                                                            <img src={dummyHotel}></img>
                                                        </div>

                                                        {/* /////// */}
                                                        <div className='cardData col-md-9'>
                                                            <span className='cardData_name text-center'> {item.Hotels.HotelName}</span>

                                                            <div className='cardData_container'>
                                                                <div className='cardInformation'>
                                                                    <div className='confirmation'>
                                                                        <span className='title'>Acceptance:</span>
                                                                        <span className='data pending'> {String(item.IsApprove)}</span>
                                                                        {/* <span className='data confirmed'>Confirmed</span>
                                                            <span className='data canceled'>Confirmed</span> */}

                                                                    </div>
                                                                    <div className='period'>
                                                                        <span className='title'>Period</span>
                                                                        <span className='data'>{item.Period}</span>
                                                                    </div>
                                                                    <div className='roomCount'>
                                                                        <span className='title'>RoomCount</span>
                                                                        <span className='data'> {item.RoomCount}</span>
                                                                    </div><br />
                                                                    <div className='period'>
                                                                        <span className='title'>createdAt</span>
                                                                        <span className='data'>{setFormatDate(item.createdAt)}</span>
                                                                    </div>
                                                                    <div className='period'>
                                                                        <span className='title'>updatedAt</span>
                                                                        <span className='data'>{setFormatDate(item.updatedAt)}</span>
                                                                    </div>
                                                                </div>
                                                                <div className='cardDate'>
                                                                    <div className='checkIn'>
                                                                        <span className='type'>Check in</span>

                                                                        <span className='day'>{(new Date(item.startDate)).getUTCDate()} </span>
                                                                        <span className='month'>{(new Date(item.startDate)).getUTCMonth() + 1}</span>
                                                                        <span className='year'>{(new Date(item.startDate)).getUTCFullYear()}</span>
                                                                    </div>
                                                                    <div className='checkOut'>

                                                                        <span className='type'>Check Out</span>
                                                                        <span className='day'>{(new Date(item.endDate)).getUTCDate()} </span>
                                                                        <span className='month'>{(new Date(item.endDate)).getUTCMonth() + 1}</span>
                                                                        <span className='year'>{(new Date(item.endDate)).getUTCFullYear()}</span>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            ))

                                        )
                                    }
                                </div>
                              
                            </div>
                        </div>


                    </div>

{/* ******************************** Holiday *****************************  */}
<div className='userReservations_Img'>
                        <span className='cloud'></span>
                        <img src={calenderIcon}></img>
                        <h2 className='text-center'>Holiday Reservations</h2>
                    </div>
                    <div className='userReservations_data'>
                        <div className='container'>
                            <div className='row'>
                             
                                <div className='data_card col-md-12 '>
                                    {
                                               (holidayReservations)&&(
                                                holidayReservations.map((item,i)=>(
                                          <div className='reservation-card mb-1' key={i}>


                                                    <div className='row'>
                                                        <div className='cardImg col-md-3'>
                                                            <img src={dummyHotel}></img>
                                                        </div>

                                                        {/* /////// */}
                                                        <div className='cardData col-md-9'>

                                                            <div className='cardData_container'>
                                                                <div className='cardInformation'>
                                                                    <div className='confirmation'>
                                                                        <span className='title'>Acceptance: </span>
                                                                        <span className='data pending'> {String(item.IsApprove)}</span>
                                                                        {/* <span className='data confirmed'>Confirmed</span>
                                                            <span className='data canceled'>Confirmed</span> */}

                                                                    </div>
                                                                    <div className='period'>
                                                                        <span className='title'>Period</span>
                                                                        <span className='data'>{item.Period}</span>
                                                                    </div>
                                                                    <div className='roomCount'>
                                                                        <span className='title'>RoomCount</span>
                                                                        <span className='data'> {item.RoomCount}</span>
                                                                    </div>
                                                                    <div className='period'>
                                                                        <span className='title'>Transport</span>
                                                                        <span className='data'>{item.Transport}</span>
                                                                    </div>
                                                                    <br />
                                                                    <div className='period'>
                                                                        <span className='title'>createdAt</span>
                                                                        <span className='data'>{setFormatDate(item.createdAt)}</span>
                                                                    </div>
                                                                    <div className='period'>
                                                                        <span className='title'>updatedAt</span>
                                                                        <span className='data'>{setFormatDate(item.updatedAt)}</span>
                                                                    </div>
                                                                   
                                                                </div>
                                                                <div className='cardDate'>
                                                                    <div className='checkIn'>
                                                                        <span className='type'>Check in</span>

                                                                        <span className='day'>{(new Date(item.startDate)).getUTCDate()} </span>
                                                                        <span className='month'>{(new Date(item.startDate)).getUTCMonth() + 1}</span>
                                                                        <span className='year'>{(new Date(item.startDate)).getUTCFullYear()}</span>
                                                                    </div>
                                                                    <div className='checkOut'>

                                                                        <span className='type'>Check Out</span>
                                                                        <span className='day'>{(new Date(item.endDate)).getUTCDate()} </span>
                                                                        <span className='month'>{(new Date(item.endDate)).getUTCMonth() + 1}</span>
                                                                        <span className='year'>{(new Date(item.endDate)).getUTCFullYear()}</span>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>


                                                </div>
                                            ))

                                        )
                                    }
                                </div>
                            
                            </div>
                        </div>


                    </div>

              
                </div>

            </section>




        </>
    );
};

export default UserReservations;